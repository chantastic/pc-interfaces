/* global React, interfacesURLForEnv, railsEnv, interfacesOrganization */

(function (global) {
  "use strict";

  var styles = {
    root: {
      position: "absolute",
      top: 49,
      right: 2,
      backgroundColor: "white",
      width: "calc(100% - 45px)",
      borderRadius: 2,
      borderTopRightRadius: 0,

      height: "calc(100% - 104px)",
      overflow: "hidden",
      overflowY: "scroll",
      WebkitOverflowScrolling: "touch",
    },

    unlinkButton: {
      color: "#606060",
      display: "block",
      pointer: "cursor",
    },
  };

  class MobileTopbarConnectedPeopleList extends React.Component {
    render () {
      return (
        <div style={_.extend({}, styles.root, this.props.style)}>
          <MobileTopbarCurrentPersonListItem name={interfacesOrganization.name} />
          {this.props.people.map((connectedPerson, i) => {
            return <MobileTopbarConnectedPersonListItem
                    key={i}
                    person={connectedPerson}
                   />;
          })}

          <a href={interfacesURLForEnv(railsEnv, "accounts", "unlink")} style={styles.unlinkButton}>
            <InterfacesIcon name="unlink" />{' '}Unlink Accounts
          </a>
        </div>
      );
    }
  }

  MobileTopbarConnectedPeopleList.propTypes = {
    people: React.PropTypes.arrayOf(
      React.PropTypes.object
    ).isRequired,
    style: React.PropTypes.object,
  };

  global.MobileTopbarConnectedPeopleList = (global.module || {}).exports = MobileTopbarConnectedPeopleList;
})(this);
