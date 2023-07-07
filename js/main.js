$(function () {
  $(window).on("scroll", function () {
    let sct = $(window).scrollTop();
    if (sct > 0) {
      $(".header, .to_top").addClass("on");
    } else {
      $(".header, .to_top").removeClass("on");
    }
  });

  $(".mobile_btn").on("click", function () {
    $(this).toggleClass("on");
    $(".gnb").toggleClass("on");
  });

  // 메인 비주얼
  $(".main_slide").slick({
    pauseOnHover: false,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 6000,
    speed: 1000,
  });

  $(".product_slide").on("init afterChange", function (e, s, c) {
    console.log(c);
    $(".main_product .itm").eq(c).addClass("on").siblings().removeClass("on");
  });

  // 신제품 슬라이드
  $(".product_slide").slick({
    centerMode: true,
    centerPadding: "0",
    arrows: false,
    slidesToShow: 3,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: "0",
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: "0",
          slidesToShow: 1,
        },
      },
    ],
  });

  $(".main_product .arrows .left").on("click", function () {
    $(".product_slide").slick("slickPrev");
  });
  $(".main_product .arrows .right").on("click", function () {
    $(".product_slide").slick("slickNext");
  });

  $(".lecture_tab_link li").on("click", function (event) {
    event.preventDefault();

    let idx = $(this).index();

    $(this).addClass("on").siblings().removeClass("on");

    $(".lecture_tab_content .con")
      .eq(idx)
      .addClass("on")
      .siblings()
      .removeClass("on");
  });

  $(".to_top").on("click", function () {
    $("html, body").animate({ scrollTop: 0 }, 600);
  });

  $(window).on("scroll", function () {
    let sct = $(window).scrollTop();
    sct > 50 ? $(".to_top").addClass("on") : $(".to_top").removeClass("on");
  });
});
