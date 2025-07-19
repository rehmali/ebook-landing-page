/*************/
/**DOM Elements */
/****** */
const mainPage = document.querySelector(".main");
const signInBTN = document.querySelector(".btn-signIn");
const signInPage = document.querySelector(".modal-Sign-In");
const closeSignInPage = document.querySelector(".btn-close-signin");
const freeTrialBTN = document.querySelectorAll(".btn-free-trial");
const modalFreeTrial = document.querySelector(".modal-free-trail");
const modalCloseBTN = document.querySelector(".btn-close-free-trial");

const modalRemoveBTN = document.querySelector(".btn-ok");

const btn = document.querySelector(".hamburger");
const menu = document.querySelector(".footer-nav");

btn.addEventListener("click", () => {
  const isOpen = menu.classList.toggle("is-open");
  btn.setAttribute("aria-expanded", String(isOpen));
});

/**************** */
/**** Functions ***/
/**************** */

function showOverlay() {
  if (!document.querySelector(".modal-overlay")) {
    const overlay = document.createElement("div");
    overlay.classList.add("modal-overlay");
    document.body.appendChild(overlay);

    // closes overlay
    overlay.addEventListener("click", () => {
      modalFreeTrial.classList.add("hidden");
      removeOverlay();
    });
  }
}

const removeOverlay = function () {
  const overlay = document.querySelector(".modal-overlay");
  if (overlay) {
    overlay.remove();
  }
};
/*******************/
/**Event Listerner */
/****** ***********/

signInBTN.addEventListener("click", () => {
  mainPage.classList.add("hidden");
  signInPage.classList.remove("hidden");
  //   signInBTN.classList.add("active");
});

closeSignInPage.addEventListener("click", () => {
  mainPage.classList.remove("hidden");
  signInPage.classList.add("hidden");
  //   signInBTN.classList.add("active");
});

// free trail modal opening
freeTrialBTN.forEach((btn) =>
  btn.addEventListener("click", () => {
    modalFreeTrial.classList.remove("hidden");
    showOverlay();
  })
);

// Free trial modal closing
// When user clicks OK
modalRemoveBTN.addEventListener("click", () => {
  modalFreeTrial.classList.add("hidden");
  removeOverlay();
});

// When user Clicks close button
modalCloseBTN.addEventListener("click", () => {
  modalFreeTrial.classList.add("hidden");
  removeOverlay();
});

// When user presses escape
window.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    modalFreeTrial.classList.add("hidden");
    removeOverlay();
  }
});
