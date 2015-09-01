/* global React, _, railsAppName, interfacesPerson */

(function (global) {
  "use strict";

  var styles = {
    root: {
      display: "flex",
      flexDirection: "row",
      height: 51,
      backgroundColor: "#323331",
      color: "white",
    },

    appIcon: {
      fontSize: 130,
      position: "relative",
      top: -40,
      paddingLeft: 10,
    },

    baseButton: {
      backgroundColor: "transparent",
      border: 0,
      overflow: "hidden",
      flex: "1 1 100%",
      textAlign: "left",
    },
  };

  class MobileTopbarProfileMenuHeader extends React.Component {
    get appIconName () {
      switch (railsAppName) {
      case "Accounts":
        return "account-center";
      case "Check-Ins":
        return "check-ins";
      case "Giving":
        return "giving";
      case "People":
        return "people";
      case "Registrations":
        return "registrations";
      case "RP":
        return "resources";
      case "PlanningCenter":
        return "services";
      }
    }

    render () {
      return (
        <div style={styles.root}>
          <div style={_.extend({}, styles.baseButton)}>
            <i className={`icon-${this.appIconName}-logo`} style={styles.appIcon} />
          </div>
        </div>
      );
    }
  }

  MobileTopbarProfileMenuHeader.propTypes = {
    onToggleUserCard: React.PropTypes.isRequired,
  };

  global.MobileTopbarProfileMenuHeader = (global.module || {}).exports = MobileTopbarProfileMenuHeader;
})(this);
