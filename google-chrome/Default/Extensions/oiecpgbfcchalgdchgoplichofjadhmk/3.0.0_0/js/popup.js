var clearBtn, optionsBtn;
var initDomListeners = function () {

  clearBtn.addEventListener("click", handleClearBtnClick);
  optionsBtn.addEventListener("click", handleOptionsBtnClick);
}

var handleClearBtnClick = function () {
  getActiveTabPromise().then(tab => {
    chrome.runtime.sendMessage({
      action: "clear",
      tab: tab
    }, () => {
      //clearBtn.innerHTML = "<b>Done</b>"
    })
  });
}

var handleOptionsBtnClick = function () {
  open(chrome.runtime.getURL("options.html"));
}

function getActiveTabPromise() {
  return new Promise(resolve => {
    chrome.tabs.query({
      active: true,
      currentWindow: true,
    }, tabs => resolve(tabs[0]));
  });
}

function onIconClicked(callback) {

  getActiveTabPromise().then(tab => {

  });
}

const Popup = (function () {
  var localization = new Localize();
  localization.init();
  localization.localizeHtmlPage();

  clearBtn = document.querySelector("#clear-btn");
  $("#clear-btn").html(`<i class="fa fa-trash"></i> ${chrome.i18n.getMessage("popup_clear")}`);
  optionsBtn = document.querySelector("#options-btn");
  document.getElementById("options-btn").setAttribute('title', chrome.i18n.getMessage("popup_manage"));
  initDomListeners();
})();

; (function ($, window, document, undefined) {

  $.fn.btnInteraction = function (options) {

    // Setup default options
    var pluginName = 'btnInteraction',
      defaults = {
        'saveIcon': 'fa-cog',
        'verbing': 'Saving...',
        'verbed': 'Saved',
        'delay': 4000,
        'duration': 1800
      };

    return this.each(function () {

      // Store the object
      var self = this,
        $this = $(this),
        ogHtml = $this.html();

      var settings = $.extend({}, defaults, options, $this.data());

      $this.on('click', function () {
        start();
      })


      var start = function () {
        var iconHtml = (settings.saveIcon !== false) ? '<i class="fa fa-spin ' + settings.saveIcon + '"></i> ' : '';
        $this.attr('disabled', 'disabled').html(iconHtml + settings.verbing);

        setTimeout(function () { processed(); }, settings.delay);
      };

      var processed = function () {
        $this.removeAttr('disabled').addClass('completed').html(settings.verbed);

        setTimeout(function () { done(); }, settings.duration);
      };

      var done = function () {
        $this.removeClass('completed').html(ogHtml);
        $this.trigger('btn.interaction.done');
      };

    });

  };

})(jQuery, window, document);

// You can define all options as data attributes
jQuery("[data-btn-interaction]").btnInteraction();

// Or however you'd like!
jQuery("[data-event='delete:animate']").btnInteraction({
  verbing: chrome.i18n.getMessage("popup_clearing"),
  verbed: chrome.i18n.getMessage("popup_clean")
});
jQuery("[data-event='cancel:animate']").btnInteraction({
  verbing: 'Cancelling...',
  verbed: 'Cancelled'
});
jQuery("[data-event='revise:animate']").btnInteraction({
  saveIcon: 'fa-refresh',
  verbing: 'Revising...',
  verbed: 'Revised'
});
jQuery("[data-event='noicon:animate']").btnInteraction({
  saveIcon: false,
  verbing: 'Processing...',
  verbed: 'Processed'
});

// Example of event trigger :done
jQuery('#btn-save').on('btn.interaction.done', function (e) {
  alert("I'm done! event triggered via 'btn.interaction.done'");
});

