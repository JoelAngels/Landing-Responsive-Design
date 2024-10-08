const swiper = new Swiper(".slide-content", {
  slidesPerView: 3,
  spaceBetween: 25,
  centerSlide: "true",
  loop: true,
  fade: "true",
  grabCursor: "true",
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    520: {
      slidesPerView: 2,
    },
    950: {
      slidesPerView: 3,
    },
  },
});

const faqs = document.querySelectorAll(".faq");

faqs.forEach((faq) => {
  faq.addEventListener("click", () => {
    faq.classList.toggle("active");
  });
});

const testimonials = new Swiper(".js-testimonials-slider", {
  grabCursor: true,
  spaceBetween: 30,
  pagination: {
    el: ".js-testimonials-pagination",
    clickable: true,
  },

  breakpoints: {
    767: {
      slidesPerView: 2,
    },
  },
});
