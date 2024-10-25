"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[2602],{2072:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>l,frontMatter:()=>t,metadata:()=>r,toc:()=>h});var i=s(5893),o=s(1151);const t={sidebar_position:7},a="Permissionless ICS",r={id:"features/permissionless",title:"Permissionless ICS",description:"With the advent of Permissionless ICS, Opt In consumer chains can launch without going through governance.",source:"@site/versioned_docs/version-v4.5.0/features/permissionless.md",sourceDirName:"features",slug:"/features/permissionless",permalink:"/interchain-security/v4.5.0/features/permissionless",draft:!1,unlisted:!1,tags:[],version:"v4.5.0",sidebarPosition:7,frontMatter:{sidebar_position:7},sidebar:"tutorialSidebar",previous:{title:"Power Shaping",permalink:"/interchain-security/v4.5.0/features/power-shaping"},next:{title:"Overview",permalink:"/interchain-security/v4.5.0/build/modules/overview"}},c={},h=[{value:"From <code>chainId</code> to <code>consumerId</code>",id:"from-chainid-to-consumerid",level:2},{value:"Phases of a Consumer Chain",id:"phases-of-a-consumer-chain",level:2},{value:"Owner of a Consumer Chain",id:"owner-of-a-consumer-chain",level:2},{value:"Launch an Opt In Chain",id:"launch-an-opt-in-chain",level:2},{value:"Launch a Top N Chain",id:"launch-a-top-n-chain",level:2},{value:"Transform an Opt In Chain to Top N and Vice Versa",id:"transform-an-opt-in-chain-to-top-n-and-vice-versa",level:2},{value:"From Opt In to Top N",id:"from-opt-in-to-top-n",level:3},{value:"From Top N to Opt In",id:"from-top-n-to-opt-in",level:3}];function d(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,o.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"permissionless-ics",children:"Permissionless ICS"}),"\n",(0,i.jsx)(n.p,{children:"With the advent of Permissionless ICS, Opt In consumer chains can launch without going through governance.\nHowever, Top N chains can only be launched through governance as a Top N chain requires the top N% of the provider validators to validate the chain.\nIn what follows, we explain the phases of a consumer chain and how we can launch a chain under Permissionless ICS."}),"\n",(0,i.jsx)(n.admonition,{type:"tip",children:(0,i.jsxs)(n.p,{children:["If you are preparing a new consumer chain you can find more information in the ",(0,i.jsx)(n.a,{href:"/interchain-security/v4.5.0/consumer-development/onboarding",children:"consumer onboarding checklist"}),"."]})}),"\n",(0,i.jsxs)(n.h2,{id:"from-chainid-to-consumerid",children:["From ",(0,i.jsx)(n.code,{children:"chainId"})," to ",(0,i.jsx)(n.code,{children:"consumerId"})]}),"\n",(0,i.jsxs)(n.p,{children:["With Permissionless ICS, anyone can issue a transaction to launch a consumer chain. As a result, the ",(0,i.jsx)(n.code,{children:"chainId"})," of a consumer\nchain cannot uniquely identify a consumer chain from the point of view of the provider, because we could have multiple\nconsumer chains with the exact same ",(0,i.jsx)(n.code,{children:"chainId"}),".\nBecause of this, Permissionless ICS introduces the notion of a ",(0,i.jsx)(n.code,{children:"consumerId"}),". The provider associates for each consumer chain\na unique ",(0,i.jsx)(n.code,{children:"consumerId"}),". A consumer chain can then interact (e.g., update chain parameters) with its chain by utilizing this ",(0,i.jsx)(n.code,{children:"consumerId"}),".\nAdditionally, validators can interact (e.g., assign a consumer key, opt in, etc.) with a consumer chain by using the consumer's ",(0,i.jsx)(n.code,{children:"consumerId"}),"."]}),"\n",(0,i.jsx)(n.h2,{id:"phases-of-a-consumer-chain",children:"Phases of a Consumer Chain"}),"\n",(0,i.jsx)(n.p,{children:"A consumer chain can reside in one of the phases shown in the table below."}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:(0,i.jsx)(n.strong,{children:"Phase"})}),(0,i.jsx)(n.th,{children:(0,i.jsx)(n.strong,{children:"Description"})})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.strong,{children:"Registered"})}),(0,i.jsxs)(n.td,{children:["The consumer chain was created with ",(0,i.jsx)(n.code,{children:"MsgCreateConsumer"})," and has received the consumer's associated ",(0,i.jsx)(n.code,{children:"consumerId"}),". The chain cannot launch yet."]})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.strong,{children:"Initialized"})}),(0,i.jsxs)(n.td,{children:["The consumer chain has set all the initialization parameters and is ready to launch at ",(0,i.jsx)(n.code,{children:"spawnTime"}),"."]})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.strong,{children:"Launched"})}),(0,i.jsxs)(n.td,{children:["The consumer chain has launched and is running. The provider chain is sending ",(0,i.jsx)(n.code,{children:"VSCPacket"}),"s to the consumer."]})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.strong,{children:"Stopped"})}),(0,i.jsxs)(n.td,{children:["The consumer chain is stopped and the provider chain is not sending ",(0,i.jsx)(n.code,{children:"VSCPacket"}),"s to the consumer. The consumer chain is slated to be deleted."]})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.strong,{children:"Deleted"})}),(0,i.jsxs)(n.td,{children:["The majority of the state of the consumer chain on the provider is deleted. Basic metadata of the consumer chain, such as the ",(0,i.jsx)(n.code,{children:"chainId"}),", etc. are not deleted."]})]})]})]}),"\n",(0,i.jsx)(n.p,{children:"The following diagram shows the phases and the actions that need to take place to move from one phase to another."}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"phases of a consumer chain",src:s(1300).Z+"",width:"2459",height:"1457"})}),"\n",(0,i.jsx)(n.h2,{id:"owner-of-a-consumer-chain",children:"Owner of a Consumer Chain"}),"\n",(0,i.jsxs)(n.p,{children:["A consumer chain (either Opt In or Top N) has an owner.\nAn Opt In chain is owned by the address that initially sent and signed the ",(0,i.jsx)(n.code,{children:"MsgCreateConsumer"})," message.\nA Top N chain is owned by the governance module and can only be updated through governance proposals."]}),"\n",(0,i.jsxs)(n.p,{children:["Note that the owner of a chain can be changed at any later point in time by providing a ",(0,i.jsx)(n.code,{children:"new_owner_address"})," message\nin the ",(0,i.jsx)(n.code,{children:"MsgUpdateConsumer"})," message. As a result, an Opt In chain can change its owner to be the governance module\nin order to transform to Top N chain, and a Top N chain can change its owner to something that is not the governance\nmodule to become an Opt In chain (see ",(0,i.jsx)(n.a,{href:"/interchain-security/v4.5.0/features/permissionless#transform-an-opt-in-chain-to-top-n-and-vice-versa",children:"below"}),")."]}),"\n",(0,i.jsx)(n.h2,{id:"launch-an-opt-in-chain",children:"Launch an Opt In Chain"}),"\n",(0,i.jsxs)(n.p,{children:["To launch an Opt In chain, we have to send a ",(0,i.jsx)(n.code,{children:"MsgCreateConsumer"})," message. This message returns the newly created ",(0,i.jsx)(n.code,{children:"consumerId"}),"\nassociated with this consumer. The chain is considered to be in the registered phase at this point and its owner is the one\nthat signed the ",(0,i.jsx)(n.code,{children:"MsgCreateConsumer"})," message.\nIf the optional ",(0,i.jsx)(n.code,{children:"initialization_parameters"})," are provided in the ",(0,i.jsx)(n.code,{children:"MsgCreateConsumer"}),", then the chain is considered to be in the\ninitialized phase and the chain can launch at the ",(0,i.jsx)(n.code,{children:"spawnTime"})," provided in the ",(0,i.jsx)(n.code,{children:"initialization_parameters"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:["If no ",(0,i.jsx)(n.code,{children:"initialization_parameters"})," are provided in ",(0,i.jsx)(n.code,{children:"MsgCreateConsumer"}),", the consumer can later set those parameters\nby issuing a ",(0,i.jsx)(n.code,{children:"MsgUpdateConsumer"}),". The chain would then move to the initialized phase and be slated to launch."]}),"\n",(0,i.jsx)(n.admonition,{type:"info",children:(0,i.jsxs)(n.p,{children:["An Opt In can only launch at ",(0,i.jsx)(n.code,{children:"spawnTime"})," if at least one validator is opted in at ",(0,i.jsx)(n.code,{children:"spawnTime"}),"."]})}),"\n",(0,i.jsx)(n.h2,{id:"launch-a-top-n-chain",children:"Launch a Top N Chain"}),"\n",(0,i.jsxs)(n.p,{children:["To launch a Top N chain, we need to issue a ",(0,i.jsx)(n.code,{children:"MsgCreateConsumer"})," to retrieve the ",(0,i.jsx)(n.code,{children:"consumerId"}),". At this stage, the chain\ncorresponds to an Opt In chain and the owner of the chain is the one that signed the ",(0,i.jsx)(n.code,{children:"MsgCreateConsumer"}),".\nFor the chain to become Top N we need to issue a message and a governance proposal:"]}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["A ",(0,i.jsx)(n.code,{children:"MsgUpdateConsumer"})," message to change the owner of the chain to be that of the governance module, that is to ",(0,i.jsx)(n.code,{children:"cosmos10d07y265gmmuvt4z0w9aw880jnsr700j6zn9kn"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:["A governance proposal that includes a ",(0,i.jsx)(n.code,{children:"MsgUpdateConsumer"})," that sets the ",(0,i.jsx)(n.code,{children:"TopN"})," of the consumer chain."]}),"\n"]}),"\n",(0,i.jsxs)(n.admonition,{type:"warning",children:[(0,i.jsxs)(n.p,{children:["If ",(0,i.jsx)(n.code,{children:"top_N"}),", ",(0,i.jsx)(n.code,{children:"validators_power_cap"}),", or some other argument is not included in the power-shaping parameters, then it is considered\nthat the default value is set for this argument. For example, if a Top 50% chain wants to only modify ",(0,i.jsx)(n.code,{children:"validators_power_cap"}),"\nfrom 35 to 40, then the power-shaping parameters in ",(0,i.jsx)(n.code,{children:"MsgUpdateConsumer"})," still need to include that ",(0,i.jsx)(n.code,{children:"top_N"})," is 50. Otherwise\n",(0,i.jsx)(n.code,{children:"top_N"})," would be set to its default value of 0, and the chain would become an Opt-In chain."]}),(0,i.jsxs)(n.p,{children:["To be ",(0,i.jsx)(n.strong,{children:"safe"}),", if you include power-shaping parameters in the ",(0,i.jsx)(n.code,{children:"MsgUpdateConsumer"}),", always include ",(0,i.jsx)(n.code,{children:"top_N"})," and all the power-shaping parameters.\nThe same applies for the initialization parameters."]})]}),"\n",(0,i.jsx)(n.h2,{id:"transform-an-opt-in-chain-to-top-n-and-vice-versa",children:"Transform an Opt In Chain to Top N and Vice Versa"}),"\n",(0,i.jsx)(n.h3,{id:"from-opt-in-to-top-n",children:"From Opt In to Top N"}),"\n",(0,i.jsxs)(n.p,{children:["This corresponds to the case of ",(0,i.jsx)(n.a,{href:"/interchain-security/v4.5.0/features/permissionless#launch-a-top-n-chain",children:"launching a Top N chain"}),". The Opt In chain\nhas to issue a ",(0,i.jsx)(n.code,{children:"MsgUpdateConsumer"})," to change the owner of the consumer to be that of the governance module and\nto issue a governance proposal that includes a ",(0,i.jsx)(n.code,{children:"MsgUpdateConsumer"})," and sets the ",(0,i.jsx)(n.code,{children:"TopN"})," of the consumer chain."]}),"\n",(0,i.jsx)(n.h3,{id:"from-top-n-to-opt-in",children:"From Top N to Opt In"}),"\n",(0,i.jsxs)(n.p,{children:["A consumer chain can move from Top N to Opt In by issuing a governance proposal that includes a ",(0,i.jsx)(n.code,{children:"MsgUpdateConsumer"}),"\nthat sets ",(0,i.jsx)(n.code,{children:"TopN"})," to ",(0,i.jsx)(n.code,{children:"0"})," and also sets the owner of the chain to not be the governance module anymore."]})]})}function l(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},1300:(e,n,s)=>{s.d(n,{Z:()=>i});const i=s.p+"assets/images/adr19_phases_of_a_consumer_chain-394060dd7a1e0f22242083b4ff5eae12.png"},1151:(e,n,s)=>{s.d(n,{Z:()=>r,a:()=>a});var i=s(7294);const o={},t=i.createContext(o);function a(e){const n=i.useContext(t);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:a(e.components),i.createElement(t.Provider,{value:n},e.children)}}}]);