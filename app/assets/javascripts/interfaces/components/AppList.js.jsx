/* global React */

(function(global) {
  "use strict";
  class AppList extends React.Component {
    get styles() {
      return {};
    }

    render() {
      return (
        <div>
          {this.props.apps.map((app, i) => {
            return <AppListItem key={i} app={app} />;
          })}
        </div>
      );
    }
  }

  AppList.propTypes = {
    apps: PropTypes.array.isRequired
  };

  global.AppList = ((global.module || {}).exports = AppList);
})(this);
