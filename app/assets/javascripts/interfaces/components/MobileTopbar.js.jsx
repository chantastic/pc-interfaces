/* global React, $ */

(function (global) {
  "use strict";

  var styles = {
    rootStyles: {
      msUserSelect: "none",
      MozUserSelect: "none",
      WebkitjuserSelect: "none",
      userSelect: "none",
    },
  };

  class MobileTopbar extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
        orgMenuOpen: false,
        routeMenuOpen: false,
      };

      this.handleUserButtonClick = () => {
        this.setState({ orgMenuOpen: !this.state.orgMenuOpen });
      };

      this.handleRouteButtonclick = () => {
        this.setState({ routeMenuOpen: !this.state.routeMenuOpen });
      };

      this.handleMobileTopbarRouteListDismiss = () => {
        this.setState({ routeMenuOpen: false });
      };

      this.handleMobileTopbarProfileMenuDismiss = () => {
        this.setState({ orgMenuOpen: false });
      };
    }

    get activeRailsRouteName() {
      return $(this.props.routes)
        .find(".is-active .btn-label")
        .prop("innerHTML");
    }

    get routes () {
      return $.makeArray(
        $(this.props.routes)
          .find(".topbar_route")
          .map((i, node) => {
            return { href: node.href, name: node.innerText };
          })
      );
    }

    render() {
      return (
        <div style={styles.root}>
          <MobileTopbarProfileButton onClick={this.handleUserButtonClick} />

          <MobileTopbarRouteButton name={this.activeRailsRouteName} onClick={this.handleRouteButtonclick} />

          {(this.state.orgMenuOpen) &&
            <MobileTopbarProfileMenuContainer onDismiss={this.handleMobileTopbarProfileMenuDismiss} />
          }

          {(this.state.routeMenuOpen) &&
            <MobileTopbarRouteList
             activeRouteName={this.activeRailsRouteName}
             onDismiss={this.handleMobileTopbarRouteListDismiss}
             routes={this.routes}
             />
          }
        </div>
      );
    }
  }

  MobileTopbar.PropTypes = {
    routes: React.PropTypes.string.isRequired,
    railsAppName: React.PropTypes.string.isRequired,
  };

  global.MobileTopbar = (global.module || {}).exports = MobileTopbar;
})(this);
