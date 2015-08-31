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
      top: -43,
      paddingLeft: 4,
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
          <button style={_.extend({}, styles.baseButton, this.props.menu !== "apps" && { flex: "1 1 52px" })} onClick={this.props.onAppsTabClick}>
            <i className={`icon-${this.appIconName}-logo`} style={styles.appIcon} />
          </button>

          <button style={_.extend({}, styles.baseButton, { borderLeft: "1px solid rgba(255,255,255,0.3)", backgroundColor: "white", color: "#323331" }, this.props.menu !== "user" && { flex: "1 1 65px"})} onClick={this.props.onUserTabClick}>
            <MobileTopbarUserBadge
              src={interfacesPerson.avatarPath}
              name={interfacesPerson.name}
            />
          </button>
        </div>
      );
    }
  }

  MobileTopbarProfileMenuHeader.propTypes = {
    onAppsTabClick: React.PropTypes.func.isRequired,
    onUserTabClick: React.PropTypes.func.isRequired,
    menu: React.PropTypes.string.isRequired,
  };

  global.MobileTopbarProfileMenuHeader = (global.module || {}).exports = MobileTopbarProfileMenuHeader;
})(this);
