function navClicked(index) {
  $(".nav-item>.active").removeClass("active");
  $("#navItem-" + index).addClass("active");

  //   switch (index) {
  //     case 0:
  //       console.log("Home Clicked");
  //       $(".nav-item>.active").removeClass("active");
  //       $("#navItem-0");
  //       break;
  //     case 1:
  //       console.log("Resume Clicked");
  //       break;
  //     case 2:
  //       console.log("Portfolio Clicked");
  //       break;
  //     case 3:
  //       console.log("Contact Clicked");
  //       break;
  //     default:
  //       console.log("none of the valid nav options clicked");
  //       break;
  //   }
}
