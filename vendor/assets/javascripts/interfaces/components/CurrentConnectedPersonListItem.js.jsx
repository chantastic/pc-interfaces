(function (global) {
  class CurrentConnectedPersonListItem extends React.Component {
    constructor(props) {
      super(props);
      this.renderLogoutLink = this.renderLogoutLink.bind(this);
    }

    get link() {
      return `${interfacesURLForEnv(this.context.railsEnv, 'accounts')}/link/new?to=${this.props.person.id}&return=${this.context.railsAppName}%2f`;
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

    render() {
      return (
        <div>
          {this.renderLogoutLink()}
          <a href={this.link} style={this.anchorStyles}>
            {this.props.person.organization_name}
          </a>
        </div>
      );
    }
  }

  CurrentConnectedPersonListItem.propTypes = {
    person: React.PropTypes.shape({
      id:                React.PropTypes.string.isRequired,
      organization_name: React.PropTypes.string.isRequired
    }).isRequired
  };

  CurrentConnectedPersonListItem.contextTypes = {
    railsAppName: React.PropTypes.string.isRequired,
    railsEnv:     React.PropTypes.string.isRequired
  };

  global.CurrentConnectedPersonListItem = (global.module || {}).exports = CurrentConnectedPersonListItem;
})(this);
