(function (global) {
  var styles = {
    services:      { backgroundPosition: "0px 0px" },
    resources:     { backgroundPosition: "0px -30px" },

    accounts:      { backgroundPosition: "0px -60px"  },
    checkins:      { backgroundPosition: "0px -90px"  },
    people:        { backgroundPosition: "0px -121px" },
    registrations: { backgroundPosition: "0px -152px" },
    giving:        { backgroundPosition: "0px -183px" },
    api:           { backgroundPosition: "0px -213px" },
  };

  class AppIcon extends React.Component {
    get propertyFormattedAppName() {
      return this.props.name.toLowerCase().replace(/-/g, "");
    }

    get styles() {
      return styles[this.propertyFormattedAppName]
    }

    render() {
      return <i className="topbar_applist_icon" style={this.styles} />;
    }
  }

  AppIcon.PropTypes = {
    name: React.PropTypes.string.isRequired
  }

  global.AppIcon = (global.module || {}).exports = AppIcon;
})(this);
