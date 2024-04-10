"use strict";(self.webpackChunkcss_secrets_cheatsheet=self.webpackChunkcss_secrets_cheatsheet||[]).push([[9817],{1310:(e,t,s)=>{s.d(t,{Z:()=>g});s(7294);var n=s(512),r=s(5281),i=s(2802),a=s(8596),l=s(3692),o=s(5999),c=s(4996),d=s(5893);function u(e){return(0,d.jsx)("svg",{viewBox:"0 0 24 24",...e,children:(0,d.jsx)("path",{d:"M10 19v-5h4v5c0 .55.45 1 1 1h3c.55 0 1-.45 1-1v-7h1.7c.46 0 .68-.57.33-.87L12.67 3.6c-.38-.34-.96-.34-1.34 0l-8.36 7.53c-.34.3-.13.87.33.87H5v7c0 .55.45 1 1 1h3c.55 0 1-.45 1-1z",fill:"currentColor"})})}const m={breadcrumbHomeIcon:"breadcrumbHomeIcon_YNFT"};function h(){const e=(0,c.Z)("/");return(0,d.jsx)("li",{className:"breadcrumbs__item",children:(0,d.jsx)(l.Z,{"aria-label":(0,o.I)({id:"theme.docs.breadcrumbs.home",message:"Home page",description:"The ARIA label for the home page in the breadcrumbs"}),className:"breadcrumbs__link",href:e,children:(0,d.jsx)(u,{className:m.breadcrumbHomeIcon})})})}const b={breadcrumbsContainer:"breadcrumbsContainer_Z_bl"};function x(e){let{children:t,href:s,isLast:n}=e;const r="breadcrumbs__link";return n?(0,d.jsx)("span",{className:r,itemProp:"name",children:t}):s?(0,d.jsx)(l.Z,{className:r,href:s,itemProp:"item",children:(0,d.jsx)("span",{itemProp:"name",children:t})}):(0,d.jsx)("span",{className:r,children:t})}function p(e){let{children:t,active:s,index:r,addMicrodata:i}=e;return(0,d.jsxs)("li",{...i&&{itemScope:!0,itemProp:"itemListElement",itemType:"https://schema.org/ListItem"},className:(0,n.Z)("breadcrumbs__item",{"breadcrumbs__item--active":s}),children:[t,(0,d.jsx)("meta",{itemProp:"position",content:String(r+1)})]})}function g(){const e=(0,i.s1)(),t=(0,a.Ns)();return e?(0,d.jsx)("nav",{className:(0,n.Z)(r.k.docs.docBreadcrumbs,b.breadcrumbsContainer),"aria-label":(0,o.I)({id:"theme.docs.breadcrumbs.navAriaLabel",message:"Breadcrumbs",description:"The ARIA label for the breadcrumbs"}),children:(0,d.jsxs)("ul",{className:"breadcrumbs",itemScope:!0,itemType:"https://schema.org/BreadcrumbList",children:[t&&(0,d.jsx)(h,{}),e.map(((t,s)=>{const n=s===e.length-1,r="category"===t.type&&t.linkUnlisted?void 0:t.href;return(0,d.jsx)(p,{active:n,index:s,addMicrodata:!!r,children:(0,d.jsx)(x,{href:r,isLast:n,children:t.label})},s)}))]})}):null}},4228:(e,t,s)=>{s.r(t),s.d(t,{default:()=>y});s(7294);var n=s(8264),r=s(2802),i=s(4996),a=s(512),l=s(3692),o=s(8824),c=s(3919),d=s(5999),u=s(2503);const m={cardContainer:"cardContainer_fWXF",cardTitle:"cardTitle_rnsV",cardDescription:"cardDescription_PWke"};var h=s(5893);function b(e){let{href:t,children:s}=e;return(0,h.jsx)(l.Z,{href:t,className:(0,a.Z)("card padding--lg",m.cardContainer),children:s})}function x(e){let{href:t,icon:s,title:n,description:r}=e;return(0,h.jsxs)(b,{href:t,children:[(0,h.jsxs)(u.Z,{as:"h2",className:(0,a.Z)("text--truncate",m.cardTitle),title:n,children:[s," ",n]}),r&&(0,h.jsx)("p",{className:(0,a.Z)("text--truncate",m.cardDescription),title:r,children:r})]})}function p(e){let{item:t}=e;const s=(0,r.LM)(t),n=function(){const{selectMessage:e}=(0,o.c)();return t=>e(t,(0,d.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription.plurals",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t}))}();return s?(0,h.jsx)(x,{href:s,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:t.description??n(t.items.length)}):null}function g(e){let{item:t}=e;const s=(0,c.Z)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",n=(0,r.xz)(t.docId??void 0);return(0,h.jsx)(x,{href:t.href,icon:s,title:t.label,description:t.description??n?.description})}function v(e){let{item:t}=e;switch(t.type){case"link":return(0,h.jsx)(g,{item:t});case"category":return(0,h.jsx)(p,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function f(e){let{className:t}=e;const s=(0,r.jA)();return(0,h.jsx)(j,{items:s.items,className:t})}function j(e){const{items:t,className:s}=e;if(!t)return(0,h.jsx)(f,{...e});const n=(0,r.MN)(t);return(0,h.jsx)("section",{className:(0,a.Z)("row",s),children:n.map(((e,t)=>(0,h.jsx)("article",{className:"col col--6 margin-bottom--lg",children:(0,h.jsx)(v,{item:e})},t)))})}var N=s(49),Z=s(3120),_=s(4364),L=s(1310);const k={generatedIndexPage:"generatedIndexPage_vN6x",list:"list_eTzJ",title:"title_kItE"};function T(e){let{categoryGeneratedIndex:t}=e;return(0,h.jsx)(n.d,{title:t.title,description:t.description,keywords:t.keywords,image:(0,i.Z)(t.image)})}function I(e){let{categoryGeneratedIndex:t}=e;const s=(0,r.jA)();return(0,h.jsxs)("div",{className:k.generatedIndexPage,children:[(0,h.jsx)(Z.Z,{}),(0,h.jsx)(L.Z,{}),(0,h.jsx)(_.Z,{}),(0,h.jsxs)("header",{children:[(0,h.jsx)(u.Z,{as:"h1",className:k.title,children:t.title}),t.description&&(0,h.jsx)("p",{children:t.description})]}),(0,h.jsx)("article",{className:"margin-top--lg",children:(0,h.jsx)(j,{items:s.items,className:k.list})}),(0,h.jsx)("footer",{className:"margin-top--lg",children:(0,h.jsx)(N.Z,{previous:t.navigation.previous,next:t.navigation.next})})]})}function y(e){return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(T,{...e}),(0,h.jsx)(I,{...e})]})}},49:(e,t,s)=>{s.d(t,{Z:()=>a});s(7294);var n=s(5999),r=s(2244),i=s(5893);function a(e){const{previous:t,next:s}=e;return(0,i.jsxs)("nav",{className:"pagination-nav docusaurus-mt-lg","aria-label":(0,n.I)({id:"theme.docs.paginator.navAriaLabel",message:"Docs pages",description:"The ARIA label for the docs pagination"}),children:[t&&(0,i.jsx)(r.Z,{...t,subLabel:(0,i.jsx)(n.Z,{id:"theme.docs.paginator.previous",description:"The label used to navigate to the previous doc",children:"Previous"})}),s&&(0,i.jsx)(r.Z,{...s,subLabel:(0,i.jsx)(n.Z,{id:"theme.docs.paginator.next",description:"The label used to navigate to the next doc",children:"Next"}),isNext:!0})]})}},4364:(e,t,s)=>{s.d(t,{Z:()=>o});s(7294);var n=s(512),r=s(5999),i=s(5281),a=s(4477),l=s(5893);function o(e){let{className:t}=e;const s=(0,a.E)();return s.badge?(0,l.jsx)("span",{className:(0,n.Z)(t,i.k.docs.docVersionBadge,"badge badge--secondary"),children:(0,l.jsx)(r.Z,{id:"theme.docs.versionBadge.label",values:{versionLabel:s.label},children:"Version: {versionLabel}"})}):null}},3120:(e,t,s)=>{s.d(t,{Z:()=>p});s(7294);var n=s(512),r=s(2263),i=s(3692),a=s(5999),l=s(143),o=s(5281),c=s(373),d=s(4477),u=s(5893);const m={unreleased:function(e){let{siteTitle:t,versionMetadata:s}=e;return(0,u.jsx)(a.Z,{id:"theme.docs.versions.unreleasedVersionLabel",description:"The label used to tell the user that he's browsing an unreleased doc version",values:{siteTitle:t,versionLabel:(0,u.jsx)("b",{children:s.label})},children:"This is unreleased documentation for {siteTitle} {versionLabel} version."})},unmaintained:function(e){let{siteTitle:t,versionMetadata:s}=e;return(0,u.jsx)(a.Z,{id:"theme.docs.versions.unmaintainedVersionLabel",description:"The label used to tell the user that he's browsing an unmaintained doc version",values:{siteTitle:t,versionLabel:(0,u.jsx)("b",{children:s.label})},children:"This is documentation for {siteTitle} {versionLabel}, which is no longer actively maintained."})}};function h(e){const t=m[e.versionMetadata.banner];return(0,u.jsx)(t,{...e})}function b(e){let{versionLabel:t,to:s,onClick:n}=e;return(0,u.jsx)(a.Z,{id:"theme.docs.versions.latestVersionSuggestionLabel",description:"The label used to tell the user to check the latest version",values:{versionLabel:t,latestVersionLink:(0,u.jsx)("b",{children:(0,u.jsx)(i.Z,{to:s,onClick:n,children:(0,u.jsx)(a.Z,{id:"theme.docs.versions.latestVersionLinkLabel",description:"The label used for the latest version suggestion link label",children:"latest version"})})})},children:"For up-to-date documentation, see the {latestVersionLink} ({versionLabel})."})}function x(e){let{className:t,versionMetadata:s}=e;const{siteConfig:{title:i}}=(0,r.Z)(),{pluginId:a}=(0,l.gA)({failfast:!0}),{savePreferredVersionName:d}=(0,c.J)(a),{latestDocSuggestion:m,latestVersionSuggestion:x}=(0,l.Jo)(a),p=m??(g=x).docs.find((e=>e.id===g.mainDocId));var g;return(0,u.jsxs)("div",{className:(0,n.Z)(t,o.k.docs.docVersionBanner,"alert alert--warning margin-bottom--md"),role:"alert",children:[(0,u.jsx)("div",{children:(0,u.jsx)(h,{siteTitle:i,versionMetadata:s})}),(0,u.jsx)("div",{className:"margin-top--md",children:(0,u.jsx)(b,{versionLabel:x.label,to:p.path,onClick:()=>d(x.name)})})]})}function p(e){let{className:t}=e;const s=(0,d.E)();return s.banner?(0,u.jsx)(x,{className:t,versionMetadata:s}):null}},2244:(e,t,s)=>{s.d(t,{Z:()=>a});s(7294);var n=s(512),r=s(3692),i=s(5893);function a(e){const{permalink:t,title:s,subLabel:a,isNext:l}=e;return(0,i.jsxs)(r.Z,{className:(0,n.Z)("pagination-nav__link",l?"pagination-nav__link--next":"pagination-nav__link--prev"),to:t,children:[a&&(0,i.jsx)("div",{className:"pagination-nav__sublabel",children:a}),(0,i.jsx)("div",{className:"pagination-nav__label",children:s})]})}},8824:(e,t,s)=>{s.d(t,{c:()=>c});var n=s(7294),r=s(2263);const i=["zero","one","two","few","many","other"];function a(e){return i.filter((t=>e.includes(t)))}const l={locale:"en",pluralForms:a(["one","other"]),select:e=>1===e?"one":"other"};function o(){const{i18n:{currentLocale:e}}=(0,r.Z)();return(0,n.useMemo)((()=>{try{return function(e){const t=new Intl.PluralRules(e);return{locale:e,pluralForms:a(t.resolvedOptions().pluralCategories),select:e=>t.select(e)}}(e)}catch(t){return console.error(`Failed to use Intl.PluralRules for locale "${e}".\nDocusaurus will fallback to the default (English) implementation.\nError: ${t.message}\n`),l}}),[e])}function c(){const e=o();return{selectMessage:(t,s)=>function(e,t,s){const n=e.split("|");if(1===n.length)return n[0];n.length>s.pluralForms.length&&console.error(`For locale=${s.locale}, a maximum of ${s.pluralForms.length} plural forms are expected (${s.pluralForms.join(",")}), but the message contains ${n.length}: ${e}`);const r=s.select(t),i=s.pluralForms.indexOf(r);return n[Math.min(i,n.length-1)]}(s,t,e)}}}}]);