import{S as k,N as E,P as S,K as q,A as x,i as g}from"./assets/vendor-BbOGx51x.js";(function(){const l=document.createElement("link").relList;if(l&&l.supports&&l.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))p(t);new MutationObserver(t=>{for(const s of t)if(s.type==="childList")for(const r of s.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&p(r)}).observe(document,{childList:!0,subtree:!0});function L(t){const s={};return t.integrity&&(s.integrity=t.integrity),t.referrerPolicy&&(s.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?s.credentials="include":t.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function p(t){if(t.ep)return;t.ep=!0;const s=L(t);fetch(t.href,s)}})();new k(".swiper",{modules:[E,S,q,x],loop:!0,autoplay:{delay:1e4,pauseOnMouseEnter:!1,disableOnInteraction:!1},slidesPerView:1,spaceBetween:10,breakpoints:{768:{slidesPerView:2,spaceBetween:16},1200:{slidesPerView:3,spaceBetween:28,loop:!1}},pagination:{el:".swiper-pagination",clickable:!0},keyboard:{enabled:!0}});const P=document.querySelector("[data-modal-open]"),o=document.querySelector("[data-modal]"),B=document.body,i=new URL("/simple-chocolate/assets/sprite-6iG90Qtl.svg",import.meta.url).href,O=`
  <div class="modal-container">
    <button class="modal-close-btn" data-modal-close></button>
    <h2 class="modal-heading">
      Leave a review about <span class="text-accent">our chocolate</span>
    </h2>

    <form class="modal-form">
      <div class="modal-form-item">
        <label class="modal-form-label" for="user-name">Name</label>
        <div class="form-input-container">
          <input class="modal-form-input" type="text" id="user-name" required />
          <svg class="form-input-icon" width="17" height="17">
            <use href="${i}#icon-user"></use>
          </svg>
        </div>
      </div>

      <div class="modal-form-item">
        <label class="modal-form-label" for="user-email">Email</label>
        <div class="form-input-container">
          <input class="modal-form-input" type="email" id="user-email" required />
          <svg class="form-input-icon" width="17" height="17">
            <use href="${i}#icon-mail"></use>
          </svg>
        </div>
      </div>

      <div class="modal-form-item">
        <label class="modal-form-label" for="user-phone">Phone number</label>
        <div class="form-input-container">
          <input class="modal-form-input" type="tel" id="user-phone" required />
          <svg class="form-input-icon" width="17" height="17">
            <use href="${i}#icon-phone"></use>
          </svg>
        </div>
      </div>

      <div class="modal-form-item">
        <label class="modal-form-label" for="user-message">Comment</label>
        <textarea 
          class="form-textarea"
          name="user-message" 
          id="user-message" 
          placeholder="Enter text"
        ></textarea>
      </div>

      <div class="modal-form-item form-item-checkbox">
        <input class="hidden-checkbox visually-hidden" type="checkbox" value="true" name="user-privacy" id="user-privacy" required>
        <label class="modal-form-label-privacy" for="user-privacy">
          <span class="checkbox">
            <svg class="checkbox-icon" width="10" height="10">
              <use href="${i}#icon-check"></use>
            </svg>
          </span>
          <span class="checkbox-text">
            I accept the terms and conditions of the 
            <a href="#" class="checkbox-link">Privacy Policy</a>
          </span>
        </label>
      </div>

      <button class="modal-form-btn" type="submit">Send</button>
    </form>
  </div>
`;o.insertAdjacentHTML("beforeend",O);const M=o.querySelector("[data-modal-close]");P.addEventListener("click",n);M.addEventListener("click",n);o.addEventListener("click",N);window.addEventListener("keydown",A);function n(){o.classList.toggle("hidden"),B.classList.toggle("modal-open")}function N(e){e.target===o&&n()}function A(e){e.key==="Escape"&&!o.classList.contains("hidden")&&n()}const Y=document.querySelector("[data-menu-open]"),$=document.querySelector("[data-menu-close]"),u=document.querySelector("[data-menu]"),h=document.querySelector("body");Y.addEventListener("click",f);$.addEventListener("click",f);u.addEventListener("click",e=>{e.target.classList.contains("mobile-menu-nav-link")&&f()});function f(){if(u.classList.toggle("hidden"),u.classList.contains("hidden")){h.classList.remove("modal-open");return}h.classList.add("modal-open")}const c=document.querySelector(".header");let d=window.scrollY,m=!1,a=!1;function I(){const e=window.scrollY;e<50?(c.classList.remove("hidden"),a=!1):e>d&&!a?(c.classList.add("hidden"),a=!0):e<d&&a&&(c.classList.remove("hidden"),a=!1),d=e,m=!1}window.addEventListener("scroll",()=>{m||(window.requestAnimationFrame(I),m=!0)});const b=document.querySelector(".btn-buy"),v=document.querySelector(".form-btn"),y=document.querySelector(".modal-form-btn");b&&b.addEventListener("click",()=>V("Sorry, not available at the moment."));v&&v.addEventListener("click",e=>{e.preventDefault(),w("You successfully subscribed!")});y&&y.addEventListener("click",e=>{e.preventDefault(),w("Thank you for your feedback!")});function w(e){g.success({position:"bottomRight",message:e})}function V(e){g.info({position:"bottomRight",message:e})}
//# sourceMappingURL=index.js.map
