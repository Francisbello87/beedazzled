var menuItems = document.getElementById("menuItems");
var productImg = document.getElementById("productImg");
var smallImg = document.getElementsByClassName("small-img");
var loginForm = document.getElementById("login-form");
var regForm = document.getElementById("reg-form");
var indicator = document.getElementById("indicator");

smallImg[0].onclick = function(){
    productImg.src = smallImg[0].src;
}
smallImg[1].onclick = function(){
    productImg.src = smallImg[1].src;
}
smallImg[2].onclick = function(){
    productImg.src = smallImg[2].src;
}
smallImg[3].onclick = function(){
    productImg.src = smallImg[3].src;
}

menuItems.style.maxHeight = "0px";

function menuToggle(){
  if(menuItems.style.maxHeight == "0px")
      {
        menuItems.style.maxHeight = "200px";
      }
      else{
        menuItems.style.maxHeight = "0px";
      }
}


  function register(){

    regForm.style.transform = "translateX(0px)";  
    loginForm.style.transform = "translateX(0px)";
    indicator.style.transform = "translateX(100px)";

  }

  function login(){
    regForm.style.transform = "translateX(300px)";  
    loginForm.style.transform = "translateX(300px)";
    indicator.style.transform = "translateX(0px)";
  }
