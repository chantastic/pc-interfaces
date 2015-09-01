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
      height: "100%",
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

    appName: {
      color: "white",
      fontSize: 16,
      marginLeft: 38,
      marginTop: 4,
    },
  };

  class MobileAppList extends React.Component {
    constructor(props) {
      super(props);
    }

    render () {
      return (
        <div style={styles.appList}>
          {this.props.apps.map(({ attributes: { name, url }}, i) => {
            return (
              <a style={iconStyles.container} href={url} key={i}>
                <AppIcon name={name} />
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
  };

  global.MobileAppList = (global.module || {}).exports = MobileAppList;
})(this);
