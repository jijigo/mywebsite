$(document).ready(function() {

  $('.navbar li a').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 500);
        return false;
      }
    }
  });

  var navbarHeight = $(".navbar").height();
  var lastScrollTop = 0;
  var headerHeight = $(".section.home").height();
  var st = $(this).scrollTop(); //滑動的距離相對於最頂端

  $(window).scroll(function(){
    hasScrolled();
  });

  function hasScrolled() {
    var st = $(this).scrollTop(); //滑動的距離相對於最頂端
    console.log("st: " + st);
    console.log("nav: " + navbarHeight);
    // console.log("lastScrollTop: " + lastScrollTop);
    console.log("headerHeight: " + headerHeight);

    if(st > (headerHeight - navbarHeight)){
      // nav 出現
      $("nav").removeClass("navbar_home");
    } else {
      // nav 隱藏
      $("nav").addClass("navbar_home");
    }
    lastScrollTop = st;
  }

var today = new Date();
var start_year = "2016";
var star_month = "8";
var month = today.getMonth()+1;
var year = today.getFullYear();
var diff = (month - star_month) + 12*(year - start_year);
var diff_year = Math.floor(diff/12);

if(month - star_month < 0){
  if(diff > 12){
    var diff_month = diff - diff_year*12;
  } else {
    diff_month = diff;
  }
} else {
  diff_month = month - star_month;
}

$(".self_time").html(diff_year + "年" + diff_month + "個月。");
// console.log(diff + " " +diff_year + "年" + diff_month + "個月");


$(".hamburger_menu").click(function() {
  $(".navbar ul").slideToggle("show", 5000);
  $(".hamburger").toggleClass("hamburger_exit");
  console.log("hi");
});


});
