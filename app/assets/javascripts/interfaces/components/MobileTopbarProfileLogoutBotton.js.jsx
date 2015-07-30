/* global React, interfacesURLForEnv, railsEnv */

(function (global) {
  "use strict";

  const styles = {
    root: {
      display: "table-cell",
    },
  };

  class MobileTopbarProfileLogoutButton extends React.Component {
    render () {
      return <a href={interfacesURLForEnv(railsEnv, "accounts", "logout")} style={styles.root}>Logout</a>;
    }
  }

  global.MobileTopbarProfileLogoutButton = (global.module || {}).exports = MobileTopbarProfileLogoutButton;
})(this);
