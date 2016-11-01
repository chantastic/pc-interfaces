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
