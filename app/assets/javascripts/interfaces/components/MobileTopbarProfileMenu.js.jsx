/* global React, interfacesURLForEnv, railsEnv, Helpdesk, _ */

(function (global) {
  "use strict";

  var styles = {
    outer: {
      position: "fixed",
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
      textAlign: "center",
      backgroundColor: "transparent",
      cursor: "pointer",
    },

    root: {
      position: "relative",
      height: "100%",
      width: "90%",
      backgroundColor: "white",
      boxShadow: "0 0 100px rgba(0,0,0,0.4)",
    },

    header: {
      textAlign: "left",
      backgroundColor: "#323331",
      color: "white",
      height: 51,
    },

    appIcon: {
      fontSize: 130,
      position: "relative",
      top: -40,
      paddingLeft: 10,
    },

    bottomButtons: {
      position: "absolute",
      display: "table",
      width: "100%",
      bottom: "0",
      border: "1px solid #e4e4e4",
      backgroundColor: "#ededed",
    },

    helpButton: {
      display: "table-cell",
      borderRight: "1px solid #e4e4e4",
      width: "50%",
      pointer: "cursor",
    },

    appItem: {
      color: "white",
    },

    unlinkButton: {
      border: "1px solid #e5e5e5",
      color: "#606060",
      display: "block",
      margin: "30px",
      borderRadius: "4px",
      pointer: "cursor",
    },
  };

  class MobileTopbarProfileMenu extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
        appsShown: true,
        scrollHeight: 0,
      };

      this.handleHeaderClick = (e) => {
        e.stopPropagation();
        this.setState({appsShown: !this.state.appsShown});
      };

      this.handleHelpdeskClick = (e) => {
        e.stopPropagation();
        Helpdesk.load();
      };
    }

    componentDidUpdate () {
      if (!this.state.scrollHeight) {
        this.setState({ scrollHeight: React.findDOMNode(this.refs.appList).scrollHeight });
      }
    }

    render () {
      return (
        <div style={styles.outer} onClick={this.props.onDismiss}>
          <div style={styles.root}>
            <div style={styles.header} onClick={this.handleHeaderClick}>
              <i className="icon-account-center-logo" style={styles.appIcon} />
              <InterfacesIcon name="caret-down-outline" style={
                _.extend(
                  {},
                  { position: "absolute", top: 0, right: 0, padding: 20, fontSize: 12, transition: "0.3s all ease-in-out" },
                  this.state.appsShown && { transform: "scaleY(-1)", WebkitTransform: "scaleY(-1)" }
                )} />
            </div>

          <MobileAppList
           apps={this.props.apps}
           height={this.state.scrollHeight}
           ref="appList"
           shown={this.state.appsShown}
           />

          <MobileTopbarUserBadge />

        {(this.props.connectedPeople.length)
         ? <div>
         {this.props.connectedPeople.map((connectedPerson, i) => {
           return <ConnectedPersonListItem key={i} person={connectedPerson} anchorStyle={{ textAlign: "left", paddingLeft: 65 }} />;
         })}

         <a href={interfacesURLForEnv(railsEnv, "accounts", "unlink")} style={styles.unlinkButton}>
         <InterfacesIcon name="unlink" />
         Unlink Accounts
         </a>
         </div>
         : null
        }

          <div style={styles.bottomButtons}>
          <div style={styles.helpButton} onClick={this.handleHelpdeskClick}>Help</div>
          <a href={interfacesURLForEnv(railsEnv, "accounts", "logout")} style={{ display: "table-cell" }}>
          Logout
        </a>
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
      React.PropTypes.shape({
        attributes: React.PropTypes.shape({
          organization_name: React.PropTypes.string.isRequired,
        }),
      })
    ).isRequired,
  };

  global.MobileTopbarProfileMenu = (global.module || {}).exports = MobileTopbarProfileMenu;
})(this);
