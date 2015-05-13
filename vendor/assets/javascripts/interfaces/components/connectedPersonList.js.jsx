(function (global) {
  class ConnectedPersonList extends React.Component {
    constructor(props) {
      super(props);
      this.renderItem = this.renderItem.bind(this);
    }

    renderItem(connectedPerson) {
      if (parseInt(connectedPerson.id, 10) !== this.props.currentPersonId) {
        return (
          <ConnectedPersonListItem
            key={connectedPerson.id}
            connectedPerson={connectedPerson} />
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
    connectedPeople: React.PropTypes.arrayOf(React.PropTypes.object).isRequired,
    currentPersonId: React.PropTypes.number.isRequired
  };

  ConnectedPersonList.contextTypes = {
    railsAppName: React.PropTypes.string.isRequired,
    railsEnv:     React.PropTypes.string.isRequired
  };

  global.ConnectedPersonList = (global.module || {}).exports = ConnectedPersonList;
})(this);
