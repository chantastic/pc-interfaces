/* global React */

(function (global) {
  "use strict";

  var styles = {
    root: {
      textAlign: "left",
      borderBottom: "1px solid #e5e5e5 !important",
    },

    span: {
      display: "block",
      paddingLeft: 16,
      color: "#565656",
    },
  };

  class MobileTopbarCurrentPersonListItem extends React.Component {
    render () {
      return <div style={styles.root}>
        <span style={styles.span}>
          <InterfacesIcon name="check" style={{ paddingRight: 18, color: "rgb(78, 123, 168)" }}/>
          {this.props.name}
        </span>
      </div>;
    }
  }

  MobileTopbarCurrentPersonListItem.propTypes = {
    name: React.PropTypes.string.isRequired,
  };

  global.MobileTopbarCurrentPersonListItem = (global.module || {}).exports = MobileTopbarCurrentPersonListItem;
})(this);
