/* global React */

(function (global) {
  "use strict";

  const styles = {
    root: {
      display: "table-cell",
      borderRight: "1px solid #e4e4e4",
      width: "50%",
      pointer: "cursor",
    },
  };

  class MobileTopbarProfileHelpButton extends React.Component {
    render () {
      return <div style={styles.root} {...this.props}>Help</div>;
    }
  }

  global.MobileTopbarProfileHelpButton = (global.module || {}).exports = MobileTopbarProfileHelpButton;
})(this);
