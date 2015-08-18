(function (global) {
  var styles = {
    padding: 0,
    display: "block",
    fontSize: "13px",
    lineHeight: "13px",
    transition: "all .2s ease-in-out",
    transform: "translateX(0)",
    ":hover": {
      transform: "translateX(3px)"
    }
  };

  class CurrentPersonListItemProfileLink extends React.Component {
    constructor (props) {
      super(props);
      this.state = { hovered: false };

      this.handleMouseEnter = () => this.setState({ hovered: true });
      this.handleMouseLeave = () => this.setState({ hovered: false });
    }

    get styles () {
      return _.extend(
        {},
        styles,
        this.state.hovered && styles[':hover']
      );
    }

    render() {
      return (
        <a
          style={this.styles}
          data-person-profile-link
          data-person-id={this.props.id}
          href={this.props.profilePath}
          onMouseEnter={this.handleMouseEnter}
          onMouseLeave={this.handleMouseLeave}
          {...this.props}>
           Profile
        </a>
      );
    }
  }

  CurrentPersonListItemProfileLink.propTypes = {
    id:          React.PropTypes.number.isRequired,
    profilePath: React.PropTypes.string.isRequired
  };

  global.CurrentPersonListItemProfileLink = (global.module || {}).exports = CurrentPersonListItemProfileLink;
})(this);
