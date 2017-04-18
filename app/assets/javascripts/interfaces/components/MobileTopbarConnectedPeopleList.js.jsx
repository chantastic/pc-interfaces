/* global React, _, interfacesURLForEnv, railsEnv, interfacesPerson, interfacesOrganization */

(function(global) {
  "use strict";

  const ChainBrokenIcon = function ChainBrokenIcon() {
    return React.createElement(
      "svg",
      {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 16 16",
        "aria-labelledby": "title",
        role: "img",
        className: "interfaces-symbol"
      },
      React.createElement("title", { id: "title" }, "chain-broken icon"),
      React.createElement(
        "g",
        { "data-name": "Layer 1" },
        React.createElement("path", {
          className: "cls-1",
          d: "M5.986 10.073H2.358a.255.255 0 0 1-.258-.255V6.343a.255.255 0 0 1 .255-.255h3.631V4.123H2.358a2.22 2.22 0 0 0-2.22 2.22v3.475a2.22 2.22 0 0 0 2.22 2.22h3.628zm7.656-5.95H9.988v1.965h3.654a.255.255 0 0 1 .255.255v3.475a.255.255 0 0 1-.255.255H9.988v1.965h3.654a2.22 2.22 0 0 0 2.22-2.22V6.343a2.22 2.22 0 0 0-2.22-2.22z",
          role: "presentation"
        }),
        React.createElement("path", {
          className: "cls-1",
          d: "M4.096 7.138h1.89v1.925h-1.89zm5.892 0h1.89v1.925h-1.89zM8.948 2.29v11.621H7.023V2.29z",
          role: "presentation"
        })
      )
    );
  };

  var styles = {
    root: {
      position: "absolute",
      top: 49,
      right: 4,
      backgroundColor: "white",
      width: "calc(100% - 52px)",
      borderRadius: 1,
      borderTopLeftRadius: 2,
      borderTopRightRadius: 0,
      transition: "all 0.2s ease-in-out",

      height: "calc(100% - 106px)",
      overflow: "hidden",
      overflowY: "scroll",
      WebkitOverflowScrolling: "touch"
    },

    unlinkButton: {
      color: "#606060",
      display: "block",
      pointer: "cursor"
    }
  };

  class MobileTopbarConnectedPeopleList extends React.Component {
    constructor(props) {
      super(props);

      this.dismissBackgroudClick = e => {
        if (e.target === this._pane) {
          e.stopPropagation();
        }
      };
    }

    render() {
      return (
        <div
          style={_.extend({}, styles.root, this.props.style)}
          ref={c => this._pane = c}
          onClick={this.dismissBackgroudClick}
        >
          <MobileTopbarCurrentPersonListItem
            personName={interfacesPerson.name}
            organizationName={interfacesOrganization.name}
          />

          {this.props.people.map((connectedPerson, i) => {
            return (
              <MobileTopbarConnectedPersonListItem
                key={i}
                person={connectedPerson}
              />
            );
          })}

          {this.props.people.length > 0 &&
            <a
              href={interfacesURLForEnv(railsEnv, "accounts", "unlink")}
              style={styles.unlinkButton}
            >
              <span style={{ paddingRight: "4px", verticalAlign: "middle" }}>
                <ChainBrokenIcon />
              </span>
              {" "}Unlink Accounts
            </a>}
        </div>
      );
    }
  }

  MobileTopbarConnectedPeopleList.propTypes = {
    people: React.PropTypes.arrayOf(React.PropTypes.object).isRequired,
    style: React.PropTypes.object
  };

  global.MobileTopbarConnectedPeopleList = ((global.module || {
  }).exports = MobileTopbarConnectedPeopleList);
})(this);
