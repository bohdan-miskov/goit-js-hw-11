import{a as c,S as m,i as d}from"./assets/vendor-30VqbI-A.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))o(t);new MutationObserver(t=>{for(const a of t)if(a.type==="childList")for(const l of a.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&o(l)}).observe(document,{childList:!0,subtree:!0});function e(t){const a={};return t.integrity&&(a.integrity=t.integrity),t.referrerPolicy&&(a.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?a.credentials="include":t.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function o(t){if(t.ep)return;t.ep=!0;const a=e(t);fetch(t.href,a)}})();function u(r){return c.get("https://pixabay.com/api/",{params:{q:r,...g}})}const g={key:"",image_type:"photo",orientation:"horizontal",safesearch:"true"};function p(r){const s=r.map(e=>`<li class="gallery-item">
        <a class="gallery-link" href="${e.largeImageURL}"><img src="${e.webformatURL}" alt="${e.tags}" data-user="${e.user}"></a>
        <ul class="gallery-image-description-list">
            <li class="gallery-image-description-item">
                <h3 class="gallery-image-description-title">Likes</h3>
                <p class="gallery-image-description-text">${e.likes}</p>
            </li>
            <li class="gallery-image-description-item">
                <h3 class="gallery-image-description-title">Views</h3>
                <p class="gallery-image-description-text">${e.views}</p>
            </li>
            <li class="gallery-image-description-item">
                <h3 class="gallery-image-description-title">Comments</h3>
                <p class="gallery-image-description-text">${e.comments}</p>
            </li>
            <li class="gallery-image-description-item">
                <h3 class="gallery-image-description-title">Downloads</h3>
                <p class="gallery-image-description-text">${e.downloads}</p>
            </li>
        </ul>
      </li>`);y.gallery.innerHTML=s.join(""),f.refresh()}const f=new m(".gallery-link",{captionsData:"data-user",captionDelay:250}),y={gallery:document.querySelector(".gallery")},h={class:"message",titleColor:"#fff",titleSize:"16",titleLineHeight:"1.5",messageColor:"#fff",messageSize:"16",maxWidth:432,theme:"dark",close:!1,position:"topRight",timeout:5e3},L={...h,backgroundColor:"#ef4040",image:"./img/error-message-icon.svg",imageWidth:24,close:!0},i={searchForm:document.querySelector(".form"),gallery:document.querySelector(".gallery"),loader:x("span","loader")};i.searchForm.addEventListener("submit",S);function x(r,s){const e=document.createElement(r);return e.classList.add(s),e}function S(r){r.preventDefault();const s=r.currentTarget.elements.searchText.value.trim();b(s)&&(i.gallery.innerHTML="",i.searchForm.insertAdjacentElement("afterend",i.loader),u(s).then(e=>{if(e.data.hits.length===0){n("","Sorry, there are no images matching your search query. Please try again!"),i.loader.remove();return}i.loader.remove(),p(e.data.hits)}).catch(e=>{i.loader.remove(),n(e.name,`Sorry, the following error occured: ${e.message}`)}))}function b(r){return r!==""}function n(r,s){d.show({...L,title:r,message:s})}
//# sourceMappingURL=index.js.map
