/* global React */

(function (global) {
  "use strict";

  var styles = {
    root: {
      width: "calc(100% - 100px)",
      float: "left",
      textAlign: "center",
      color: "white",
      cursor: "pointer",
    },
  };

  class MobileTopbarRouteButton extends React.Component {
    render() {
      return (
        <div style={styles.root} {...this.props}>
          {this.props.name + " "}
          <InterfacesIcon name="chevron-down" style={{ fontSize: 11 }}/>
        </div>
      );
    }
  }

  MobileTopbarRouteButton.PropTypes = {
    name: React.PropTypes.string.isRequired,
  };

  global.MobileTopbarRouteButton = (global.module || {}).exports = MobileTopbarRouteButton;
})(this);
