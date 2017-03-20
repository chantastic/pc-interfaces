/* global React, _ */

(function(global) {
  "use strict";
  class ConnectedPersonList extends React.Component {
    constructor(props) {
      super(props);
      this.renderItem = this.renderItem.bind(this);
    }

    get styles() {
      return {
        backgroundColor: "white",
        color: "#565656"
      };
    }

    get filteredAndSortedConnectedPeople() {
      // TODO: add lodash for apps without it
      return _.chain(this.props.connectedPeople)
        .reject(
          person =>
            parseInt(person.id, 10) === this.props.currentPersonAccountCenterId
        )
        .sortBy(person => person.attributes.organization_name)
        .value();
    }

    renderItem(person) {
      return <ConnectedPersonListItem key={person.id} person={person} />;
    }

    render() {
      return (
        <div style={this.styles}>
          {this.props.children}
          {this.filteredAndSortedConnectedPeople.map(this.renderItem)}
        </div>
      );
    }
  }

  ConnectedPersonList.propTypes = {
    connectedPeople: React.PropTypes.arrayOf(
      React.PropTypes.shape({
        id: React.PropTypes.string.isRequired
      })
    ).isRequired,
    currentPersonAccountCenterId: React.PropTypes.number.isRequired,
    currentPersonId: React.PropTypes.number.isRequired
  };

  ConnectedPersonList.contextTypes = {
    railsAppName: React.PropTypes.string.isRequired,
    railsEnv: React.PropTypes.string.isRequired
  };

  global.ConnectedPersonList = ((global.module || {
  }).exports = ConnectedPersonList);
})(this);
