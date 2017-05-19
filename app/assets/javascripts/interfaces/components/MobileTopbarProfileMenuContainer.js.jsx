/* global React, $, interfacesURLForEnv, railsEnv, railsAppName, docCookies */

(function(global) {
  "use strict";
  function railsAppNameToAPIAppName(name) {
    switch (name) {
      case "RP":
        return "Resources";
      case "PlanningCenter":
        return "Services";
      default:
        return name;
    }
  }

  function excludeCurrentApp(app) {
    return app.attributes.name === railsAppNameToAPIAppName(railsAppName)
      ? false
      : true;
  }

  function sortAppsByName(a, b) {
    if (a.attributes.name < b.attributes.name) {
      return -1;
    }
    if (a.attributes.name > b.attributes.name) {
      return 1;
    }
    return 0;
  }

  class MobileTopbarProfileMenuContainer extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
        userCardShown: false,
        apps: [],
        connectedPeople: []
      };

      this.handleToggleUserCard = e => {
        e.stopPropagation();
        this.setState({ userCardShown: !this.state.userCardShown });
      };
    }

    fetchApps() {
      // this is a very niave form of caching requests
      // needed to support touch devices, where pre-fetching
      // on hover is not availabele
      if (this.state.apps.length) {
        return;
      }

      var fetchApps = $.ajax({
        url: `${interfacesURLForEnv(railsEnv, "api")}/people/v2/me/apps`,
        xhrFields: { withCredentials: true }
      });

      fetchApps.success(apps => {
        this.setState({
          apps: apps.data.filter(excludeCurrentApp).sort(sortAppsByName)
        });
      });
    }

    fetchConnectedPeople() {
      // this is a very niave form of caching requests
      // needed to support touch devices, where pre-fetching
      // on hover is not availabele
      if (this.state.connectedPeople.length) {
        return;
      }

      var fetchConnectedPeople = $.ajax({
        url: `${interfacesURLForEnv(window.railsEnv, "api")}/people/v2/me/connected_people`,
        xhrFields: { withCredentials: true }
      });

      fetchConnectedPeople.success(people => {
        this.setState({ connectedPeople: people.data });
      });
    }

    fetchAndSetUserCardShown() {
      this.setState({
        userCardShown: !!+docCookies.getItem("mobile_topbar_user_card_shown")
      });
    }

    componentWillMount() {
      // PERF: add cache
      this.fetchApps();
      this.fetchConnectedPeople();
      this.fetchAndSetUserCardShown();
    }

    componentWillUpdate(_, { userCardShown }) {
      docCookies.setItem("mobile_topbar_user_card_shown", +userCardShown);
    }

    render() {
      return (
        <MobileTopbarProfileMenu
          {...this.props}
          userCardShown={this.state.userCardShown}
          apps={this.state.apps}
          connectedPeople={this.state.connectedPeople}
          onToggleUserCard={this.handleToggleUserCard}
        />
      );
    }
  }

  MobileTopbarProfileMenuContainer.propTypes = {
    onDismiss: PropTypes.func.isRequired
  };

  global.MobileTopbarProfileMenuContainer = ((global.module || {
  }).exports = MobileTopbarProfileMenuContainer);
})(this);
