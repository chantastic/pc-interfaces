(function (global) {
  var rootStyles = {
    display: "table-cell",
    textAlign: "right",
    width: 20,
    paddingRight: 9
  };

  var iconHoverStyle = {
    color: "#777"
  };

  class CurrentPersonListItemSettingsLink extends React.Component {
    render () {
      return (
        <div style={rootStyles}>
          <a href="/organization">
            <InterfacesIcon
              name="cog"
              hoverStyle={iconHoverStyle} />
          </a>
        </div>
      );
    }
  }

  CurrentPersonListItemSettingsLink.propTypes = {};

  global.CurrentPersonListItemSettingsLink = (global.module || {}).exports = CurrentPersonListItemSettingsLink;
})(this);
