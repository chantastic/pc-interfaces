/* global React, railsAppName */

(function (global) {
  "use strict";

  var styles = {
    root: {
      height: 51,
      backgroundColor: "#323331",
      color: "white",
    },

    appBadge: {
      icon: {
        padding: "12px 10px",
        height: "100%",
      },

      name: {
        color: "white",
        fontSize: 16,
        marginLeft: 38,
        marginTop: 4,
        lineHeight: "19px",
        textAlign: "left",
      },
    },
  };

  class MobileTopbarProfileMenuHeader extends React.Component {
    get appName () {
      switch (railsAppName) {
      case "RP":
        return "resources";
      case "PlanningCenter":
        return "services";
      default:
        return railsAppName;
      }
    }

    render () {
      return (
        <div style={styles.root}>
          <div style={styles.appBadge.icon}>
            <AppIcon name={this.appName} />
            <div style={styles.appBadge.name} children={this.appName} />
          </div>
        </div>
      );
    }
  }

  global.MobileTopbarProfileMenuHeader = (global.module || {}).exports = MobileTopbarProfileMenuHeader;
})(this);
