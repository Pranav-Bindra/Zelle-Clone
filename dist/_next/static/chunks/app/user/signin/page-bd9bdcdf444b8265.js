(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[748],{5483:function(e,n,t){Promise.resolve().then(t.bind(t,8852))},8852:function(e,n,t){"use strict";t.r(n),t.d(n,{Signin:function(){return l}});var r=t(7437),s=t(2265),a=t(7908),i=t(8792);function l(){let[e,n]=(0,s.useState)(""),[t,l]=(0,s.useState)("");return(0,r.jsx)("div",{className:"flex flex-col h-screen mt-12",children:(0,r.jsx)("div",{className:"flex justify-center",children:(0,r.jsxs)("div",{className:"p-4 border rounded-lg pb-4",children:[(0,r.jsx)("input",{onChange:e=>{n(e.target.value)},className:"p-2 m-2 border-2 rounded-md",type:"text",placeholder:"username"}),(0,r.jsx)("br",{}),(0,r.jsx)("input",{onChange:e=>{l(e.target.value)},className:"p-2 m-2 border-2 rounded-md",type:"text",placeholder:"password"}),(0,r.jsx)("br",{}),(0,r.jsx)("div",{className:"flex justify-center mt-4 bg-purple-600 text-white mx-10 p-2 rounded-md hover:bg-purple-900",children:(0,r.jsx)(i.default,{href:"/main/dashboard",children:(0,r.jsx)("button",{onClick:async()=>{let n=await a.Z.post("/api/signin",{username:e,password:t});localStorage.setItem("token",n.data.token)},children:"Sign in"})})}),(0,r.jsxs)("div",{className:"my-2 flex gap-2 text-gray-400",children:[(0,r.jsx)("div",{children:"Don't have an account yet?"}),(0,r.jsx)(i.default,{href:"/user/signup",children:(0,r.jsx)("div",{className:"underline cursor-pointer",children:"Sign up"})})]})]})})})}},8792:function(e,n,t){"use strict";t.d(n,{default:function(){return s.a}});var r=t(5250),s=t.n(r)}},function(e){e.O(0,[908,250,971,69,744],function(){return e(e.s=5483)}),_N_E=e.O()}]);