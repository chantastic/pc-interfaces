/* global React, _ */

const styles = {
  appList: {
    backgroundColor: "#383937",
    overflow: "hidden",
    transition: "0.3s all ease-in-out",
  },
};

const iconStyles = {
  container: {
    display: "block",
    borderBottom: "1px solid #3f403e",
    backgroundColor: "transparent",
    height: 48,
    lineHeight: 1.2,
    padding: 10,
    transition: "background-color .12s ease-in-out",
    boxSizing: "border-box",
    textAlign: "left",
  },

  appNamePrefix: {
    color: "#bcbcbc",
    fontSize: 10,
    marginLeft: 35,
  },

  appName: {
    color: "white",
    fontSize: 15,
    marginLeft: 35,
  },
};


(function (global) {
  "use strict";

  class MobileAppList extends React.Component {
    constructor(props) {
      super(props);
    }

    render () {
      return (
        <div style={_.extend({}, styles.appList, { maxHeight: this.props.height }, !this.props.shown && { maxHeight: 0})}>
          {this.props.apps.map(({ attributes: { name, url, id }}) => {
            return (
              <a style={iconStyles.container} href={url} key={id}>
                <AppIcon name={name} />
                <div style={iconStyles.appNamePrefix}>planning center</div>
                <div style={iconStyles.appName}>{name}</div>
              </a>
            );
          })}
        </div>
      );
    }
  }

  MobileAppList.propTypes = {
    apps: React.PropTypes.arrayOf(
      React.PropTypes.shape({
        attributes: React.PropTypes.shape({
          name: React.PropTypes.string.isRequired,
        }),
      })
    ).isRequired,
    shown: React.PropTypes.bool,
    height: React.PropTypes.number,
  };

  global.MobileAppList = (global.module || {}).exports = MobileAppList;
})(this);
