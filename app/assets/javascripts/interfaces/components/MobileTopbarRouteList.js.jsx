/* global React, _ */

(function(global) {
  "use strict";
  var rootStyles = {
    position: "fixed",
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    textAlign: "center",
    backgroundColor: "transparent",
    cursor: "pointer"
  };

  var listStyles = {
    position: "absolute",
    top: 51,
    backgroundColor: "#565656",
    width: "100%",
    boxShadow: "0 10px 10px rgba(0,0,0,0.3)"
  };

  var itemStyles = {
    display: "block",
    color: "white",
    borderBottom: "1px solid #4a4a4a"
  };

  class MobileTopbarRouteList extends React.Component {
    get routes() {
      return this.props.routes.map(route => {
        const { name } = route;

        return _.extend({}, route, {
          name: name.trim(),
          active: name.trim() === this.props.activeRouteName.trim()
        });
      });
    }

    render() {
      return (
        <div
          style={rootStyles}
          onClick={this.props.onDismiss}
          data-no-turbolink
        >
          <div style={listStyles}>
            {this.routes.map(({ classes, href, name, active }, i) => {
              return (
                <a
                  key={i}
                  href={href}
                  style={_.extend(
                    {},
                    itemStyles,
                    active && { backgroundColor: "rgba(0,0,0, 0.3)" }
                  )}
                >
                  <span className={classes}>{name}</span>
                </a>
              );
            })}
          </div>
        </div>
      );
    }
  }

  MobileTopbarRouteList.propTypes = {
    activeRouteName: React.PropTypes.string,
    routes: React.PropTypes.arrayOf(
      React.PropTypes.shape({
        classes: React.PropTypes.string.isRequired,
        href: React.PropTypes.string.isRequired,
        name: React.PropTypes.string.isRequired
      })
    ).isRequired
  };

  global.MobileTopbarRouteList = ((global.module || {
  }).exports = MobileTopbarRouteList);
})(this);
