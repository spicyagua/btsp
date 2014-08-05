var EG6 = EG6 || {};


EG6.UI = function() {
};

EG6.UI.prototype = {

  init: function() {
    jQuery(window).on("resize", this.redoLayout.bind(this));
    document.addEventListener("orientationchange", this.redoLayout.bind(this));
  },

  redoLayout: function() {
      console.log("===============================================");
      var b = $("body");
      console.log("Body dimensions: " + b.width() + "x" + b.height());

      var f = jQuery("#footer");
      console.log("Footer Height: " + f.height());

      var lcp = jQuery("#leftBodyPanel");
      console.log("Left body panel outer height: " + lcp.outerHeight());

      var lp = jQuery("#leftPanel");
      var rp = jQuery("#rightPanel");

      lp.css("margin", "20px 5px 20px 5px");
      rp.css("margin", "20px 5px 20px 5px");

//      lp.height(b.height() - f.height());
//      rp.height(b.height() - f.height());
      jQuery("#spacer").height(b.height() - f.height() -lcp.outerHeight());
      console.log("Left height: " + lp.height() + ", right: " + rp.height());
      jQuery("#tb").text(b.height());

  }

};

//=================================================
//            Entry Point from .html
//=================================================

EG6.app = (function() {
  var _init = function() {
    var controller = new EG6.UI();
    controller.init();
    controller.redoLayout();
  };
  return {
    init: _init
  }
}());
