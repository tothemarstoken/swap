(this.webpackJsonpreact=this.webpackJsonpreact||[]).push([[0],{114:function(e){e.exports=JSON.parse('{"a":[{"inputs":[{"internalType":"contract IERC20","name":"_token","type":"address"},{"internalType":"address payable","name":"_tokenWallet","type":"address"},{"internalType":"address payable","name":"_devWallet","type":"address"},{"internalType":"uint256","name":"_decimals","type":"uint256"},{"internalType":"uint256","name":"_referralBonus","type":"uint256"},{"internalType":"uint256","name":"_secondsUntilInactive","type":"uint256"},{"internalType":"bool","name":"_onlyRewardActiveReferrers","type":"bool"},{"internalType":"uint256[]","name":"_levelRate","type":"uint256[]"},{"internalType":"uint256[]","name":"_refereeBonusRateMap","type":"uint256[]"}],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"from","type":"address"},{"indexed":false,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"level","type":"uint256"}],"name":"PaidReferral","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"referee","type":"address"},{"indexed":false,"internalType":"address","name":"referrer","type":"address"}],"name":"RegisteredReferer","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"referee","type":"address"},{"indexed":false,"internalType":"address","name":"referrer","type":"address"},{"indexed":false,"internalType":"string","name":"reason","type":"string"}],"name":"RegisteredRefererFailed","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"purchaser","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"TokenPurchased","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"uint256","name":"timestamp","type":"uint256"}],"name":"UpdatedUserLastActiveTime","type":"event"},{"payable":true,"stateMutability":"payable","type":"fallback"},{"constant":true,"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"accounts","outputs":[{"internalType":"address payable","name":"referrer","type":"address"},{"internalType":"uint256","name":"reward","type":"uint256"},{"internalType":"uint256","name":"referredCount","type":"uint256"},{"internalType":"uint256","name":"lastActiveTimestamp","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address payable","name":"_referrer","type":"address"}],"name":"addReferal","outputs":[],"payable":true,"stateMutability":"payable","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"_purchaser","type":"address"}],"name":"buy","outputs":[],"payable":true,"stateMutability":"payable","type":"function"},{"constant":false,"inputs":[{"internalType":"uint256","name":"_price","type":"uint256"}],"name":"changePrice","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"getRefereeBonusRate","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"getTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"addr","type":"address"}],"name":"hasReferrer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"isOwner","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"price","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"remainingTokens","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"renounceOwnership","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"bool","name":"_onlyRewardActiveReferrers","type":"bool"}],"name":"setOnlyRewardAActiveReferrers","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"uint256","name":"_secondsUntilInactive","type":"uint256"}],"name":"setSecondsUntilInactive","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"internalType":"uint256[]","name":"data","type":"uint256[]"}],"name":"sum","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"token","outputs":[{"internalType":"contract IERC20","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"tokenPurchased","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"}]}')},192:function(e,t,a){},199:function(e,t){},217:function(e,t,a){"use strict";a.r(t);var n=a(11),r=a(1),i=a(80),s=a.n(i),c=a(265),o=a(272),l=a(267),p=a(266),d=a(35),u=a(269),b=(a(192),a(13)),j=a(3),x=a.n(j),y=a(29),h=a(176),O=a(268),f=a(240),m=a(273),g=a(241),w=a(242),v=a(274),T=a(239),C=a(174),S=a(101),M=a(49),R=a(163),k=a.p+"static/media/bnb.95c82668.svg",B=a(7);var A=function(){var e=Object(S.a)(),t=e.activateBrowserWallet,a=e.active,n=e.account,r=e.chainId,i=(e.deactivate,Object(h.c)().colorMode),s=(Object(O.a)(),Object(f.a)("(min-width: 950px)")),c=Object(b.a)(s,1)[0];function o(){return(o=Object(y.a)(x.a.mark((function e(){return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t();case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(B.jsx)(B.Fragment,{children:a&&n?Object(B.jsx)(m.a,{display:"flex",alignItems:"center",py:"0",children:Object(B.jsxs)(g.a,{as:"button",display:"flex",alignItems:"center",bgColor:"transparent",borderRadius:"xl",borderColor:"light"===i?"56"==r?"teal.400":"red.400":"56"==r?" white":"red.400",borderWidth:"1px",m:"1px",px:3,height:"38px",children:[a&&n&&"56"==r?Object(B.jsxs)(m.a,{spacing:"0px",children:[Object(B.jsx)(w.a,{Color:"light"===i?"black":"white",fontSize:"md",fontWeight:"medium",mr:"2",children:n&&"".concat(n.slice(0,8),"\n            ")}),Object(B.jsx)(v.a,{src:k,boxSize:"30px"})," "]}):c?"Please switch to BSC Mainnet":"No BSC Network !","56"==r?Object(B.jsx)(T.a,{as:R.a,pl:"5px",boxSize:"25px",color:"green.400"}):Object(B.jsx)(T.a,{as:M.b,pl:"5px",boxSize:"23px",color:"red.400"})]})}):Object(B.jsx)(C.a,{paddingLeft:c?"20px":"10px",paddingRight:c?"20px":"10px",borderRadius:"25px",backgroundColor:"orange.400",onClick:function(){return o.apply(this,arguments)},children:"Connect Wallet"})})},_=a(246),z=a(164),I=a(244),N=a(245);var F=function(){var e=Object(h.c)(),t=e.colorMode,a=e.toggleColorMode;return Object(B.jsx)(I.a,{position:"sticky",align:"center",justify:"center",height:"10vh",children:Object(B.jsx)(N.a,{icon:"light"==t?Object(B.jsx)(M.e,{}):Object(B.jsx)(M.c,{}),bgColor:"transparent",_hover:{bgColor:"transparent",border:"none"},_focus:{border:"none",bgColor:"transparent"},_active:{border:"none",bgColor:"transparent"},onClick:a})})},W=a.p+"static/media/logotothemars.2d026759.png";var E=function(){var e=Object(f.a)("(min-width: 750px)"),t=(Object(b.a)(e,1)[0],Object(h.c)());return t.colorMode,t.toggleColorMode,Object(B.jsxs)(m.a,{width:"100%",h:"60px",paddingLeft:"5%",paddingRight:"5%",minWidth:"350px",zIndex:"5",children:[Object(B.jsx)(g.a,{as:"a",href:"https://www.tothemars.in",children:Object(B.jsx)(v.a,{src:W,href:"www.tothemars.in",boxSize:"50px",objectFit:"cover"})}),Object(B.jsx)(_.a,{}),Object(B.jsx)(g.a,{as:"a",href:"https://www.tothemars.in",children:Object(B.jsx)(T.a,{boxSize:"30px",color:"orange.400",as:z.a})}),Object(B.jsx)(A,{}),Object(B.jsx)(F,{})]})},P=a(257),U=a(258),Y=a(259),L=a(271),D=a(262),J=a(263),H=a(275),V=a(255),Q=a(256),q=a.p+"static/media/logotothemars.984311b0.svg",G=a(61),K="0x63799a4da0f96c77ac29caf54d765ea30392cc73",X=25e3,Z="0x69237D11e97bF0eF8Ef3b127571DAf4483275977",$=a(270),ee=a(114),te=a(171),ae=a(79),ne=a(119),re=a(254),ie=new $.a.Interface(ee.a),se=new ae.a(Z,ie);function ce(){var e,t=Object(S.a)(),a=(t.activateBrowserWallet,t.account),n=(t.chainId,t.active,null!==(e=Object(ne.a)({abi:ie,address:Z,method:"hasReferrer",args:[a]}))&&void 0!==e?e:[]);return Object(b.a)(n,1)[0]}function oe(e){var t=Object(re.a)(se,e,{});return{state:t.state,send:t.send}}var le=function e(){var t,a=Object(f.a)("(min-width: 750px)"),i=Object(b.a)(a,1)[0],s=Object(h.c)().colorMode,c=Object(S.a)(),o=c.activateBrowserWallet,l=c.account,p=c.chainId,d=c.active,u=Object(H.a)(l),j=u&&parseFloat(Object(G.b)(u)).toFixed(5),R=Object(V.a)(),A=R.sendTransaction,z=R.state,I=Object(Q.a)("0x3ceac5F44c9287dAF2C5C8CCE0faE10897E356d1",l),N=I&&parseFloat(Object(G.c)(I)).toFixed(5),F=Object(r.useState)(!1),W=Object(b.a)(F,2),E=W[0],Z=W[1],ae=Object(r.useState)(0),ne=Object(b.a)(ae,2),re=ne[0],ie=ne[1],se=Object(r.useState)(0),le=Object(b.a)(se,2),pe=le[0],de=le[1],ue=Object(O.a)(),be=new $.a.Interface(ee.a),je=new URLSearchParams(window.location.search).get("refer"),xe=(new te.a(K,be),Object(r.useState)(je)),ye=Object(b.a)(xe,2),he=ye[0],Oe=ye[1],fe=oe("addReferal"),me=(fe.state,fe.send),ge=ce(),we="app.tothemars.in/?refer="+l,ve=Object(P.a)(we),Te=ve.hasCopied,Ce=ve.onCopy;function Se(){return(Se=Object(y.a)(x.a.mark((function e(){return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(l&&re>=.003&&j>=.003&&he!=l)){e.next=15;break}if(e.prev=1,Z(!0),ge||!he||he==l){e.next=6;break}return e.next=6,me(he);case 6:return e.next=8,A({to:K,value:$.a.parseEther(re.toString())});case 8:e.next=13;break;case 10:e.prev=10,e.t0=e.catch(1),console.log(e.t0);case 13:e.next=16;break;case 15:ue(l&&re>=.003&&j>=.003&&he==l?{title:"You can't refer yourself",description:"You cannot refer yourself. Please copy someone else referal code.",status:"error",duration:9e3,isClosable:!0}:{title:"BNB less than 0.003",description:"Please buy MARTIAN with alteast 0.003 BNB",status:"error",duration:9e3,isClosable:!0});case 16:case"end":return e.stop()}}),e,null,[[1,10]])})))).apply(this,arguments)}return Object(r.useEffect)((function(){"Mining"!=z.status&&(Z(!1),ie(null),de(null))}),[z]),Object(B.jsxs)(m.c,{width:"100%",height:"auto",align:"center",justify:"center",pt:i?"10vh":"7vh",pb:i?"6vh":"7vh",children:[Object(B.jsxs)(g.a,{width:i?"350px":"325px",height:i?"410px":"500px",borderRadius:"35px",bgColor:"teal.400",boxShadow:"2xl",p:"20px",children:[Object(B.jsxs)(m.a,{p:"10px",children:[Object(B.jsx)(w.a,{color:"white",fontSize:"20px",children:"Swap"}),Object(B.jsx)(_.a,{}),Object(B.jsx)(g.a,{as:"button",children:Object(B.jsx)(T.a,{as:M.d,color:"white",boxSize:"20px",_hover:{color:"orange.400"}})})]}),Object(B.jsx)(U.a,{}),Object(B.jsxs)(m.c,{paddingTop:"20px",spacing:"20px",children:[Object(B.jsxs)(g.a,{w:i?"310px":"290px",h:i?"100px":"130px",bgColor:"white",p:"20px",borderRadius:"30px",children:[Object(B.jsxs)(m.a,{color:"black",children:[Object(B.jsx)(w.a,{children:"From"}),Object(B.jsx)(_.a,{}),d&&l&&"56"==p?Object(B.jsxs)(w.a,{children:[j," ",Object(B.jsx)("b",{children:"BNB"})]}):Object(B.jsx)(w.a,{children:"-"})]}),Object(B.jsxs)(m.a,{color:"black",children:[Object(B.jsx)(Y.a,{children:Object(B.jsxs)(L.a,{value:re||"",max:j,children:[Object(B.jsx)(L.b,{id:"BNBField",max:j,onChange:function(e){var t=e.target.value,a=(t-10*t/100)*X;ie(t),de(a)},border:"0",color:"black",w:i?"230px":"210px",height:"50px",placeholder:"0.0",_placeholder:{color:"grey"},p:"0px",_focus:{border:"0px"}}),Object(B.jsx)(D.a,{children:Object(B.jsx)(g.a,{as:"button",pt:"9px",onClick:function(){if(j>=.003){var e=j-.0025,t=(e-10*e/100)*X;ie(e.toFixed(8)),de(t.toFixed(8))}else alert("You need at least 0.003 BNB to buy To The Mars (MARTIAN)")},children:"Max"})})]})}),Object(B.jsx)(v.a,{src:k,boxSize:"40px",objectFit:"cover"})]})]}),Object(B.jsxs)(g.a,{w:i?"310px":"290px",h:i?"100px":"130px",bgColor:"white",p:"20px",borderRadius:"30px",children:[Object(B.jsxs)(m.a,{color:"black",children:[Object(B.jsx)(w.a,{children:"To"}),Object(B.jsx)(_.a,{}),d&&l&&"56"==p?Object(B.jsxs)(w.a,{children:[N," ",Object(B.jsx)("b",{children:"MARTIAN"})]}):Object(B.jsx)(w.a,{children:"-"})]}),Object(B.jsxs)(m.a,{children:[Object(B.jsx)(Y.a,{children:Object(B.jsx)(L.a,{value:pe||"",children:Object(B.jsx)(L.b,{id:"MartianField",onChange:function(e){var t=e.target.value;ie(t/X),de(t)},border:"0",w:"200px",color:"black",height:"50px",placeholder:"0.0",_placeholder:{color:"grey"},p:"0px",_focus:{border:"0px"}})})}),Object(B.jsx)(_.a,{}),Object(B.jsx)(v.a,{src:q,boxSize:"25px",objectFit:"cover"})]})]}),Object(B.jsx)(C.a,(t={width:i?"310px":"290px",h:i?"55px":"70px",borderRadius:"25px",backgroundColor:"orange.400",onClick:function(){return A({to:e,value:$.a.parseEther("1.0")})},disabled:E},Object(n.a)(t,"onClick",d&&l?function(){return Se.apply(this,arguments)}:o),Object(n.a)(t,"children",d&&l?"56"==p?"Swap":i?"Please switch to BSC Mainnet":"No BSC Network":"Connect Wallet"),t))]})]}),Object(B.jsxs)(m.b,{pt:"20px",direction:i?"row":"column",justify:"center",align:"center",children:[ge?"":Object(B.jsx)(Y.a,{size:"md",children:Object(B.jsx)(J.a,{w:"325px",value:he,onChange:function(e){Oe(e.target.value)},placeholder:"Paste referral address"})}),Object(B.jsx)(g.a,{children:l&&d?Object(B.jsx)(C.a,{boxShadow:"md",variant:"light"===s?"solid":"outline",onClick:function(){Ce(),ue({title:"Referral link copied successfully.",description:"Your referral link is copied successfully. Sent it to someone & let him join the #MartianArmy",status:"success",duration:5e3,isClosable:!0})},bgColor:Te?"green.300":"",_hover:!0,children:Te?Object(B.jsxs)(w.a,{children:["Referral link copied ",Object(B.jsx)(T.a,{as:M.a})]}):"Copy your referral link"}):""})]})]})},pe=a(264),de=a(134),ue=a.n(de),be=a.p+"static/media/metamask.4f06ed22.png",je=a.p+"static/media/trustwallet.123a2360.svg";var xe=function(){var e=Object(f.a)("(min-width: 750px)"),t=Object(b.a)(e,1)[0],a=Object(r.useState)(K),n=Object(b.a)(a,2),i=n[0],s=(n[1],Object(P.a)(i)),c=s.hasCopied,o=s.onCopy,l=Object(O.a)(),p=Object(h.c)().colorMode;return Object(B.jsxs)(m.c,{width:"100%",h:t?"100vh":"auto",minWidth:t?"350px":"290px",alignItems:"center",pb:t?"25px":"50px",pt:t?"20px":"",boxShadow:"base",children:[Object(B.jsx)(pe.a,{align:"center",color:"twitter.500",children:"EVEN MORE EASY WAY TO INVEST"}),Object(B.jsx)(I.a,{maxWidth:"700px",fontSize:"lg",textAlign:"center",p:t?"":"10px",children:Object(B.jsxs)(g.a,{children:["Metamask not installed ? No worry, just scan QR code from your phone's crypto wallet or copy the ",Object(B.jsx)("b",{children:"MartianSwap"})," address and send Smart Chain BNB's. You will automatically receive ",Object(B.jsx)("b",{children:"To The Mars (MARTIAN)"})," into your wallet."]})}),Object(B.jsx)(I.a,{padding:"15px",children:Object(B.jsx)(g.a,{p:"20px",borderRadius:"10px",border:"0.5px",backgroundColor:"white",boxShadow:"2xl",children:Object(B.jsx)(ue.a,{value:K})})}),Object(B.jsxs)(m.c,{children:[Object(B.jsx)(w.a,{align:"center",maxWidth:t?"":"290px",children:K}),Object(B.jsx)(C.a,{onClick:function(){o(),l({title:"Copied successfully",description:"MartianSwap smart contract address copied successfully.",status:"success",duration:1e3,isClosable:!0})},variant:"light"===p?"solid":"outline",bgColor:c?"green.300":"",boxShadow:"md",pl:"10px",pr:"10px",pt:"5px",pb:"5px",borderRadius:"10px",children:c?Object(B.jsxs)(w.a,{children:["MartianSwap Address Copied ",Object(B.jsx)(T.a,{as:M.a})]}):"Copy MartianSwap Address"})]}),Object(B.jsxs)(m.a,{spacing:"30px",pt:"20px",children:[Object(B.jsx)(v.a,{objectFit:"cover",boxSize:"50px",src:be}),Object(B.jsx)(v.a,{objectFit:"cover",boxSize:"50px",src:je})]})]})},ye=a.p+"static/media/first_img.bff60a86.png",he=a.p+"static/media/second_img.94f7d512.png",Oe=a.p+"static/media/third_img.0bfa2a5c.png";var fe=function(){var e=Object(f.a)("(min-width: 750px)"),t=Object(b.a)(e,1)[0],a=Object(r.useState)(K),n=Object(b.a)(a,2),i=n[0],s=(n[1],Object(P.a)(i));return s.hasCopied,s.onCopy,Object(O.a)(),Object(h.c)().colorMode,Object(B.jsxs)(m.c,{width:"100%",h:t?"100vh":"auto",minWidth:t?"350px":"290px",alignItems:"center",pb:t?"25px":"50px",pt:t?"20px":"",children:[Object(B.jsx)(pe.a,{align:"center",color:"twitter.500",children:"HOW TO BUY?"}),Object(B.jsx)(I.a,{maxWidth:"700px",fontSize:"lg",textAlign:"center",p:t?"":"10px",children:Object(B.jsxs)(g.a,{children:["To Buy ",Object(B.jsx)("b",{children:"To The Mars (MARTIAN)"})," you need a crypto wallet. Metamaks & Trust Wallet is good one. As we are on Smart Chain you need aleast 0.003 Smart Chain BNB into your wallet. Here is procedure for Trust Wallet."]})}),Object(B.jsxs)(m.b,{direction:t?"row":"column",pt:"15px",spacing:"30px",children:[Object(B.jsxs)(m.c,{maxW:"250px",align:"center",children:[Object(B.jsx)(v.a,{src:ye,boxSize:t?"sm":"lg",objectFit:"contain"}),Object(B.jsx)(pe.a,{size:"md",children:"Create Account"}),Object(B.jsx)(w.a,{align:"center",fontSize:"sm",children:"Create an account in trust Wallet & add Smart Chain BNB"})]}),Object(B.jsxs)(m.c,{maxW:"250px",align:"center",children:[Object(B.jsx)(v.a,{src:he,boxSize:t?"sm":"lg",objectFit:"contain"}),Object(B.jsx)(pe.a,{size:"md",children:"MartianSwap"}),Object(B.jsx)(w.a,{align:"center",fontSize:"sm",children:"Click on DAapps & open app.tothemars.in"})]}),Object(B.jsxs)(m.c,{maxW:"250px",align:"center",children:[Object(B.jsx)(v.a,{src:Oe,boxSize:t?"sm":"lg",objectFit:"contain"}),Object(B.jsx)(pe.a,{size:"md",children:"Swap MARTIAN"}),Object(B.jsx)(w.a,{align:"center",fontSize:"sm",children:"Select Smart Chain, connect wallet & swap MARTIAN with BNB."})]})]})]})};function me(){return Object(B.jsxs)(m.c,{children:[Object(B.jsx)(E,{}),Object(B.jsx)(le,{}),Object(B.jsx)(xe,{}),Object(B.jsx)(fe,{})]})}var ge={initialColorMode:"light",useSystemColorMode:!1},we={readOnlyChainId:d.b.BSC,readOnlyUrls:Object(n.a)({},d.b.BSC,"https://bsc-dataseed.binance.org/")},ve=Object(c.a)({configT:ge}),Te=document.getElementById("root");s.a.render(Object(B.jsx)(u.a,{config:we,children:Object(B.jsx)(r.StrictMode,{children:Object(B.jsxs)(o.a,{config:ge,children:[Object(B.jsx)(l.a,{initialColorMode:ve.config.initialColorMode}),Object(B.jsx)(p.a,{}),Object(B.jsx)(me,{})]})})}),Te)}},[[217,1,2]]]);
//# sourceMappingURL=main.706e1c54.chunk.js.map