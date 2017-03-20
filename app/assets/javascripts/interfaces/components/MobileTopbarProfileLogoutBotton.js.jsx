/* global React, interfacesURLForEnv, railsEnv */

(function(global) {
  "use strict";
  var styles = {
    root: {
      display: "table-cell",
      color: "#606060"
    }
  };

  class MobileTopbarProfileLogoutButton extends React.Component {
    render() {
      return (
        <a
          href={interfacesURLForEnv(railsEnv, "accounts", "logout")}
          style={styles.root}
        >
          Logout
        </a>
      );
    }
  }

  global.MobileTopbarProfileLogoutButton = ((global.module || {
  }).exports = MobileTopbarProfileLogoutButton);
})(this);
