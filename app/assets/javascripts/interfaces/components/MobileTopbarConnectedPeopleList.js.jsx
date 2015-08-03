/* global React, interfacesURLForEnv, railsEnv */

(function (global) {
  "use strict";

  const styles = {
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
          {this.props.people.map((connectedPerson, i) => {
            return <ConnectedPersonListItem
                    key={i}
                    person={connectedPerson}
                    anchorStyle={{ textAlign: "left", paddingLeft: 48 }}
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
