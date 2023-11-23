$(document).ready(function() {
    $("#readMore").click(function() {
      $(".content").toggleClass("expanded");
      if ($(".content").hasClass("expanded")) {
        $("#dots").hide();
        $("#more").show();
        $("#readMore").text("Read less");
      } else {
        $("#dots").show();
        $("#more").hide();
        $("#readMore").text("Read more");
      }
    });
  });