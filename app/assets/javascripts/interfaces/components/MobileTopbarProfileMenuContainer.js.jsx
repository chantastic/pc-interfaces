/* global React, $, interfacesURLForEnv, railsEnv */

(function (global) {
  "use strict";

  function findCurrentApp(app) {
    return (app.attributes.name === "Services") ? false : true;
  }

  function excludeCurrentApp(app) {
    return (app.attributes.name === "Services") ? true : false;
  }

  function sortAppsByName(a, b) {
    if (a.attributes.name < b.attributes.name) { return -1; }
    if (a.attributes.name > b.attributes.name) { return 1; }
    return 0;
  }

  class MobileTopbarProfileMenuContainer extends React.Component {
    constructor (props) {
      super(props);

      this.state = {
	apps: [],
	connectedPeople: [],
      };
    }

    fetchApps () {
      // this is a very niave form of caching requests
      // needed to support touch devices, where pre-fetching
      // on hover is not availabele
      if (this.state.apps.length) { return; }

      var fetchApps = $.ajax({
        url: `${interfacesURLForEnv(railsEnv, "api")}/people/v2/me/apps`,
        xhrFields: { withCredentials: true },
      });

      fetchApps.success(apps => {
        var sortedApps;

        sortedApps = apps.data
          .filter(excludeCurrentApp)
          .concat(apps.data.filter(findCurrentApp).sort(sortAppsByName));

        this.setState({apps: sortedApps});
      });
    }

    fetchConnectedPeople() {
      // this is a very niave form of caching requests
      // needed to support touch devices, where pre-fetching
      // on hover is not availabele
      if (this.state.connectedPeople.length) { return; }

      var fetchConnectedPeople = $.ajax({
        url: `${interfacesURLForEnv(window.railsEnv, "api")}/people/v2/me/connected_people`,
        xhrFields: { withCredentials: true },
      });

      fetchConnectedPeople.success((people) => {
        this.setState({connectedPeople: people.data});
      });
    }

    componentWillMount () {
      // PERF: add cache
      this.fetchApps();
      this.fetchConnectedPeople();
    }

    render () {
      return <MobileTopbarProfileMenu {...this.props} apps={this.state.apps} connectedPeople={this.state.connectedPeople} />;
    }
  }

  MobileTopbarProfileMenuContainer.propTypes = {
    onDismiss: React.PropTypes.func.isRequired,
  };

  global.MobileTopbarProfileMenuContainer = (global.module || {}).exports = MobileTopbarProfileMenuContainer;
})(this);
