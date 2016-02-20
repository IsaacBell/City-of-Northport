$(document).ready(function() {
  $('#show_menu').sidr({ side: 'right' });
  $(".header, .basic_content_wrapper, .sidebar_content_wrapper, .footer").click( function() {
    $.sidr('close');
  });

  $("#show_banner_links").click(function(event) {
    event.preventDefault(); 

    $(".banner-links").find(".grid-row").slideToggle();
    if ( $(this).html() == "Show Menu" ) {
      $(this).html("Hide Menu");
      var parent = $(this).parent(); 
      if (parent.hasClass("above")) {
        parent.css("border-bottom","1px solid rgba(177, 87, 87, 0.76)");
        parent.css("margin-bottom","8px");
      }
      else if (parent.hasClass("beneath")) {
        parent.css("border-top","1px solid rgba(177, 87, 87, 0.76)");
        parent.css("margin-top","8px");
      }
    }
    else {
      $(this).html("Show Menu"); 
      $(this).parent().css("border-top","0");
      $(this).parent().css("margin-top","0");
      $(this).parent().css("margin-bottom","0");
      $(this).parent().css("border-bottom","0");
    }
  });

  $(window).resize(function() {
    if ( $(window).width() > 762 ) {
      $(".banner-links").find(".grid-row").show();
      $(".left-sidebar").find(".menu").show(); 
    }
    else {
      $(".banner-links").find(".grid-row").hide();
      var menu = $(".left-sidebar").find(".menu"); 
      if ( !menu.is(':visible') ) {

      }
  //    $(".left-sidebar").find(".menu").hide(); 
      $("#show_banner_links").html("Show Menu"); 
      $("#show_banner_links").parent().css("border-top","0");
      $("#show_banner_links").parent().css("margin-top","0");
      $("#show_banner_links").parent().css("margin-bottom","0");
      $("#show_banner_links").parent().css("border-bottom","0");
    }
  });

  $(".left-sidebar").find(".section-heading.nav").click(function() {
    if ( $(window).width() < 762 ) {
      $(this).next(".menu").slideToggle();
      $(this).find(".arrow").toggleClass("down_arrow"); 
      $(this).find(".arrow").toggleClass("up_arrow"); 
    }
  });

});