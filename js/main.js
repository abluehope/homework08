$(function () {
  // 메인 비주얼
  $(".main_slide").slick({
    arrows: false,
  });

  // 신제품 슬라이드
  $(".product_slide").slick({
    centerMode: true,
    centerPadding: "0",
    arrows: false,
    slidesToShow: 5,
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
});
