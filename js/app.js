//counter code start
const counters = document.querySelectorAll(".counter");

const options = {
  root: null,
  rootMargin: "0px",
  threshold: 0.5,
};

const incrementCounter = (counter, target) => {
  const increment = target / 200;
  let currentCount = 0;

  const timer = setInterval(() => {
    currentCount += increment;
    counter.innerText = `+${Math.ceil(currentCount)}`;

    if (currentCount >= target) {
      clearInterval(timer);
      counter.innerText = `+${target}`;
    }
  }, 10);
};

const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      const targetCount = +entry.target.getAttribute("data-target");
      const counter = entry.target;
      incrementCounter(counter, targetCount);
      observer.unobserve(entry.target);
    }
  });
}, options);

counters.forEach((counter) => {
  observer.observe(counter);
});
//counter code end.

//video code start
function toggleVideo() {
  var thumbnailImage = document.querySelector(".thumbnail-image");
  var playButton = document.querySelector(".play-button");
  var videoPlayer = document.getElementById("video-player");

  thumbnailImage.style.display = "none";
  playButton.style.display = "none";
  videoPlayer.style.display = "block";
  videoPlayer.play();
}
//video code end.



//form submit code start
const headerSubmit = document.querySelector(".headerSubmit");
headerSubmit.addEventListener('click', function(e){
  e.preventDefault()
});

const footerSubmit = document.querySelector(".footerSubmit");
footerSubmit.addEventListener('click', function(e){
  e.preventDefault()
});
//form submit code end.

// ############################# animation js start::

// Function to check if an element is in the viewport
const isInViewport = (element) => {
  const rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
};

// Function to add animation class when element is in viewport
const animateOnScroll = () => {
  const elements = document.querySelectorAll('.zoomIn, .fadeInLeft, .fadeInUp, .slideInDown');
  elements.forEach((element) => {
    if (isInViewport(element)) {
      element.classList.add('animate');
    }
  });
};

// Add scroll event listener
window.addEventListener('scroll', animateOnScroll);

// Trigger animation on initial page load
animateOnScroll();

// // ################################################### animation js code end
