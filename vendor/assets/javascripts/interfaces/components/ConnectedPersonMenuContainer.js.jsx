(function (global) {
  class ConnectedPersonMenuContainer extends React.Component {
    constructor(props) {
      this.state = { connectedPeople: [] };
      this.fetchConnectedPeople = this.fetchConnectedPeople.bind(this);
    }

    fetchConnectedPeople() {
      var fetchConnectedPeople = $.ajax({
        url: `${interfacesURLForEnv(this.props.railsEnv, 'api')}/people/v2/me/connected_people`,
        xhrFields: { withCredentials: true }
      });

      fetchConnectedPeople.success((people) => {
        this.setState({connectedPeople: people.data});
      });
    }

    componentWillMount() {
      document.addEventListener('user-badge:hovered', this.fetchConnectedPeople)
    }

    componentWillUnmount() {
      document.removeEventListener('user-badge:hovered', this.fetchConnectedPeople)
    }

    render() {
      return (
        <ConnectedPersonMenu
         connectedPeople={this.state.connectedPeople}
         currentPersonId={this.props.currentPersonId}
         currentPersonName={this.props.currentPersonName}
         currentPersonOrganizationName={this.props.currentPersonOrganizationName}
         currentPersonProfilePath={this.props.currentPersonProfilePath}
         railsAppName={this.props.railsAppName}
         railsEnv={this.props.railsEnv} />
      );
    }
  }

  ConnectedPersonMenuContainer.propTypes = {
    currentPersonId:               React.PropTypes.number.isRequired,
    currentPersonName:             React.PropTypes.string.isRequired,
    currentPersonOrganizationName: React.PropTypes.string.isRequired,
    currentPersonProfilePath:      React.PropTypes.string,
    railsAppName:                  React.PropTypes.string.isRequired,
    railsEnv:                      React.PropTypes.string.isRequired
  };

  global.ConnectedPersonMenuContainer = (global.module || {}).exports = ConnectedPersonMenuContainer;
})(this);
