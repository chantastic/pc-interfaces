/* global React, interfacesURLForEnv, railsEnv, railsAppName */

(function (global) {
  "use strict";

  class ConnectedPersonListItem extends React.Component {
    constructor(props) {
      super(props);
      this.state = { hovered: false };

      this.handleMouseEnter = () => { this.setState({ hovered: true }); };
      this.handleMouseLeave = () => { this.setState({ hovered: false }); };

      this.renderSwitchIcon = this.renderSwitchIcon.bind(this);
    }

    get anchorStyles() {
      return {
        padding: "14px 10px",
        borderBottom: "1px solid #e5e5e5 !important",
        lineHeight: "100%",
        fontSize: 12,
        width: "100%",
        display: "block",
        color: "#565656",
        boxSizing: "border-box", // Services demo
      };
    }

    get styles() {
      var styles = {
        backgroundColor: "transparent",
        transition: "all .12s ease-out",
      };

      if (this.state.hovered) {
        styles.backgroundColor = "rgba(0, 0, 0, 0.03)";
      }

      return styles;
    }

    get link() {
      return `${interfacesURLForEnv(railsEnv, "accounts")}/link/new?to=${this.props.person.id}&return=${railsAppName}%2f`;
    }

    get interimOrganazationName() {
      if (this.props.person.organization_name) {
        return this.props.person.organization_name;
      }

      return this.props.person.attributes.organization_name;
    }

    render() {
      return (
        <div
         style={this.styles}
         onMouseEnter={this.handleMouseEnter}
         onMouseLeave={this.handleMouseLeave}>
          <a href={this.link} style={this.anchorStyles}>
           {this.interimOrganazationName}
           {this.renderSwitchIcon()}
          </a>
        </div>
      );
    }

    renderSwitchIcon() {
      var styles = {
        color: "#4E7BA8",
        float: "right",
        transition: "all .2s ease-out",
        transform: "rotate(0) scale(1)",
        WebkitTransform: "rotate(0) scale(1)",
      };

      if (this.state.hovered) {
        styles.opacity = 1;
        styles.transform = "rotate(0) scale(1)";
        styles.WebkitTransform = "rotate(0) scale(1)";
      } else {
        styles.opacity = 0;
        styles.transform = "rotate(-90deg) scale(0.4)";
        styles.WebkitTransform = "rotate(-90deg) scale(0.4)";
      }

      return (
        <InterfacesIcon style={styles} name="switch" />
      );
    }
  }

  ConnectedPersonListItem.propTypes = {
    person: React.PropTypes.shape({
      id: React.PropTypes.string.isRequired,
      attributes: React.PropTypes.shape({
        organization_name: React.PropTypes.string.isRequired,
      }).isRequired,
    }).isRequired,
  };

  global.ConnectedPersonListItem = (global.module || {}).exports = ConnectedPersonListItem;
})(this);
