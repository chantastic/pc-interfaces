/* global React, $ */

(function (global) {
  "use strict";

  var styles = {
    rootStyles: {
      msUserSelect: "none",
      MozUserSelect: "none",
      WebkitUserSelect: "none",
      userSelect: "none",
    },
  };

  const getTextFromTopbarRoute = el => {
    if (null == el) return ""

    return el
      .querySelector(".topbar_route_text")
      .textContent
      .trim()
  }

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
      const parser = new DOMParser();

      const doc = parser.parseFromString(this.props.routes, "text/html")

      return getTextFromTopbarRoute(doc.querySelector(".is-active")) || "Menu";
    }

    get routes () {
      return $.makeArray(
        $(this.props.routes)
          .find(".topbar_route")
          .map((i, el) => {
            const routeName = getTextFromTopbarRoute(el)

            const classes = el.classList.contains("floating-topbar-action")
              ? "mobile-floating-topbar-action"
              : "";

            return { href: el.href, name: routeName, classes };
          })
      );
    }

    componentDidUpdate () {
      document
        .querySelector(".main-wrap")
        .classList
        .toggle("o-h", this.state.orgMenuOpen);
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
