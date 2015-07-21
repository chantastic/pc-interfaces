/* global React, interfacesURLForEnv, railsEnv */

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
    },

    root: {
      position: "relative",
      height: "100%",
      width: "90%",
      backgroundColor: "white",
      boxShadow: "0 0 10px rgba(0,0,0,0.3)",
    },

    header: {
      backgroundColor: "#323331",
      color: "white",
    },
  };

  class MobileTopbarProfileMenu extends React.Component {
    render () {
      return (
        <div style={styles.outer} onClick={this.props.onDismiss}>
          <div style={styles.root}>
            <div style={styles.header}>
              App Name
            </div>
            <div>
              {this.props.connectedPeople.map((connectedPerson, i) => {
                // return <div key={i}>{connectedPerson.attributes.organization_name}</div>;
                return <ConnectedPersonListItem key={i} person={connectedPerson} />;
              })}
            </div>
            <div>
              {this.props.apps.map((app, i) => {
                return <div key={i}>{app.attributes.name}</div>;
              })}
            </div>
            <div>
              <div>Help</div>
              <a href={interfacesURLForEnv(railsEnv, "accounts", "logout")}>
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
      React.PropTypes.shape({
        attributes: React.PropTypes.shape({
          name: React.PropTypes.string.isRequired,
        }),
      })
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
