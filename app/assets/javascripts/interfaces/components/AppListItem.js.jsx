/* global React, _ */

(function(global) {
  "use strict";
  var styles = {
    container: {
      display: "block",
      borderBottom: "1px solid #ececec",
      backgroundColor: "transparent",
      height: 48,
      lineHeight: "26px",
      padding: 10,
      transition: "background-color .12s ease-in-out",
      boxSizing: "border-box" // Services demo
    },
    appName: {
      color: "#4d4d4d",
      fontSize: 20,
      fontWeight: "bold",
      marginLeft: 35
    }
  };

  class AppListItem extends React.Component {
    constructor(props) {
      super(props);

      this.state = { hovered: false };

      this.handleMouseEnter = () => {
        this.setState({ hovered: true });
      };
      this.handleMouseLeave = () => {
        this.setState({ hovered: false });
      };
    }

    get containerStyles() {
      return _.extend(
        {},
        styles.container,
        this.state.hovered && { backgroundColor: "rgba(0,0,0,0.1)" }
      );
    }

    get name() {
      return this.props.app.attributes.name;
    }

    get url() {
      return `${interfacesURLForEnv(railsEnv, "accounts")}/apps/${this.props.app.attributes.name}`;
    }

    render() {
      return (
        <a
          style={this.containerStyles}
          href={this.url}
          onMouseEnter={this.handleMouseEnter}
          onMouseLeave={this.handleMouseLeave}
        >
          <AppIcon name={this.name} />
          <div style={styles.appName}>{this.name}</div>
        </a>
      );
    }
  }

  AppListItem.propTypes = {
    app: PropTypes.shape({
      id: PropTypes.string.isRequired,
      attributes: PropTypes.shape({
        name: PropTypes.string.isRequired,
        url: PropTypes.string.isRequired
      }).isRequired
    }).isRequired
  };

  global.AppListItem = ((global.module || {}).exports = AppListItem);
})(this);
