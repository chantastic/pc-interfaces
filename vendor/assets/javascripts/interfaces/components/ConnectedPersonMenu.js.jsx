(function (global) {
  class ConnectedPersonMenu extends React.Component {
    constructor(props) {
      super(props);
      this.renderUnlinkLink = this.renderUnlinkLink.bind(this);
    }

    getChildContext() {
      return {
        railsAppName: this.props.railsAppName,
        railsEnv:     this.props.railsEnv
      };
    }

    renderUnlinkLink() {
      if (this.props.connectedPeople.length > 0) {
        return (
          <div>
            <a
            className="account-switcher_unlink_link"
            href={interfacesURLForEnv(this.props.railsEnv, 'accounts', 'unlink')}>
              Unlink Accounts&nbsp;
              <i className="intrefaces interfaces-unlink"></i>
            </a>
          </div>
        );
      }
    }

    render() {
      return (
        <div>
          <ConnectedPersonList
           connectedPeople={this.props.connectedPeople}
           currentPersonId={this.props.currentPersonId}>
            <CurrentPersonListItem
             id={this.props.currentPersonId}
             name={this.props.currentPersonName}
             organizationName={this.props.currentPersonOrganizationName} />
          </ConnectedPersonList>

          {this.renderUnlinkLink()}
        </div>
      );
    }
  }

  ConnectedPersonMenu.propTypes = {
    connectedPeople: React.PropTypes.arrayOf(
      React.PropTypes.object
    ).isRequired,
    currentPersonId:               React.PropTypes.number.isRequired,
    currentPersonName:             React.PropTypes.string.isRequired,
    currentPersonOrganizationName: React.PropTypes.string.isRequired,
  };

  ConnectedPersonMenu.childContextTypes = {
    railsAppName: React.PropTypes.string,
    railsEnv:     React.PropTypes.string
  };

  global.ConnectedPersonMenu = (global.module || {}).exports = ConnectedPersonMenu;
})(this);
