jQuery(document).ready(function() {
  "use strict";
  function e() {
    jQuery(".fullSlider").css("height", jQuery(window).height())
  }
  jQuery(window).on("load", function() {
    jQuery(".typed-text").typed({
      backDelay: 3e3,
      backSpeed: 70,
      contentType: "text",
      loop: !0,
      loopCount: !0,
      startDelay: 3e3,
      strings: [
        "I AM PAUL JOHNSON", "I WORK AS A DEVELOPER", "and . . . ", "I LOVE SUSHI  :) "
      ],
      typeSpeed: 100
    })
    //jQuery(".slider").addClass("active")
  }),
  e(),
  jQuery(window).resize(function() {
    e()
  }),
  jQuery(".home .cvitae-main-nav .scroll a").on("click", function(e) {
    var t = this;
    return jQuery.smoothScroll({easing: "easeInOutCubic", offset: -100, scrollTarget: t.hash, speed: 800}),
    jQuery(this).hasClass("external")
      ? void 0
      : !1
  }),
  jQuery(".home .left-nav a").on("click", function(e) {
    var t = this;
    return jQuery.smoothScroll({easing: "easeInOutCubic", offset: -80, scrollTarget: t.hash, speed: 800}),
    jQuery(this).hasClass("external")
      ? void 0
      : !1
  });
  for (var t = jQuery(".home .cvitae-main-nav li.scroll ").children(), a = [], r = 0; r < t.length; r++) {
    var i = t[r],
      o = jQuery(i).attr("href");
    a.push(o)
  }
  jQuery(window).scroll(function() {
    for (var e = jQuery(window).scrollTop(), t = jQuery(window).height(), r = jQuery(document).height(), i = 0; i < a.length; i++) {
      var o = a[i];
      if ("#" != !o[0]) {
        var n = jQuery(o).offset().top - 100,
          s = jQuery(o).height();
        e >= n && n + s > e
          ? jQuery("a[href='" + o + "']").addClass("active")
          : jQuery("a[href='" + o + "']").removeClass("active")
      }
    }
    if (e + t == r && !jQuery("nav li:last-child a").hasClass("active")) {
      var c = jQuery(".active").attr("href");
      jQuery("a[href='" + c + "']").removeClass("active"),
      jQuery("nav li:last-child a").addClass("active")
    }
  }),
  jQuery(".mouse-icon a").on("click", function(e) {
    var t = this;
    return jQuery.smoothScroll({easing: "easeInOutCubic", offset: -130, scrollTarget: t.hash, speed: 800}),
    !1
  }),
  jQuery(".goto-top").on("click", function(e) {
    return jQuery("html,body").animate({
      scrollTop: 0
    }, 800),
    !1
  }),
  jQuery(".goto-bio").on("click", function(e) {
    var t = this;
    return jQuery.smoothScroll({easing: "easeInOutCubic", offset: -100, scrollTarget: t.hash, speed: 800}),
    !1
  }),
  jQuery(".mobile-site-menu").on("click", function() {
    jQuery(".cvitae-mobile-navigation").toggleClass("active")
  }),
  jQuery(".cvitae-mobile-nav a").on("click", function() {
    jQuery(".cvitae-mobile-navigation").removeClass("active")
  }),
  jQuery(window).on("load", function() {
    jQuery("#achievement").parallax("50%", .6),
    jQuery("#testimonial").parallax("50%", .6),
    jQuery("#clients").parallax("50%", .6),
    jQuery("nav.cvitae-main-nav").waypoint({
      element: this,
      handler: function(e) {
        "down" == e
          ? ($(".cvitae-menu-wrapper").addClass("sticky"), $(".cvitae-main-nav").css({width: $(".cvitae-site-container").width()}))
          : ($(".cvitae-menu-wrapper").removeClass("sticky"), $(".cvitae-main-nav").css({width: "100%"}))
      },
      offset: "-150"
    })
  }),
  jQuery(".cvitae-skills").waypoint({
    handler: function(e) {
      jQuery(".progress-bar").each(function() {
        var e = jQuery(this).data("progress");
        jQuery(this).data("progress");
        jQuery(this).find(".bar").animate({
          width: e + "%"
        }, 5e3, "swing"),
        jQuery(this).find(".text").animate({
          left: e + "%"
        }, {
          duration: 5e3,
          easing: "swing",
          step: function(e) {
            jQuery(this).text(Math.ceil(e))
          }
        })
      })
    },
    offset: "50%"
  }),
  jQuery(".achievement-container").owlCarousel({
    autoplay: !0,
    loop: !0,
    margin: 0,
    nav: !0,
    navClass: [
      "owl-prev waves-effect waves-cvitae", "owl-next waves-effect waves-cvitae"
    ],
    navSpeed: 1e3,
    responsive: {
      0: {
        items: 1
      }
    },
    smartSpeed: 1e3
  }),
  jQuery(window).on("load", function() {
    jQuery("#cvitae-slider").catslider(),
    jQuery(".cvitae-gallery .project").on("click", function(e) {
      e.preventDefault();
      var t = jQuery(this);
      jQuery("#project-title").text(t.data("project-title")),
      jQuery("#project-image").attr("src", t.data("project-image")),
      jQuery("#project-link").attr("href", t.data("project-link")),
      jQuery("#project-detail").text(t.data("project-detail")),
      jQuery(".cvitae-portfolio-popup").addClass("active")
    })
  }),
  jQuery(".project-popup-close").on("click", function() {
    jQuery(".cvitae-portfolio-popup").removeClass("active")
  }),
  jQuery(document).keyup(function(e) {
    "27" == e.which && jQuery(".cvitae-portfolio-popup").removeClass("active")
  }),
  jQuery(".cvitae-portfolio-popup").on("click", function(e) {
    e.target === this && jQuery(this).removeClass("active")
  }),
  jQuery(".testimonial-container").owlCarousel({
    autoplay: !0,
    loop: !0,
    margin: 0,
    nav: !0,
    navClass: [
      "owl-prev waves-effect waves-cvitae", "owl-next waves-effect waves-cvitae"
    ],
    navSpeed: 1e3,
    responsive: {
      0: {
        items: 1
      }
    },
    smartSpeed: 1e3
  }),
  jQuery(".clients-container").owlCarousel({
    autoplay: !0,
    loop: !0,
    margin: 0,
    nav: !0,
    navClass: [
      "owl-prev waves-effect waves-cvitae", "owl-next waves-effect waves-cvitae"
    ],
    navSpeed: 1e3,
    responsive: {
      1e3: {
        items: 3
      },
      767: {
        items: 2
      },
      0: {
        items: 1
      }
    },
    smartSpeed: 1e3
  })
});
