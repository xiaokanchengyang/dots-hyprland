(function(){"use strict";const r={BASE_URL:"/",DEV:!1,EXTENSION_PUBLIC_HOST:"https://web.kamihq.com/api",EXTENSION_PUBLIC_WEB_HOST:"https://web.kamihq.com",MODE:"production",PROD:!0,SSR:!1},{EXTENSION_PUBLIC_HOST:o,EXTENSION_PUBLIC_WEB_HOST:t}=r;if(!o)throw new Error("EXTENSION_PUBLIC_HOST is not defined");if(!t)throw new Error("EXTENSION_PUBLIC_WEB_HOST is not defined");function i(){const s="accelerometer *; ambient-light-sensor *; autoplay *; camera *;     encrypted-media *; fullscreen *; geolocation *; gyroscope *; magnetometer *;     microphone *; midi *; payment *; picture-in-picture *; speaker *; usb *; vr *;     clipboard-read *; clipboard-write *; display-capture *;";new MutationObserver(function(n){for(const a of n)for(const e of a.addedNodes)e instanceof HTMLIFrameElement&&(e.src.match(/^https:\/\/(kami\.app|kamitest\.shortcm\.li)\//)||e.src.startsWith(t))&&(e.setAttribute("allow",s),e.src=e.src)}).observe(document.body,{childList:!0,subtree:!0,attributes:!1,characterData:!1})}i()})();
