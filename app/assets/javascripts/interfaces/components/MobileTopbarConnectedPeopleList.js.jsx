/* global React, interfacesURLForEnv, railsEnv, interfacesOrganization */

(function (global) {
  "use strict";

  var styles = {
    unlinkButton: {
      border: "1px solid #e5e5e5",
      color: "#606060",
      display: "block",
      margin: "30px",
      borderRadius: "4px",
      pointer: "cursor",
    },
  };

  class MobileTopbarConnectedPeopleList extends React.Component {
    render () {
      return (
        <div>
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
  };

  global.MobileTopbarConnectedPeopleList = (global.module || {}).exports = MobileTopbarConnectedPeopleList;
})(this);
