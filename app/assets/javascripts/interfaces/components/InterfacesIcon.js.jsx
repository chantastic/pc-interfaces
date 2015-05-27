(function (global) {
  class InterfacesIcon extends React.Component {
    get classNames() {
      return `interfaces interfaces-${this.props.name}`;
    }

    render() {
      return (
        <i
         className={this.classNames}
         style={this.props.style}></i>
      );
    }
  }

  InterfacesIcon.propTypes = {
    name:  React.PropTypes.string.isRequired,
    style: React.PropTypes.object
  }

  global.InterfacesIcon = (global.module || {}).exports = InterfacesIcon;
})(this);
