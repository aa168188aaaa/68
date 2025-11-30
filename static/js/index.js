$(function() {
  var initIndex = $('#qrcode').data('index');
  var downloadName = initIndex ? ('/cn/index_'+ initIndex +'.html') : '/download.html';
  var o = window.location.protocol + "//" + window.location.host + downloadName;

  function e() {
    var o = $("#downloadBox").offset().top,
      e = $("#downloadBox").height(),
      t = $("#block-1").offset().top,
      l = $("#block-2").offset().top,
      c = $("#block-3").offset().top,
      n = $("#block-1").height(),
      a = $("#block-2").height(),
      d = $("#block-3").height(),
      i = $(window).scrollTop(),
      s = $(window).height(),
      r = i + s,
      h = o + e,
      f = t + n,
      b = l + a,
      k = c + d;
    s < i ? $(".toTop").removeClass("hide") : $(".toTop").addClass("hide"), (i <= o && h < i || i < h && o < r) && $(".download .box").removeClass("hide"), (i <= t && f < i || i < f && t < r) && ($("#block-1").removeClass("block-hide"), $("#block-1 .Img").addClass("bounceIn"), $("#block-1 .title,#block-1 .description").addClass("bounceInUp")), (i <= l && b < i || i < b && l < r) && ($("#block-2").removeClass("block-hide"), $("#block-2 .Img").addClass("bounceIn"), $("#block-2 .title,#block-2 .description").addClass("bounceInUp")), (i <= c && k < i || i < k && c < r) && ($("#block-3").removeClass("block-hide"), $("#block-3 .Img").addClass("bounceIn"), $("#block-3 .title,#block-3 .description").addClass("bounceInUp"))
  }
  $("#qrcode").qrcode({
    render: "canvas",
    width: 252,
    height: 252,
    text: o,
    typeNumber: -1,
    correctLevel: 2,
    background: "#ffffff",
    foreground: "#000000"
  }), $("#qrcodeBottom").qrcode({
    render: "canvas",
    width: 400,
    height: 400,
    text: o,
    typeNumber: -1,
    correctLevel: 2,
    background: "#ffffff",
    foreground: "#000000"
  }), e(), $(window).scroll(function(o) {
    e()
  }), $(document).on("click", 'a[href^="#"]', function() {
    if (location.pathname.replace(/^\//, "") == this.pathname.replace(/^\//, "") && location.hostname == this.hostname) {
      var o = $(this.hash);
      if ((o = o.length && o || $("[name=" + this.hash.slice(1) + "]")).length) {
        var e = o.offset().top;
        return $("html,body").animate({
          scrollTop: e
        }, 600), !1
      }
    }
  }), $("img").lazyload({
    effect: "fadeIn",
    threshold: 180,
    failurelimit: 50
  });

  var u = navigator.userAgent;
  var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Adr') > -1; //android终端
  var isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端
  if (isAndroid) {
    $('#ios-box').hide();
    $('#android-btn').show();
    $('#ios-btn').hide();
  }
  if (isiOS) {
    $('#android-btn').hide();
    $('#ios-btn').show();
    $('#ios-box').show();
  }
  $('[role="ty2-btn"]').show();
});
