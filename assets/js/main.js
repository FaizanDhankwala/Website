/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

/*===== MENU SHOW =====*/
/* Validate if constant exists */
if(navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu')
    })
}

/*===== MENU HIDDEN =====*/
/* Validate if constant exists */
if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu')
    })
}

/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll('.nav__link')

const linkAction = () =>{
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*=============== SHADOW HEADER ===============*/
const shadowHeader = () =>{
   const header = document.getElementById('header')
   // When the scroll is greater than 50 viewport height, add the shadow-header class to the header tag
   this.scrollY >= 50 ? header.classList.add('shadow-header') 
                      : header.classList.remove('shadow-header')
}
window.addEventListener('scroll', shadowHeader)

/*=============== EMAIL JS ===============*/
const contactForm = document.getElementById('contact-form'),
      contactMessage = document.getElementById('contact-message')

const sendEmail = (e) =>{
   e.preventDefault()

   // serviceID - templateID - #form - publicKey
   emailjs.sendForm('','','#contact-form','')
      .then(() =>{
         // Show sent message
         contactMessage.textContent = 'Message sent successfully ✅'

         // Remove message after five seconds
         setTimeout(() =>{
            contactMessage.textContent = ''
         }, 5000)

         // Clear input fields
         contactForm.reset()

      }, () =>{
         // Show error message
         contactMessage.textContent = 'Message not sent (service error) ❌'
      })
}

contactForm.addEventListener('submit', sendEmail)

/*=============== CUSTOM CURSOR ===============*/
document.addEventListener('DOMContentLoaded', function() {
    const cursorOuter = document.querySelector('.cursor-outer');
    const cursorInner = document.querySelector('.cursor-inner');
    
    // Update cursor position on mouse move
    document.addEventListener('mousemove', function(e) {
        if (cursorOuter && cursorInner) {
            // Use requestAnimationFrame for smoother animation
            requestAnimationFrame(() => {
                cursorOuter.style.left = e.clientX + 'px';
                cursorOuter.style.top = e.clientY + 'px';
                
                cursorInner.style.left = e.clientX + 'px';
                cursorInner.style.top = e.clientY + 'px';
            });
        }
    });
    
    // Add hover effect on interactive elements
    const interactiveElements = document.querySelectorAll('a, button, input, textarea, select, .swiper-button-prev, .swiper-button-next, .swiper-pagination');
    
    interactiveElements.forEach(element => {
        element.addEventListener('mouseenter', () => {
            cursorOuter.style.transform = 'translate(-50%, -50%) scale(1.5)';
            cursorInner.style.transform = 'translate(-50%, -50%) scale(0.5)';
        });
        
        element.addEventListener('mouseleave', () => {
            cursorOuter.style.transform = 'translate(-50%, -50%) scale(1)';
            cursorInner.style.transform = 'translate(-50%, -50%) scale(1)';
        });
    });
});

/*=============== SHOW SCROLL UP ===============*/ 
const scrollUp = () => {
	const scrollUp = document.getElementById('scroll-up')
	// When the scroll is higher than 350 viewport height, add the show-scroll class to the a tag with the scrollup class
	this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
						: scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)

/*=============== TYPING EFFECT ===============*/
const typingTextElement = document.querySelector('.typing-text');
const phrases = [
  "Software Engineer and Data Analyst",
  "Clothing Brand Owner Outside of Work.",
  "I Have Experience in Java, Python, FullStack, Databases and More.",
  "Always Building, Always Creating, Always Learning.",

];

let phraseIndex = 0;
let charIndex = 0;
let isDeleting = false;
let typingDelay = 100; // Delay between each character typing
let erasingDelay = 50; // Delay between each character erasing
let newPhraseDelay = 2000; // Delay before starting to type a new phrase

function typeEffect() {
  const currentPhrase = phrases[phraseIndex];
  
  if (isDeleting) {
    // Erasing text
    typingTextElement.textContent = currentPhrase.substring(0, charIndex - 1);
    charIndex--;
    typingDelay = erasingDelay;
  } else {
    // Typing text
    typingTextElement.textContent = currentPhrase.substring(0, charIndex + 1);
    charIndex++;
    typingDelay = 100;
  }
  
  // If phrase is complete, start deleting after delay
  if (!isDeleting && charIndex === currentPhrase.length) {
    isDeleting = true;
    typingDelay = newPhraseDelay;
  }
  
  // If deletion is complete, move to next phrase
  if (isDeleting && charIndex === 0) {
    isDeleting = false;
    phraseIndex = (phraseIndex + 1) % phrases.length;
  }
  
  setTimeout(typeEffect, typingDelay);
}

// Start the typing effect when the page loads
document.addEventListener('DOMContentLoaded', () => {
  setTimeout(typeEffect, 1000); // Start after 1 second
});

/*=============== TIMELINE ANIMATION ===============*/
function animateTimeline() {
  const timelineItems = document.querySelectorAll('.timeline__item');
  
  // Check if element is in viewport
  const isInViewport = (element) => {
    const rect = element.getBoundingClientRect();
    return (
      rect.top <= (window.innerHeight || document.documentElement.clientHeight) * 0.8 &&
      rect.bottom >= 0
    );
  };
  
  // Show timeline items when they enter the viewport
  const showTimelineItems = () => {
    timelineItems.forEach(item => {
      if (isInViewport(item)) {
        item.classList.add('show-item');
      }
    });
  };
  
  // Initial check on page load
  showTimelineItems();
  
  // Check on scroll
  window.addEventListener('scroll', showTimelineItems);
}

// Initialize timeline animations when the page loads
document.addEventListener('DOMContentLoaded', () => {
  animateTimeline();
});

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]')
    
const scrollActive = () =>{
  	const scrollDown = window.scrollY

	sections.forEach(current =>{
		const sectionHeight = current.offsetHeight,
			  sectionTop = current.offsetTop - 58,
			  sectionId = current.getAttribute('id'),
			  sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')

		if(scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight){
			sectionsClass.classList.add('active-link')
		}else{
			sectionsClass.classList.remove('active-link')
		}                                                    
	})
}
window.addEventListener('scroll', scrollActive)

/*=============== DARK LIGHT THEME ===============*/ 
const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'ri-sun-line'

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'ri-moon-line' : 'ri-sun-line'

// We validate if the user previously chose a topic
if (selectedTheme) {
  // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
  themeButton.classList[selectedIcon === 'ri-moon-line' ? 'add' : 'remove'](iconTheme)
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener('click', () => {
    // Add or remove the dark / icon theme
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)
    // We save the theme and the current icon that the user chose
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})

/*=============== PARALLAX EFFECT ===============*/
document.addEventListener('mousemove', function(e) {
  const shapes = document.querySelectorAll('.shape');
  
  shapes.forEach((shape, index) => {
    // Get shape position and dimensions
    const shapeRect = shape.getBoundingClientRect();
    const shapeX = shapeRect.left + shapeRect.width / 2;
    const shapeY = shapeRect.top + shapeRect.height / 2;
    
    // Calculate distance between mouse and shape center
    const distanceX = e.clientX - shapeX;
    const distanceY = e.clientY - shapeY;
    const distance = Math.sqrt(distanceX * distanceX + distanceY * distanceY);
    
    // Define escape threshold and factor
    const escapeThreshold = 200; // Distance at which shapes start to escape
    const escapeFactor = 0.5; // How strongly shapes move away
    
    // Calculate escape movement (inverse to mouse direction)
    let moveX = 0;
    let moveY = 0;
    
    if (distance < escapeThreshold) {
      // Calculate escape intensity based on proximity (closer = stronger)
      const escapeIntensity = (escapeThreshold - distance) / escapeThreshold;
      
      // Calculate escape direction (away from mouse)
      moveX = -distanceX * escapeIntensity * escapeFactor;
      moveY = -distanceY * escapeIntensity * escapeFactor;
    }
    
    // Apply transform without overriding the base animation
    // Use requestAnimationFrame for smoother animation
    requestAnimationFrame(() => {
      // Get the current transform for the base animation
      const baseTransform = window.getComputedStyle(shape).getPropertyValue('transform');
      const matrix = new DOMMatrix(baseTransform);
      
      // Apply the escape movement on top of the base animation
      shape.style.transform = `translate(${moveX}px, ${moveY}px) scale(${matrix.m11}, ${matrix.m22}) rotate(${Math.atan2(matrix.m12, matrix.m11)}rad)`;
      
      // Add transition for smoother movement
      shape.style.transition = 'transform 0.3s ease-out';
    });
  });
});

// Add scroll parallax effect
window.addEventListener('scroll', function() {
  const scrollPosition = window.scrollY;
  const shapes = document.querySelectorAll('.shape');
  
  shapes.forEach((shape, index) => {
    // Different scroll speed for each shape
    const scrollSpeed = (index + 1) * 0.05;
    const moveY = scrollPosition * scrollSpeed;
    
    // Get current transform and add scroll effect
    const currentTransform = shape.style.transform || '';
    if (!currentTransform.includes('translateY')) {
      shape.style.transform = currentTransform + ` translateY(${-moveY}px)`;
    } else {
      // Update existing translateY
      const regex = /translateY\(([^)]+)\)/;
      shape.style.transform = currentTransform.replace(regex, `translateY(${-moveY}px)`);
    }
  });
});

/*=============== SPOTIFY PLAYER ===============*/
document.addEventListener('DOMContentLoaded', () => {
    // Show Spotify player after a short delay
    setTimeout(() => {
        const spotifyPlayer = document.getElementById('spotify-player')
        if (spotifyPlayer) {
            spotifyPlayer.style.opacity = '1';
        }
    }, 2000) // Show after 2 seconds
})

/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 400,
    // reset: true // Animations repeat
 })

 sr.reveal(`.home__perfil, .about__image, .contact__mail`, {origin: 'right'})
 sr.reveal(`.home__name, .home__info, 
            .about__container .section__title-1, .about__info, 
            .contact__social, .contact__data`, {origin: 'left'})
 sr.reveal(`.services__card, .projects__card`, {interval: 100})