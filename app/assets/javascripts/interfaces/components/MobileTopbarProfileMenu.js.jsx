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

      this.state = {
        appsShown: false,
        scrollHeight: 0,
      };

      this.handleToggleApps = (e) => {
        e.stopPropagation();
        this.setState({appsShown: !this.state.appsShown});
      };

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
    }


    componentDidUpdate ({connectedPeople}, {scrollHeight}) {
      if(connectedPeople.length > 0 && scrollHeight === 0) {
        this.setState({ scrollHeight: React.findDOMNode(this.refs.appList).scrollHeight });
      }
    }

    render () {
      return (
        <div style={styles.outer} onClick={this.props.onDismiss}>
          <div style={{ position: "absolute", top: 0, right: 0, width: MENU_GUTTER }}>
          <InterfacesIcon name="remove" />
          </div>

          <div style={styles.root} onClick={this.handleBackgroundClick} ref={c => this._pane = c }>
            <MobileTopbarProfileMenuHeader
             appsShown={this.state.appsShown}
             onToggleApps={this.handleToggleApps} />

            <MobileAppList
             apps={this.props.apps}
             height={this.state.scrollHeight}
             ref="appList"
             shown={this.state.appsShown}
             />

            <MobileTopbarUserBadge
             appsShown={this.state.appsShown}
             src={interfacesPerson.avatarPath}
             name={interfacesPerson.name}
            />

            {(this.props.connectedPeople.length)
              ? <MobileTopbarConnectedPeopleList people={this.props.connectedPeople} />
              : null
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
  };

  global.MobileTopbarProfileMenu = (global.module || {}).exports = MobileTopbarProfileMenu;
})(this);
