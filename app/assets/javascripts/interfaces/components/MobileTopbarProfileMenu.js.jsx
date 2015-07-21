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
      boxShadow: "0 0 100px rgba(0,0,0,0.4)",
    },

    header: {
      textAlign: "left",
      backgroundColor: "#323331",
      color: "white",
      height: 50,
      borderBottom: "1px solid #323331",
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
    },
  };

  class MobileTopbarProfileMenu extends React.Component {
    render () {
      return (
        <div style={styles.outer} onClick={this.props.onDismiss}>
          <div style={styles.root}>
            <div style={styles.header}>
              <i className="icon-account-center-logo" style={styles.appIcon} />
            </div>

            {(this.props.connectedPeople.length)
             ? <div>
                {this.props.connectedPeople.map((connectedPerson, i) => {
                  return <ConnectedPersonListItem key={i} person={connectedPerson} />;
                })}

                <a href={interfacesURLForEnv(railsEnv, "accounts", "unlink")}>
                  <InterfacesIcon name="unlink" />
                  Unlink Accounts
                </a>
              </div>
             : null
            }

            <div>
              {this.props.apps.map((app, i) => {
                return <div key={i}>{app.attributes.name}</div>;
              })}
            </div>

            <div style={styles.bottomButtons}>
              <div style={styles.helpButton}>Help</div>
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
