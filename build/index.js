const words = ["Across the green blades,sky and forests....", "Known to Unkown."];
let i = 0;
let j = 0;
let currentWord = "";
let isDeleting = false;

function type() {
  currentWord = words[i];
  if (isDeleting) {
    document.getElementById("typewriter").textContent = currentWord.substring(0, j-1);
    j--;
    if (j == 0) {
      isDeleting = false;
      i++;
      if (i == words.length) {
        i = 0;
      }
    }
  } else {
    document.getElementById("typewriter").textContent = currentWord.substring(0, j+1);
    j++;
    if (j == currentWord.length) {
      isDeleting = true;
    }
  }
  setTimeout(type, 120);
}

type();
let slideIndex = 0;

    function showSlides() {
      let i;
      let slides = document.getElementsByClassName("mySlides");
      let dots = document.getElementsByClassName("dot");

      for (i = 0; i < slides.length; i++) {
        slides[i].classList.add("hidden", "opacity-0");
      }

      slideIndex++;

      if (slideIndex > slides.length) {
        slideIndex = 1;
      }

      slides[slideIndex - 1].classList.remove("hidden");
      void slides[slideIndex - 1].offsetWidth; // Trigger reflow to apply transition
      slides[slideIndex - 1].classList.add("opacity-100");

      for (i = 0; i < dots.length; i++) {
        dots[i].classList.remove("active");
      }

      dots[slideIndex - 1].classList.add("active");
    }

    // Auto transition every 5 seconds (5000 milliseconds)
    setInterval(function () {
      showSlides();
    }, 2000);

    // Function to handle manual slide changes
    function plusSlides(n) {
      slideIndex += n;
      if (slideIndex > 5) { slideIndex = 1; }
      if (slideIndex < 1) { slideIndex = 5; }
      showSlides();
    }

    // Function to handle dot clicks
    function currentSlide(n) {
      slideIndex = n - 1;
      showSlides();
    }