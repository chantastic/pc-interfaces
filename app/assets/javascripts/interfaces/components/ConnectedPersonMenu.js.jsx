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
          <a
           className="account-switcher_action"
           id="unlink--account-switcher_action"
           href={interfacesURLForEnv(this.props.railsEnv, 'accounts', 'unlink')}>
            Unlink Accounts&nbsp;
            <i className="intrefaces interfaces-unlink"></i>
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
           currentPersonAccountCenterId={this.props.currentPersonAccountCenterId}>
            <CurrentPersonListItem
             id={this.props.currentPersonId}
             name={this.props.currentPersonName}
             organizationName={this.props.currentPersonOrganizationName}
             profilePath={this.props.currentPersonProfilePath} />
          </ConnectedPersonList>

          <div className="account-switcher_action-group">
            {this.renderUnlinkLink()}
            <a
             className="account-switcher_action"
             id="logout--account-switcher_action"
             href={interfacesURLForEnv(this.props.railsEnv, 'accounts', 'logout')}>
              Logout
            </a>
          </div>
        </div>
      );
    }
  }

  ConnectedPersonMenu.propTypes = {
    connectedPeople: React.PropTypes.arrayOf(
      React.PropTypes.object
    ).isRequired,
    currentPersonAccountCenterId:  React.PropTypes.number.isRequired,
    currentPersonId:               React.PropTypes.number.isRequired,
    currentPersonName:             React.PropTypes.string.isRequired,
    currentPersonOrganizationName: React.PropTypes.string.isRequired,
    currentPersonProfilePath:      React.PropTypes.string
  };

  ConnectedPersonMenu.childContextTypes = {
    railsAppName: React.PropTypes.string,
    railsEnv:     React.PropTypes.string
  };

  global.ConnectedPersonMenu = (global.module || {}).exports = ConnectedPersonMenu;
})(this);
