(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[681],{9588:function(e,s,t){Promise.resolve().then(t.bind(t,3762))},3762:function(e,s,t){"use strict";t.r(s),t.d(s,{Transfer:function(){return c}});var n=t(7437),r=t(2265),a=t(7907),l=t(7908);function c(){let[e,s]=(0,r.useState)(""),[t,c]=(0,r.useState)(0),i=(0,a.useSearchParams)(),u=i.get("name"),o=i.get("username");return(0,r.useEffect)(()=>{let e=localStorage.getItem("token");e&&s(e)},[]),(0,n.jsx)("div",{className:"flex justify-center h-screen bg-gray-100",children:(0,n.jsx)("div",{className:"h-full flex flex-col justify-center",children:(0,n.jsxs)("div",{className:"border h-min text-card-foreground max-w-md p-4 space-y-8 w-96 bg-white shadow-lg rounded-lg",children:[(0,n.jsx)("div",{className:"flex flex-col space-y-1.5 p-6",children:(0,n.jsx)("h2",{className:"text-3xl font-bold text-center",children:"Send Money"})}),(0,n.jsxs)("div",{className:"p-6",children:[(0,n.jsxs)("div",{className:"flex items-center space-x-4",children:[(0,n.jsx)("div",{className:"w-12 h-12 rounded-full bg-purple-600 flex items-center justify-center",children:(0,n.jsx)("span",{className:"text-2xl text-white",children:"X"})}),(0,n.jsx)("h3",{className:"text-2xl font-semibold",children:u})]}),(0,n.jsxs)("div",{className:"space-y-4",children:[(0,n.jsxs)("div",{className:"space-y-2",children:[(0,n.jsx)("label",{htmlFor:"amount",className:"text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70",children:"Amount (in USD)"}),(0,n.jsx)("input",{onChange:e=>{c(e.target.value)},type:"number",className:"flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm",id:"amount",placeholder:"Enter amount"})]}),(0,n.jsx)("button",{onClick:async()=>{await l.Z.post("/api/transfer",{amount:t,from:e,to:o})},className:"justify-center rounded-md text-sm font-medium ring-offset-background transition-colors h-10 px-4 py-2 w-full bg-purple-600 text-white",children:"Initiate Transfer"})]})]})]})})})}},7907:function(e,s,t){"use strict";var n=t(5313);t.o(n,"useRouter")&&t.d(s,{useRouter:function(){return n.useRouter}}),t.o(n,"useSearchParams")&&t.d(s,{useSearchParams:function(){return n.useSearchParams}})}},function(e){e.O(0,[908,971,69,744],function(){return e(e.s=9588)}),_N_E=e.O()}]);