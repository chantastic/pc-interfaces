/* global React */

(function (global) {
  "use strict";

  var ChevronDownIcon = function ChevronDownIcon() {
    return React.createElement(
      "svg",
      { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 16 16", "aria-labelledby": "title", role: "img", className: "interfaces-symbol" },
      React.createElement(
        "title",
        { id: "title" },
        "chevron-down icon"
      ),
      React.createElement("path", { "className": "cls-1", d: "M15.929 4.464l-1.77-2.017-6.221 7.071-6.1-6.95L.071 4.586l7.867 8.967z", "data-name": "Layer 1", role: "presentation" })
    );
  }

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
          <span style={{fontSize: "11px" }}>
            <ChevronDownIcon />
          </span>
        </div>
      );
    }
  }

  MobileTopbarRouteButton.PropTypes = {
    name: React.PropTypes.string.isRequired,
  };

  global.MobileTopbarRouteButton = (global.module || {}).exports = MobileTopbarRouteButton;
})(this);
