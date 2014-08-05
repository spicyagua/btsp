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

      //This is crazy.  Try calculating everyone from the outside
      var mc = jQuery("#myColumn");
      var mcExtra = mc.outerHeight(true) - mc.innerHeight();

      var mcp = mc.parent();
      var mcpExtra = mcp.outerHeight(true) - mcp.innerHeight();


      var tb = jQuery("#tb");
      var tbExtra = tb.outerHeight(true);

      var f = jQuery("#footer");

      jQuery("#spacer").height(viewportSize.getHeight() - tbExtra - mcExtra - mcpExtra - f.outerHeight(true));

      console.log("mcExtra: " + mcExtra);
      console.log("tbExtra: " + tbExtra);
      console.log("mcpExtra: " + mcpExtra);
      console.log("Footer Height: " + f.outerHeight(true));
      console.log("Spacer height: " + jQuery("#spacer").height());

//      jQuery("#tb").text(b.height());
      console.log("viewportSize: " + viewportSize.getWidth() + "x" + viewportSize.getHeight());
  },

  piOrZero: function(num) {

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
