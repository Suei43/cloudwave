if(!self.define){let e,s={};const i=(i,n)=>(i=new URL(i+".js",n).href,s[i]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=s,document.head.appendChild(e)}else e=i,importScripts(i),s()})).then((()=>{let e=s[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(n,c)=>{const o=e||("document"in self?document.currentScript.src:"")||location.href;if(s[o])return;let f={};const a=e=>i(e,o),r={module:{uri:o},exports:f,require:a};s[o]=Promise.all(n.map((e=>r[e]||a(e)))).then((e=>(c(...e),f)))}}define(["./workbox-109c5be1"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"images/android-chrome-192x192.png",revision:"d5d3e1f21fe42c5bea1e7c5d583f4b87"},{url:"images/android-chrome-512x512.png",revision:"09684219fb5b25e98027c54fd5199ff0"},{url:"images/apple-touch-icon.png",revision:"2e6c6b582087b125b7e82f6ad0d66608"},{url:"images/favicon-16x16.png",revision:"4c6ff97bff499254e255ddd403f8dd69"},{url:"images/favicon-32x32.png",revision:"f0fec66a1e9d5b8f130b32685f7d7175"},{url:"index.html",revision:"3e0cefa2afd5ac719b2ecb56126549c6"},{url:"static/css/main.4f8c31f6.css",revision:"bf677da9aab5d7bf83d508fbd8310c24"},{url:"static/js/main.9434ac9b.js",revision:"a8e6afa40ea83ddbbdebaebaa692745b"},{url:"static/media/oval.3b24a6b94b2631f4d565d76f4f7f18d6.svg",revision:"be00fc4a29d03016e78b28c9943e3f51"}],{}),e.registerRoute(/\.(?:html|js|css|png|jpg|svg)$/,new e.CacheFirst({cacheName:"static-assets",plugins:[]}),"GET"),e.registerRoute(/^https:\/\/fonts\.googleapis\.com/,new e.NetworkFirst({cacheName:"google-fonts",plugins:[]}),"GET")}));
//# sourceMappingURL=service-worker.js.map
