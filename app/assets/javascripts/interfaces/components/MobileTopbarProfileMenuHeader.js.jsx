/* global React, _, railsAppName */

(function (global) {
  "use strict";

  var styles = {
    header: {
      textAlign: "left",
      backgroundColor: "#323331",
      color: "white",
      height: 51,
    },

    appIcon: {
      fontSize: 130,
      position: "relative",
      top: -40,
      paddingLeft: 10,
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
        <div style={styles.header} onClick={this.props.onToggleApps}>
          <i className={`icon-${this.appIconName}-logo`} style={styles.appIcon} />
          <InterfacesIcon
           name="caret-down-outline"
           style={
             _.extend(
               {},
               { position: "absolute", top: 0, right: 0, padding: 20, fontSize: 12, transition: "0.3s all ease-in-out" },
               this.props.appsShown && { transform: "scaleY(-1)", WebkitTransform: "scaleY(-1)" }
             )
           }
           />
        </div>
      );
    }
  }

  MobileTopbarProfileMenuHeader.propTypes = {
    appsShown: React.PropTypes.bool.isRequired,
    onToggleApps: React.PropTypes.func.isRequired,
  };

  global.MobileTopbarProfileMenuHeader = (global.module || {}).exports = MobileTopbarProfileMenuHeader;
})(this);
