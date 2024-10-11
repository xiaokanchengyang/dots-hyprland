window.injection_XX464XX = true;
console.log("here");
var initStorage = function() {
	chrome.storage.local.get(["floatbtn"], a => {
		options.isBtn = a.floatbtn; 
		options.isBtn && createBtn();
	})
}
var checkBtnInserting = function() {
	options.isBtn ? createBtn() : deleteBtn();
}

var createBtn = function() {
	const imgBtn = document.createElement("img");
	imgBtn.className = "inserted-btn mtz";
	imgBtn.src = chrome.runtime.getURL("img/icon_main.svg");
	imgBtn.alt = `${chrome.i18n.getMessage("app_name")} Button`;
	imgBtn.title = `${chrome.i18n.getMessage("app_name")} Button`;
	imgBtn.addEventListener("click", handleClearBtn.bind(this));
	imgBtn.addEventListener("mouseover", handleMouseoverBtn.bind(this));
	imgBtn.addEventListener("mouseout", handleMouseoutBtn.bind(this));
	options.clearBtn = imgBtn;
	document.body.appendChild(imgBtn);
}

var handleClearBtn = function(a) {

	a.target.style.transform = "scale(0.5)", setTimeout(() => {
		a.target.style.transform = "scale(1)"
	}, 400), chrome.runtime.sendMessage({
		action: "clearBtn"
	})
}

var handleMouseoverBtn = function(a) {
	
	a.target.src = chrome.runtime.getURL("img/icon_main_h.svg");
}

var handleMouseoutBtn = function(a) {
	
	a.target.src = chrome.runtime.getURL("img/icon_main.svg");
}

var initListeners = function() {
	chrome.storage.onChanged.addListener(a => {
		options.isBtn = a.floatbtn.newValue; 
		checkBtnInserting();
	})
}

var deleteBtn = function() {
	options.clearBtn.remove(); 
	options.clearBtn = null
}

var options ={
	clearBtn:null,
	isBtn:null
};
const Content = (function(){
	initStorage();
	initListeners();

})();