chrome.runtime.onInstalled.addListener(function (details) {
  if (details.reason == 'install') {
      chrome.tabs.create({
        url: 'https://enablecopy.com/welcome'
      });
  } else if (details.reason == "update") {
    chrome.tabs.create({
      url:'https://enablecopy.com/update'
    })
  }
});

var ext = function () {
  var debug = 0;
  var extid = chrome.runtime.id;
  var domains;
  var storage = chrome.storage.sync;
  var icon_on = 'img/ico.png';
  var icon_off = 'img/off.png';
  this.background = function () {
    storage.get(['domains'], function (result) {
      domains = result['domains'];
      if (typeof domains != 'object') {
        domains = [];
      }
      //监听通讯请求
      chrome.runtime.onMessage.addListener(function (message, sender, reply) {
        //doc88跨域访问
        if (message.super_type == 'getsupercopydoc88path') {
          const doc_88_path = "Core.Annotation.api._Mf"
          console.log("doc_88_path1", doc_88_path)
          reply(doc_88_path)
          return true;
        } else {
          var status = 1;
          if (message.super_type == 'copy') {
            var tabid = message.tabid;
            var domain = message.domain;
            if (message.turn == 'on') {
              turn('on', tabid, domain, false);
            } else {
              turn('off', tabid, domain, false);
            }
            reply({
              status: status
            });
          } else if (message.super_type == 'domains') {
            log(domains);
            reply({
              status: status,
              domains: domains
            });
          } else if (message.super_type == 'removeDomain') {
            var domain = message.domain;
            var index = domains.indexOf(domain);
            if (index > -1) {
              domains.splice(index, 1);
              storage.set({
                'domains': domains
              });
            }
            reply({
              status: status
            });
          }
        }

      });

      //由于弹出了popup 直接点击扩展图标事件不再生效
      chrome.action.onClicked.addListener(function (tab) {
        console.log("onClicked happen");
        var domain = getDomain(tab.url);
        if (!domain) {
          return false;
        }
        var index = domains.indexOf(domain);
        if (index === -1) {
          turn('on', tab.id, domain, false);
        } else {
          turn('off', tab.id, domain, false);
        }
      });


      //切换
      chrome.tabs.onActivated.addListener(function (tab) {
        chrome.tabs.query({
          'active': true,
          'currentWindow': true
        }, function (tabs) {
          var tab = tabs[0];
          var domain = getDomain(tab.url);
          if (!domain) {
            return false;
          }
          var index = domains.indexOf(domain);
          var icon = index === -1 ? icon_off : icon_on;
          chrome.action.setIcon({
            path: icon,
            tabId: tab.id
          });
        });
      });
      //更新
      chrome.tabs.onUpdated.addListener(function (tabid, info, tab) {
        var domain = getDomain(info.url || tab.url);
        var index = domains.indexOf(domain);
        if (index > -1) {
          //这里需要等到页面加载完成才能通信
          if (info.status == 'complete') {
            turn('on', tabid, domain, false);
          }
        } else {
          setIcon('off', tabid);
        }
      });
    });

    var makeRequest = function (method, url) {
      return new Promise(function (resolve, reject) {
        let xhr = new XMLHttpRequest();
        xhr.open(method, url);
        xhr.onload = function () {
          if (this.status >= 200 && this.status < 300) {
            resolve(xhr.response);
          } else {
            reject({
              status: this.status,
              statusText: xhr.statusText
            });
          }
        };
        xhr.onerror = function () {
          reject({
            status: this.status,
            statusText: xhr.statusText
          });
        };
        xhr.send();
      });
    }


    var turn = function (type, tabid, domain, flash) {
      if (!tabid) {
        return false;
      }
      if (!domain) {
        return false;
      }
      storage.get(['domains'], function (result) {
        domains = result['domains'];
        if (typeof domains != 'object') {
          domains = [];
        }
        var index = domains.indexOf(domain);
        if (type == 'on') {
          //增加域名
          if (index == -1) {
            domains.push(domain);
          }
          //执行程序
          if (flash === true) {
            chrome.scripting.executeScript({
              target: {
                tabId: tabid
              },
              files: ['js/flash.js'],
            });
            [0, 1000, 2000, 3000].forEach(delay => {
              setTimeout(function () {
                setIcon('on', tabid);
              }, delay);
            });
            [500, 1500, 2500].forEach(delay => {
              setTimeout(function () {
                setIcon('off', tabid);
              }, delay);
            });
            setTimeout(function () {
              chrome.tabs.sendMessage(tabid, {
                msg: "super_crack"
              }, function (response) {
                console.log("response", response)
                if (response.super_result) {
                  console.log('执行特殊脚本');
                } else {
                  console.log('执行通用脚本');
                  //执行程序
                  chrome.scripting.executeScript({
                    target: {
                      tabId: tabid
                    },
                    files: ['js/code.js'],
                  });
                }
              });

            }, 3500);
          } else {
            chrome.tabs.sendMessage(tabid, {
              msg: "super_crack"
            }, function (response) {
              // console.log("response", response)
              //response 页面未加载完成 可能导致无法收到请求
              if(response) {
                if (response.super_result) {
                  console.log('执行特殊脚本');
                } else {
                  console.log('执行通用脚本');
                  //执行程序
                  chrome.scripting.executeScript({
                    target: {
                      tabId: tabid
                    },
                    files: ['js/code.js'],
                  });
                }
              }
            });
            setIcon(type, tabid);
          }
        } else {
          chrome.tabs.reload(tabid);
          setIcon(type, tabid);
          //删除域名
          if (index > -1) {
            domains.splice(index, 1);
          }
        }
        storage.set({
          'domains': domains
        });
      });
    };
    var setIcon = function (type, tabid) {
      if (type == 'on') {
        chrome.action.setIcon({
          path: icon_on,
          tabId: tabid
        });
      } else {
        chrome.action.setIcon({
          path: icon_off,
          tabId: tabid
        });
      }
    }
    //获取域名
    var getDomain = function (url) {
      if (!url) {
        return false;
      }
      url = url.toLowerCase()
      var scheme = url.split("://")[0];
      if (scheme != "http" && scheme != "https") {
        return false;
      }
      var e = url.split("://")[1].split("/")[0].split(":")[0];
      var k = /^(\d+)\.(\d+)\.(\d+)\.(\d+)$/;
      if (k.test(e)) {
        if (RegExp.$1 < 256 && RegExp.$2 < 256 && RegExp.$3 < 256 && RegExp.$4 < 256) {
          if (RegExp.$1 == 192 && RegExp.$2 == 168) {
            return false
          }
          if (RegExp.$1 == 10) {
            return false
          }
          return e
        } else {
          return false
        }
      } else {
        if (e.substr(0, 4) == "www.") {
          e = e.substr(4)
        }
        return e
      }
    };
    //调试log记录
    var log = function (text) {
      debug && console.log(text);
    };
  };
  //语言
  var l = function (id) {
    return chrome.i18n.getMessage(id);
  };
};
var e = new ext();
e.background();