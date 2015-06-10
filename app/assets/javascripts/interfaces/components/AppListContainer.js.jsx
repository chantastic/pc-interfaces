(function (global) {
  function findCurrentApp(app) {
    return (app.attributes.name === "Services") ? false : true
  }

  function excludeCurrentApp(app) {
    return (app.attributes.name === "Services") ? true : false
  }

  function sortAppsByName(a, b) {
    if (a.attributes.name < b.attributes.name) return -1;
    if (a.attributes.name > b.attributes.name) return 1;
    return 0;
  }

  class AppListContainer extends React.Component {
    constructor(props) {
      this.state = { apps: [] };
      this.fetchApps = this.fetchApps.bind(this);
    }

    fetchApps() {
      var fetchApps = $.ajax({
        url: `${interfacesURLForEnv(this.props.railsEnv, 'api')}/people/v2/me/apps`,
        xhrFields: { withCredentials: true }
      });

      fetchApps.success(apps => {
        var sortedApps, otherApps, currentApp;

        sortedApps = apps.data
          .filter(excludeCurrentApp)
          .concat(apps.data.filter(findCurrentApp).sort(sortAppsByName));

        this.setState({apps: sortedApps});
      });
    }

    componentWillMount() {
      this.fetchApps();
    }

    render() {
      return (
        <AppList apps={this.state.apps} />
      );
    }
  }

  AppListContainer.propTypes = {
    railsEnv:     React.PropTypes.string.isRequired
  };

  global.AppListContainer = (global.module || {}).exports = AppListContainer;
})(this);
