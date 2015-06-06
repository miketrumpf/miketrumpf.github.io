$(function(){
  console.log("Loaded, bro");

  $(window).on("scroll", parallax);
})


var parallax = function() {
  var scroll = $(window).scrollTop();
  $(".bg1").css("top", (scroll /  5));

}
