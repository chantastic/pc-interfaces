(function (global) {
  var rootStyles = {
    position: "fixed",
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
    textAlign: "center",
    backgroundColor: "transparent"
  };

  var listStyles = {
    position: "absolute",
    top: 51,
    backgroundColor: "#565656",
    width: "100%"
  };

  var itemStyles = {
    display: "block",
    color: "white",
    borderBottom: "1px solid #4a4a4a"
  };

  class MobileTopbarRouteList extends React.Component {
    render () {
      return (
        <div style={rootStyles} onClick={this.props.onDismiss}>
          <div style={listStyles}>
            {this.props.routes.map(({name, href}, i) => {
              return <a key={i} style={itemStyles} href={href}>{name}</a>;
            })}
          </div>
        </div>
      );
    }
  }

  MobileTopbarRouteList.propTypes = {
    routes: React.PropTypes.arrayOf(
      React.PropTypes.shape({
        name: React.PropTypes.string.isRequired,
        href: React.PropTypes.string.isRequired
      })
    ).isRequired
  }

  global.MobileTopbarRouteList = (global.module || {}).exports = MobileTopbarRouteList;
})(this);
