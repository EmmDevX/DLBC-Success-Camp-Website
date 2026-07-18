window.addEventListener("load", () => {
  const loader = document.querySelector(".loader");

  setTimeout(() => {
    loader.classList.add("loader-hidden");

    loader.addEventListener("transitionend", () => {
      loader.remove();
    });
  }, 2500);
});

//Hamburger Effects
const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("links");

// Open/Close when hamburger is clicked
hamburger.addEventListener("click", (e) => {
  e.stopPropagation();
  hamburger.classList.toggle("active");
  navLinks.classList.toggle("active");
});

// Close when clicking anywhere outside
document.addEventListener("click", (e) => {
  if (
    navLinks.classList.contains("active") &&
    !navLinks.contains(e.target) &&
    !hamburger.contains(e.target)
  ) {
    navLinks.classList.remove("active");
    hamburger.classList.remove("active");
  }
});

// Close when a link is clicked
document.querySelectorAll("#navLinks a").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("active");
    hamburger.classList.remove("active");
  });
});

// Fixed Navbar
const navbar = document.getElementById("navbar");
const header = document.querySelector(".header");

window.addEventListener("scroll", () => {
  if (window.scrollY > header.offsetHeight) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }
});

//Navigation
const sections = document.querySelectorAll(".section");
const dots = document.querySelectorAll(".dot");

window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop - 200;
    const sectionHeight = section.clientHeight;

    if (scrollY >= sectionTop) {
      current = section.getAttribute("id");
    }
  });

  dots.forEach((dot) => {
    dot.classList.remove("active");

    if (dot.getAttribute("href") === "#" + current) {
      dot.classList.add("active");
    }
  });
});

//Slideshow
const slides = document.querySelectorAll(".slide");

let current = 0;

function nextSlide() {
  // Remove active class
  slides[current].classList.remove("active");

  // Stop video if current slide is a video
  if (slides[current].tagName === "VIDEO") {
    slides[current].pause();
  }

  // Move to next slide
  current = (current + 1) % slides.length;

  // Show next slide
  slides[current].classList.add("active");

  // If next slide is a video
  if (slides[current].tagName === "VIDEO") {
    slides[current].currentTime = 0;
    slides[current].play();

    // Wait until video ends before moving on
    slides[current].onended = nextSlide;
  } else {
    // Images stay for 5 seconds
    setTimeout(nextSlide, 5500);
  }
}

// Start the slideshow
showFirst();

function showFirst() {
  slides[0].classList.add("active");

  setTimeout(nextSlide, 5500);
}


//BacktoTop
const backTop = document.getElementById("backTop");

window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
        backTop.style.display = "block";
    } else {
        backTop.style.display = "none";
    }
});

backTop.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});