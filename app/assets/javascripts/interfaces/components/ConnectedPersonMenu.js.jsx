/* global React, interfacesURLForEnv */

(function(global) {
  "use strict";
  const ChainBrokenIcon = function ChainBrokenIcon() {
    return React.createElement(
      "svg",
      {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 16 16",
        "aria-labelledby": "title",
        role: "img",
        className: "interfaces-symbol"
      },
      React.createElement("title", { id: "title" }, "chain-broken icon"),
      React.createElement(
        "g",
        { "data-name": "Layer 1" },
        React.createElement("path", {
          className: "cls-1",
          d: "M5.986 10.073H2.358a.255.255 0 0 1-.258-.255V6.343a.255.255 0 0 1 .255-.255h3.631V4.123H2.358a2.22 2.22 0 0 0-2.22 2.22v3.475a2.22 2.22 0 0 0 2.22 2.22h3.628zm7.656-5.95H9.988v1.965h3.654a.255.255 0 0 1 .255.255v3.475a.255.255 0 0 1-.255.255H9.988v1.965h3.654a2.22 2.22 0 0 0 2.22-2.22V6.343a2.22 2.22 0 0 0-2.22-2.22z",
          role: "presentation"
        }),
        React.createElement("path", {
          className: "cls-1",
          d: "M4.096 7.138h1.89v1.925h-1.89zm5.892 0h1.89v1.925h-1.89zM8.948 2.29v11.621H7.023V2.29z",
          role: "presentation"
        })
      )
    );
  };

  class ConnectedPersonMenu extends React.Component {
    constructor(props) {
      super(props);
      this.renderUnlinkLink = this.renderUnlinkLink.bind(this);
    }

    getChildContext() {
      return {
        railsAppName: this.props.railsAppName,
        railsEnv: this.props.railsEnv
      };
    }

    renderUnlinkLink() {
      if (this.props.connectedPeople.length > 0) {
        return (
          <a
            className="account-switcher_action"
            id="unlink--account-switcher_action"
            href={interfacesURLForEnv(
              this.props.railsEnv,
              "accounts",
              "unlink"
            )}
          >
            Unlink Accounts&nbsp;
            <span style={{ paddingLeft: "5px" }}>
              <ChainBrokenIcon />
            </span>
          </a>
        );
      }
    }

    render() {
      return (
        <div>
          <ConnectedPersonList
            connectedPeople={this.props.connectedPeople}
            currentPersonId={this.props.currentPersonId}
            currentPersonAccountCenterId={
              this.props.currentPersonAccountCenterId
            }
          >
            <CurrentPersonListItem
              id={this.props.currentPersonId}
              name={this.props.currentPersonName}
              organizationName={this.props.currentPersonOrganizationName}
              profilePath={this.props.currentPersonProfilePath}
              showSettingsLink={this.props.showSettingsLink}
            />
          </ConnectedPersonList>

          <div className="account-switcher_action-group">
            {this.renderUnlinkLink()}
            <a
              className="account-switcher_action"
              id="logout--account-switcher_action"
              href={interfacesURLForEnv(
                this.props.railsEnv,
                "accounts",
                "logout"
              )}
            >
              Log out
            </a>
          </div>
        </div>
      );
    }
  }

  ConnectedPersonMenu.propTypes = {
    connectedPeople: PropTypes.arrayOf(PropTypes.object).isRequired,
    currentPersonAccountCenterId: PropTypes.number.isRequired,
    currentPersonId: PropTypes.number.isRequired,
    currentPersonName: PropTypes.string.isRequired,
    currentPersonOrganizationName: PropTypes.string.isRequired,
    currentPersonProfilePath: PropTypes.string,
    showSettingsLink: PropTypes.bool.isRequired
  };

  ConnectedPersonMenu.childContextTypes = {
    railsAppName: PropTypes.string,
    railsEnv: PropTypes.string
  };

  global.ConnectedPersonMenu = ((global.module || {
  }).exports = ConnectedPersonMenu);
})(this);
