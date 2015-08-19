/* global React, interfacesURLForEnv, railsEnv, railsAppName */

(function (global) {
  "use strict";

  var styles = {
    root: {
      textAlign: "left",
      borderBottom: "1px solid #e5e5e5 !important",
    },

    anchor: {
      display: "block",
      paddingLeft: 48,
      color: "#565656",
    },
  };

  class MobileTopbarConnectedPersonListItem extends React.Component {
    get link() {
      return `${interfacesURLForEnv(railsEnv, "accounts")}/link/new?to=${this.props.person.id}&return=${railsAppName}%2f`;
    }

    render () {
      return <div style={styles.root}>
        <a href={this.link} style={styles.anchor}>
          {this.props.person.attributes.organization_name}
        </a>
      </div>;
    }
  }

  MobileTopbarConnectedPersonListItem.propTypes = {
    person: React.PropTypes.shape({
      id: React.PropTypes.string.isRequired,
      attributes: React.PropTypes.shape({
        organization_name: React.PropTypes.string.isRequired,
      }).isRequired,
    }).isRequired,
  };

  global.MobileTopbarConnectedPersonListItem = (global.module || {}).exports = MobileTopbarConnectedPersonListItem;
})(this);
