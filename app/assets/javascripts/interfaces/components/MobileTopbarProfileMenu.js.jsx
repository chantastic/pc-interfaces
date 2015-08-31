/* global React, Helpdesk, interfacesPerson */

(function (global) {
  "use strict";

  var MENU_GUTTER = 57;

  var styles = {
    outer: {
      position: "fixed",
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
      textAlign: "center",
      backgroundColor: "rgba(0,0,0,.25)",
      cursor: "pointer",
      msUserSelect: "none",
      MozUserSelect: "none",
      WebkitUserSelect: "none",
      userSelect: "none",
      WebkitTapHighlightColor: "transparent",
    },

    root: {
      position: "relative",
      height: "100%",
      width: `calc(100% - ${MENU_GUTTER}px)`,
      backgroundColor: "white",
      boxShadow: "0 0 100px rgba(0,0,0,0.4)",
    },

    bottomButtons: {
      position: "absolute",
      display: "table",
      width: "100%",
      bottom: "0",
      border: "1px solid #e4e4e4",
      backgroundColor: "#ededed",
    },
  };

  class MobileTopbarProfileMenu extends React.Component {
    constructor(props) {
      super(props);

      this.handleHelpdeskClick = (e) => {
        this.props.onDismiss();
        e.stopPropagation();
        Helpdesk.load();
      };

      this.handleBackgroundClick = (e) => {
        if(this._pane.getDOMNode() === e.target) {
          e.stopPropagation();
        }
      };

      this.handleAppsTabClick = (e) => {
        e.stopPropagation();
        this.props.onTabChange("apps");
      };

      this.handleUserTabClick = (e) => {
        e.stopPropagation();
        this.props.onTabChange("user");
      };
    }

    render () {
      return (
        <div style={styles.outer} onClick={this.props.onDismiss}>
          <div style={{ position: "absolute", top: 0, right: 0, width: MENU_GUTTER }}>
          <InterfacesIcon name="remove" />
          </div>

          <div style={styles.root} onClick={this.handleBackgroundClick} ref={c => this._pane = c }>
            <MobileTopbarProfileMenuHeader
             onAppsTabClick={this.handleAppsTabClick}
             onUserTabClick={this.handleUserTabClick}
             menu={this.props.menu}
            />

            {(this.props.menu === "apps") &&
              <MobileAppList
               apps={this.props.apps}
               ref="appList"
              />
            }

            {(this.props.menu === "user") &&
              <MobileTopbarConnectedPeopleList people={this.props.connectedPeople} />
            }

            <div style={styles.bottomButtons}>
              <MobileTopbarProfileHelpButton onClick={this.handleHelpdeskClick} />
              <MobileTopbarProfileLogoutButton />
            </div>
          </div>
        </div>
      );
    }
  }

  MobileTopbarProfileMenu.propTypes = {
    onDismiss: React.PropTypes.func.isRequired,
    apps: React.PropTypes.arrayOf(
      React.PropTypes.object
    ).isRequired,
    connectedPeople: React.PropTypes.arrayOf(
      React.PropTypes.object
    ).isRequired,
    onTabChange: React.PropTypes.func.isRequired,
  };

  global.MobileTopbarProfileMenu = (global.module || {}).exports = MobileTopbarProfileMenu;
})(this);
