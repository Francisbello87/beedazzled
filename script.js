var menuItems = document.getElementById("menuItems");
var productImg = document.getElementById("productImg");
var smallImg = document.getElementsByClassName("small-img");
var loginForm = document.getElementById("login-form");
var regForm = document.getElementById("reg-form");
var indicator = document.getElementById("indicator");
const navBar = document.querySelector(".navbar");
const navHeight = navBar.getBoundingClientRect().height;
const fname = document.getElementById("fname");
const email = document.getElementById("email");
const password = document.getElementById("password");
const password2 = document.getElementById("password2");
const username = document.getElementById("username");
const loginPassword = document.getElementById("login-password");
const formContainer = document.querySelector(".form-container");

window.addEventListener("scroll", () => {
  const scrollHeight = window.pageYOffset;
  if (scrollHeight > navHeight) {
    navBar.classList.add("fix-nav");
  } else {
    navBar.classList.remove("fix-nav");
  }
});
const options = { threshold: 0.4 };
const addActiveClass = (entries, observer) => {
  // entries.forEach((entry) => {
  //   if (entry.isIntersecting) {
  //     let currentActive = document.querySelector(".desktop-nav a.active");
  //     if (currentActive) {
  //       currentActive.classList.remove("active");
  //     }
  //     let newActive = document.querySelector(
  //       `.desktop-nav a[href="#${entry.target.getAttribute("id")}"]`
  //     );
  //     newActive.classList.add("active");
  //   }
  // });
};
const observer = new IntersectionObserver(addActiveClass, options);
const sections = document.querySelectorAll("section");
sections.forEach((section) => {
  observer.observe(section);
});
const faders = document.querySelectorAll(".fade-in");
const sliders = document.querySelectorAll(".slide-in");
const appearOptions = { threshold: 0, rootMargin: "0px 0px -50px 0px" };
const appearOnScroll = new IntersectionObserver(function (
  entries,
  appearOnScroll
) {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) {
      return;
    } else {
      entry.target.classList.add("appear");
      appearOnScroll.unobserve(entry.target);
    }
  });
},
appearOptions);

faders.forEach((fader) => appearOnScroll.observe(fader));

sliders.forEach((slider) => {
  appearOnScroll.observe(slider);
});
loginForm.addEventListener("submit", (e) => {
  e.preventDefault();

  validateLoginInputs();
});
regForm.addEventListener("submit", (e) => {
  e.preventDefault();

  validateInputs();
  heightIncrease();
});

const setError = (element, message) => {
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector(".error");
  errorDisplay.innerText = message;
  inputControl.classList.add("error");
  inputControl.classList.remove("success");
};

const setSuccess = (element) => {
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector(".error");
  errorDisplay.innerText = "";
  inputControl.classList.add("success");
  inputControl.classList.remove("error");
};

const isValidEmail = (email) => {
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
};

const heightIncrease = () => {
  formContainer.style.height = "500px";
};
const validateLoginInputs = () => {
  const usernameValue = username.value.trim();
  const loginPasswordValue = loginPassword.value.trim();
  if (usernameValue === "") {
    setError(username, "Username is required");
  } else {
    setSuccess(username);
  }
  if (loginPasswordValue === "") {
    setError(loginPassword, "Password is required");
  } else if (loginPasswordValue.length < 12) {
    setError(loginPassword, "Incorrect Password");
  } else {
    setSuccess(loginPassword);
  }
};
const validateInputs = () => {
  const fnameValue = fname.value.trim();
  const emailValue = email.value.trim();
  const passwordValue = password.value.trim();
  const password2Value = password2.value.trim();

  if (fnameValue === "") {
    setError(fname, "Full name is required");
  } else {
    setSuccess(fname);
  }
  if (emailValue === "") {
    setError(email, "Email is required");
  } else if (!isValidEmail(emailValue)) {
    seError(email, "Provide a valid email address");
  } else {
    setSuccess(email);
  }

  if (passwordValue === "") {
    setError(password, "Password is required");
  } else if (passwordValue.length < 12) {
    setError(password, "Password must be at least 12 characters.");
  } else {
    setSuccess(password);
  }
  if (password2Value === "") {
    setError(password2, "Please confirm your password");
  } else if (password2Value !== passwordValue) {
    setError(password2, "Passwords do not match");
  } else {
    setSuccess(password2);
  }
};

// // Active Nav Starts
const activePage = window.location.pathname;
// console.log(activePage);
const navLinks = document.querySelectorAll("nav a").forEach((link) => {
  // console.log(link.href);
  if (link.href.includes(`${activePage}`)) {
    link.classList.add("active");
  }
});

smallImg[0].onclick = function () {
  productImg.src = smallImg[0].src;
};
smallImg[1].onclick = function () {
  productImg.src = smallImg[1].src;
};
smallImg[2].onclick = function () {
  productImg.src = smallImg[2].src;
};
smallImg[3].onclick = function () {
  productImg.src = smallImg[3].src;
};

menuItems.style.maxHeight = "0px";

function menuToggle() {
  if (menuItems.style.maxHeight == "0px") {
    menuItems.style.maxHeight = "200px";
  } else {
    menuItems.style.maxHeight = "0px";
  }
}

function register() {
  regForm.style.transform = "translateX(0px)";
  loginForm.style.transform = "translateX(0px)";
  indicator.style.transform = "translateX(100px)";
}

function login() {
  regForm.style.transform = "translateX(300px)";
  loginForm.style.transform = "translateX(300px)";
  indicator.style.transform = "translateX(0px)";
  regForm.classList.remove("form-height");
}

// // Form Validation Begins
