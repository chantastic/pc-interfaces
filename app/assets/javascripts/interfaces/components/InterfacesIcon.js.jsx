/* global React */
(function (global) {
  "use strict";

  class InterfacesIcon extends React.Component {
    constructor (props) {
      super(props);

      this.state = { hovered: false };

      this.handleMouseEnter = () => this.setState({ hovered: true });
      this.handleMouseLeave = () => this.setState({ hovered: false });
    }

    get classNames() {
      return `interfaces interfaces-${this.props.name}`;
    }

    get style () {
      return (this.state.hovered && this.props.hoverStyle)
        ? this.props.hoverStyle
        : null;
    }

    render() {
      return (
        <i
         className={this.classNames}
         {...this.props}
         style={this.style}
         onMouseEnter={this.handleMouseEnter}
         onMouseLeave={this.handleMouseLeave} />
      );
    }
  }

  InterfacesIcon.propTypes = {
    name: React.PropTypes.string.isRequired,
    hoverStyle: React.PropTypes.object
  };

  global.InterfacesIcon = (global.module || {}).exports = InterfacesIcon;
})(this);
