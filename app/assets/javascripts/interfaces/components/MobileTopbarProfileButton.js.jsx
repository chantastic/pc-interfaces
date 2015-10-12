/* global React, railsAppName */

(function (global) {
  "use strict";

  function appIconClassName () {
    return `icon icon-${railsAppName.toLowerCase()}-logo`;
  }

  var styles = {
    root: {
      float: "left",
      padding: "0 10px",
      borderRight: "1px solid rgba(0,0,0,0.2)",
      width: 51,
      cursor: "pointer",
    },
    appIconStyles: {
      fontSize: 128,
      lineHeight: "51px",
      height: "51px",
      width: 30,
      overflow: "hidden",
      display: "block",
      color: "white",
    },
  };

  class MobileTopbarProfileButton extends React.Component {
    render() {
      return <div style={styles.root} {...this.props}>
        <i
         style={styles.appIconStyles}
         className={appIconClassName()}
        />
      </div>;
    }
  }

  global.MobileTopbarProfileButton = (global.module || {}).exports = MobileTopbarProfileButton;
})(this);
