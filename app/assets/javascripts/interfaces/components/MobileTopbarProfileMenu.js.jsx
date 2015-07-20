/* global React */

(function (global) {
  "use strict";

  var rootStyles = {
    position: "fixed",
      top: 51,
      right: 0,
      bottom: 0,
      left: 0,
    textAlign: "center",
    backgroundColor: "red",
  };

  class MobileTopbarProfileMenu extends React.Component {
    render () {
      return (
        <div>
          <div style={rootStyles} onClick={this.props.onDismiss}>
            <div >
              {this.props.connectedPeople.map((connectedPerson, i) => {
                return <div key={i}>{connectedPerson.attributes.organization_name}</div>;
              })}
            </div>
            <div>
              {this.props.apps.map((app, i) => {
                return <div key={i}>{app.attributes.name}</div>;
              })}
            </div>
          </div>
        </div>
      );
    }
  }

  MobileTopbarProfileMenu.propTypes = {
    onDismiss: React.PropTypes.func.isRequired,
    apps: React.PropTypes.arrayOf(
      React.PropTypes.shape({
        attributes: React.PropTypes.shape({
          name: React.PropTypes.string.isRequired,
        }),
      })
    ).isRequired,
    connectedPeople: React.PropTypes.arrayOf(
      React.PropTypes.shape({
        attributes: React.PropTypes.shape({
          organization_name: React.PropTypes.string.isRequired,
        }),
      })
    ).isRequired,
  };

  global.MobileTopbarProfileMenu = (global.module || {}).exports = MobileTopbarProfileMenu;
})(this);
