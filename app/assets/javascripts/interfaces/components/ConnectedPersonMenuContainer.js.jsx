/* global React, $, interfacesURLForEnv */

(function(global) {
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
      if (this.state.connectedPeople.length) {
        return;
      }

      var fetchConnectedPeople = $.ajax({
        url: `${interfacesURLForEnv(this.props.railsEnv, "api")}/people/v2/me/connected_people`,
        xhrFields: { withCredentials: true },
        cache: false
      });

      fetchConnectedPeople.success(people => {
        this.setState({ connectedPeople: people.data });
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
      const {
        profilePath,
        ...props
      } = this.props;

      return (
        <ConnectedPersonMenu
          connectedPeople={this.state.connectedPeople}
          {...props}
        />
      );
    }
  }

  ConnectedPersonMenuContainer.propTypes = {
    currentPersonAccountCenterId: PropTypes.number.isRequired,
    currentPersonId: PropTypes.number.isRequired,
    currentPersonName: PropTypes.string.isRequired,
    currentPersonOrganizationName: PropTypes.string.isRequired,
    currentPersonProfilePath: PropTypes.string,
    railsAppName: PropTypes.string.isRequired,
    railsEnv: PropTypes.string.isRequired,
    showSettingsLink: PropTypes.bool.isRequired
  };

  global.ConnectedPersonMenuContainer = ((global.module || {
  }).exports = ConnectedPersonMenuContainer);
})(this);
