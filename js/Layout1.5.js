const swiper = new Swiper(".swiper", {
  breakpoints: {
    0: {
      enabled: true,
    },
    768: {
      enabled: false,
    },
  },
  pagination: {
    el: ".swiper-pagination",
  },
});



let buttonMore = document.querySelector(".button-read-more");

function handleButtonClick() {
    let buttonMoreIcom = buttonMore.querySelector(".button-read-more__icon");
    let buttonMoreText = buttonMore.querySelector(".button-read-more__text");
    let buttonsMenuTablet = document.querySelectorAll('[data-hidden="tablet"]');
    let buttonsMenuDesktop = document.querySelectorAll('[data-hidden="desktop"]')

    buttonsMenuTablet.forEach(element => {
      element.classList.toggle('button-menu-brands--hidden');
    });

    buttonsMenuDesktop.forEach(element => {
      element.classList.toggle('button-menu-brands--hiddenDesktop');
    });

    
    
  if (buttonMoreIcom.classList.contains("button-read-more__icon--hidden")) {
    buttonMoreText.textContent = "Показать все";
    buttonMoreIcom.classList.remove("button-read-more__icon--hidden");

  } else {
    buttonMoreText.textContent = "Скрыть";
    buttonMoreIcom.classList.add("button-read-more__icon--hidden");
    
  }

}

buttonMore.addEventListener("click", handleButtonClick);


