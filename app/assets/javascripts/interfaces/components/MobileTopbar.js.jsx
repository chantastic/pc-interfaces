/* global React, $ */

(function (global) {
  "use strict";

  var orgButtonStyles = {
    float: "left",
    padding: "0 10px",
    borderRight: "1px solid rgba(0,0,0,0.2)",
    width: 51,
    cursor: "pointer",
  };

  var appIconStyles = {
    fontSize: 128,
    lineHeight: "51px",
    width: 30,
    overflow: "hidden",
    display: "block",
    color: "white",
  };

  var routeButtonStyles = {
    width: "calc(100% - 100px)",
    float: "left",
    textAlign: "center",
    color: "white",
    cursor: "pointer",
  };

  class MobileTopbar extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
        orgMenuOpen: true,
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

    get appIconClassName() {
      return `icon icon-${this.props.railsAppName.toLowerCase()}-logo`;
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
        <div>
          <div style={orgButtonStyles} onClick={this.handleUserButtonClick} >
            <i style={appIconStyles} className={this.appIconClassName} />
          </div>

          <div
           style={routeButtonStyles}
           onClick={this.handleRouteButtonclick}>
            {this.activeRailsRouteName}
            <InterfacesIcon name="caret-down-outline" style={{ fontSize: 11 }}/>
          </div>

          {(this.state.orgMenuOpen) &&
            <MobileTopbarProfileMenuContainer
             onDismiss={this.handleMobileTopbarProfileMenuDismiss} />
          }

          {(this.state.routeMenuOpen) &&
            <MobileTopbarRouteList
             activeRouteName={this.activeRailsRouteName}
             onDismiss={this.handleMobileTopbarRouteListDismiss}
             routes={this.routes} />
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
