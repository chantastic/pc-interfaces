/* global React, railsAppName */

/* Implementation:
 * Requires availability of interfaces_icon React component in global namepsace.
 */

(function (global) {
  "use strict";

  var styles = {
    root: {
      float: "left",
      borderRight: "1px solid rgba(0,0,0,0.2)",
      width: "51px",
      height: "50px",
      cursor: "pointer",
      padding: "10px",
      fill: "white",
    },
  };

  class MobileTopbarProfileButton extends React.Component {
    get appIconName() {
      switch (railsAppName) {
        case "Check-Ins":
          return "CheckInsAppIcon";
        case "PlanningCenter":
          return "ServicesAppIcon";
        case "RP":
          return "ResourcesAppIcon";
        default:
          return `${railsAppName}AppIcon`;
      }
    }

    render() {
      const AppIcon = global[this.appIconName];

      return (
        <div style={styles.root} {...this.props}>
          <AppIcon />
        </div>
      );
    }
  }

  global.MobileTopbarProfileButton = (global.module || {}).exports = MobileTopbarProfileButton;
})(this);
