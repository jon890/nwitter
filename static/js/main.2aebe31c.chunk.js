(this.webpackJsonpnwitter=this.webpackJsonpnwitter||[]).push([[0],{49:function(e,t,n){},50:function(e,t,n){"use strict";n.r(t);var a=n(2),c=n.n(a),r=n(32),s=n.n(r),i=n(10),u=n(24),o=n(6),l=n(22),j=n(19),b=n(12),d=n(1),p=function(e){e.userObj;return Object(d.jsx)("nav",{children:Object(d.jsxs)("ul",{style:{display:"flex",justifyContent:"center",marginTop:50},children:[Object(d.jsx)("li",{children:Object(d.jsx)(u.b,{to:"/",style:{marginRight:10},children:Object(d.jsx)(b.a,{icon:l.c,color:"#04AAFF",size:"2x"})})}),Object(d.jsx)("li",{children:Object(d.jsx)(u.b,{to:"/profile",style:{marginLeft:10,display:"flex",flexDirection:"column",alignItems:"center",fontSize:12},children:Object(d.jsx)(b.a,{icon:j.e,color:"#04AAFF",size:"2x"})})})]})})},f=n(8),O=n.n(f),h=n(16),x=n(23);n(47),n(51),n(52);x.a.initializeApp({apiKey:"AIzaSyBQ-UP9Sy1eY05srg96hIUHaIOa05f_lg8",authDomain:"nwitter-b0963.firebaseapp.com",projectId:"nwitter-b0963",storageBucket:"nwitter-b0963.appspot.com",messagingSenderId:"13278340615",appId:"1:13278340615:web:12db5531c519b4b4e1aca2",measurementId:"G-9LEM4HQKWZ"});var m=x.a,g=x.a.auth(),v=x.a.firestore(),w=x.a.storage(),y=function(){var e=Object(a.useState)(""),t=Object(i.a)(e,2),n=t[0],c=t[1],r=Object(a.useState)(""),s=Object(i.a)(r,2),u=s[0],o=s[1],l=Object(a.useState)(!0),j=Object(i.a)(l,2),b=j[0],p=j[1],f=Object(a.useState)(""),x=Object(i.a)(f,2),m=x[0],v=x[1],w=function(e){var t=e.target,n=t.name,a=t.value;"email"===n?c(a):"password"===n&&o(a)},y=function(){var e=Object(h.a)(O.a.mark((function e(t){var a;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),e.prev=1,!b){e.next=8;break}return e.next=5,g.createUserWithEmailAndPassword(n,u);case 5:a=e.sent,e.next=11;break;case 8:return e.next=10,g.signInWithEmailAndPassword(n,u);case 10:a=e.sent;case 11:console.log(a),e.next=18;break;case 14:e.prev=14,e.t0=e.catch(1),console.log(e.t0),v(e.t0);case 18:case"end":return e.stop()}}),e,null,[[1,14]])})));return function(t){return e.apply(this,arguments)}}();return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsxs)("form",{onSubmit:y,className:"container",children:[Object(d.jsx)("input",{type:"email",name:"email",placeholder:"Email",value:n,onChange:w,required:!0,className:"authInput"}),Object(d.jsx)("input",{type:"password",name:"password",placeholder:"Password",value:u,onChange:w,required:!0,className:"authInput"}),Object(d.jsx)("input",{type:"submit",className:"authInput authSubmit",value:b?"Create Account":"Log In"}),m&&Object(d.jsx)("span",{className:"authError",children:m})]}),Object(d.jsx)("span",{onClick:function(){return p((function(e){return!e}))},className:"authSwitch",children:b?"Log In":"Create Account"})]})},N=function(){var e=function(){var e=Object(h.a)(O.a.mark((function e(t){var n,a,c;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"google"===(n=t.target.name)?a=new m.auth.GoogleAuthProvider:"github"===n&&(a=new m.auth.GithubAuthProvider),e.next=4,g.signInWithPopup(a);case 4:c=e.sent,console.log(c);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(d.jsxs)("div",{className:"authContainer",children:[Object(d.jsx)(b.a,{icon:l.c,color:"#04AAFF",size:"3x"}),Object(d.jsx)(y,{}),Object(d.jsxs)("div",{className:"authBtns",children:[Object(d.jsxs)("button",{onClick:e,name:"google",className:"authBtn",children:["Google\ub85c \uacc4\uc18d \ud558\uae30 ",Object(d.jsx)(b.a,{icon:l.b})]}),Object(d.jsxs)("button",{onClick:e,name:"github",className:"authBtn",children:["Github\ub85c \uacc4\uc18d \ud558\uae30 ",Object(d.jsx)(b.a,{icon:l.a})]})]})]})},I=n(34),S=function(e){var t=e.nweetObj,n=e.isOwner,c=Object(a.useState)(!1),r=Object(i.a)(c,2),s=r[0],u=r[1],o=Object(a.useState)(t.text),l=Object(i.a)(o,2),p=l[0],f=l[1],x=function(){var e=Object(h.a)(O.a.mark((function e(){return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!window.confirm("\uc815\ub9d0 \uc774 \ud2b8\uc717\uc744 \uc9c0\uc6b0\uc2dc\uaca0\uc2b5\ub2c8\uae4c?")){e.next=6;break}return e.next=4,v.doc("nweets/".concat(t.id)).delete();case 4:return e.next=6,w.refFromURL(t.attachmentUrl).delete();case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),m=function(){return u((function(e){return!e}))},g=function(){var e=Object(h.a)(O.a.mark((function e(n){return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.preventDefault(),e.next=3,v.doc("nweets/".concat(t.id)).update({text:p});case 3:u(!1);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(d.jsx)("div",{className:"nweet",children:s?Object(d.jsx)(d.Fragment,{children:n&&Object(d.jsxs)(d.Fragment,{children:[Object(d.jsxs)("form",{onSubmit:g,className:"container nweetEdit",children:[Object(d.jsx)("input",{type:"text",placeholder:"Edit your nweet",value:p,onChange:function(e){var t=e.target.value;f(t)},required:!0,autoFocus:!0,className:"formInput"}),Object(d.jsx)("input",{type:"submit",value:"\uc218\uc815",className:"formBtn"})]}),Object(d.jsx)("span",{onClick:m,className:"formBtn cancelBtn",children:"\ucde8\uc18c"})]})}):Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("h4",{children:t.text}),t.attachmentUrl&&Object(d.jsx)("img",{src:t.attachmentUrl,alt:"\ud504\ub85c\ud544"}),n&&Object(d.jsxs)("div",{className:"nweet__actions",children:[Object(d.jsx)("span",{onClick:x,children:Object(d.jsx)(b.a,{icon:j.d})}),Object(d.jsx)("span",{onClick:m,children:Object(d.jsx)(b.a,{icon:j.a})})]})]})})},k=n(54),F=function(e){var t=e.userObj,n=Object(a.useState)(""),c=Object(i.a)(n,2),r=c[0],s=c[1],u=Object(a.useState)(""),o=Object(i.a)(u,2),l=o[0],p=o[1],f=function(){var e=Object(h.a)(O.a.mark((function e(n){var a,c,i;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n.preventDefault(),""!==r){e.next=3;break}return e.abrupt("return");case 3:if(a="",""===l){e.next=11;break}return c=w.ref().child("".concat(t.uid,"/").concat(Object(k.a)())),e.next=8,c.putString(l,"data_url");case 8:return e.next=10,c.getDownloadURL();case 10:a=e.sent;case 11:return i={text:r,createdAt:Date.now(),creatorId:t.uid,attachmentUrl:a},e.next=14,v.collection("nweets").add(i);case 14:s(""),p("");case 16:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(d.jsxs)("form",{onSubmit:f,className:"factoryForm",children:[Object(d.jsxs)("div",{className:"factoryInput__container",children:[Object(d.jsx)("input",{className:"factoryInput__input",type:"text",onChange:function(e){var t=e.target.value;s(t)},value:r,placeholder:"What's on your mind?",maxLength:120}),Object(d.jsx)("input",{type:"submit",value:"\u2192",className:"factoryInput__arrow"})]}),Object(d.jsxs)("label",{for:"attach-file",className:"factoryInput__label",children:[Object(d.jsx)("span",{children:"\uc0ac\uc9c4 \ucd94\uac00"}),Object(d.jsx)(b.a,{icon:j.b})]}),Object(d.jsx)("input",{id:"attach-file",type:"file",accept:"image/*",onChange:function(e){var t=e.target.files[0],n=new FileReader;n.onloadend=function(e){var t=e.currentTarget.result;p(t)},n.readAsDataURL(t)},stye:{opacity:0}}),l&&Object(d.jsxs)("div",{className:"factoryForm__attachment",children:[Object(d.jsx)("img",{src:l,style:{backgroundImage:l},alt:"\ud504\ub85c\ud544"}),Object(d.jsxs)("div",{className:"factoryForm__clear",onClick:function(){return p("")},children:[Object(d.jsx)("span",{children:"\uc81c\uac70"}),Object(d.jsx)(b.a,{icon:j.c})]})]})]})},C=function(e){var t=e.userObj,n=Object(a.useState)([]),c=Object(i.a)(n,2),r=c[0],s=c[1];return Object(a.useEffect)((function(){v.collection("nweets").onSnapshot((function(e){var t=e.docs.map((function(e){return Object(I.a)({id:e.id},e.data())}));s(t)}))}),[]),Object(d.jsx)("div",{className:"container",children:Object(d.jsxs)("div",{style:{marginTop:30},children:[Object(d.jsx)(F,{userObj:t}),r.map((function(e){return Object(d.jsx)(S,{nweetObj:e,isOwner:e.creatorId===t.uid},e.id)}))]})})},A=function(e){var t=e.refreshUser,n=e.userObj,c=Object(o.f)(),r=Object(a.useState)(n.displayName?n.displayName:""),s=Object(i.a)(r,2),u=s[0],l=s[1],j=function(){var e=Object(h.a)(O.a.mark((function e(){var t;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v.collection("nweets").where("creatorId","==",n.uid).orderBy("createdAt","desc").get();case 2:t=e.sent,console.log(t.docs.map((function(e){return e.data()})));case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),b=function(){var e=Object(h.a)(O.a.mark((function e(a){return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a.preventDefault(),n.displayName!==u){e.next=3;break}return e.abrupt("return");case 3:return e.next=5,n.updateProfile({displayName:u});case 5:t();case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(a.useEffect)((function(){j()}),[]),Object(d.jsxs)("div",{className:"container",children:[Object(d.jsxs)("form",{onSubmit:b,className:"profileForm",children:[Object(d.jsx)("input",{type:"text",onChange:function(e){var t=e.target.value;l(t)},autoFocus:!0,value:u,placeholder:"Display name",className:"formInput"}),Object(d.jsx)("input",{type:"submit",value:"Update Profile",className:"formBtn",style:{marginTop:10}})]}),Object(d.jsx)("span",{className:"formBtn cancelBtn logOut",onClick:function(){g.signOut(),c.push("/")},children:"\ub85c\uadf8\uc544\uc6c3"})]})},U=function(e){var t=e.refreshUser,n=e.isLoggedIn,a=e.userObj;return Object(d.jsxs)(u.a,{children:[n&&Object(d.jsx)(p,{userObj:a}),Object(d.jsx)(o.c,{children:n?Object(d.jsxs)("div",{style:{maxWidth:890,width:"100%",margin:"0 auto",marginTop:80,display:"flex",justifyContent:"center"},children:[Object(d.jsx)(o.a,{exact:!0,path:"/",children:Object(d.jsx)(C,{userObj:a})}),Object(d.jsx)(o.a,{exact:!0,path:"/profile",children:Object(d.jsx)(A,{refreshUser:t,userObj:a})})]}):Object(d.jsx)(d.Fragment,{children:Object(d.jsx)(o.a,{exact:!0,path:"/",children:Object(d.jsx)(N,{})})})})]})};var _=function(){var e=Object(a.useState)(!1),t=Object(i.a)(e,2),n=t[0],c=t[1],r=Object(a.useState)(null),s=Object(i.a)(r,2),u=s[0],o=s[1];Object(a.useEffect)((function(){g.onAuthStateChanged((function(e){c(!0),o(l(e))}))}),[]);var l=function(e){return e?{uid:e.uid,displayName:e.displayName,updateProfile:function(t){return e.updateProfile(t)}}:null};return Object(d.jsx)(d.Fragment,{children:n?Object(d.jsx)(U,{refreshUser:function(){var e=g.currentUser;o(l(e))},isLoggedIn:Boolean(u),userObj:u}):"Initializing..."})},B=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,55)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,r=t.getLCP,s=t.getTTFB;n(e),a(e),c(e),r(e),s(e)}))};n(49);s.a.render(Object(d.jsx)(c.a.StrictMode,{children:Object(d.jsx)(_,{})}),document.getElementById("root")),B()}},[[50,1,2]]]);
//# sourceMappingURL=main.2aebe31c.chunk.js.map