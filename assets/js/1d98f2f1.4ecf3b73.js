"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[8019],{7921:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>d,frontMatter:()=>r,metadata:()=>s,toc:()=>h});var o=t(5893),i=t(1151);const r={sidebar_position:1},a="Overview",s={id:"introduction/overview",title:"Overview",description:"Interchain Security (ICS) is an open source IBC application that allows Cosmos chains to lease their proof-of-stake security to one another.",source:"@site/versioned_docs/version-v5.2.0/introduction/overview.md",sourceDirName:"introduction",slug:"/introduction/overview",permalink:"/interchain-security/v5.2.0/introduction/overview",draft:!1,unlisted:!1,tags:[],version:"v5.2.0",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Cosmos Hub - Interchain Security",permalink:"/interchain-security/v5.2.0/"},next:{title:"Terminology",permalink:"/interchain-security/v5.2.0/introduction/terminology"}},c={},h=[{value:"Why Interchain Security?",id:"why-interchain-security",level:2},{value:"Core protocol",id:"core-protocol",level:2}];function l(e){const n={em:"em",h1:"h1",h2:"h2",li:"li",p:"p",strong:"strong",ul:"ul",...(0,i.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h1,{id:"overview",children:"Overview"}),"\n",(0,o.jsx)(n.p,{children:"Interchain Security (ICS) is an open source IBC application that allows Cosmos chains to lease their proof-of-stake security to one another."}),"\n",(0,o.jsxs)(n.p,{children:["ICS allows anyone to launch a ",(0,o.jsx)(n.em,{children:"consumer"})," chain using a subset, or even the entire, validator set from the ",(0,o.jsx)(n.em,{children:"provider"})," chain.\nThis way, provider chain validators start validating the consumer chain as well and so consumer chains inherit security and decentralization from the provider."]}),"\n",(0,o.jsx)(n.h2,{id:"why-interchain-security",children:"Why Interchain Security?"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"Tailored security."}),"\nConsumer chains can choose the right level of security based on their needs:\nChains can choose to inherit the whole validator set from the provider, or they can launch as an opt-in chain with a subset of the provider validators.\nAdditionally, consumer chains have the power to shape the validator set to their specific requirements by setting allow & deny lists, capping its size, etc.\nThis allows for a wide range of security tradeoffs.\nFor example, it enables emerging projects to deploy on consumer chains that don\u2019t need high level of security."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"Permissionless deployment."}),"\nOpt-in consumer chains -- consumers that do not compel any validator to participate -- can be launched permissionlessly.\nUser can create and update opt-in consumer chains by submitting transactions to the provider chain.\nProvider validators that are eligible can opt in on any consumer they wish to validate."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"Separation of governance from block production."}),"\nConsumer chains can separate their governance mechanism from block production.\nBlock production is handled by provider validators, which means it is an extension of the proof-of-state (PoS) mechanism on the provider chain.\nGovernance on the consumer chains can rely on the same PoS mechanism (using the same stake locked on the provider), but it doesn't have to.\nFor example, consumer chains can have a governance system based on proof-of-authority (PoA) or on PoS using the consumer token (which would make the consumer token a governance token).\nThis also allows the governance to be more decentralized without affecting consensus (i.e., increasing the number of validators usually leads to slower block production)."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"Distribution of block rewards."}),"\nConsumer chains can choose how to distribute the block rewards (i.e., inflation and fees), what percentage to send to the provider as payment for block production, and what percentage to keep on-chain.\nThe rewards kept on-chain can then be distributed to the community DAO (the consumer's governance) or can be used in the protocol in other ways."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"No validator search."}),"\nConsumer chains do not have their own validator sets, and so do not need to find validators one by one.\nValidators from the provider chain validate on the consumer chain with their stake on the provider chain, earning additional rewards.\nFor the consumer chain, this comes with the benefit of exposing their chain to the wider audience of the provider chain."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"Instant sovereignty."}),"\nConsumers can run arbitrary app logic similar to standalone chains. At any time in the future, a consumer chain can elect to become a completely standalone chain, with its own validator set."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"Block-space sharding."}),"\nConsumer chains are Cosmos appchains, which means that transactions on these chains do not compete with any other applications. As a result, there will be no unexpected congestion, and performance will generally be much better than on a shared smart contract platform such as Ethereum."]}),"\n"]}),"\n",(0,o.jsx)(n.h2,{id:"core-protocol",children:"Core protocol"}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"Validator updates"}),".\nOnce an IBC connection and channel are established between a provider and consumer chain, the provider will continually send validator set updates to the consumer over IBC. Note the provider only sends updates for opted in validators.\nThe consumer uses these validator set updates to update its own validator set in the consensus engine (e.g., CometBFT)."]}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"Slashing and jailing."}),"\nIf the opted-in validators misbehave on the consumer chains, then they will be punished on the provider chain.\nICS currently differentiates between two types of infractions -- double signing and downtime.\nDouble signing on consumer chains results in the misbehaving validators having their provider stake slashed and being permanently jailed on the provider,\nwhile downtime on consumer chains results in the misbehaving validators being temporarily jailed.\nNote that jailing entails removing the validator from the provider active validator set and, consequently, from any of the consumer validator sets.\nThis entails the validator will miss out on both staking and ICS rewards."]}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"Tokenomics and rewards."}),"\nConsumer chains are free to create their own native token which can be used for fees, and can be created on the consumer chain in the form of inflationary rewards.\nThese rewards can be used to incentivize user behavior, for example, LPing or staking.\nA percentage of these fees and rewards will be sent to provider chain to be distributed among the opted in validators and their delegators.\nThe percentage is completely customizable by the developers and subject to governance."]})]})}function d(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(l,{...e})}):l(e)}},1151:(e,n,t)=>{t.d(n,{Z:()=>s,a:()=>a});var o=t(7294);const i={},r=o.createContext(i);function a(e){const n=o.useContext(r);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),o.createElement(r.Provider,{value:n},e.children)}}}]);