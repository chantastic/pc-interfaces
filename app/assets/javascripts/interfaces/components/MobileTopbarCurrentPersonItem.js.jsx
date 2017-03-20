/* global React */

(function(global) {
  "use strict";
  var styles = {
    root: {
      textAlign: "left",
      borderBottom: "1px solid #e5e5e5",
      lineHeight: 1.9,
      marginTop: 2,
      padding: "10px 10px 9px"
    }
  };

  class MobileTopbarCurrentPersonListItem extends React.Component {
    render() {
      return (
        <div style={styles.root}>
          <div style={{ fontWeight: "bold", color: "#606060" }}>
            {this.props.personName}
          </div>
          <div>{this.props.organizationName}</div>
        </div>
      );
    }
  }

  MobileTopbarCurrentPersonListItem.propTypes = {
    organizationName: React.PropTypes.string.isRequired,
    personName: React.PropTypes.string.isRequired
  };

  global.MobileTopbarCurrentPersonListItem = ((global.module || {
  }).exports = MobileTopbarCurrentPersonListItem);
})(this);
