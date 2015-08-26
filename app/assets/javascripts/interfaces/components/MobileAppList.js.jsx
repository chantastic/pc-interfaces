/* global React, _ */

(function (global) {
  "use strict";

  var styles = {
    appList: {
      backgroundColor: "#383937",
      overflow: "hidden",
      overflowY: "scroll",
      WebkitOverflowScrolling: "touch",
      transition: "0.3s all ease-in-out",
    },
  };

  var iconStyles = {
    container: {
      display: "block",
      borderBottom: "1px solid #3f403e",
      backgroundColor: "transparent",
      height: 48,
      lineHeight: 1.2,
      padding: 10,
      transition: "background-color .12s ease-in-out",
      boxSizing: "border-box",
      textAlign: "left",
    },

    appNamePrefix: {
      color: "#bcbcbc",
      fontSize: 10,
      marginLeft: 35,
    },

    appName: {
      color: "white",
      fontSize: 15,
      marginLeft: 35,
    },
  };

  class MobileAppList extends React.Component {
    constructor(props) {
      super(props);
    }

    render () {
      return (
        <div style={_.extend({}, styles.appList, { height: "calc(100% - 215px)" }, !this.props.shown && { height: 0})}>
          {this.props.apps.map(({ attributes: { name, url }}, i) => {
            return (
              <a style={iconStyles.container} href={url} key={i}>
                <AppIcon name={name} />
                <div style={iconStyles.appNamePrefix}>planning center</div>
                <div style={iconStyles.appName}>{name}</div>
              </a>
            );
          })}
        </div>
      );
    }
  }

  MobileAppList.propTypes = {
    apps: React.PropTypes.arrayOf(
      React.PropTypes.shape({
        attributes: React.PropTypes.shape({
          name: React.PropTypes.string.isRequired,
        }),
      })
    ).isRequired,
    shown: React.PropTypes.bool,
  };

  global.MobileAppList = (global.module || {}).exports = MobileAppList;
})(this);