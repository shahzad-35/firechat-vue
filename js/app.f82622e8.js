(function(){"use strict";var e={312:function(e,s,t){var a=t(5130),n=t(6768),r=t(4232);const o={key:0,class:"view login"},u={class:"form-inner"},i={key:1,class:"view chat"},c={class:"chat-box"},l={class:"message-inner"},m={class:"username"},f={class:"content"};function p(e,s,t,p,g,d){return""===p.userName||null===p.userName?((0,n.uX)(),(0,n.CE)("div",o,[(0,n.Lk)("form",{class:"login-form",onSubmit:s[1]||(s[1]=(0,a.D$)(((...e)=>p.login&&p.login(...e)),["prevent"]))},[(0,n.Lk)("div",u,[s[5]||(s[5]=(0,n.Lk)("h1",null,"Login for chat",-1)),s[6]||(s[6]=(0,n.Lk)("label",{for:"username"},"UserName",-1)),(0,n.bo)((0,n.Lk)("input",{type:"text","onUpdate:modelValue":s[0]||(s[0]=e=>p.inputUserName=e),name:"username",placeholder:"Please enter your username....",id:"username"},null,512),[[a.Jo,p.inputUserName]]),s[7]||(s[7]=(0,n.Lk)("input",{type:"submit",value:"login"},null,-1))])],32)])):((0,n.uX)(),(0,n.CE)("div",i,[(0,n.Lk)("header",null,[(0,n.Lk)("button",{class:"pointer logout",onClick:s[2]||(s[2]=(...e)=>p.Logout&&p.Logout(...e))},"Logout"),(0,n.Lk)("h1",null,"Hello, "+(0,r.v_)(p.userName),1)]),(0,n.Lk)("section",c,[((0,n.uX)(!0),(0,n.CE)(n.FK,null,(0,n.pI)(p.messages,(e=>((0,n.uX)(),(0,n.CE)("div",{key:e.id,class:(0,r.C4)(e.userName==p.userName?"message current-user":"message")},[(0,n.Lk)("div",l,[(0,n.Lk)("div",m,(0,r.v_)(e.userName),1),(0,n.Lk)("div",f,(0,r.v_)(e.content),1)])],2)))),128))]),(0,n.Lk)("footer",null,[(0,n.Lk)("form",{onSubmit:s[4]||(s[4]=(0,a.D$)(((...e)=>p.SendMessage&&p.SendMessage(...e)),["prevent"]))},[(0,n.bo)((0,n.Lk)("input",{type:"text","onUpdate:modelValue":s[3]||(s[3]=e=>p.inputMessage=e),placeholder:"Write message..."},null,512),[[a.Jo,p.inputMessage]]),s[8]||(s[8]=(0,n.Lk)("input",{class:"pointer",type:"submit",value:"Send"},null,-1))],32)])]))}var g=t(144),d=t(4161),v=t(6400);const h={apiKey:"AIzaSyB8bC0F59ex3XbqNnQ6S_HwWR65w7YOlFc",authDomain:"vuefire-chat-8af17.firebaseapp.com",databaseURL:"https://vuefire-chat-8af17-default-rtdb.europe-west1.firebasedatabase.app/",projectId:"vuefire-chat-8af17",storageBucket:"vuefire-chat-8af17.appspot.com",messagingSenderId:"901067599128",appId:"1:901067599128:web:65312016cb90aea9e9826d"};let b=null;try{const e=(0,v.Wp)(h);b=(0,d.C3)(e),console.log("Firebase initialized successfully")}catch(E){console.error("Error initializing Firebase:",E)}var k=b,N=t(782),y={setup(){const e=(0,N.Pj)(),s=(0,g.KR)(""),t=(0,g.KR)(""),a=(0,n.EW)((()=>e.state.userName)),r=(0,n.EW)((()=>e.state.messages)),o=()=>{e.dispatch("logout")},u=()=>{s.value&&(e.dispatch("updateUserName",s.value),s.value="")},i=()=>{if(!t.value)return;const s={userName:e.state.userName,message:t.value},a=(0,d.KR)(k,"/messages");(0,d.VC)(a,s).then((()=>{t.value=""})).catch((e=>{console.error("Error sending message:",e)}))};return(0,n.sV)((()=>{const s=(0,d.KR)(k,"/messages");(0,d.Zy)(s,(s=>{const t=s.val(),a=Object.keys(t).map((e=>({id:e,content:t[e].message,userName:t[e].userName})));e.dispatch("fetchMessages",a)}))})),{inputUserName:s,inputMessage:t,login:u,SendMessage:i,Logout:o,userName:a,messages:r}}},L=t(1241);const w=(0,L.A)(y,[["render",p]]);var M=w,O=(t(4114),t(5131));const U=(0,N.y$)({state:{userName:"",messages:[]},mutations:{setUserName(e,s){e.userName=s},clearUserName(e){e.userName=""},setMessages(e,s){e.messages=s},addMessage(e,s){e.messages.push(s)}},actions:{updateUserName({commit:e},s){e("setUserName",s)},logout({commit:e}){e("clearUserName")},fetchMessages({commit:e},s){e("setMessages",s)},sendMessage({commit:e},s){e("addMessage",s)}},plugins:[(0,O.A)({paths:["userName"]})]});var C=U;(0,a.Ef)(M).use(C).mount("#app")}},s={};function t(a){var n=s[a];if(void 0!==n)return n.exports;var r=s[a]={exports:{}};return e[a].call(r.exports,r,r.exports,t),r.exports}t.m=e,function(){var e=[];t.O=function(s,a,n,r){if(!a){var o=1/0;for(l=0;l<e.length;l++){a=e[l][0],n=e[l][1],r=e[l][2];for(var u=!0,i=0;i<a.length;i++)(!1&r||o>=r)&&Object.keys(t.O).every((function(e){return t.O[e](a[i])}))?a.splice(i--,1):(u=!1,r<o&&(o=r));if(u){e.splice(l--,1);var c=n();void 0!==c&&(s=c)}}return s}r=r||0;for(var l=e.length;l>0&&e[l-1][2]>r;l--)e[l]=e[l-1];e[l]=[a,n,r]}}(),function(){t.n=function(e){var s=e&&e.__esModule?function(){return e["default"]}:function(){return e};return t.d(s,{a:s}),s}}(),function(){t.d=function(e,s){for(var a in s)t.o(s,a)&&!t.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:s[a]})}}(),function(){t.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){t.o=function(e,s){return Object.prototype.hasOwnProperty.call(e,s)}}(),function(){var e={524:0};t.O.j=function(s){return 0===e[s]};var s=function(s,a){var n,r,o=a[0],u=a[1],i=a[2],c=0;if(o.some((function(s){return 0!==e[s]}))){for(n in u)t.o(u,n)&&(t.m[n]=u[n]);if(i)var l=i(t)}for(s&&s(a);c<o.length;c++)r=o[c],t.o(e,r)&&e[r]&&e[r][0](),e[r]=0;return t.O(l)},a=self["webpackChunkfirechat_vue"]=self["webpackChunkfirechat_vue"]||[];a.forEach(s.bind(null,0)),a.push=s.bind(null,a.push.bind(a))}();var a=t.O(void 0,[504],(function(){return t(312)}));a=t.O(a)})();
//# sourceMappingURL=app.f82622e8.js.map