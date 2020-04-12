$(document).ready(function () {
  scrollWorks();
  $("#services .owl-carousel").owlCarousel({
    loop: true,
    responsive: {
      0: {
        items: 1,
        onDragged: getActiveSmallScreen,
      },
      576: {
        items: 3,
        onDragged: getActiveLargeScreen,
      },
    },
  });
  $(".apps-image .owl-carousel").owlCarousel({
    loop: true,
    responsive: {
      0: {
        items: 1,
      }
      
    },
  });
  $("#price-slider").owlCarousel({
    loop: false,
    responsive: {
      0: {
        items: 1,
      },
      576:{
        items:2
      },
      992:{
        items:3
      }
      
    },
  });
  $("#teams .owl-carousel").owlCarousel({
    loop: false,
    responsive: {
      0: {
        items: 1,
  
      },
      512:{
        items:2
      },
      768:{
        items:3
      },
      1200:{
        items:4
      }
    
     

    },
  });
  $('#testimonial-slider').owlCarousel({
      items: 1,
      loop:true,
      autoplay:true,
      autoplayTimeout:10000,
      nav:true, 
      navText:['<button type="button" role="presentation" class="owl-prev"><i class="fas fa-angle-left"></i></button>','<button type="button" role="presentation" class="owl-next"><i class="fas fa-angle-right"></i></button>'],
      animateIn: 'fadeIn',
  });
 
//   jQuery('#grid-mosaic').cubeportfolio({
//     filters: '#mosaic-filter',
//     defaultFilter: '*',
//     animationType: 'quicksand',
//     mediaQueries: [{
//       width: 1500,
//       cols: 5,
//   }, {
//       width: 1100,
//       cols: 4,
//   }, {
//       width: 800,
//       cols: 3,
//   }, {
//       width: 480,
//       cols: 5,
//       options: {
//           caption: '',
//           gapHorizontal: 15,
//           gapVertical: 15,
//       }
//   }],
// });
  //--------------------------------------

  $(document).on("click", ".nav-item .nav-link", function () {
    let allNavLinks = $(".nav-item .nav-link");

    allNavLinks.each(function (index, element) {
      $(element).removeClass("nav-link-active");
    });
    $(this).addClass("nav-link-active");
  });
  $(document).on("click", ".side-navbar li a", function () {
  

    let allNavLinks = $(".side-navbar li a");

    allNavLinks.each(function (index, element) {
      $(element).removeClass("side-link-active");
    });
    $(this).addClass("side-link-active");
  });
  //Nav active end
  //--------------------------------------
  $(document).on("click", ".left-numbers span", function () {
    clearInterval(timer);
    let allLeftNumbers = $(".left-numbers span");
    let allBgImages = $(".background-image img");

    let currentIndex = $(this).index();
    headerCondition(currentIndex);

    allBgImages.each(function (index, element) {
      if ($(element).index() == currentIndex) {
        $(element).addClass("active-bg-image");
      } else {
        $(element).removeClass("active-bg-image");
      }
    });

    allLeftNumbers.each(function (index, element) {
      $(element).removeClass("left-active-number");
    });
    $(this).addClass("left-active-number");
  });

  let counter = 1;
  let timer;
  function sliderTimer() {
    counter++;

    let sliderImages = $(".background-image img");
    sliderImages.each(function (index, element) {
      $(element).removeClass("active-bg-image");
    });
    if (counter == 4) {
      counter = 1;
    }
    $($(".background-image img")[counter - 1]).addClass("active-bg-image");
    let currentIndex = $($(".background-image img")[counter - 1]).index();
    let allLeftNumbers = $(".left-numbers span");
    allLeftNumbers.each(function (index, element) {
      if ($(element).index() == currentIndex) {
        $(element).addClass("left-active-number");
      } else {
        $(element).removeClass("left-active-number");
      }
    });
    textChange();
  }

  //timer = setInterval(sliderTimer, 5000);
  // Slider end
  function getActiveLargeScreen() {
    let activeOwlItemActives = $(".owl-stage .active");
    activeOwlItemActives.each(function (index, element) {
      if (index == 1) {
        $(element).find(".service-box").addClass("active-service-box");
      } else {
        $(element).find(".service-box").removeClass("active-service-box");
      }
    });
  }
  function textChange() {
    let currentLeftNumber = ".left-active-number";
    let currentLeftNumberIndex = $(currentLeftNumber).index();

    headerCondition(currentLeftNumberIndex);
  }
  function headerCondition(currentIndex) {
    let allBannerTexts = $(".background-image-text .content");

    allBannerTexts.each(function (index, element) {
      if (currentIndex == $(element).index()) {
        $(element).find(".light-header").addClass("light-header-active");
        $(element).find(".light-header").removeClass("light-header-deactive");
        $(element).find(".heavy-header").addClass("heavy-header-active");
        $(element).find(".heavy-header").removeClass("heavy-header-deactive");
        $(element).find(".small-header").addClass("small-header-active");
        $(element).find(".small-header").removeClass("small-header-deactive");
      } else {
        $(element).find(".light-header").removeClass("light-header-active");
        $(element).find(".light-header").addClass("light-header-deactive");
        $(element).find(".heavy-header").addClass("heavy-header-deactive");
        $(element).find(".heavy-header").removeClass("heavy-header-active");
        $(element).find(".small-header").addClass("small-header-deactive");
        $(element).find(".small-header").removeClass("small-header-active");
      }
    });
  }
  // side menu opener

  $(document).on("click", ".sidemenu-btn", function () {
    $(".side-menu-overlay").addClass("side-overlay-active");
    $(".side-menu ").addClass("side-menu-active");
    $("body").css("overflow-y", "hidden");
    let allSideLinks = $(".side-navbar li");
    allSideLinks.each(function (index, element) {
      $(element).addClass("side-link-anime");
    });
  });
  $(document).on("click", ".close-icon i", function () {
    $(".side-menu-overlay").removeClass("side-overlay-active");
    let allSideLinks = $(".side-navbar li");
    $("body").css("overflow-y", "auto");
    $(".side-menu ").removeClass("side-menu-active");
    allSideLinks.each(function (index, element) {
      $(element).removeClass("side-link-anime");
    });
  });
  //Process hover and Iphone lock-btn hover down
  $(document).on("mouseenter", ".process-bottom li", function () {
    let allProcessLi = $(".process-bottom li");

    allProcessLi.each(function (index, element) {
      $(element).find("span").removeClass("process-span-active");
    });
    $(this).find("span").addClass("process-span-active");
  });
  $(document).on("mouseleave", ".process-bottom li", function () {
    let allProcessLi = $(".process-bottom li");
    allProcessLi.each(function (index, element) {
      $(element).find("span").removeClass("process-span-active");
    });
    $(".process-bottom li:nth-child(3)")
      .find("span")
      .addClass("process-span-active");
  });
  $(document).on("mouseenter", ".iphone-frame,#apps-slider", function () {
    //Iphone ******************
    let lockBtn = $(".apps-image .lock-icon-btn");
    lockBtn.addClass("lock-icon-btn-active");
  });
  $(document).on("mouseleave", ".iphone-frame,#apps-slider", function () {
    //Iphone ******************
    let lockBtn = $(".apps-image .lock-icon-btn");
    lockBtn.removeClass("lock-icon-btn-active");
  });
  
  //Process hover and Iphone lock-btn hover up

  function getActiveSmallScreen() {
    let activeOwlItemActives = $(".owl-stage .active");
    activeOwlItemActives.each(function (index, element) {
      $(element).find(".service-box").removeClass("active-service-box");
    });
  }
  function scrollWorks() {
    window.onscroll = function () {
      getScroll();
    };
    function getScroll() {
      let scrollTop = window.pageYOffset;
      if (scrollTop > 350) {
        $(".logo-default").hide();
        $(".logo-scrolled").show();
        $(".nav-link").addClass("dark-text-color");
        $(".sidemenu-btn span").addClass("side-btn-span-dark");
        $("nav").addClass("fixedmenu");
      } else {
        $(".logo-default").show();
        $(".logo-scrolled").hide();
        $(".nav-link").removeClass("dark-text-color");
        $(".sidemenu-btn span").removeClass("side-btn-span-dark");
        $("nav").removeClass("fixedmenu");
      }
    }
  }
  //Iphone lock btn
  $(document).on('click','.lock-icon-btn',function () {
    $('#apps-slider').toggle();
    
  })

  $(document).on('click','.price-toggle-wrapper .Pricing-toggle-button',function () {

          if($(this).hasClass('year')){   
            $('.Pricing-toggle-button.month').removeClass('active-price-month');
          $('.Pricing-toggle-button.month').addClass('active-price-year');
          $('.Pricing-toggle-button.month').addClass('price-toggle-darkcolor');
          $('.Pricing-toggle-button.year').addClass('price-toggle-whitecolor');
        //Price change for year
              $('#basic .pricing-currency').text('$89.55');
              $('#popular .pricing-currency').text('$179.55');
              $('#enterprise .pricing-currency').text('$269.55');
              $('#ultimate .pricing-currency').text('$449.55');
              $('.pricing-item .pricing-duration').text('year');
         

          }
          else if($(this).hasClass('month')){
            $('.Pricing-toggle-button.month').removeClass('active-price-year');
            $('.Pricing-toggle-button.month').addClass('active-price-month');
            $('.Pricing-toggle-button.month').removeClass('price-toggle-darkcolor');
            $('.Pricing-toggle-button.year').removeClass('price-toggle-whitecolor');
            //Price change for month
            $('#basic .pricing-currency').text('$9.95');
            $('#popular .pricing-currency').text('$19.95');
            $('#enterprise .pricing-currency').text('$29.95');
            $('#ultimate .pricing-currency').text('$49.95');
            $('.pricing-item .pricing-duration').text('month');
          }
         
       
      
  })
  $(document).on("mouseenter", ".pricing-item", function () {
    //Pricing ******************
    let allPricingItems=$('.pricing-item');
    allPricingItems.each(function (index,element) {
        $(element).removeClass('active-pricing-item');
      
    })
    $(this).addClass('active-pricing-item');
  });
 
});
