
var elementsDOM = {};
var getDomElements = function() {
    elementsDOM = {
        autorefresh : document.querySelector("#autorefresh"),
        floatbtn : document.querySelector("#floatbtn"),
        removeDataItems : document.querySelectorAll("#remove-list li > input"),
        timePeriodItems : document.querySelectorAll("#time-period input"),
        cookieFilters : document.querySelector("a.filters"),
        cookiesInclusiveInputs : document.querySelectorAll("#cookie-filters p input"),
        addDomainBtn : document.querySelector("a.add")
    }
}

var markCheckedElements = function() {
    try {
        getStorageData()
        .then(data => {
            const { 
                timePeriod, 
                dataToRemove, 
                autorefresh, 
                floatbtn, 
                cookie_settings } = data;

            if (autorefresh) elementsDOM.autorefresh.checked = true;

            if(floatbtn) elementsDOM.floatbtn.checked = true;

            if (dataToRemove.length) {
                dataToRemove.forEach(removeItem => {
                    for (let i = 0; i < elementsDOM.removeDataItems.length; i++) {
                        const item = elementsDOM.removeDataItems[i];
                        if (item.id === removeItem) {
                            item.checked = true;
                            break;
                        }
                    }
                });
            }

            for (let i = 0; i < elementsDOM.timePeriodItems.length; i++) {
                if (elementsDOM.timePeriodItems[i].id === timePeriod) {
                    elementsDOM.timePeriodItems[i].checked = true;
                }
            }
            
            const postfix = cookie_settings.inclusive ? '_yes' : '_no';
            document.querySelector('#cookies_filter_inclusive' + postfix).checked = true;

            renderFilters(cookie_settings);
            showElement({ selector: '#main' });
        })
    } catch (a) {
        renderFilters(cookie_settings); 
        showElement({selector: "#main"});
    }
}

var renderFilters = function(a) {
    a.filters.forEach(a => handleAddDomain(a))
}

var getStorageData = function() {
    return new Promise((resolve, reject) => {
        chrome.storage.local.get(store => {
            const timePeriod = store.timePeriod;
            const dataToRemove = JSON.parse(store.dataToRemove);
            const autorefresh = store.autorefresh;
            const floatbtn = store.floatbtn;
            const cookie_settings = JSON.parse(store.cookie_settings);
            resolve({timePeriod, dataToRemove, autorefresh, floatbtn, cookie_settings});
        });
    })
}
var initDomListeners = function() {
    elementsDOM.autorefresh.addEventListener("change", handleCommonSettings);

    if(elementsDOM.floatbtn)
        elementsDOM.floatbtn.addEventListener("change", handleCommonSettings);

    [].forEach.call(elementsDOM.removeDataItems, a => a.addEventListener("change", handleDataToRemove));

    [].forEach.call(elementsDOM.timePeriodItems, a => a.addEventListener("change", handleTimePeriod));

    elementsDOM.cookieFilters.addEventListener("click", handleFilters);

    [].forEach.call(elementsDOM.cookiesInclusiveInputs, a => a.addEventListener("change", handleInclusiveInputs));

    elementsDOM.addDomainBtn.addEventListener("click", a => (a.preventDefault(), handleAddDomain("", !0), !1));
}

var handleCommonSettings = function(ev) {
    chrome.storage.local.set({[ev.target.id]: ev.target.checked}, details => {});
}

var handleDataToRemove = function() {
    const a = [];
    [].forEach.call(elementsDOM.removeDataItems, b => {
        b.checked && a.push(b.value)
    }), chrome.storage.local.set({
        dataToRemove: JSON.stringify(a)
    }, () => {})
}
var handleTimePeriod = function(a) {
    chrome.storage.local.set({
        timePeriod: a.target.value
    }, () => {})
}
var handleFilters = function(a) {
    a.preventDefault();
    const b = $(this).closest("li"),
        c = $("aside", b);
    return c.slideToggle(), !1
}

var handleInclusiveInputs = function(a) {
    chrome.storage.local.get(["cookie_settings"], b => {
        const c = JSON.parse(b.cookie_settings);
        c.inclusive = "no" !== a.target.value, chrome.storage.local.set({
            cookie_settings: JSON.stringify(c)
        }, () => {})
    })
}

var handleAddDomain = function(a, b) {
    a = a || "";
    const c = $("#cookie-filters ol");
    const d = $(`
            <li class="suboption hidden">
                <input type="text" value="${a}" placeholder="e.g. '.domain.com' or 'sub.domain.com'" />
                <a href="#" class="remove">remove</a>
            </li>`);
    c.append(d); 
    d.hide(); 
    d.fadeIn(100, () => {
        d.removeClass("hidden"); 
        b && $("input", d).focus();
    }); 
    d.find("a.remove").click(onDomainRemove.bind(this)), 
    d.find("input[type='text']").on("blur", {
        validate: !0
    }, validateDomain).on("change", {
        validate: !0
    }, validateDomain).on("keyup", {
        validate: !1
    }, validateDomain);
}
var onDomainRemove = function(a) {
    a.preventDefault();
    const b = $(a.target).closest("li");
    b.addClass("hidden"); 
    validateDomain();
    const c = b.closest("li");
    return c.delay(200), c.slideToggle(150, () => {
        $(c).remove()
    }), !1
}
var validateDomain = function(a) {
    const b = [];
    $("#cookie-filters input[type='text']").each(function () {
        if (!$(this).closest("li").hasClass("hidden")) {
            let c = this.value;
            if (c && "" !== c && 3 <= c.length) {
                if (!a || a.data.validate) {
                    $(this).removeClass("error");
                    const a = c.split(".");
                    if (1 >= a.length && "localhost" !== c) return void $(this).addClass("error");
                    2 === a.length && "local" !== a[1] && (c = "." + c), this.value = c
                }
                b.push(c)
            }
        }
    }), chrome.storage.local.get(["cookie_settings"], a => {
        const c = JSON.parse(a.cookie_settings);
        c.filters = b, chrome.storage.local.set({
            cookie_settings: JSON.stringify(c)
        }, () => {})
    })
}
var showElement = function(a) {
    a.selector 
        ? document.querySelector(a.selector).classList.remove("hidden") 
        : element.classList.remove("hidden");
}


$(document).ready(function(){
    const Options = (function(){
        getDomElements();
        markCheckedElements();
        initDomListeners();
        var localization = new Localize();
        localization.init();
        localization.localizeHtmlPage();
    
    })();
    
});
