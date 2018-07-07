window.onload = function() {
  var burgerMenuIcon = document.getElementById('burgerLines');
  var cross = burgerMenuIcon.getAttribute('cross');
  var mobileMenu = document.getElementsByClassName('mobileMenu')[0];
  var mobileMenuItems = document.getElementsByClassName('mobileMenuItem');
  var main = document.getElementById('main');
  var body = document.body;
  var header = document.getElementById('header');
  var firstScreen = document.getElementById('firstScreen');
  var mobileMenuTogglePause = "off";

// mobileMenuToggle
  burgerMenuIcon.addEventListener('click', mobileMenuToggle);
  mobileMenuItems[0].addEventListener('click', mobileMenuToggle);
  mobileMenuItems[1].addEventListener('click', mobileMenuToggle);
  mobileMenuItems[2].addEventListener('click', mobileMenuToggle);

  function mobileMenuToggle() {
    if (mobileMenuTogglePause == "off") {
      if (cross == "off") {
        mobileMenuTogglePause = "on";
        burgerMenuIcon.setAttribute("cross", "on");
        main.style.opacity  = ('0');
        body.style.overflowY  = ('hidden');
        header.setAttribute("onMobileMenu", "on");
        setTimeout(function() {
          mobileMenu.setAttribute("visibility", "on");
          cross = "on";
          mobileMenuTogglePause = "off";
        }, 200);
      } else {
        mobileMenuTogglePause = "on";
        burgerMenuIcon.setAttribute("cross", "off");
        mobileMenu.setAttribute("visibility", "off");
        body.style.overflowY  = ('auto');
        header.setAttribute("onMobileMenu", "off");
        setTimeout(function() {
          main.style.opacity  = ('1');
          cross = "off";
          mobileMenuTogglePause = "off";
        }, 600);
      }
    }
  }

// Smooth-Scrolling function
  function scrollIt(destination, duration = 1000, easing = 'easeInOutQuint', callback) {

    const easings = {
      linear(t) {
        return t;
      },
      easeInQuad(t) {
        return t * t;
      },
      easeOutQuad(t) {
        return t * (2 - t);
      },
      easeInOutQuad(t) {
        return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
      },
      easeInCubic(t) {
        return t * t * t;
      },
      easeOutCubic(t) {
        return (--t) * t * t + 1;
      },
      easeInOutCubic(t) {
        return t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;
      },
      easeInQuart(t) {
        return t * t * t * t;
      },
      easeOutQuart(t) {
        return 1 - (--t) * t * t * t;
      },
      easeInOutQuart(t) {
        return t < 0.5 ? 8 * t * t * t * t : 1 - 8 * (--t) * t * t * t;
      },
      easeInQuint(t) {
        return t * t * t * t * t;
      },
      easeOutQuint(t) {
        return 1 + (--t) * t * t * t * t;
      },
      easeInOutQuint(t) {
        return t < 0.5 ? 16 * t * t * t * t * t : 1 + 16 * (--t) * t * t * t * t;
      }
    };

    const start = window.pageYOffset;
    const startTime = 'now' in window.performance ? performance.now() : new Date().getTime();
    const documentHeight = Math.max(document.body.scrollHeight, document.body.offsetHeight, document.documentElement.clientHeight, document.documentElement.scrollHeight, document.documentElement.offsetHeight);
    const windowHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
    const destinationOffset = typeof destination === 'number' ? destination : destination.getBoundingClientRect().top + window.pageYOffset;
    const scrollOffset = 50;
    const destinationOffsetToScroll = Math.round(documentHeight - destinationOffset < windowHeight ? (documentHeight - windowHeight) - scrollOffset : destinationOffset - scrollOffset); // scrollOffset is added offset variable

    if ('requestAnimationFrame' in window === false) {
      window.scroll(0, destinationOffsetToScroll);
      if (callback) {
        callback();
      }
      return;
    }

  function scroll() {
    const now = 'now' in window.performance ? performance.now() : new Date().getTime();
    const time = Math.min(1, ((now - startTime) / duration));
    const timeFunction = easings[easing](time);
    window.scroll(0, Math.ceil((timeFunction * (destinationOffsetToScroll - start)) + start));
    // if (window.pageYOffset === destinationOffsetToScroll)
    if ((window.pageYOffset - destinationOffsetToScroll) < 5 && (window.pageYOffset - destinationOffsetToScroll) > -5) {
      if (callback) {
        callback();
      }
      return;
    }

    requestAnimationFrame(scroll);
  }

  scroll();
}

// // Standart invoke
// document.querySelector('.js-btn1').addEventListener('click', () => {
//   scrollIt(
//     document.querySelector('.js-section1'),
//     400,
//     'easeOutQuad',
//     () => console.log(`Just finished scrolling to ${window.pageYOffset}px`)
//   );
// });

// My invoke for all hrefs
  const anchors = [].slice.call(document.querySelectorAll('a.js-scroll'));
  anchors.forEach(function(item) {
    // каждому якорю присваиваем обработчик события
    item.addEventListener('click', () => {
      // e.preventDefault();
      // для каждого якоря берем соответствующий ему элемент и определяем его координату Y
      // let target = document.querySelector(item.getAttribute('href')).getBoundingClientRect().top;
      let target = document.querySelector(item.getAttribute('href'));
      scrollIt(
        document.querySelector(item.getAttribute('href')),
        800,
        'easeInOutCubic'
      );
    });
  });

}
