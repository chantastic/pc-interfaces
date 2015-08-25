(function (global) {
  var styles = {
    container: {
      display: "block",
      borderBottom: "1px solid #ececec",
      backgroundColor: "transparent",
      height: 48,
      lineHeight: 1.2,
      padding: 10,
      transition: "background-color .12s ease-in-out",
      boxSizing: "border-box" // Services demo
    },
    appNamePrefix: {
      color: "#4d4d4d",
      fontSize: 10,
      marginLeft: 35
    },
    appName: {
      color: "#4d4d4d",
      fontSize: 15,
      marginLeft: 35
    }
  };

  class AppListItem extends React.Component {
    constructor(props) {
      super(props);
      this.state = { hovered: false };

      this.handleMouseEnter = () => { this.setState({ hovered: true  }); }
      this.handleMouseLeave = () => { this.setState({ hovered: false }); }
    }

    get containerStyles() {
      return _.extend({},
        styles.container,
        this.state.hovered && {backgroundColor: "rgba(0,0,0,0.1)"}
      );
    }
    get name() { return this.props.app.attributes.name }
    get url()  { return this.props.app.attributes.url }

    render() {
      return (
        <a
         style={this.containerStyles}
         href={this.url}
         onMouseEnter={this.handleMouseEnter}
         onMouseLeave={this.handleMouseLeave}>
          <AppIcon name={this.name} />
          <div style={styles.appNamePrefix}>planning center</div>
          <div style={styles.appName}>{this.name}</div>
        </a>
      );
    }
  }

  AppListItem.propTypes = {
    app: React.PropTypes.shape({
      id: React.PropTypes.string.isRequired,
      attributes: React.PropTypes.shape({
        name: React.PropTypes.string.isRequired,
        url:  React.PropTypes.string.isRequired
      }).isRequired
    }).isRequired
  };

  global.AppListItem = (global.module || {}).exports = AppListItem;
})(this);
