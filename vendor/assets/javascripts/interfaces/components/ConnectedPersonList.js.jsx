(function (global) {
  class ConnectedPersonList extends React.Component {
    constructor(props) {
      super(props);
      this.renderItem = this.renderItem.bind(this);
    }

    renderItem(person) {
      if (parseInt(person.id, 10) !== this.props.currentPersonId) {
        return (
          <ConnectedPersonListItem
            key={person.id}
            person={person} />
        );
      } else {
        return (
          <CurrentConnectedPersonListItem
            key={person.id}
            person={person} />
        );
      }
    }

    render() {
      return (
        <div style={this.props.style}>
          {this.props.connectedPeople.map(this.renderItem)}
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
    currentPersonId: React.PropTypes.number.isRequired
  };

  ConnectedPersonList.contextTypes = {
    railsAppName: React.PropTypes.string.isRequired,
    railsEnv:     React.PropTypes.string.isRequired
  };

  global.ConnectedPersonList = (global.module || {}).exports = ConnectedPersonList;
})(this);
