var homepage = function () {return chrome.runtime.getManifest().homepage_url};
var version = function () {return chrome.runtime.getManifest().version};

chrome.runtime.onInstalled.addListener(function(details) {
	const settings = {
		autorefresh: !1,
		floatbtn: !1,
		cookie_settings: JSON.stringify({
			inclusive: !0,
			filters: []
		}),
		dataToRemove: JSON.stringify(["history", "cache"]),
		timePeriod: "last_hour"
	};
	chrome.storage.local.set(settings, () => {})
});

var initMessageListeners = function() {
	chrome.runtime.onMessage.addListener((msg, sender, sendResp) => {
		switch (msg.action) {
			case 'clear':
				clearData(msg.tab);
				break;
			case 'clearBtn':
				handleClearBtn();
			default:
				console.log('undefined message')
		}
	})}

var getStorageData = function() {
	return new Promise(resolve => {
		chrome.storage.local.get(settings => {
			resolve({
				timePeriod: settings.timePeriod,
				dataToRemove: JSON.parse(settings.dataToRemove),
				autorefresh: settings.autorefresh,
				cookieFilters: JSON.parse(settings.cookie_settings)
			})
		})
	})
}

var getTimeInterval = function(a) {
	switch (a) {
		case "last_hour":
			return new Date().getTime() - 36e5;
		case "last_day":
			return new Date().getTime() - 864e5;
		case "last_week":
			return new Date().getTime() - 6048e5;
		case "last_month":
			return new Date().getTime() - 24192e5;
		case "everything":
		default:
			return 0;
	}
}

var getRemoveObject = function(a) {
	const b = {};
	return a.forEach(a => b[a] = !0), b
}

var deleteCookie = function(cookie) {
	const protocol = cookie.secure ? "https://" : "http://";
	const deleteConfig = {
		url: protocol + cookie.domain,
		name: cookie.name
	};
	chrome.cookies.remove(deleteConfig, function() {})
}

var accuracyDeleteCookies = function(cookieFilters) {
	if (cookieFilters.inclusive) {
		cookieFilters.filters.forEach(filterDomain => {
			chrome.cookies.getAll({
				domain: filterDomain
			}, cookies => {
				cookies.forEach(cookie => deleteCookie(cookie));
			} )
		})
	} else {
		const obj = {};
		cookieFilters.filters.forEach(filterDomain => {
			const splittedDomain = filterDomain.split('.');
			if (filterDomain.indexOf('.') !== 0 && filterDomain.indexOf("http") !== 0 && filterDomain !== 'localhost') {
				if (splittedDomain.length > 2 || splittedDomain[2] !== 'local') filterDomain = '.' + filterDomain;
			}
			obj[filterDomain] = true;
		});
		chrome.cookies.getAll({}, cookies => {
			cookies.forEach(cookie => {
				if (!obj[cookie.domain] ) {
					deleteCookie(cookie);
				}
			})
		})
	}}


var clearData = function(tab) {
	getStorageData()
	.then(data => {
		const { timePeriod, dataToRemove, autorefresh, cookieFilters } = data;
		const sinceTime = getTimeInterval(timePeriod);
		const removeObject = getRemoveObject(dataToRemove);
		let customCookiesRemove = false;
		if (removeObject.cookies) {
			if (cookieFilters.filters.length) {
				removeObject.cookies = false;
				customCookiesRemove = true;
			}
		} 
		chrome.browsingData.remove({since: sinceTime}, removeObject);
		if (customCookiesRemove) accuracyDeleteCookies(cookieFilters)
		if (autorefresh) chrome.tabs.reload(tab.id, () => { });
	})
}

var handleClearBtn = function() {
	getActiveTabPromise().then(tab =>{
		clearData(tab);
	});
}

function getActiveTabPromise() {
    return new Promise(resolve => {
        chrome.tabs.query({
            active: true,
            currentWindow: true,
        }, tabs => resolve(tabs[0]));
    });
 }



var Background = (function(){
	initMessageListeners();
})();

