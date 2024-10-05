// Mobile navigation toggle and exterior focus trapping
let navWrapper = document.querySelector('[data-target="nav-wrapper"]');
let navToggle = document.querySelector("[data-action='nav-toggle']");
let navIcon = navToggle ? navToggle.querySelector("i") : null;
let navigation = document.querySelector("[data-target='main-navigation']");
let submenuToggles = document.querySelectorAll("[data-action='submenu-toggle']");

// Hide element by clicking outside of its parent
function closeSubMenuOnOutsideClick(event, target) {
  const withinBoundaries = event.composedPath().includes(target.parentElement)
  if (!withinBoundaries) {
    target.hidden = true;
    let submenuToggle = target.previousElementSibling;
    submenuToggle.classList.remove("submenu-open");
  }
}

if (submenuToggles.length) {
  submenuToggles.forEach(btn => {
    btn.addEventListener("click", (e) => {
      let submenu = btn.nextElementSibling;
      submenu.hidden = !submenu.hidden;
      if (!submenu.hidden) {
        btn.classList.add("submenu-open");
        document.addEventListener('click', (event) => {
          closeSubMenuOnOutsideClick(event, submenu);
        });
        submenu.addEventListener("keyup", (e) => {
          if (e.code === "Escape") {
            btn.click();
            btn.focus();
          }
        });
      } else {
        btn.classList.remove("submenu-open");
      }
    });
  })
}

// Mobile nav focus trap func
function mobileNavFocusTrap(element) {
  var focusableEls = element.querySelectorAll('[data-mobile-nav-item]');
  var firstFocusableEl = focusableEls[0];
  var lastFocusableEl = focusableEls[focusableEls.length - 1];
  var KEYCODE_TAB = 'Tab';

  element.addEventListener('keydown', function (e) {
    var isTabPressed = (e.key === KEYCODE_TAB|| e.keyCode === KEYCODE_TAB);

    if (!isTabPressed || window.innerWidth >= 950 || navigation.classList.contains('mobile-hidden')) {
      return;
    }

    if (e.shiftKey) /* shift + tab */ {
      if (document.activeElement === firstFocusableEl) {
        lastFocusableEl.focus();
        e.preventDefault();
      }
    } else /* tab */ {
      if (document.activeElement === lastFocusableEl) {
        firstFocusableEl.focus();
        e.preventDefault();
      }
    }
  });
}

// Hide an element by clicking outside of it
function closeMenuOnOutsideClick(event, target) {
  const withinBoundaries = event.composedPath().includes(target)
  if (!withinBoundaries) {
    target.hidden = true;
  }
}

function toggleNavClassesOnOutsideClick(event, target) {
  const withinNavToggler = event.composedPath().includes(navToggle);
  const withinBoundaries = event.composedPath().includes(target)
  if (!withinBoundaries && !withinNavToggler) {
    navigation.classList.add("mobile-hidden");
    navigation.classList.remove("mobile-visible");
    navIcon.classList.add("fa-bars");
    navIcon.classList.remove("fa-times");
  }
}

if (navigation) {
  document.addEventListener('click', (event) => {
    toggleNavClassesOnOutsideClick(event, navigation);
  });
}

if (navToggle && navIcon) {
  navToggle.addEventListener("click", (e) => {
    navigation.classList.toggle("mobile-hidden");
    navigation.classList.toggle("mobile-visible");
    navIcon.classList.toggle("fa-bars");
    navIcon.classList.toggle("fa-times");
    if (navigation.classList.contains("mobile-visible")) {
      mobileNavFocusTrap(navWrapper);
    }
  });
}

if (navWrapper) {
  // Toggle mobile nav with escape key
  navWrapper.addEventListener("keyup", (e) => {
    if (window.innerWidth < 950 && e.code === "Escape") {
      navToggle.click();
      navToggle.focus();
    }
  });
}

// User navigation toggle
let accountNavToggle = document.querySelector("[data-action='account-nav-toggle']");
let accountNavigation = document.querySelector("[data-target='account-nav']");

if (accountNavToggle) {
  accountNavToggle.addEventListener("click", (e) => {
    e.stopPropagation();
    accountNavigation.hidden = !accountNavigation.hidden;
    accountNavigation.querySelector('a:not([disabled])').focus();
  });
}

// Close user navigation with escape key
if (accountNavigation) {
  accountNavigation.addEventListener("keyup", (e) => {
    e.stopPropagation();
    if (e.code === "Escape") {
      accountNavigation.hidden = true;
      accountNavToggle.focus();
    }
  });

  document.addEventListener('click', (event) => {
    closeMenuOnOutsideClick(event, accountNavigation);
  });

  // Focus trap account navigation
  trapFocus(accountNavigation);
}
