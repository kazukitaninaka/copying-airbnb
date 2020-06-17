const navHandler = () => {
  if (window.innerWidth < 1127) {
    console.log(window.innerWidth);
    $("#pc-nav-click").css("display", "none");
    $(window).scroll(function () {
      let headerHeight = $("header").height();
      let nonpcSearchHeight = $(".nonpc-search").height();
      let scrollTop = $(this).scrollTop();
      if (scrollTop > headerHeight + nonpcSearchHeight) {
        $(".pc-header-left").css("display", "none");
        $(".nav-scrolled").css("display", "block");
      } else {
        $(".pc-header-left").css("display", "flex");
        $(".nav-scrolled").css("display", "none");
      }
    });
  } else {
    $("#pc-nav-click").css("display", "inline-block");
    $(".nav-scrolled").css("display", "none");
  }
};

$(document).ready(function () {
  $("#nonpc-nav-click").click(function () {
    $("#nav-toggled").toggle("slide", { direction: "up" });
  });
  $("#nonpc-nav-click2").click(function () {
    $("#nav-toggled").toggle("slide", { direction: "up" });
  });
  $(".js-modal-open").click(function () {
    $(".js-modal").css("display", "block");
  });
  $(".js-modal-close").click(function () {
    $(".js-modal").css("display", "none");
  });
  $(window).resize(function () {
    navHandler();
  });
});
