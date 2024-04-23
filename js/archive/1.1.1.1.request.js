class e{static name="Lodash";static version="1.2.2";static about(){return console.log(`\n🟧 ${this.name} v${this.version}\n`)}static get(e={},t="",s=void 0){Array.isArray(t)||(t=this.toPath(t));const o=t.reduce(((e,t)=>Object(e)[t]),e);return void 0===o?s:o}static set(e={},t="",s){return Array.isArray(t)||(t=this.toPath(t)),t.slice(0,-1).reduce(((e,s,o)=>Object(e[s])===e[s]?e[s]:e[s]=/^\d+$/.test(t[o+1])?[]:{}),e)[t[t.length-1]]=s,e}static unset(e={},t=""){return Array.isArray(t)||(t=this.toPath(t)),t.reduce(((e,s,o)=>o===t.length-1?(delete e[s],!0):Object(e)[s]),e)}static toPath(e){return e.replace(/\[(\d+)\]/g,".$1").split(".").filter(Boolean)}static escape(e){const t={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"};return e.replace(/[&<>"']/g,(e=>t[e]))}static unescape(e){const t={"&amp;":"&","&lt;":"<","&gt;":">","&quot;":'"',"&#39;":"'"};return e.replace(/&amp;|&lt;|&gt;|&quot;|&#39;/g,(e=>t[e]))}}class t{static name="$Storage";static version="1.0.9";static about(){return console.log(`\n🟧 ${this.name} v${this.version}\n`)}static data=null;static dataFile="box.dat";static#e=/^@(?<key>[^.]+)(?:\.(?<path>.*))?$/;static#t(){return"undefined"!=typeof $environment&&$environment["surge-version"]?"Surge":"undefined"!=typeof $environment&&$environment["stash-version"]?"Stash":"undefined"!=typeof module&&module.exports?"Node.js":"undefined"!=typeof $task?"Quantumult X":"undefined"!=typeof $loon?"Loon":"undefined"!=typeof $rocket?"Shadowrocket":"undefined"!=typeof Egern?"Egern":void 0}static getItem(t=new String,s=null){let o=s;if(!0===t.startsWith("@")){const{key:s,path:a}=t.match(this.#e)?.groups;t=s;let n=this.getItem(t,{});"object"!=typeof n&&(n={}),o=e.get(n,a);try{o=JSON.parse(o)}catch(e){}}else{switch(this.#t()){case"Surge":case"Loon":case"Stash":case"Egern":case"Shadowrocket":o=$persistentStore.read(t);break;case"Quantumult X":o=$prefs.valueForKey(t);break;case"Node.js":this.data=this.#s(this.dataFile),o=this.data?.[t];break;default:o=this.data?.[t]||null}try{o=JSON.parse(o)}catch(e){}}return o??s}static setItem(t=new String,s=new String){let o=!1;if("object"==typeof s)s=JSON.stringify(s);else s=String(s);if(!0===t.startsWith("@")){const{key:a,path:n}=t.match(this.#e)?.groups;t=a;let i=this.getItem(t,{});"object"!=typeof i&&(i={}),e.set(i,n,s),o=this.setItem(t,i)}else switch(this.#t()){case"Surge":case"Loon":case"Stash":case"Egern":case"Shadowrocket":o=$persistentStore.write(s,t);break;case"Quantumult X":o=$prefs.setValueForKey(s,t);break;case"Node.js":this.data=this.#s(this.dataFile),this.data[t]=s,this.#o(this.dataFile),o=!0;break;default:o=this.data?.[t]||null}return o}static removeItem(t){let s=!1;if(!0===t.startsWith("@")){const{key:o,path:a}=t.match(this.#e)?.groups;t=o;let n=this.getItem(t);"object"!=typeof n&&(n={}),keyValue=e.unset(n,a),s=this.setItem(t,n)}else switch(this.#t()){case"Surge":case"Loon":case"Stash":case"Egern":case"Shadowrocket":case"Node.js":default:s=!1;break;case"Quantumult X":s=$prefs.removeValueForKey(t)}return s}static clear(){let e=!1;switch(this.#t()){case"Surge":case"Loon":case"Stash":case"Egern":case"Shadowrocket":case"Node.js":default:e=!1;break;case"Quantumult X":e=$prefs.removeAllValues()}return e}static#s(e){if(!this.isNode())return{};{this.fs=this.fs?this.fs:require("fs"),this.path=this.path?this.path:require("path");const t=this.path.resolve(e),s=this.path.resolve(process.cwd(),e),o=this.fs.existsSync(t),a=!o&&this.fs.existsSync(s);if(!o&&!a)return{};{const e=o?t:s;try{return JSON.parse(this.fs.readFileSync(e))}catch(e){return{}}}}}static#o(e=this.dataFile){if(this.isNode()){this.fs=this.fs?this.fs:require("fs"),this.path=this.path?this.path:require("path");const t=this.path.resolve(e),s=this.path.resolve(process.cwd(),e),o=this.fs.existsSync(t),a=!o&&this.fs.existsSync(s),n=JSON.stringify(this.data);o?this.fs.writeFileSync(t,n):a?this.fs.writeFileSync(s,n):this.fs.writeFileSync(t,n)}}}class s{static name="ENV";static version="1.7.4";static about(){return console.log(`\n🟧 ${this.name} v${this.version}\n`)}constructor(e,t){console.log(`\n🟧 ${s.name} v${s.version}\n`),this.name=e,this.logs=[],this.isMute=!1,this.isMuteLog=!1,this.logSeparator="\n",this.encoding="utf-8",this.startTime=(new Date).getTime(),Object.assign(this,t),this.log(`\n🚩 开始!\n${e}\n`)}platform(){return"undefined"!=typeof $environment&&$environment["surge-version"]?"Surge":"undefined"!=typeof $environment&&$environment["stash-version"]?"Stash":"undefined"!=typeof module&&module.exports?"Node.js":"undefined"!=typeof $task?"Quantumult X":"undefined"!=typeof $loon?"Loon":"undefined"!=typeof $rocket?"Shadowrocket":"undefined"!=typeof Egern?"Egern":void 0}isNode(){return"Node.js"===this.platform()}isQuanX(){return"Quantumult X"===this.platform()}isSurge(){return"Surge"===this.platform()}isLoon(){return"Loon"===this.platform()}isShadowrocket(){return"Shadowrocket"===this.platform()}isStash(){return"Stash"===this.platform()}isEgern(){return"Egern"===this.platform()}async getScript(e){return await this.fetch(e).then((e=>e.body))}async runScript(e,s){let o=t.getItem("@chavy_boxjs_userCfgs.httpapi");o=o?.replace?.(/\n/g,"")?.trim();let a=t.getItem("@chavy_boxjs_userCfgs.httpapi_timeout");a=1*a??20,a=s?.timeout??a;const[n,i]=o.split("@"),r={url:`http://${i}/v1/scripting/evaluate`,body:{script_text:e,mock_type:"cron",timeout:a},headers:{"X-Key":n,Accept:"*/*"},timeout:a};await this.fetch(r).then((e=>e.body),(e=>this.logErr(e)))}initGotEnv(e){this.got=this.got?this.got:require("got"),this.cktough=this.cktough?this.cktough:require("tough-cookie"),this.ckjar=this.ckjar?this.ckjar:new this.cktough.CookieJar,e&&(e.headers=e.headers?e.headers:{},void 0===e.headers.Cookie&&void 0===e.cookieJar&&(e.cookieJar=this.ckjar))}async fetch(t={}||"",s={}){switch(t.constructor){case Object:t={...t,...s};break;case String:t={url:t,...s}}t.method||(t.method="GET",(t.body??t.bodyBytes)&&(t.method="POST")),delete t.headers?.Host,delete t.headers?.[":authority"],delete t.headers?.["Content-Length"],delete t.headers?.["content-length"];const o=t.method.toLocaleLowerCase();switch(this.platform()){case"Loon":case"Surge":case"Stash":case"Egern":case"Shadowrocket":default:return t.policy&&(this.isLoon()&&(t.node=t.policy),this.isStash()&&e.set(t,"headers.X-Stash-Selected-Proxy",encodeURI(t.policy))),"boolean"==typeof t.redirection&&(t["auto-redirect"]=t.redirection),t.bodyBytes&&!t.body&&(t.body=t.bodyBytes,delete t.bodyBytes),await new Promise(((e,s)=>{$httpClient[o](t,((o,a,n)=>{o?s(o):(a.ok=/^2\d\d$/.test(a.status),a.statusCode=a.status,n&&(a.body=n,1==t["binary-mode"]&&(a.bodyBytes=n)),e(a))}))}));case"Quantumult X":return t.policy&&e.set(t,"opts.policy",t.policy),"boolean"==typeof t["auto-redirect"]&&e.set(t,"opts.redirection",t["auto-redirect"]),t.body instanceof ArrayBuffer?(t.bodyBytes=t.body,delete t.body):ArrayBuffer.isView(t.body)?(t.bodyBytes=t.body.buffer.slice(t.body.byteOffset,t.body.byteLength+t.body.byteOffset),delete object.body):t.body&&delete t.bodyBytes,await $task.fetch(t).then((e=>(e.ok=/^2\d\d$/.test(e.statusCode),e.status=e.statusCode,e)),(e=>Promise.reject(e.error)));case"Node.js":let s=require("iconv-lite");this.initGotEnv(t);const{url:a,...n}=t;return await this.got[o](a,n).on("redirect",((e,t)=>{try{if(e.headers["set-cookie"]){const s=e.headers["set-cookie"].map(this.cktough.Cookie.parse).toString();s&&this.ckjar.setCookieSync(s,null),t.cookieJar=this.ckjar}}catch(e){this.logErr(e)}})).then((e=>(e.statusCode=e.status,e.body=s.decode(e.rawBody,this.encoding),e.bodyBytes=e.rawBody,e)),(e=>Promise.reject(e.message)))}}time(e,t=null){const s=t?new Date(t):new Date;let o={"M+":s.getMonth()+1,"d+":s.getDate(),"H+":s.getHours(),"m+":s.getMinutes(),"s+":s.getSeconds(),"q+":Math.floor((s.getMonth()+3)/3),S:s.getMilliseconds()};/(y+)/.test(e)&&(e=e.replace(RegExp.$1,(s.getFullYear()+"").substr(4-RegExp.$1.length)));for(let t in o)new RegExp("("+t+")").test(e)&&(e=e.replace(RegExp.$1,1==RegExp.$1.length?o[t]:("00"+o[t]).substr((""+o[t]).length)));return e}msg(e=name,t="",s="",o){const a=e=>{switch(typeof e){case void 0:return e;case"string":switch(this.platform()){case"Surge":case"Stash":case"Egern":default:return{url:e};case"Loon":case"Shadowrocket":return e;case"Quantumult X":return{"open-url":e};case"Node.js":return}case"object":switch(this.platform()){case"Surge":case"Stash":case"Egern":case"Shadowrocket":default:return{url:e.url||e.openUrl||e["open-url"]};case"Loon":return{openUrl:e.openUrl||e.url||e["open-url"],mediaUrl:e.mediaUrl||e["media-url"]};case"Quantumult X":return{"open-url":e["open-url"]||e.url||e.openUrl,"media-url":e["media-url"]||e.mediaUrl,"update-pasteboard":e["update-pasteboard"]||e.updatePasteboard};case"Node.js":return}default:return}};if(!this.isMute)switch(this.platform()){case"Surge":case"Loon":case"Stash":case"Egern":case"Shadowrocket":default:$notification.post(e,t,s,a(o));break;case"Quantumult X":$notify(e,t,s,a(o));case"Node.js":}if(!this.isMuteLog){let o=["","==============📣系统通知📣=============="];o.push(e),t&&o.push(t),s&&o.push(s),console.log(o.join("\n")),this.logs=this.logs.concat(o)}}log(...e){e.length>0&&(this.logs=[...this.logs,...e]),console.log(e.join(this.logSeparator))}logErr(e){switch(this.platform()){case"Surge":case"Loon":case"Stash":case"Egern":case"Shadowrocket":case"Quantumult X":default:this.log("",`❗️ ${this.name}, 错误!`,e);break;case"Node.js":this.log("",`❗️${this.name}, 错误!`,e.stack)}}wait(e){return new Promise((t=>setTimeout(t,e)))}done(t={}){const s=((new Date).getTime()-this.startTime)/1e3;switch(this.log("",`🚩 ${this.name}, 结束! 🕛 ${s} 秒`,""),this.platform()){case"Surge":t.policy&&e.set(t,"headers.X-Surge-Policy",t.policy),$done(t);break;case"Loon":t.policy&&(t.node=t.policy),$done(t);break;case"Stash":t.policy&&e.set(t,"headers.X-Stash-Selected-Proxy",encodeURI(t.policy)),$done(t);break;case"Egern":case"Shadowrocket":default:$done(t);break;case"Quantumult X":t.policy&&e.set(t,"opts.policy",t.policy),delete t["auto-redirect"],delete t["auto-cookie"],delete t["binary-mode"],delete t.charset,delete t.host,delete t.insecure,delete t.method,delete t.opt,delete t.path,delete t.policy,delete t["policy-descriptor"],delete t.scheme,delete t.sessionIndex,delete t.statusCode,delete t.timeout,t.body instanceof ArrayBuffer?(t.bodyBytes=t.body,delete t.body):ArrayBuffer.isView(t.body)?(t.bodyBytes=t.body.buffer.slice(t.body.byteOffset,t.body.byteLength+t.body.byteOffset),delete t.body):t.body&&delete t.bodyBytes,$done(t);break;case"Node.js":process.exit(1)}}}class o{static name="URI";static version="1.2.7";static about(){return console.log(`\n🟧 ${this.name} v${this.version}\n`)}static#a={scheme:"",host:"",path:"",query:{}};static parse(e){let t=e.match(/(?:(?<scheme>.+):\/\/(?<host>[^/]+))?\/?(?<path>[^?]+)?\??(?<query>[^?]+)?/)?.groups??null;if(t?.path?t.paths=t.path.split("/"):t.path="",t?.paths){const e=t.paths[t.paths.length-1];if(e?.includes(".")){const s=e.split(".");t.format=s[s.length-1]}}return t?.query&&(t.query=Object.fromEntries(t.query.split("&").map((e=>e.split("="))))),t}static stringify(e=this.#a){let t="";return e?.scheme&&e?.host&&(t+=e.scheme+"://"+e.host),e?.path&&(t+=e?.host?"/"+e.path:e.path),e?.query&&(t+="?"+Object.entries(e.query).map((e=>e.join("="))).join("&")),t}}function a(s,o,a){let n=t.getItem(s,a),i={};if("undefined"!=typeof $argument&&Boolean($argument)){let t=Object.fromEntries($argument.split("&").map((e=>e.split("=").map((e=>e.replace(/\"/g,""))))));for(let s in t)e.set(i,s,t[s])}const r={Settings:a?.Default?.Settings||{},Configs:a?.Default?.Configs||{},Caches:{}};Array.isArray(o)||(o=[o]);for(let e of o)r.Settings={...r.Settings,...a?.[e]?.Settings,...i,...n?.[e]?.Settings},r.Configs={...r.Configs,...a?.[e]?.Configs},n?.[e]?.Caches&&"string"==typeof n?.[e]?.Caches&&(n[e].Caches=JSON.parse(n?.[e]?.Caches)),r.Caches={...r.Caches,...n?.[e]?.Caches};return function e(t,s){for(var o in t){var a=t[o];t[o]="object"==typeof a&&null!==a?e(a,s):s(o,a)}return t}(r.Settings,((e,t)=>("true"===t||"false"===t?t=JSON.parse(t):"string"==typeof t&&(t=t.includes(",")?t.split(",").map((e=>c(e))):c(t)),t))),r;function c(e){return e&&!isNaN(e)&&(e=parseInt(e,10)),e}}var n={Switch:!0},i={Settings:n},r={Switch:!0,Title:"☁ 𝙒𝘼𝙍𝙋 𝙄𝙣𝙛𝙤",Icon:"lock.icloud.fill",IconColor:"#f48220",BackgroundColor:"#f6821f",Language:"auto"},c={Request:{url:"https://api.cloudflareclient.com",headers:{authorization:null,"content-Type":"application/json","user-agent":"1.1.1.1/6.22","cf-client-version":"i-6.22-2308151957.1"}},i18n:{"zh-Hans":{IPv4:"IPv4",IPv6:"IPv6",COLO:"托管中心",WARP_Level:"隐私保护",Account_Type:"账户类型",Data_Info:"流量信息",Unknown:"未知",Fail:"获取失败",WARP_Level_Off:"关闭",WARP_Level_On:"开启",WARP_Level_Plus:"增强",Account_Type_unlimited:"无限版",Account_Type_limited:"有限版",Account_Type_team:"团队版",Account_Type_plus:"WARP+",Account_Type_free:"免费版",Data_Info_Used:"已用",Data_Info_Residual:"剩余",Data_Info_Total:"总计",Data_Info_Unlimited:"无限"},"zh-Hant":{IPv4:"IPv4",IPv6:"IPv6",COLO:"託管中心",WARP_Level:"隱私保護",Account_Type:"賬戶類型",Data_Info:"流量信息",Unknown:"未知",Fail:"獲取失敗",WARP_Level_Off:"關閉",WARP_Level_On:"開啟",WARP_Level_Plus:"增強",Account_Type_unlimited:"無限版",Account_Type_limited:"有限版",Account_Type_team:"團隊版",Account_Type_plus:"WARP+",Account_Type_free:"免費版",Data_Info_Used:"已用",Data_Info_Residual:"剩餘",Data_Info_Total:"總計",Data_Info_Unlimited:"無限"},en:{IPv4:"IPv4",IPv6:"IPv6",COLO:"Colo Center",WARP_Level:"WARP Level",Account_Type:"Account Type",Data_Info:"Data Info.",Unknown:"Unknown",Fail:"Fail to Get",WARP_Level_Off:"OFF",WARP_Level_On:"ON",WARP_Level_Plus:"PLUS",Account_Type_unlimited:"Unlimited",Account_Type_limited:"Limited",Account_Type_team:"Team",Account_Type_plus:"WARP+",Account_Type_free:"Free",Data_Info_Used:"Used",Data_Info_Residual:"Remaining",Data_Info_Total:"Earned",Data_Info_Unlimited:"Unlimited"}}},l={Settings:r,Configs:c},u={Switch:!0,setupMode:"ChangeKeypair",Verify:{RegistrationId:null,Mode:"Token",Content:null}},d={Settings:u},h={Switch:!0,IPServer:"ipw.cn",Verify:{Mode:"Token",Content:""},zone:{id:"",name:"",dns_records:[{id:"",type:"A",name:"",content:"",ttl:1,proxied:!1}]}},p={Request:{url:"https://api.cloudflare.com/client/v4",headers:{"content-type":"application/json"}}},f={Settings:h,Configs:p},g={Switch:!0,setupMode:null,deviceType:"iOS",Verify:{License:null,Mode:"Token",Content:null,RegistrationId:null}},y={Request:{url:"https://api.cloudflareclient.com",headers:{authorization:null,"content-Type":"application/json","user-agent":"1.1.1.1/6.22","cf-client-version":"i-6.22-2308151957.1"}},Environment:{iOS:{Type:"i",Version:"v0i2308151957",headers:{"user-agent":"1.1.1.1/6.22","cf-client-version":"i-6.22-2308151957.1"}},macOS:{Type:"m",Version:"v0i2109031904",headers:{"user-agent":"1.1.1.1/2109031904.1 CFNetwork/1327.0.4 Darwin/21.2.0","cf-client-version":"m-2021.12.1.0-0"}},Android:{Type:"a",Version:"v0a1922",headers:{"user-agent":"okhttp/3.12.1","cf-client-version":"a-6.3-1922"}},Windows:{Type:"w",Version:"",headers:{"user-agent":"","cf-client-version":""}},Linux:{Type:"l",Version:"",headers:{"user-agent":"","cf-client-version":""}}}},m={Settings:g,Configs:y},S={Switch:!0,PrivateKey:"",PublicKey:""},_={interface:{addresses:{v4:"",v6:""}},peers:[{public_key:"",endpoint:{host:"",v4:"",v6:""}}]},b={Settings:S,Configs:_},v=Database={Default:Object.freeze({__proto__:null,Settings:n,default:i}),Panel:Object.freeze({__proto__:null,Configs:c,Settings:r,default:l}),"1dot1dot1dot1":Object.freeze({__proto__:null,Settings:u,default:d}),DNS:Object.freeze({__proto__:null,Configs:p,Settings:h,default:f}),WARP:Object.freeze({__proto__:null,Configs:y,Settings:g,default:m}),VPN:Object.freeze({__proto__:null,Configs:_,Settings:S,default:b})};const k=new s("☁ Cloudflare: 1️⃣ 1.1.1.1 v3.0.1(4).request");let $;const w=o.parse($request.url);k.log(`⚠ URL: ${JSON.stringify(w)}`,"");const C=$request.method;w.host,w.path;const P=w.paths;k.log(`⚠ METHOD: ${C}`,"");const A=($request.headers?.["Content-Type"]??$request.headers?.["content-type"])?.split(";")?.[0];k.log(`⚠ FORMAT: ${A}`,""),(async()=>{const{Settings:s,Caches:n,Configs:i}=function(t,s,o){console.log("☑️ Set Environment Variables","");let{Settings:n,Caches:i,Configs:r}=a(t,s,o);switch(n.Verify?.Mode){case"Token":e.set(r,"Request.headers.authorization",`Bearer ${n.Verify?.Content}`);break;case"ServiceKey":e.set(r,"Request.headers.x-auth-user-service-key",n.Verify?.Content);break;case"Key":e.set(n,"Verify.Content",Array.from(n.Verify?.Content.split("\n"))),e.set(r,"Request.headers.x-auth-key",n.Verify?.Content[0]),e.set(r,"Request.headers.x-auth-email",n.Verify?.Content[1]);break;default:console.log(`无可用授权方式\nMode=${n.Verify?.Mode}\nContent=${n.Verify?.Content}`);case void 0:}return n.zone?.dns_records&&(n.zone.dns_records=Array.from(n.zone.dns_records.split("\n")),n.zone.dns_records.forEach(((e,t)=>{n.zone.dns_records[t]=Object.fromEntries(e.split("&").map((e=>e.split("=")))),n.zone.dns_records[t].proxied=JSON.parse(n.zone.dns_records[t].proxied)}))),console.log(`✅ Set Environment Variables, Settings: ${typeof n}, Settings内容: ${JSON.stringify(n)}`,""),{Settings:n,Caches:i,Configs:r}}("Cloudflare","1dot1dot1dot1",v);switch(k.log(`⚠ Settings.Switch: ${s?.Switch}`,""),s.Switch){case!0:default:const e=a("WireGuard","VPN",v),n=`/${P[1]}/${P[2]}`==`/reg/${s.Verify.RegistrationId}`?"RegistrationId":"/reg"==`/${P[1]}`?"Registration":void 0;k.log(`🚧 KIND: ${n}`,""),t.setItem("@Cloudflare.1dot1dot1dot1.Caches",$request);let i={};switch(C){case"POST":case"PUT":case"PATCH":case"DELETE":switch(A){case void 0:case"application/x-www-form-urlencoded":case"text/plain":case"text/html":default:case"application/x-mpegURL":case"application/x-mpegurl":case"application/vnd.apple.mpegurl":case"audio/mpegurl":case"text/xml":case"text/plist":case"application/xml":case"application/plist":case"application/x-plist":case"text/vtt":case"application/vtt":break;case"text/json":case"application/json":switch(i=JSON.parse($request.body??"{}"),n){case"Registration":break;case"RegistrationId":"PUT"===$request.method&&(i.key=e.Settings.PublicKey,k.msg(k.name,"重置密钥",`发送请求数据，请求中的客户端公钥已替换为:\n${e.Settings.PublicKey}\n等待回复数据`))}$request.body=JSON.stringify(i);case"application/protobuf":case"application/x-protobuf":case"application/vnd.google.protobuf":case"application/grpc":case"application/grpc+proto":case"application/octet-stream":}case"GET":case"HEAD":case"OPTIONS":case void 0:default:$request.headers?.Host&&($request.headers.Host=w.host),$request.url=o.stringify(w);case"CONNECT":case"TRACE":}case!1:}})().catch((e=>k.logErr(e))).finally((()=>{if(void 0===$)k.done($request);else k.isQuanX()?($.status||($.status="HTTP/1.1 200 OK"),delete $.headers?.["Content-Length"],delete $.headers?.["content-length"],delete $.headers?.["Transfer-Encoding"],k.done($)):k.done({response:$})}));