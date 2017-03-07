/* global React, interfacesURLForEnv, railsEnv, railsAppName, _ */

(function (global) {
  "use strict";

  var SwitchIcon = function SwitchIcon() {
    return React.createElement(
      "svg",
      { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 16 16", "aria-labelledby": "title", role: "img", className: "interfaces-symbol" },
      React.createElement(
        "title",
        { id: "title" },
        "switch icon"
      ),
      React.createElement("path", { "className": "cls-1", d: "M2.721 4.678a.261.261 0 0 1 .263-.258h8.675l.019 2.071a.222.222 0 0 0 .378.152l3.092-3.037a.215.215 0 0 0 0-.308L12 .206a.222.222 0 0 0-.378.156l.019 2.069H2.984A2.268 2.268 0 0 0 .7 4.678v2.331h2.021zm10.558 4.335v2.357a.261.261 0 0 1-.263.258H4.361l-.006-2.092a.222.222 0 0 0-.378-.153l-3.1 3.043a.215.215 0 0 0 0 .308l3.116 3.061a.222.222 0 0 0 .378-.154l-.006-2.023h8.65A2.268 2.268 0 0 0 15.3 11.37V9.013z", "data-name": "Layer 1", role: "presentation" })
    );
  }

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
        borderBottom: "1px solid #e5e5e5",
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
          <a href={this.link} style={_.extend(this.anchorStyles, this.props.anchorStyle)}>
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
        <span style={styles}>
          <SwitchIcon />
        </span>
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
