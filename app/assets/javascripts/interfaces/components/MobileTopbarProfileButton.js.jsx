/* global React, railsAppName */

(function (global) {
  "use strict";

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
      width: 30,
      overflow: "hidden",
      display: "block",
      color: "white",
    },
  };

  class MobileTopbarProfileButton extends React.Component {
    get appIconClassName() {
      return `icon icon-${railsAppName.toLowerCase()}-logo`;
    }

    render() {
      return (
        <div style={styles.root} {...this.props}>
          <i style={styles.appIconStyles} className={this.appIconClassName} />
        </div>
      );
    }
  }

  MobileTopbarProfileButton.PropTypes = {};

  global.MobileTopbarProfileButton = (global.module || {}).exports = MobileTopbarProfileButton;
})(this);
