(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{Iab2:function(t,e,n){var a,l;void 0===(l="function"==typeof(a=function(){"use strict";function e(t,e,n){var a=new XMLHttpRequest;a.open("GET",t),a.responseType="blob",a.onload=function(){o(a.response,e,n)},a.onerror=function(){console.error("could not download file")},a.send()}function n(t){var e=new XMLHttpRequest;e.open("HEAD",t,!1);try{e.send()}catch(t){}return 200<=e.status&&299>=e.status}function a(t){try{t.dispatchEvent(new MouseEvent("click"))}catch(e){var n=document.createEvent("MouseEvents");n.initMouseEvent("click",!0,!0,window,0,0,0,80,20,!1,!1,!1,!1,0,null),t.dispatchEvent(n)}}var l="object"==typeof window&&window.window===window?window:"object"==typeof self&&self.self===self?self:"object"==typeof global&&global.global===global?global:void 0,i=l.navigator&&/Macintosh/.test(navigator.userAgent)&&/AppleWebKit/.test(navigator.userAgent)&&!/Safari/.test(navigator.userAgent),o=l.saveAs||("object"!=typeof window||window!==l?function(){}:"download"in HTMLAnchorElement.prototype&&!i?function(t,i,o){var r=l.URL||l.webkitURL,d=document.createElement("a");d.download=i=i||t.name||"download",d.rel="noopener","string"==typeof t?(d.href=t,d.origin===location.origin?a(d):n(d.href)?e(t,i,o):a(d,d.target="_blank")):(d.href=r.createObjectURL(t),setTimeout((function(){r.revokeObjectURL(d.href)}),4e4),setTimeout((function(){a(d)}),0))}:"msSaveOrOpenBlob"in navigator?function(t,l,i){if(l=l||t.name||"download","string"!=typeof t)navigator.msSaveOrOpenBlob(function(t,e){return void 0===e?e={autoBom:!1}:"object"!=typeof e&&(console.warn("Deprecated: Expected third argument to be a object"),e={autoBom:!e}),e.autoBom&&/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(t.type)?new Blob(["\ufeff",t],{type:t.type}):t}(t,i),l);else if(n(t))e(t,l,i);else{var o=document.createElement("a");o.href=t,o.target="_blank",setTimeout((function(){a(o)}))}}:function(t,n,a,o){if((o=o||open("","_blank"))&&(o.document.title=o.document.body.innerText="downloading..."),"string"==typeof t)return e(t,n,a);var r="application/octet-stream"===t.type,d=/constructor/i.test(l.HTMLElement)||l.safari,m=/CriOS\/[\d]+/.test(navigator.userAgent);if((m||r&&d||i)&&"undefined"!=typeof FileReader){var s=new FileReader;s.onloadend=function(){var t=s.result;t=m?t:t.replace(/^data:[^;]*;/,"data:attachment/file;"),o?o.location.href=t:location=t,o=null},s.readAsDataURL(t)}else{var x=l.URL||l.webkitURL,u=x.createObjectURL(t);o?o.location=u:location.href=u,o=null,setTimeout((function(){x.revokeObjectURL(u)}),4e4)}});l.saveAs=o.saveAs=o,t.exports=o})?a.apply(e,[]):a)||(t.exports=l)},zsQL:function(t,e,n){"use strict";n.r(e),n.d(e,"PublicationsModule",(function(){return m}));var a=n("ofXK"),l=n("tyNb"),i=n("fXoL");const o=n("Iab2"),r=[{path:"",component:(()=>{class t{constructor(){}ngOnInit(){window.scrollTo({top:0,behavior:"smooth"})}downloadPdf(t,e){o.saveAs(t,e)}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=i["\u0275\u0275defineComponent"]({type:t,selectors:[["app-publication-listing"]],decls:434,vars:0,consts:[["id","page-title",1,"page-title","page-title-layout4","text-center","bg-overlay","slider"],[1,"bg-img"],[1,"container"],[1,"row"],[1,"col-sm-12","col-md-12","col-lg-8","page"],[1,"slide__content"],[1,"slide__title"],[1,"slide__desc"],[1,"container-fluid"],[1,"masonry-wrapper","masonry-style-2"],["data-column-width",".col-md-4",1,"blog-container"],[1,"col-md-4","post-item"],[1,"post__img"],["src","assets/images/publications/Calendar of Events.jpg","alt","Calendar of Events"],[1,"post__content",2,"height","160px"],[1,"post__title"],[1,"post__desc"],[1,"btn","btn__primary","btn__hover2","mr-30","planbtn",3,"click"],[1,"fa","fa-download"],["src","assets/images/publications/Integrated Tourism Plan for Islamabad.jpg","alt","Integrated Tourism Plan for Islamabad"],["src","assets/images/publications/National Minimum Standards and Guidelines.jpg","alt","National Minimum Standards and Guidelines"],["src","assets/images/publications/Pakistan National Tourism Action Plan.jpg","alt","Pakistan National Tourism Action Plan"],["src","assets/images/publications/PTDC Newsletter 2021.jpg","alt","PTDC Newsletter 2021"],["src","assets/images/publications/PTDC Newsletter 2022.jpg","alt","PTDC Newsletter 2022"],["src","assets/images/publications/Salam Pakistan - Journey into Light (English).jpg","alt","Calendar of Events"],["src","assets/images/publications/Salam Pakistan - Journey into Light (Urdu).jpg","alt","Integrated Tourism Plan for Islamabad"],["src","assets/images/publications/Salam Pakistan -Buddhist Heritage Trail (Chinese Language).jpg","alt","National Minimum Standards and Guidelines"],["src","assets/images/publications/Salam Pakistan -Buddhist Heritage Trail (English Language).png","alt","Pakistan National Tourism Action Plan"],["src","assets/images/publications/Salam Pakistan -Buddhist Heritage Trail (Korean Language).jpg","alt","PTDC Newsletter 2021"],["src","assets/images/publications/Salam Pakistan -Sikh Heritage Trail.png","alt","PTDC Newsletter 2022"],["src","assets/images/publications/Salam Pakistan -Tourism in Pakistan (Chinese Language).jpg","alt","PTDC Newsletter 2022"],["src","assets/images/publications/Salam Pakistan -Tourism in Pakistan (English Language).png","alt","PTDC Newsletter 2022"],["src","assets/images/publications/Salam Pakistan -Tourism in Pakistan (Korean Language).jpg","alt","PTDC Newsletter 2022"]],template:function(t,e){1&t&&(i["\u0275\u0275text"](0,"\n"),i["\u0275\u0275elementStart"](1,"section",0),i["\u0275\u0275text"](2,"\n  "),i["\u0275\u0275element"](3,"div",1),i["\u0275\u0275text"](4,"\n  "),i["\u0275\u0275elementStart"](5,"div",2),i["\u0275\u0275text"](6,"\n    "),i["\u0275\u0275elementStart"](7,"div",3),i["\u0275\u0275text"](8,"\n      "),i["\u0275\u0275elementStart"](9,"div",4),i["\u0275\u0275text"](10,"\n        "),i["\u0275\u0275elementStart"](11,"div",5),i["\u0275\u0275text"](12,"\n          "),i["\u0275\u0275elementStart"](13,"h2",6),i["\u0275\u0275text"](14,"Publications"),i["\u0275\u0275elementEnd"](),i["\u0275\u0275text"](15,"\n          "),i["\u0275\u0275elementStart"](16,"p",7),i["\u0275\u0275text"](17,"Explore a variety of publications from all over Pakistan"),i["\u0275\u0275elementEnd"](),i["\u0275\u0275text"](18,"\n        "),i["\u0275\u0275elementEnd"](),i["\u0275\u0275text"](19,"\n        "),i["\u0275\u0275text"](20,"\n      "),i["\u0275\u0275elementEnd"](),i["\u0275\u0275text"](21,"\n      "),i["\u0275\u0275text"](22,"\n    "),i["\u0275\u0275elementEnd"](),i["\u0275\u0275text"](23,"\n    "),i["\u0275\u0275text"](24,"\n  "),i["\u0275\u0275elementEnd"](),i["\u0275\u0275text"](25,"\n  "),i["\u0275\u0275text"](26,"\n"),i["\u0275\u0275elementEnd"](),i["\u0275\u0275text"](27,"\n"),i["\u0275\u0275text"](28,"\n\n"),i["\u0275\u0275text"](29,"\n"),i["\u0275\u0275elementStart"](30,"div",8),i["\u0275\u0275text"](31,"\n  "),i["\u0275\u0275elementStart"](32,"div",2),i["\u0275\u0275text"](33,"\n    "),i["\u0275\u0275elementStart"](34,"div",9),i["\u0275\u0275text"](35,"\n      "),i["\u0275\u0275elementStart"](36,"div",10),i["\u0275\u0275text"](37,"\n        "),i["\u0275\u0275elementStart"](38,"div",11),i["\u0275\u0275text"](39,"\n          "),i["\u0275\u0275elementStart"](40,"a"),i["\u0275\u0275text"](41,"\n            "),i["\u0275\u0275elementStart"](42,"div",12),i["\u0275\u0275text"](43,"\n              "),i["\u0275\u0275element"](44,"img",13),i["\u0275\u0275text"](45,"\n            "),i["\u0275\u0275elementEnd"](),i["\u0275\u0275text"](46,"\n\n            "),i["\u0275\u0275text"](47,"\n\n            "),i["\u0275\u0275text"](48,"\n            "),i["\u0275\u0275elementStart"](49,"div",14),i["\u0275\u0275text"](50,"\n              "),i["\u0275\u0275elementStart"](51,"h4",15),i["\u0275\u0275text"](52,"Calendar of Events"),i["\u0275\u0275elementEnd"](),i["\u0275\u0275text"](53,"\n              "),i["\u0275\u0275elementStart"](54,"p",16),i["\u0275\u0275text"](55,"\n                "),i["\u0275\u0275elementStart"](56,"button",17),i["\u0275\u0275listener"]("click",(function(){return e.downloadPdf("assets/pdf/Calendar of Events.pdf","Calendar of Events")})),i["\u0275\u0275text"](57,"\n                  "),i["\u0275\u0275element"](58,"i",18),i["\u0275\u0275text"](59,"\n                  Download pdf\n                "),i["\u0275\u0275elementEnd"](),i["\u0275\u0275text"](60,"\n              "),i["\u0275\u0275elementEnd"](),i["\u0275\u0275text"](61,"\n            "),i["\u0275\u0275elementEnd"](),i["\u0275\u0275text"](62,"\n          "),i["\u0275\u0275elementEnd"](),i["\u0275\u0275text"](63,"\n        "),i["\u0275\u0275elementEnd"](),i["\u0275\u0275text"](64,"\n\n        "),i["\u0275\u0275elementStart"](65,"div",11),i["\u0275\u0275text"](66,"\n          "),i["\u0275\u0275elementStart"](67,"a"),i["\u0275\u0275text"](68,"\n            "),i["\u0275\u0275elementStart"](69,"div",12),i["\u0275\u0275text"](70,"\n              "),i["\u0275\u0275element"](71,"img",19),i["\u0275\u0275text"](72,"\n            "),i["\u0275\u0275elementEnd"](),i["\u0275\u0275text"](73,"\n            "),i["\u0275\u0275text"](74,"\n            "),i["\u0275\u0275elementStart"](75,"div",14),i["\u0275\u0275text"](76,"\n              "),i["\u0275\u0275elementStart"](77,"h4",15),i["\u0275\u0275text"](78,"Integrated Tourism Plan for Islamabad"),i["\u0275\u0275elementEnd"](),i["\u0275\u0275text"](79,"\n              "),i["\u0275\u0275elementStart"](80,"p",16),i["\u0275\u0275text"](81,"\n                "),i["\u0275\u0275elementStart"](82,"button",17),i["\u0275\u0275listener"]("click",(function(){return e.downloadPdf("assets/pdf/Integrated Tourism Plan for Islamabad.pdf","Integrated Tourism Plan for Islamabad")})),i["\u0275\u0275text"](83,"\n                  "),i["\u0275\u0275element"](84,"i",18),i["\u0275\u0275text"](85,"\n                  Download pdf\n                "),i["\u0275\u0275elementEnd"](),i["\u0275\u0275text"](86,"\n              "),i["\u0275\u0275elementEnd"](),i["\u0275\u0275text"](87,"\n            "),i["\u0275\u0275elementEnd"](),i["\u0275\u0275text"](88,"\n          "),i["\u0275\u0275elementEnd"](),i["\u0275\u0275text"](89,"\n        "),i["\u0275\u0275elementEnd"](),i["\u0275\u0275text"](90,"\n\n        "),i["\u0275\u0275elementStart"](91,"div",11),i["\u0275\u0275text"](92,"\n          "),i["\u0275\u0275elementStart"](93,"a"),i["\u0275\u0275text"](94,"\n            "),i["\u0275\u0275elementStart"](95,"div",12),i["\u0275\u0275text"](96,"\n              "),i["\u0275\u0275element"](97,"img",20),i["\u0275\u0275text"](98,"\n            "),i["\u0275\u0275elementEnd"](),i["\u0275\u0275text"](99,"\n            "),i["\u0275\u0275text"](100,"\n            "),i["\u0275\u0275elementStart"](101,"div",14),i["\u0275\u0275text"](102,"\n              "),i["\u0275\u0275elementStart"](103,"h4",15),i["\u0275\u0275text"](104,"National Minimum Standards and Guidelines"),i["\u0275\u0275elementEnd"](),i["\u0275\u0275text"](105,"\n              "),i["\u0275\u0275elementStart"](106,"p",16),i["\u0275\u0275text"](107,"\n                "),i["\u0275\u0275elementStart"](108,"button",17),i["\u0275\u0275listener"]("click",(function(){return e.downloadPdf("assets/pdf/National Minimum Standards and Guidelines.pdf","National Minimum Standards and Guidelines")})),i["\u0275\u0275text"](109,"\n                  "),i["\u0275\u0275element"](110,"i",18),i["\u0275\u0275text"](111,"\n                  Download pdf\n                "),i["\u0275\u0275elementEnd"](),i["\u0275\u0275text"](112,"\n              "),i["\u0275\u0275elementEnd"](),i["\u0275\u0275text"](113,"\n            "),i["\u0275\u0275elementEnd"](),i["\u0275\u0275text"](114,"\n          "),i["\u0275\u0275elementEnd"](),i["\u0275\u0275text"](115,"\n        "),i["\u0275\u0275elementEnd"](),i["\u0275\u0275text"](116,"\n\n        "),i["\u0275\u0275elementStart"](117,"div",11),i["\u0275\u0275text"](118,"\n          "),i["\u0275\u0275elementStart"](119,"a"),i["\u0275\u0275text"](120,"\n            "),i["\u0275\u0275elementStart"](121,"div",12),i["\u0275\u0275text"](122,"\n              "),i["\u0275\u0275element"](123,"img",21),i["\u0275\u0275text"](124,"\n            "),i["\u0275\u0275elementEnd"](),i["\u0275\u0275text"](125,"\n            "),i["\u0275\u0275text"](126,"\n            "),i["\u0275\u0275elementStart"](127,"div",14),i["\u0275\u0275text"](128,"\n              "),i["\u0275\u0275elementStart"](129,"h4",15),i["\u0275\u0275text"](130,"Pakistan National Tourism Action Plan"),i["\u0275\u0275elementEnd"](),i["\u0275\u0275text"](131,"\n              "),i["\u0275\u0275elementStart"](132,"p",16),i["\u0275\u0275text"](133,"\n                "),i["\u0275\u0275elementStart"](134,"button",17),i["\u0275\u0275listener"]("click",(function(){return e.downloadPdf("assets/pdf/Pakistan National Tourism Action Plan.pdf","Pakistan National Tourism Action Plan")})),i["\u0275\u0275text"](135,"\n                  "),i["\u0275\u0275element"](136,"i",18),i["\u0275\u0275text"](137,"\n                  Download pdf\n                "),i["\u0275\u0275elementEnd"](),i["\u0275\u0275text"](138,"\n              "),i["\u0275\u0275elementEnd"](),i["\u0275\u0275text"](139,"\n            "),i["\u0275\u0275elementEnd"](),i["\u0275\u0275text"](140,"\n          "),i["\u0275\u0275elementEnd"](),i["\u0275\u0275text"](141,"\n        "),i["\u0275\u0275elementEnd"](),i["\u0275\u0275text"](142,"\n\n        "),i["\u0275\u0275elementStart"](143,"div",11),i["\u0275\u0275text"](144,"\n          "),i["\u0275\u0275elementStart"](145,"a"),i["\u0275\u0275text"](146,"\n            "),i["\u0275\u0275elementStart"](147,"div",12),i["\u0275\u0275text"](148,"\n              "),i["\u0275\u0275element"](149,"img",22),i["\u0275\u0275text"](150,"\n            "),i["\u0275\u0275elementEnd"](),i["\u0275\u0275text"](151,"\n            "),i["\u0275\u0275text"](152,"\n            "),i["\u0275\u0275elementStart"](153,"div",14),i["\u0275\u0275text"](154,"\n              "),i["\u0275\u0275elementStart"](155,"h4",15),i["\u0275\u0275text"](156,"PTDC Newsletter 2021"),i["\u0275\u0275elementEnd"](),i["\u0275\u0275text"](157,"\n              "),i["\u0275\u0275elementStart"](158,"p",16),i["\u0275\u0275text"](159,"\n                "),i["\u0275\u0275elementStart"](160,"button",17),i["\u0275\u0275listener"]("click",(function(){return e.downloadPdf("assets/pdf/PTDC Newsletter 2021.pdf","PTDC Newsletter 2021")})),i["\u0275\u0275text"](161,"\n                  "),i["\u0275\u0275element"](162,"i",18),i["\u0275\u0275text"](163,"\n                  Download pdf\n                "),i["\u0275\u0275elementEnd"](),i["\u0275\u0275text"](164,"\n              "),i["\u0275\u0275elementEnd"](),i["\u0275\u0275text"](165,"\n            "),i["\u0275\u0275elementEnd"](),i["\u0275\u0275text"](166,"\n          "),i["\u0275\u0275elementEnd"](),i["\u0275\u0275text"](167,"\n        "),i["\u0275\u0275elementEnd"](),i["\u0275\u0275text"](168,"\n\n        "),i["\u0275\u0275elementStart"](169,"div",11),i["\u0275\u0275text"](170,"\n          "),i["\u0275\u0275elementStart"](171,"a"),i["\u0275\u0275text"](172,"\n            "),i["\u0275\u0275elementStart"](173,"div",12),i["\u0275\u0275text"](174,"\n              "),i["\u0275\u0275element"](175,"img",23),i["\u0275\u0275text"](176,"\n            "),i["\u0275\u0275elementEnd"](),i["\u0275\u0275text"](177,"\n            "),i["\u0275\u0275text"](178,"\n            "),i["\u0275\u0275elementStart"](179,"div",14),i["\u0275\u0275text"](180,"\n              "),i["\u0275\u0275elementStart"](181,"h4",15),i["\u0275\u0275text"](182,"PTDC Newsletter 2022"),i["\u0275\u0275elementEnd"](),i["\u0275\u0275text"](183,"\n              "),i["\u0275\u0275elementStart"](184,"p",16),i["\u0275\u0275text"](185,"\n                "),i["\u0275\u0275elementStart"](186,"button",17),i["\u0275\u0275listener"]("click",(function(){return e.downloadPdf("assets/pdf/PTDC Newsletter 2022.pdf","PTDC Newsletter 2022")})),i["\u0275\u0275text"](187,"\n                  "),i["\u0275\u0275element"](188,"i",18),i["\u0275\u0275text"](189,"\n                  Download pdf\n                "),i["\u0275\u0275elementEnd"](),i["\u0275\u0275text"](190,"\n              "),i["\u0275\u0275elementEnd"](),i["\u0275\u0275text"](191,"\n            "),i["\u0275\u0275elementEnd"](),i["\u0275\u0275text"](192,"\n          "),i["\u0275\u0275elementEnd"](),i["\u0275\u0275text"](193,"\n        "),i["\u0275\u0275elementEnd"](),i["\u0275\u0275text"](194,"\n\n        "),i["\u0275\u0275elementStart"](195,"div",11),i["\u0275\u0275text"](196,"\n          "),i["\u0275\u0275elementStart"](197,"a"),i["\u0275\u0275text"](198,"\n            "),i["\u0275\u0275elementStart"](199,"div",12),i["\u0275\u0275text"](200,"\n              "),i["\u0275\u0275element"](201,"img",24),i["\u0275\u0275text"](202,"\n            "),i["\u0275\u0275elementEnd"](),i["\u0275\u0275text"](203,"\n\n            "),i["\u0275\u0275text"](204,"\n\n            "),i["\u0275\u0275text"](205,"\n            "),i["\u0275\u0275elementStart"](206,"div",14),i["\u0275\u0275text"](207,"\n              "),i["\u0275\u0275elementStart"](208,"h4",15),i["\u0275\u0275text"](209,"Salam Pakistan - Journey into Light (English)"),i["\u0275\u0275elementEnd"](),i["\u0275\u0275text"](210,"\n              "),i["\u0275\u0275elementStart"](211,"p",16),i["\u0275\u0275text"](212,"\n                "),i["\u0275\u0275elementStart"](213,"button",17),i["\u0275\u0275listener"]("click",(function(){return e.downloadPdf("assets/pdf/Salam Pakistan - Journey into Light (English).pdf","Salam Pakistan - Journey into Light (English)")})),i["\u0275\u0275text"](214,"\n                  "),i["\u0275\u0275element"](215,"i",18),i["\u0275\u0275text"](216,"\n                  Download pdf\n                "),i["\u0275\u0275elementEnd"](),i["\u0275\u0275text"](217,"\n              "),i["\u0275\u0275elementEnd"](),i["\u0275\u0275text"](218,"\n            "),i["\u0275\u0275elementEnd"](),i["\u0275\u0275text"](219,"\n          "),i["\u0275\u0275elementEnd"](),i["\u0275\u0275text"](220,"\n        "),i["\u0275\u0275elementEnd"](),i["\u0275\u0275text"](221,"\n\n        "),i["\u0275\u0275elementStart"](222,"div",11),i["\u0275\u0275text"](223,"\n          "),i["\u0275\u0275elementStart"](224,"a"),i["\u0275\u0275text"](225,"\n            "),i["\u0275\u0275elementStart"](226,"div",12),i["\u0275\u0275text"](227,"\n              "),i["\u0275\u0275element"](228,"img",25),i["\u0275\u0275text"](229,"\n            "),i["\u0275\u0275elementEnd"](),i["\u0275\u0275text"](230,"\n            "),i["\u0275\u0275text"](231,"\n            "),i["\u0275\u0275elementStart"](232,"div",14),i["\u0275\u0275text"](233,"\n              "),i["\u0275\u0275elementStart"](234,"h4",15),i["\u0275\u0275text"](235,"Salam Pakistan - Journey into Light (Urdu)"),i["\u0275\u0275elementEnd"](),i["\u0275\u0275text"](236,"\n              "),i["\u0275\u0275elementStart"](237,"p",16),i["\u0275\u0275text"](238,"\n                "),i["\u0275\u0275elementStart"](239,"button",17),i["\u0275\u0275listener"]("click",(function(){return e.downloadPdf("assets/pdf/Salam Pakistan - Journey into Light (Urdu).pdf","Salam Pakistan - Journey into Light (Urdu)")})),i["\u0275\u0275text"](240,"\n                  "),i["\u0275\u0275element"](241,"i",18),i["\u0275\u0275text"](242,"\n                  Download pdf\n                "),i["\u0275\u0275elementEnd"](),i["\u0275\u0275text"](243,"\n              "),i["\u0275\u0275elementEnd"](),i["\u0275\u0275text"](244,"\n            "),i["\u0275\u0275elementEnd"](),i["\u0275\u0275text"](245,"\n          "),i["\u0275\u0275elementEnd"](),i["\u0275\u0275text"](246,"\n        "),i["\u0275\u0275elementEnd"](),i["\u0275\u0275text"](247,"\n\n        "),i["\u0275\u0275elementStart"](248,"div",11),i["\u0275\u0275text"](249,"\n          "),i["\u0275\u0275elementStart"](250,"a"),i["\u0275\u0275text"](251,"\n            "),i["\u0275\u0275elementStart"](252,"div",12),i["\u0275\u0275text"](253,"\n              "),i["\u0275\u0275element"](254,"img",26),i["\u0275\u0275text"](255,"\n            "),i["\u0275\u0275elementEnd"](),i["\u0275\u0275text"](256,"\n            "),i["\u0275\u0275text"](257,"\n            "),i["\u0275\u0275elementStart"](258,"div",14),i["\u0275\u0275text"](259,"\n              "),i["\u0275\u0275elementStart"](260,"h4",15),i["\u0275\u0275text"](261,"Salam Pakistan -Buddhist Heritage Trail (Chinese Language)"),i["\u0275\u0275elementEnd"](),i["\u0275\u0275text"](262,"\n              "),i["\u0275\u0275elementStart"](263,"p",16),i["\u0275\u0275text"](264,"\n                "),i["\u0275\u0275elementStart"](265,"button",17),i["\u0275\u0275listener"]("click",(function(){return e.downloadPdf("assets/pdf/Salam Pakistan  -Buddhist Heritage Trail (Chinese Language).pdf","Salam Pakistan -Buddhist Heritage Trail (Chinese Language)")})),i["\u0275\u0275text"](266,"\n                  "),i["\u0275\u0275element"](267,"i",18),i["\u0275\u0275text"](268,"\n                  Download pdf\n                "),i["\u0275\u0275elementEnd"](),i["\u0275\u0275text"](269,"\n              "),i["\u0275\u0275elementEnd"](),i["\u0275\u0275text"](270,"\n            "),i["\u0275\u0275elementEnd"](),i["\u0275\u0275text"](271,"\n          "),i["\u0275\u0275elementEnd"](),i["\u0275\u0275text"](272,"\n        "),i["\u0275\u0275elementEnd"](),i["\u0275\u0275text"](273,"\n\n        "),i["\u0275\u0275elementStart"](274,"div",11),i["\u0275\u0275text"](275,"\n          "),i["\u0275\u0275elementStart"](276,"a"),i["\u0275\u0275text"](277,"\n            "),i["\u0275\u0275elementStart"](278,"div",12),i["\u0275\u0275text"](279,"\n              "),i["\u0275\u0275element"](280,"img",27),i["\u0275\u0275text"](281,"\n            "),i["\u0275\u0275elementEnd"](),i["\u0275\u0275text"](282,"\n            "),i["\u0275\u0275text"](283,"\n            "),i["\u0275\u0275elementStart"](284,"div",14),i["\u0275\u0275text"](285,"\n              "),i["\u0275\u0275elementStart"](286,"h4",15),i["\u0275\u0275text"](287,"Salam Pakistan -Buddhist Heritage Trail (English Language)"),i["\u0275\u0275elementEnd"](),i["\u0275\u0275text"](288,"\n              "),i["\u0275\u0275elementStart"](289,"p",16),i["\u0275\u0275text"](290,"\n                "),i["\u0275\u0275elementStart"](291,"button",17),i["\u0275\u0275listener"]("click",(function(){return e.downloadPdf("assets/pdf/Salam Pakistan  -Buddhist Heritage Trail (English Language).pdf","Salam Pakistan  -Buddhist Heritage Trail (English Language)")})),i["\u0275\u0275text"](292,"\n                  "),i["\u0275\u0275element"](293,"i",18),i["\u0275\u0275text"](294,"\n                  Download pdf\n                "),i["\u0275\u0275elementEnd"](),i["\u0275\u0275text"](295,"\n              "),i["\u0275\u0275elementEnd"](),i["\u0275\u0275text"](296,"\n            "),i["\u0275\u0275elementEnd"](),i["\u0275\u0275text"](297,"\n          "),i["\u0275\u0275elementEnd"](),i["\u0275\u0275text"](298,"\n        "),i["\u0275\u0275elementEnd"](),i["\u0275\u0275text"](299,"\n\n        "),i["\u0275\u0275elementStart"](300,"div",11),i["\u0275\u0275text"](301,"\n          "),i["\u0275\u0275elementStart"](302,"a"),i["\u0275\u0275text"](303,"\n            "),i["\u0275\u0275elementStart"](304,"div",12),i["\u0275\u0275text"](305,"\n              "),i["\u0275\u0275element"](306,"img",28),i["\u0275\u0275text"](307,"\n            "),i["\u0275\u0275elementEnd"](),i["\u0275\u0275text"](308,"\n            "),i["\u0275\u0275text"](309,"\n            "),i["\u0275\u0275elementStart"](310,"div",14),i["\u0275\u0275text"](311,"\n              "),i["\u0275\u0275elementStart"](312,"h4",15),i["\u0275\u0275text"](313,"Salam Pakistan -Buddhist Heritage Trail (Korean Language)"),i["\u0275\u0275elementEnd"](),i["\u0275\u0275text"](314,"\n              "),i["\u0275\u0275elementStart"](315,"p",16),i["\u0275\u0275text"](316,"\n                "),i["\u0275\u0275elementStart"](317,"button",17),i["\u0275\u0275listener"]("click",(function(){return e.downloadPdf("assets/pdf/Salam Pakistan  -Buddhist Heritage Trail (Korean Language).pdf","Salam Pakistan  -Buddhist Heritage Trail (Korean Language)")})),i["\u0275\u0275text"](318,"\n                  "),i["\u0275\u0275element"](319,"i",18),i["\u0275\u0275text"](320,"\n                  Download pdf\n                "),i["\u0275\u0275elementEnd"](),i["\u0275\u0275text"](321,"\n              "),i["\u0275\u0275elementEnd"](),i["\u0275\u0275text"](322,"\n            "),i["\u0275\u0275elementEnd"](),i["\u0275\u0275text"](323,"\n          "),i["\u0275\u0275elementEnd"](),i["\u0275\u0275text"](324,"\n        "),i["\u0275\u0275elementEnd"](),i["\u0275\u0275text"](325,"\n\n        "),i["\u0275\u0275elementStart"](326,"div",11),i["\u0275\u0275text"](327,"\n          "),i["\u0275\u0275elementStart"](328,"a"),i["\u0275\u0275text"](329,"\n            "),i["\u0275\u0275elementStart"](330,"div",12),i["\u0275\u0275text"](331,"\n              "),i["\u0275\u0275element"](332,"img",29),i["\u0275\u0275text"](333,"\n            "),i["\u0275\u0275elementEnd"](),i["\u0275\u0275text"](334,"\n            "),i["\u0275\u0275text"](335,"\n            "),i["\u0275\u0275elementStart"](336,"div",14),i["\u0275\u0275text"](337,"\n              "),i["\u0275\u0275elementStart"](338,"h4",15),i["\u0275\u0275text"](339,"Salam Pakistan -Sikh Heritage Trail"),i["\u0275\u0275elementEnd"](),i["\u0275\u0275text"](340,"\n              "),i["\u0275\u0275elementStart"](341,"p",16),i["\u0275\u0275text"](342,"\n                "),i["\u0275\u0275elementStart"](343,"button",17),i["\u0275\u0275listener"]("click",(function(){return e.downloadPdf("assets/pdf/Salam Pakistan - Sikh Heritage Trail.pdf","Salam Pakistan - Sikh Heritage Trail")})),i["\u0275\u0275text"](344,"\n                  "),i["\u0275\u0275element"](345,"i",18),i["\u0275\u0275text"](346,"\n                  Download pdf\n                "),i["\u0275\u0275elementEnd"](),i["\u0275\u0275text"](347,"\n              "),i["\u0275\u0275elementEnd"](),i["\u0275\u0275text"](348,"\n            "),i["\u0275\u0275elementEnd"](),i["\u0275\u0275text"](349,"\n          "),i["\u0275\u0275elementEnd"](),i["\u0275\u0275text"](350,"\n        "),i["\u0275\u0275elementEnd"](),i["\u0275\u0275text"](351,"\n\n        "),i["\u0275\u0275elementStart"](352,"div",11),i["\u0275\u0275text"](353,"\n          "),i["\u0275\u0275elementStart"](354,"a"),i["\u0275\u0275text"](355,"\n            "),i["\u0275\u0275elementStart"](356,"div",12),i["\u0275\u0275text"](357,"\n              "),i["\u0275\u0275element"](358,"img",30),i["\u0275\u0275text"](359,"\n            "),i["\u0275\u0275elementEnd"](),i["\u0275\u0275text"](360,"\n            "),i["\u0275\u0275text"](361,"\n            "),i["\u0275\u0275elementStart"](362,"div",14),i["\u0275\u0275text"](363,"\n              "),i["\u0275\u0275elementStart"](364,"h4",15),i["\u0275\u0275text"](365,"Salam Pakistan -Tourism in Pakistan (Chinese Language)"),i["\u0275\u0275elementEnd"](),i["\u0275\u0275text"](366,"\n              "),i["\u0275\u0275elementStart"](367,"p",16),i["\u0275\u0275text"](368,"\n                "),i["\u0275\u0275elementStart"](369,"button",17),i["\u0275\u0275listener"]("click",(function(){return e.downloadPdf("assets/pdf/Salam -Pakistan Tourism in Pakistan (Chinese Language).pdf","Salam -Pakistan Tourism in Pakistan (Chinese Language)")})),i["\u0275\u0275text"](370,"\n                  "),i["\u0275\u0275element"](371,"i",18),i["\u0275\u0275text"](372,"\n                  Download pdf\n                "),i["\u0275\u0275elementEnd"](),i["\u0275\u0275text"](373,"\n              "),i["\u0275\u0275elementEnd"](),i["\u0275\u0275text"](374,"\n            "),i["\u0275\u0275elementEnd"](),i["\u0275\u0275text"](375,"\n          "),i["\u0275\u0275elementEnd"](),i["\u0275\u0275text"](376,"\n        "),i["\u0275\u0275elementEnd"](),i["\u0275\u0275text"](377,"\n\n        "),i["\u0275\u0275elementStart"](378,"div",11),i["\u0275\u0275text"](379,"\n          "),i["\u0275\u0275elementStart"](380,"a"),i["\u0275\u0275text"](381,"\n            "),i["\u0275\u0275elementStart"](382,"div",12),i["\u0275\u0275text"](383,"\n              "),i["\u0275\u0275element"](384,"img",31),i["\u0275\u0275text"](385,"\n            "),i["\u0275\u0275elementEnd"](),i["\u0275\u0275text"](386,"\n            "),i["\u0275\u0275text"](387,"\n            "),i["\u0275\u0275elementStart"](388,"div",14),i["\u0275\u0275text"](389,"\n              "),i["\u0275\u0275elementStart"](390,"h4",15),i["\u0275\u0275text"](391,"Salam Pakistan -Tourism in Pakistan (English Language)"),i["\u0275\u0275elementEnd"](),i["\u0275\u0275text"](392,"\n              "),i["\u0275\u0275elementStart"](393,"p",16),i["\u0275\u0275text"](394,"\n                "),i["\u0275\u0275elementStart"](395,"button",17),i["\u0275\u0275listener"]("click",(function(){return e.downloadPdf("assets/pdf/Salam -Pakistan Tourism in Pakistan (English Language).pdf","Salam -Pakistan Tourism in Pakistan (English Language)")})),i["\u0275\u0275text"](396,"\n                  "),i["\u0275\u0275element"](397,"i",18),i["\u0275\u0275text"](398,"\n                  Download pdf\n                "),i["\u0275\u0275elementEnd"](),i["\u0275\u0275text"](399,"\n              "),i["\u0275\u0275elementEnd"](),i["\u0275\u0275text"](400,"\n            "),i["\u0275\u0275elementEnd"](),i["\u0275\u0275text"](401,"\n          "),i["\u0275\u0275elementEnd"](),i["\u0275\u0275text"](402,"\n        "),i["\u0275\u0275elementEnd"](),i["\u0275\u0275text"](403,"\n\n        "),i["\u0275\u0275elementStart"](404,"div",11),i["\u0275\u0275text"](405,"\n          "),i["\u0275\u0275elementStart"](406,"a"),i["\u0275\u0275text"](407,"\n            "),i["\u0275\u0275elementStart"](408,"div",12),i["\u0275\u0275text"](409,"\n              "),i["\u0275\u0275element"](410,"img",32),i["\u0275\u0275text"](411,"\n            "),i["\u0275\u0275elementEnd"](),i["\u0275\u0275text"](412,"\n            "),i["\u0275\u0275text"](413,"\n            "),i["\u0275\u0275elementStart"](414,"div",14),i["\u0275\u0275text"](415,"\n              "),i["\u0275\u0275elementStart"](416,"h4",15),i["\u0275\u0275text"](417,"Salam -Pakistan Tourism in Pakistan (Korean Language)"),i["\u0275\u0275elementEnd"](),i["\u0275\u0275text"](418,"\n              "),i["\u0275\u0275elementStart"](419,"p",16),i["\u0275\u0275text"](420,"\n                "),i["\u0275\u0275elementStart"](421,"button",17),i["\u0275\u0275listener"]("click",(function(){return e.downloadPdf("assets/pdf/Salam -Pakistan Tourism in Pakistan (Korean Language).pdf","Salam -Pakistan Tourism in Pakistan (Korean Language)")})),i["\u0275\u0275text"](422,"\n                  "),i["\u0275\u0275element"](423,"i",18),i["\u0275\u0275text"](424,"\n                  Download pdf\n                "),i["\u0275\u0275elementEnd"](),i["\u0275\u0275text"](425,"\n              "),i["\u0275\u0275elementEnd"](),i["\u0275\u0275text"](426,"\n            "),i["\u0275\u0275elementEnd"](),i["\u0275\u0275text"](427,"\n          "),i["\u0275\u0275elementEnd"](),i["\u0275\u0275text"](428,"\n        "),i["\u0275\u0275elementEnd"](),i["\u0275\u0275text"](429,"\n      "),i["\u0275\u0275elementEnd"](),i["\u0275\u0275text"](430,"\n    "),i["\u0275\u0275elementEnd"](),i["\u0275\u0275text"](431,"\n  "),i["\u0275\u0275elementEnd"](),i["\u0275\u0275text"](432,"\n"),i["\u0275\u0275elementEnd"](),i["\u0275\u0275text"](433,"\n"))},styles:[".bg-overlay[_ngcontent-%COMP%]{background-size:cover}.bg-img[_ngcontent-%COMP%]{top:-120px!important}.edit-plan[_ngcontent-%COMP%]{background:#8cc63e;color:#fff;padding:12px;margin-top:27px}.plan-box[_ngcontent-%COMP%]{border:1px solid #8cc63e;padding:16px;border-radius:10px;margin:5px}.plan-detail-bottom[_ngcontent-%COMP%]{margin-bottom:16px}.plan-name-link[_ngcontent-%COMP%]{font-size:24px;color:#000;font-family:Byom-Bold!important}.plan-box[_ngcontent-%COMP%]:hover{box-shadow:4px 4px 15px #dcdcdc}.plan-delete[_ngcontent-%COMP%]{background:#eee}.plan-delete[_ngcontent-%COMP%], .plan-delete[_ngcontent-%COMP%]:hover{padding:5px;text-align:center;border-radius:50px;width:30px;height:30px}.plan-delete[_ngcontent-%COMP%]:hover{background:#e63434;color:#fff}.page-title[_ngcontent-%COMP%]{background-image:url(travel-guide-bg.9c78b03168b80e831ed7.jpg);background-repeat:no-repeat;background-position:bottom;margin-bottom:8.5rem}.post-item[_ngcontent-%COMP%]{margin-bottom:60px}.post-image[_ngcontent-%COMP%]{height:280px}.post-content[_ngcontent-%COMP%]{height:160px!important}.btn__primary[_ngcontent-%COMP%]{text-transform:none}"]}),t})()}];let d=(()=>{class t{}return t.\u0275mod=i["\u0275\u0275defineNgModule"]({type:t}),t.\u0275inj=i["\u0275\u0275defineInjector"]({factory:function(e){return new(e||t)},imports:[[l.g.forChild(r)],l.g]}),t})(),m=(()=>{class t{}return t.\u0275mod=i["\u0275\u0275defineNgModule"]({type:t}),t.\u0275inj=i["\u0275\u0275defineInjector"]({factory:function(e){return new(e||t)},imports:[[a.c,d]]}),t})()}}]);