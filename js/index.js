$(document).ready(function () {

  qchk=true;
  
  $(".toggle").click(function(){

    $(this).find("span").toggleClass("menu-open");
    if(qchk){
      $("nav").stop().animate({right:"-60px"},500);
      qchk=false;
    }else{
      $("nav").stop().animate({right:"-260px"},500);
      qchk=true;
    }

  });
  

});