(function (global) {
  class ConnectedPersonListContainer extends React.Component {
    constructor(props) {
      this.state = { connectedPeople: [] };
      this.fetchConnectedPeople = this.fetchConnectedPeople.bind(this);
    }

    fetchConnectedPeople() {
      var fetchConnectedPeople = $.ajax({
        url: `${interfacesURLForEnv('development', 'api')}/people/v1/me/connected_people`,
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

    getChildContext() {
      return {
        railsAppName: this.props.railsAppName,
        railsEnv:     this.props.railsEnv
      };
    }

    get styles() {
      return {
        backgroundColor: "white",
        color: "#565656"
      };
    }

    render() {
      return (
        <ConnectedPersonList
         connectedPeople={this.state.connectedPeople}
         currentPersonId={this.props.currentPersonId}
         style={this.styles} />
      );
    }
  }

  ConnectedPersonListContainer.propTypes = {
    currentPersonId: React.PropTypes.number.isRequired,
    railsAppName:    React.PropTypes.string.isRequired,
    railsEnv:        React.PropTypes.string.isRequired
  };

  ConnectedPersonListContainer.childContextTypes = {
    railsAppName: React.PropTypes.string,
    railsEnv:     React.PropTypes.string
  };

  global.ConnectedPersonListContainer = (global.module || {}).exports = ConnectedPersonListContainer;
})(this);
