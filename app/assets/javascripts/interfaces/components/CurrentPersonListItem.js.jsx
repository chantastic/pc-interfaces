/* global React, interfacesURLForEnv */

(function (global) {
  "use strict";

  // INQUIRY: handle MQ globally for app?
  function isGreaterThanIE9 () {
    return !(document.all && !window.atob);
  }

  var organizationBlockStyles = {
    display: "table",
    width: "100%",
    boxSizing: "border-box",
    borderBottom: "1px solid #e5e5e5",
    padding: "14px 10px",
    lineHeight: "13px",
    color: "#565656",
  };

  var mediumWidthNameStyles = {
    paddingLeft: 10,
    lineHeight: "40px",
    marginBottom: -15,
    fontSize: "14px",
    color: "#888",
  };

  class CurrentPersonListItem extends React.Component {
    constructor(props) {
      super(props);

      this.state = {tabletContext: false};

      this.handleMatchMediaChange = (e) => {
        return this.setState({tabletContext: e.matches});
      };
    }

    get link() {
      return `${interfacesURLForEnv(this.context.railsEnv, "accounts")}/link/new?to=${this.props.id}&return=${this.context.railsAppName}%2f`;
    }

    componentWillMount() {
      // IE10+ warning
      if(isGreaterThanIE9()) {
        this.handleMatchMediaChange(window.matchMedia("(max-width: 979px)"));
        window.matchMedia("(max-width: 979px)").addListener(this.handleMatchMediaChange);
      }
    }

    componentWillUnmount() {
      // IE10+ warning
      if(isGreaterThanIE9()) {
        window.matchMedia("(max-width: 979px)").removeListener(this.handleMatchMediaChange);
      }
    }

    render() {
      return (
        <div>
          {(this.state.tabletContext) &&
            <div style={mediumWidthNameStyles}>
              {this.props.name}
            </div>
          }

          {(this.props.profilePath) &&
            <div style={{ display: "table", width: "100%", boxSizing: "border-box", padding: "13px 10px 0", lineHeight: "13px" }}>
              <div style={{ display: "table-cell" }}>
                <CurrentPersonListItemProfileLink
                 id={this.props.id}
                 profilePath={this.props.profilePath} />
              </div>
            </div>
          }

          <div style={organizationBlockStyles}>
            <div style={{ display: "table-cell", color: "565656" }}>
              <a href={this.link} style={{fontSize: 12, color: "inherit"}}>
                {this.props.organizationName}
              </a>
            </div>

            {(this.props.showSettingsLink) &&
              <CurrentPersonListItemSettingsLink />
            }
          </div>
        </div>
      );
    }
  }

  CurrentPersonListItem.propTypes = {
    id: React.PropTypes.number.isRequired,
    name: React.PropTypes.string.isRequired,
    organizationName: React.PropTypes.string.isRequired,
    profilePath: React.PropTypes.string,
    showSettingsLink: React.PropTypes.bool.isRequired,
  };

  CurrentPersonListItem.contextTypes = {
    railsAppName: React.PropTypes.string.isRequired,
    railsEnv: React.PropTypes.string.isRequired,
  };

  global.CurrentPersonListItem = (global.module || {}).exports = CurrentPersonListItem;
})(this);
