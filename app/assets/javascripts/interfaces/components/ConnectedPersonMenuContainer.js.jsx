/* global React, $, interfacesURLForEnv */

(function (global) {
  "use strict";

  class ConnectedPersonMenuContainer extends React.Component {
    constructor(props) {
      super(props);

      this.state = { connectedPeople: [] };

      this.fetchConnectedPeople = this.fetchConnectedPeople.bind(this);
    }

    fetchConnectedPeople() {
      // this is a very niave form of caching requests
      // needed to support touch devices, where pre-fetching
      // on hover is not availabele
      if (this.state.connectedPeople.length) { return; }

      var fetchConnectedPeople = $.ajax({
        url: `${interfacesURLForEnv(this.props.railsEnv, "api")}/people/v2/me/connected_people`,
        xhrFields: { withCredentials: true },
      });

      fetchConnectedPeople.success((people) => {
        this.setState({connectedPeople: people.data});
      });
    }

    componentWillMount() {
      $(document).on("user-badge:hovered", this.fetchConnectedPeople);
      $(document).on("user-badge:clicked", this.fetchConnectedPeople);
    }

    componentWillUnmount() {
      $(document).off("user-badge:hovered", this.fetchConnectedPeople);
      $(document).off("user-badge:clicked", this.fetchConnectedPeople);
    }

    render() {
      return (
        <ConnectedPersonMenu
         connectedPeople={this.state.connectedPeople}
         currentPersonAccountCenterId={this.props.currentPersonAccountCenterId}
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
    currentPersonAccountCenterId: React.PropTypes.number.isRequired,
    currentPersonId: React.PropTypes.number.isRequired,
    currentPersonName: React.PropTypes.string.isRequired,
    currentPersonOrganizationName: React.PropTypes.string.isRequired,
    currentPersonProfilePath: React.PropTypes.string,
    railsAppName: React.PropTypes.string.isRequired,
    railsEnv: React.PropTypes.string.isRequired,
  };

  global.ConnectedPersonMenuContainer = (global.module || {}).exports = ConnectedPersonMenuContainer;
})(this);
