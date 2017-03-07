/* global React, Helpdesk, interfacesPerson */

(function (global) {
  "use strict";

  var XIcon = function XIcon() {
    return React.createElement(
      "svg",
      { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 16 16", "aria-labelledby": "title", role: "img", className: "interfaces-symbol" },
      React.createElement(
        "title",
        { id: "title" },
        "x icon"
      ),
      React.createElement("path", { "className": "cls-1", d: "M13.985 11.491a.935.935 0 0 1 0 1.369l-1.031 1.05a.95.95 0 0 1-.7.3.921.921 0 0 1-.689-.3L8 10.335l-3.6 3.586a.935.935 0 0 1-1.369 0L2 12.892A.959.959 0 0 1 2 11.5l3.623-3.636-3.69-3.607a.957.957 0 0 1 0-1.388l1.031-1.031a.95.95 0 0 1 .7-.3.921.921 0 0 1 .689.3L8 5.487 11.582 1.9a.957.957 0 0 1 1.388 0L14 2.936a.958.958 0 0 1 .3.7.929.929 0 0 1-.3.689l-3.623 3.642 3.608 3.524z", "data-name": "Layer 1", role: "presentation" })
    );
  }

  var ChevronDownIcon = function ChevronDownIcon() {
    return React.createElement(
      "svg",
      { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 16 16", "aria-labelledby": "title", role: "img", className: "interfaces-symbol" },
      React.createElement(
        "title",
        { id: "title" },
        "chevron-down icon"
      ),
      React.createElement("path", { "className": "cls-1", d: "M15.929 4.464l-1.77-2.017-6.221 7.071-6.1-6.95L.071 4.586l7.867 8.967z", "data-name": "Layer 1", role: "presentation" })
    );
  }

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
    },

    avatarButton: {
      position: "absolute",
      top: 4,
      right: 4,
      height: 45,
      lineHeight: "47px",
      backgroundColor: "transparent",
      border: 0,
      borderRadius: "1px 1px 0 0",
      padding: "8px 12px",
      transition: "background-color 0.2s ease-in-out",
      outline: "none",
    },

    avatar: {
      borderRadius: "50%",
      height: 30,
      border: "1px solid #7b7b7b",
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
        if(this._pane === e.target) {
          e.stopPropagation();
        }
      };
    }

    render () {
      return (
        <div style={styles.outer} onClick={this.props.onDismiss}>
          <div style={{ position: "absolute", top: 0, right: 0, width: MENU_GUTTER, color: "white" }}>
            <XIcon />
          </div>

          <div style={styles.root} onClick={this.handleBackgroundClick} ref={c => this._pane = c }>
            <MobileTopbarProfileMenuHeader />

            <MobileAppList
              apps={this.props.apps}
              ref="appList"
            />

            <button style={_.extend({}, styles.avatarButton, this.props.userCardShown && { backgroundColor: "white" })} onClick={this.props.onToggleUserCard}>
            <div style={_.extend(
              {},
              {
                float: "left",
                padding: 0,
                paddingRight: 12,
                fontSize: 11,
                lineHeight: "30px",
                transition: "all 0.2s ease-in-out",
              },
              (!this.props.userCardShown) && { color: "white" },
              (this.props.userCardShown) && { transform: "rotateX(180deg)" }
              )}>
                <ChevronDownIcon />
              </div>
              <img src={interfacesPerson.avatarPath} style={styles.avatar} />
            </button>

            <MobileTopbarConnectedPeopleList
             style={(this.props.userCardShown)
              ? { visibility: "visible", opacity: "1" }
              : { visibility: "hidden", opacity: "0" }
             }
             people={this.props.connectedPeople}
            />

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
    onToggleUserCard: React.PropTypes.func.isRequired,
    userCardShown: React.PropTypes.bool.isRequired,
  };

  global.MobileTopbarProfileMenu = (global.module || {}).exports = MobileTopbarProfileMenu;
})(this);
