(function (global) {
  class CurrentPersonListItem extends React.Component {
    constructor(props) {
      super(props);
      this.state = {tabletContext: false};
      this.renderLogoutLink = this.renderLogoutLink.bind(this);
      this.renderUserNameWhenMatchedMediaIsMedium = this.renderUserNameWhenMatchedMediaIsMedium.bind(this);
      this.handleMatchMediaChange = this.handleMatchMediaChange.bind(this);
    }

    get link() {
      return `${interfacesURLForEnv(this.context.railsEnv, 'accounts')}/link/new?to=${this.props.id}&return=${this.context.railsAppName}%2f`;
    }

    get anchorStyles() {
      return {
        padding: "14px 10px",
        borderBottom: "1px solid #e5e5e5 !important",
        lineHeight: "100%",
        fontSize: 12,
        width: "100%",
        display: "block",
        color: "#565656"
      };
    }

    // TODO: should be passed as context from top-most component
    // IE10+ warning

    componentWillMount() {
      this.handleMatchMediaChange(window.matchMedia("(max-width: 979px)"));
      window.matchMedia("(max-width: 979px)").addListener(this.handleMatchMediaChange);
    }

    componentWillUnmount() {
      window.matchMedia("(max-width: 979px)").removeListener(this.handleMatchMediaChange);
    }

    handleMatchMediaChange(e) {
      this.setState({tabletContext: e.matches});
    }

    // ENDTODO

    renderLogoutLink() {
      var styles = {
        float: "right",
        lineHeight: "8px",
        marginRight: 10,
        fontSize: 12,
        color: "white",
        backgroundColor: "#ddd",
        borderRadius: 3,
        padding: 8,
        marginTop: 8
      };

      return (
        <a href={interfacesURLForEnv(this.context.railsEnv, 'accounts', 'logout')} style={styles}>
          Logout
        </a>
      );
    }

    renderUserNameWhenMatchedMediaIsMedium() {
      if (this.state.tabletContext) {
        var styles = {
          paddingLeft: 10,
          lineHeight: "40px",
          marginBottom: -15,
          fontSize: "14px",
          color: "#888"
        };

        return (
          <div style={styles}>
            {this.props.name}
          </div>
        );
      }
    }

    render() {
      return (
        <div>
          {this.renderLogoutLink()}
          {this.renderUserNameWhenMatchedMediaIsMedium()}
          <a href={this.link} style={this.anchorStyles}>
            {this.props.organizationName}
          </a>
        </div>
      );
    }
  }

  CurrentPersonListItem.propTypes = {
    id:               React.PropTypes.number.isRequired,
    name:             React.PropTypes.string.isRequired,
    organizationName: React.PropTypes.string.isRequired
  };

  CurrentPersonListItem.contextTypes = {
    railsAppName: React.PropTypes.string.isRequired,
    railsEnv:     React.PropTypes.string.isRequired
  };

  global.CurrentPersonListItem = (global.module || {}).exports = CurrentPersonListItem;
})(this);
