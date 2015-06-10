(function (global) {
  class AppList extends React.Component {
    get styles() {
      return {
      };
    }

    render() {
      return (
        <div>
          {this.props.apps.map((app, i) => {
            return <AppListItem key={i} app={app} />
          })}
        </div>
      );
    }
  }

  AppList.propTypes = {
    apps: React.PropTypes.array.isRequired
  };

  global.AppList = (global.module || {}).exports = AppList;
})(this);
