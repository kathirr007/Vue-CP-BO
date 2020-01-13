function Proxy(n,r,e){if(!r)return Promise.reject("No proxy configured");var t=createCallback(supportsCORS),o=createProxyUrl(r,n,t);return supportsCORS?XHR(o):jsonp(e,o,t).then(function(n){return decode64(n.content)})}var proxyCount=0,supportsCORS="withCredentials"in new XMLHttpRequest,supportsCORSImage="crossOrigin"in new Image;function ProxyURL(n,r,e){var t=createCallback(supportsCORSImage),o=createProxyUrl(r,n,t);return supportsCORSImage?Promise.resolve(o):jsonp(e,o,t).then(function(n){return"data:"+n.type+";base64,"+n.content})}function jsonp(o,a,c){return new Promise(function(r,e){function t(){delete window.html2canvas.proxy[c],o.body.removeChild(n)}var n=o.createElement("script");window.html2canvas.proxy[c]=function(n){t(),r(n)},n.src=a,n.onerror=function(n){t(),e(n)},o.body.appendChild(n)})}function createCallback(n){return n?"":"html2canvas_"+Date.now()+"_"+ ++proxyCount+"_"+Math.round(1e5*Math.random())}function createProxyUrl(n,r,e){return n+"?url="+encodeURIComponent(r)+(e.length?"&callback=html2canvas.proxy."+e:"")}