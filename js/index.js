//轮播图
$(function () {
  var $imgs = $(".carousel-inner img");
  //窗口尺寸事件
  $(window).on("resize", function () {
    if ($(window).width() >= 640) {
      $imgs.each(function () {
        var src = $(this).data("psrc");
        $(this).attr('src', src);
      })
    } else {
      $imgs.each(function () {
        var src = $(this).data("msrc");
        $(this).attr('src', src);
      })
    }
  })
  $(window).trigger("resize");
})

//产品
$(function () {
  var $ul = $(".nav_tb ul");
  var $lis = $ul.children();

  var total = 0 ;
  $lis.each(function () {
    var liWidth = $(this).width();
    total+=liWidth;
  })
  $ul.width(total);



  new IScroll(".nav_tb",{
    scrollX:true,
    scrollY:false
  })
})