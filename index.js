import{S as v,N as g,P as b,K as y,A as w}from"./assets/vendor-CXw4zOXi.js";(function(){const l=document.createElement("link").relList;if(l&&l.supports&&l.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))f(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&f(n)}).observe(document,{childList:!0,subtree:!0});function h(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function f(e){if(e.ep)return;e.ep=!0;const t=h(e);fetch(e.href,t)}})();new v(".swiper",{modules:[g,b,y,w],loop:!0,autoplay:{delay:1e4,pauseOnMouseEnter:!1,disableOnInteraction:!1},slidesPerView:1,spaceBetween:10,breakpoints:{768:{slidesPerView:2,spaceBetween:16},1200:{slidesPerView:3,spaceBetween:28,loop:!1}},pagination:{el:".swiper-pagination",clickable:!0},keyboard:{enabled:!0}});const L=document.querySelector("[data-menu-open]"),E=document.querySelector("[data-menu-close]"),d=document.querySelector("[data-menu]"),p=document.querySelector("body");L.addEventListener("click",m);E.addEventListener("click",m);d.addEventListener("click",s=>{s.target.classList.contains("mobile-menu-nav-link")&&m()});function m(){if(d.classList.toggle("hidden"),d.classList.contains("hidden")){p.classList.remove("modal-open");return}p.classList.add("modal-open")}const k=document.querySelector("[data-modal-open]"),o=document.querySelector("[data-modal]"),q=document.body,x=`
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
            <use href="/img/sprite.svg#icon-user"></use>
          </svg>
        </div>
      </div>

      <div class="modal-form-item">
        <label class="modal-form-label" for="user-email">Email</label>
        <div class="form-input-container">
          <input class="modal-form-input" type="email" id="user-email" required />
          <svg class="form-input-icon" width="17" height="17">
            <use href="/img/sprite.svg#icon-mail"></use>
          </svg>
        </div>
      </div>

      <div class="modal-form-item">
        <label class="modal-form-label" for="user-phone">Phone number</label>
        <div class="form-input-container">
          <input class="modal-form-input" type="tel" id="user-phone" required />
          <svg class="form-input-icon" width="17" height="17">
            <use href="/img/sprite.svg#icon-phone"></use>
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
              <use href="/img/sprite.svg#icon-check"></use>
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
`;o.insertAdjacentHTML("beforeend",x);const S=o.querySelector("[data-modal-close]");k.addEventListener("click",i);S.addEventListener("click",i);o.addEventListener("click",P);window.addEventListener("keydown",B);function i(){o.classList.toggle("hidden"),q.classList.toggle("modal-open")}function P(s){s.target===o&&i()}function B(s){s.key==="Escape"&&!o.classList.contains("hidden")&&i()}const r=document.querySelector(".header");let c=window.scrollY,u=!1,a=!1;function O(){const s=window.scrollY;s<50?(r.classList.remove("hidden"),a=!1):s>c&&!a?(r.classList.add("hidden"),a=!0):s<c&&a&&(r.classList.remove("hidden"),a=!1),c=s,u=!1}window.addEventListener("scroll",()=>{u||(window.requestAnimationFrame(O),u=!0)});
//# sourceMappingURL=index.js.map
