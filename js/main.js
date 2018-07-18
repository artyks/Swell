window.onload = function() {
  const main = document.getElementById('main');
  const body = document.body;
  const header = document.getElementById('header');
  const footer = document.getElementById('theFooter');

  var scrolling = "off";

  var documentHeight = Math.max(document.body.scrollHeight, document.body.offsetHeight, document.documentElement.clientHeight, document.documentElement.scrollHeight, document.documentElement.offsetHeight);
  var windowHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;

  var windowMaxWidth1919 = window.matchMedia("(max-width: 1919px)");
  var windowMaxWidth1439 = window.matchMedia("(max-width: 1439px)");
  var windowMaxWidth1079 = window.matchMedia("(max-width: 1079px)");
  var windowMaxWidth799 = window.matchMedia("(max-width: 799px)");
  var windowMaxWidth599 = window.matchMedia("(max-width: 599px)");

  var windowMinWidth1919 = window.matchMedia("(min-width: 1919px)");
  var windowMinWidth1439 = window.matchMedia("(min-width: 1439px)");
  var windowMinWidth1079 = window.matchMedia("(min-width: 1079px)");
  var windowMinWidth799 = window.matchMedia("(min-width: 799px)");
  var windowMinWidth599 = window.matchMedia("(min-width: 599px)");

  windowMaxWidth1919.addListener(widthChanged);
  windowMaxWidth1439.addListener(widthChanged);
  windowMaxWidth1079.addListener(widthChanged);
  windowMaxWidth799.addListener(widthChanged);
  windowMaxWidth599.addListener(widthChanged);

  windowMinWidth1919.addListener(widthChanged);
  windowMinWidth1439.addListener(widthChanged);
  windowMinWidth1079.addListener(widthChanged);
  windowMinWidth799.addListener(widthChanged);
  windowMinWidth599.addListener(widthChanged);

  var windowMaxWidth = (windowMaxWidth599.matches) ? "599" : (windowMaxWidth799.matches) ? "799" : (windowMaxWidth1079.matches) ? "1079" : (windowMaxWidth1439.matches) ? "1439" : (windowMaxWidth1919.matches) ? "1919" : "1919+";
  var windowMinWidth = (windowMinWidth1919.matches) ? "1919" : (windowMinWidth1439.matches) ? "1439" : (windowMinWidth1079.matches) ? "1079" : (windowMinWidth799.matches) ? "799" : (windowMinWidth599.matches) ? "599" : "300";

  function widthChanged() {
    var windowMaxWidth = (windowMaxWidth599.matches) ? "599" : (windowMaxWidth799.matches) ? "799" : (windowMaxWidth1079.matches) ? "1079" : (windowMaxWidth1439.matches) ? "1439" : (windowMaxWidth1919.matches) ? "1919" : "1919+";
    var windowMinWidth = (windowMinWidth1919.matches) ? "1919" : (windowMinWidth1439.matches) ? "1439" : (windowMinWidth1079.matches) ? "1079" : (windowMinWidth799.matches) ? "799" : (windowMinWidth599.matches) ? "599" : "300";
    var documentHeight = Math.max(document.body.scrollHeight, document.body.offsetHeight, document.documentElement.clientHeight, document.documentElement.scrollHeight, document.documentElement.offsetHeight);
    var windowHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
    if (footer.getAttribute('CTAbutton') == "on") {
      footerCTAButton();
    }
    mobileMenu();
  }


  // EVOKE
  mobileMenu();
  if (footer.getAttribute('CTAbutton') == "on") {
    footerCTAButton();
  }
  if (document.getElementById("CTA")) {
    if (document.getElementById("CTA").getAttribute('CTAbutton') == "on") CTAButton();
  }
  // END>EVOKE

  window.onscroll = function() {
    let scrolled = window.pageYOffset;

    // EVOKE
    if (windowMaxWidth == "599") {
      hideMobileMenu();
    }
    if (windowMinWidth == "1439") {
      sideElementsMovement();
    }
    // END<EVOKE

    // Hide Mobile Menu after scroll 100 - BugFix
    function hideMobileMenu() {
      let mobileMenu = document.getElementsByClassName('mobileMenu')[0];
      let mobileMenuStyle = mobileMenu.style;
      (scrolled > 100) ? mobileMenuStyle.display = ("none") : mobileMenuStyle.display = ("");
    }
    // END>Hide Mobile Menu after scroll 100 - BugFix

    // sideElementsMovement
    function sideElementsMovement() {
      const leftSideElemStyle = document.getElementById('leftSideSocialsFixed').style;
      const rightSideElemStyle = document.getElementById('rightSideSocialsFixed').style;
      let lastScrollPosition;

      if (scrolling == "off") {
        if (scrolled > 1.2 * windowHeight && scrolled < documentHeight - 2 * windowHeight) {
          leftSideElemStyle.transform = "translateZ(0) translate(0, 0) rotate(90deg)";
          rightSideElemStyle.transform = "translateZ(0) translate(0, 0) rotate(90deg)";
        } else {
          leftSideElemStyle.transform = "translateZ(0) translate(0, -75vh) rotate(90deg)";
          rightSideElemStyle.transform = "translateZ(0) translate(0, -75vh) rotate(90deg)";
        }
        // if (scrolled < lastScrollPosition) {
          // if (scrollPosition > 700 && scrollPosition < 1300) {
          //   leftSideElemStyle.willChange = 'transform';
          //   rightSideElemStyle.willChange = 'transform';
          // }
        //   if (scrolled < 100) {
        //     leftSideElemStyle.willChange = 'auto';
        //     rightSideElemStyle.willChange = 'auto';
        //   }
        // } else if (scrolled > lastScrollPosition) {
        //   if (scrollPosition > 100 && scrollPosition < 700) {
        //     leftSideElemStyle.willChange = 'transform';
        //     rightSideElemStyle.willChange = 'transform';
        //   }
        //   if (scrolled > 1300) {
        //     leftSideElemStyle.willChange = 'auto';
        //     rightSideElemStyle.willChange = 'auto';
        //   }
        // }
        // lastScrollPosition = scrolled;
      }
    }
    // END>sideElementsMovement


  }

  // mobileMenu
  function mobileMenu() {
    if (windowMaxWidth == "599") {
      const burgerMenuIcon = document.getElementById('burgerLines');
      let cross = burgerMenuIcon.getAttribute('cross');
      const mobileMenu = document.getElementsByClassName('mobileMenu')[0];
      const mobileMenuItems = document.getElementsByClassName('mobileMenuItem');
      const firstScreen = document.getElementById('firstScreen');
      let mobileMenuTogglePause = "off";

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
    }
  }
  //END>mobileMenu

  //CTAs
  function footerCTAButton() {
    const footerCTAbutton = document.getElementById('footerCTAbutton');
    const CTACrossID = document.getElementById("footerCTAformHeaderCross");
    // var documentHeight = Math.max(document.body.scrollHeight, document.body.offsetHeight, document.documentElement.clientHeight, document.documentElement.scrollHeight, document.documentElement.offsetHeight);
    // var windowHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
    var scrollFixValue = documentHeight - windowHeight - 1;
    let footerCTAButtonTogglePause = "off";
    let CTAForm = document.getElementById("footerCTAformContainerOuterWrap");
    let formVisibility = CTAForm.getAttribute("visibility");
    let bodySection = document.getElementById("bodySection");

    // footerCTAButtonToggle
    CTACrossID.addEventListener('click', footerCTAButtonToggle);
    footerCTAbutton.addEventListener('click', footerCTAButtonToggle);

    function footerCTAButtonToggle() {
      if (footerCTAButtonTogglePause == "off") {
        if (formVisibility == "off") {
          footerCTAButtonTogglePause = "on";
          footer.style.opacity = ('0');
          bodySection.style.transitionDuration = ("0s");
          bodySection.style.marginBottom = ("100vh");
          body.style.overflowY = ('hidden');
          scrollIt(
            100000,
            500,
            'easeOutQuad',
            0
          );
          setTimeout(function() {
            CTAForm.setAttribute("visibility", "on");
            formVisibility = "on";
            bodySection.style.transitionDuration = (".3s");
            footerCTAButtonTogglePause = "off";
          }, 500);
        } else {
          footerCTAButtonTogglePause = "on";
          CTAForm.setAttribute("visibility", "off");
          body.style.overflowY = ('auto');
          bodySection.style.marginBottom = ("");
          setTimeout(function() {
            footer.style.opacity = ('1');
            formVisibility = "off";
            bodySection.style.transitionDuration = ("");
          }, 200);
          //fix for mobile
          setTimeout(function() {
            scrollIt(
              scrollFixValue,
              0,
              'linear',
              0
            );
            footerCTAButtonTogglePause = "off";
          }, 310);
        }
      }
    }
  }

  function CTAButton() {
    const CTAbutton = document.querySelectorAll('.CTAbutton')[0];
    const CTACrossID = document.getElementById("CTAformHeaderCross");
    let CTAButtonTogglePause = "off";
    let CTAForm = document.getElementById("CTAformContainerOuterWrap");
    let formVisibility = CTAForm.getAttribute("visibility");
    let bodySection = document.getElementById("bodySection");

    // CTAButtonToggle
    CTACrossID.addEventListener('click', CTAButtonToggle);
    CTAbutton.addEventListener('click', CTAButtonToggle);

    function CTAButtonToggle() {
      if (CTAButtonTogglePause == "off") {
        if (formVisibility == "off") {
          CTAButtonTogglePause = "on";
          body.style.overflowY = ('hidden');
          main.style.opacity = ('0');
          setTimeout(function() {
            CTAForm.setAttribute("visibility", "on");
            formVisibility = "on";
            CTAButtonTogglePause = "off";
          }, 200);
        } else {
          CTAButtonTogglePause = "on";
          CTAForm.setAttribute("visibility", "off");
          body.style.overflowY = ('auto');
          setTimeout(function() {
            main.style.opacity = ('1');
            formVisibility = "off";
            CTAButtonTogglePause = "off";
          }, 200);
        }
      }
    }
  }
  //END>CTAs




// Smooth-Scrolling function
  function scrollIt(destination, duration = 1000, easing = 'easeInOutQuint', scrollOffset, callback) {

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
    // const scrollOffset = 50;
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
    scrolling = "on";
    // if (window.pageYOffset === destinationOffsetToScroll)
    if ((window.pageYOffset - destinationOffsetToScroll) < 0.5 && (window.pageYOffset - destinationOffsetToScroll) > -1) {
      if (callback) {
        callback();
      }
      scrolling = "off";
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
        'easeInOutCubic',
        50
      );
    });
  });

}
