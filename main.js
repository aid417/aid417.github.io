$(() => {
  console.log("page loaded");

  $(document).on("scroll", function() {
    if ($(document).scrollTop() > 700) {
      //   $(".navbar").removeClass("nav");
      $(".navbar").addClass("sticky");

      //   $(".mainnav").addClass("newcolor");
      console.log("added sticky");
    } else {
      $(".navbar").removeClass("sticky");

      //   $(".mainnav").removeClass("newcolor");
      //   $(".navbar").addClass("nav");
    }
  });
});
