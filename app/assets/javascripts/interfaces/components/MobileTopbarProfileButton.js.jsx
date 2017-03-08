/* global React, railsAppName */

/* Implementation:
 * Requires availability of interfaces_icon React component in global namepsace.
 */

(function (global) {
  "use strict";

  var styles = {
    root: {
      float: "left",
      borderRight: "1px solid rgba(0,0,0,0.2)",
      width: "51px",
      height: "50px",
      cursor: "pointer",
      padding: "10px",
      fill: "white",
    },
  };

  const icons = {
    InterfacesAppIcon: function InterfacesAppIcon() { return React.createElement( "svg", { "data-name": "Layer 1", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 32 32", "aria-labelledby": "title", role: "img", className: "symbol symbol-interfaces-app" }, React.createElement( "title", { id: "title" }, "Interfaces icon" ), React.createElement("path", { "className": "cls-1", d: "M26.973 2H5.027A3.027 3.027 0 0 0 2 5.027v21.946A3.027 3.027 0 0 0 5.027 30h21.946A3.027 3.027 0 0 0 30 26.973V5.027A3.027 3.027 0 0 0 26.973 2zm0 24.216a.757.757 0 0 1-.757.757H5.784a.757.757 0 0 1-.757-.757V5.784a.757.757 0 0 1 .757-.757h4.541v1.517a.753.753 0 0 0 .753.753h9.845a.753.753 0 0 0 .753-.753V5.027h4.541a.757.757 0 0 1 .757.757z", role: "presentation" }), React.createElement("path", { "className": "cls-2", d: "M15.27 17.088l.717 6.391L22 10 9.198 17.108l6.072-.02z", role: "presentation" }) ); },
    AccountsAppIcon: function AccountsAppIcon() { return React.createElement( "svg", { "data-name": "Layer 1", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 32 32", "aria-labelledby": "title", role: "img", className: "symbol symbol-accounts-app" }, React.createElement( "title", { id: "title" }, "accounts-app icon" ), React.createElement("path", { "className": "cls-1", d: "M26.973 2H5.027A3.027 3.027 0 0 0 2 5.027v21.946A3.027 3.027 0 0 0 5.027 30h21.946A3.027 3.027 0 0 0 30 26.973V5.027A3.027 3.027 0 0 0 26.973 2zm0 24.216a.757.757 0 0 1-.757.757H5.784a.757.757 0 0 1-.757-.757V5.784a.757.757 0 0 1 .757-.757h4.541v1.517a.753.753 0 0 0 .753.753h9.845a.753.753 0 0 0 .753-.753V5.027h4.541a.757.757 0 0 1 .757.757z", role: "presentation" }), React.createElement("path", { "className": "cls-2", d: "M22.588 15.839v-.01a.276.276 0 0 0-.193-.235.272.272 0 0 0-.044-.01h-.01l-.9-.1a1.38 1.38 0 0 1-.875-2.112l.565-.706.013-.021.006-.01a.291.291 0 0 0 .016-.03.269.269 0 0 0 .012-.031v-.011a.275.275 0 0 0-.05-.245l-.008-.01-.012-.014-.906-.906-.015-.012-.008-.006a.276.276 0 0 0-.3-.029.279.279 0 0 0-.038.024l-.009.006-.706.565a1.379 1.379 0 0 1-2.112-.875l-.1-.9c0-.008 0-.016-.005-.024v-.012a.287.287 0 0 0-.023-.063l-.006-.011a.275.275 0 0 0-.209-.138h-1.342a.276.276 0 0 0-.235.193.279.279 0 0 0-.01.044v.01l-.1.9a1.378 1.378 0 0 1-2.112.875l-.706-.565-.021-.013-.01-.006-.03-.016-.031-.012h-.011a.275.275 0 0 0-.245.05l-.01.009-.014.012-.906.906-.012.015-.006.007a.276.276 0 0 0-.005.341l.006.009.565.706a1.376 1.376 0 0 1-.875 2.112l-.9.1-.024.005h-.012l-.032.01-.03.014-.01.006a.275.275 0 0 0-.138.209v1.341a.276.276 0 0 0 .193.235.266.266 0 0 0 .044.01h.01l.9.1a1.376 1.376 0 0 1 .875 2.112l-.565.706-.013.021-.006.01a.276.276 0 0 0-.016.03.283.283 0 0 0-.012.031v.011a.275.275 0 0 0 .05.245l.008.01.012.014.906.906.015.012.008.006a.276.276 0 0 0 .3.029.262.262 0 0 0 .038-.024l.009-.006.706-.565a1.382 1.382 0 0 1 2.112.875l.1.9c0 .008 0 .016.005.024v.012a.29.29 0 0 0 .023.063l.006.01a.275.275 0 0 0 .209.138h1.341a.276.276 0 0 0 .235-.193.28.28 0 0 0 .01-.044v-.01l.1-.9a1.376 1.376 0 0 1 2.112-.875l.706.565.021.013.01.006.03.016.031.012h.011a.275.275 0 0 0 .245-.05l.01-.008.014-.012.906-.906.012-.015.006-.008a.276.276 0 0 0 .005-.341l-.006-.009-.565-.706a1.377 1.377 0 0 1 .875-2.112l.9-.1.024-.005h.012l.032-.01.03-.013.01-.006a.275.275 0 0 0 .138-.209v-1.312zM16 18.748a2.248 2.248 0 1 1 2.248-2.248A2.248 2.248 0 0 1 16 18.748z", role: "presentation" }) ); },
    CheckInsAppIcon: function CheckInsAppIcon() { return React.createElement( "svg", { "data-name": "Layer 1", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 32 32", "aria-labelledby": "title", role: "img", className: "symbol symbol-check-ins-app" }, React.createElement( "title", { id: "title" }, "check-ins-app icon" ), React.createElement("path", { "className": "cls-1", d: "M19.846 11.606L14.352 17.1l-2.2-2.2a1.554 1.554 0 1 0-2.2 2.2l3.3 3.3a1.554 1.554 0 0 0 2.2 0l6.591-6.6a1.554 1.554 0 0 0-2.2-2.2z", role: "presentation" }), React.createElement("path", { "className": "cls-1", d: "M26.973 2H5.027A3.027 3.027 0 0 0 2 5.027v21.946A3.027 3.027 0 0 0 5.027 30h21.946A3.027 3.027 0 0 0 30 26.973V5.027A3.027 3.027 0 0 0 26.973 2zm0 24.216a.757.757 0 0 1-.757.757H5.784a.757.757 0 0 1-.757-.757V5.784a.757.757 0 0 1 .757-.757h4.541v1.517a.753.753 0 0 0 .753.753h9.845a.753.753 0 0 0 .753-.753V5.027h4.541a.757.757 0 0 1 .757.757z", role: "presentation" }) ); },
    GivingAppIcon: function GivingAppIcon() { return React.createElement( "svg", { "data-name": "Layer 1", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 32 32", "aria-labelledby": "title", role: "img", className: "symbol symbol-giving-app" }, React.createElement( "title", { id: "title" }, "giving-app icon" ), React.createElement("path", { "className": "cls-1", d: "M16.422 12.856l-.422.422-.422-.422a3.284 3.284 0 0 0-4.354-.347 3.161 3.161 0 0 0-.242 4.688l.55.55 4.114 4.115a.5.5 0 0 0 .709 0l4.664-4.662a3.161 3.161 0 0 0-.242-4.688 3.285 3.285 0 0 0-4.355.344z", role: "presentation" }), React.createElement("path", { "className": "cls-2", d: "M26.973 2H5.027A3.027 3.027 0 0 0 2 5.027v21.946A3.027 3.027 0 0 0 5.027 30h21.946A3.027 3.027 0 0 0 30 26.973V5.027A3.027 3.027 0 0 0 26.973 2zm0 24.216a.757.757 0 0 1-.757.757H5.784a.757.757 0 0 1-.757-.757V5.784a.757.757 0 0 1 .757-.757h4.541v1.517a.753.753 0 0 0 .753.753h9.845a.753.753 0 0 0 .753-.753V5.027h4.541a.757.757 0 0 1 .757.757z", role: "presentation" }) ); },
    GroupsAppIcon: function GroupsAppIcon() { return React.createElement( "svg", { "data-name": "Layer 1", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 32 32", "aria-labelledby": "title", role: "img", className: "symbol symbol-groups-app" }, React.createElement( "title", { id: "title" }, "groups-app icon" ), React.createElement("path", { "className": "cls-1", d: "M26.973 2H5.027A3.027 3.027 0 0 0 2 5.027v21.946A3.027 3.027 0 0 0 5.027 30h21.946A3.027 3.027 0 0 0 30 26.973V5.027A3.027 3.027 0 0 0 26.973 2zm0 24.216a.757.757 0 0 1-.757.757H5.784a.757.757 0 0 1-.757-.757V5.784a.757.757 0 0 1 .757-.757h4.541v1.517a.753.753 0 0 0 .753.753h9.845a.753.753 0 0 0 .753-.753V5.027h4.541a.757.757 0 0 1 .757.757z", role: "presentation" }), React.createElement("path", { "className": "cls-1", d: "M23.189 12.973a2.643 2.643 0 0 0-5.033-1.135h-4.313a2.643 2.643 0 1 0-3.519 3.519v3.556a2.643 2.643 0 1 0 3.519 3.519h4.313a2.643 2.643 0 1 0 3.519-3.519v-3.556a2.642 2.642 0 0 0 1.514-2.384zm-3.027 5.714a2.634 2.634 0 0 0-2.232 2.232h-3.86a2.634 2.634 0 0 0-2.232-2.232v-3.1a2.634 2.634 0 0 0 2.232-2.232h3.86a2.634 2.634 0 0 0 2.232 2.232z", role: "presentation" }) ); },
    PeopleAppIcon: function PeopleAppIcon() { return React.createElement( "svg", { "data-name": "Layer 1", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 32 32", "aria-labelledby": "title", role: "img", className: "symbol symbol-people-app" }, React.createElement( "title", { id: "title" }, "people-app icon" ), React.createElement("circle", { "className": "cls-1", cx: "19.861", cy: "14.609", r: "2.145" }), React.createElement("circle", { "className": "cls-1", cx: "13.289", cy: "13.613", r: "2.86" }), React.createElement("path", { "className": "cls-2", d: "M26.973 2H5.027A3.027 3.027 0 0 0 2 5.027v21.946A3.027 3.027 0 0 0 5.027 30h21.946A3.027 3.027 0 0 0 30 26.973V5.027A3.027 3.027 0 0 0 26.973 2zm0 24.216a.757.757 0 0 1-.757.757H5.784a.757.757 0 0 1-.757-.757V5.784a.757.757 0 0 1 .757-.757h4.541v1.517a.753.753 0 0 0 .753.753h9.845a.753.753 0 0 0 .753-.753V5.027h4.541a.757.757 0 0 1 .757.757z", role: "presentation" }), React.createElement("path", { "className": "cls-2", d: "M15.372 17.892h-4.041a2.52 2.52 0 0 0-2.52 2.52v2.021h9.081v-2.021a2.52 2.52 0 0 0-2.52-2.52zm6.137 0h-2.694a1.664 1.664 0 0 0-1.01.346 3.251 3.251 0 0 1 .844 2.174v.507h4.541v-1.347a1.68 1.68 0 0 0-1.681-1.68z", role: "presentation" }) ); },
    RegistrationsAppIcon: function RegistrationsAppIcon() { return React.createElement( "svg", { "data-name": "Layer 1", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 32 32", "aria-labelledby": "title", role: "img", className: "symbol symbol-registrations-app" }, React.createElement( "title", { id: "title" }, "registrations-app icon" ), React.createElement("path", { "className": "cls-1", d: "M20.52 13.131l-2.677-2.425-1.782 1.945 2.658 2.459 1.801-1.979zm-5.013.125l-5.177 5.651a2.029 2.029 0 0 0-.4.86l-.36 2.666 2.621-.578a2 2 0 0 0 .819-.473l5.159-5.666zm-1.009 8.916h7.661v-1.513h-6.284l-1.377 1.513z", role: "presentation" }), React.createElement("path", { "className": "cls-1", d: "M26.973 2H5.027A3.027 3.027 0 0 0 2 5.027v21.946A3.027 3.027 0 0 0 5.027 30h21.946A3.027 3.027 0 0 0 30 26.973V5.027A3.027 3.027 0 0 0 26.973 2zm0 24.216a.757.757 0 0 1-.757.757H5.784a.757.757 0 0 1-.757-.757V5.784a.757.757 0 0 1 .757-.757h4.541v1.517a.753.753 0 0 0 .753.753h9.845a.753.753 0 0 0 .753-.753V5.027h4.541a.757.757 0 0 1 .757.757z", role: "presentation" }) ); },
    ResourcesAppIcon: function ResourcesAppIcon() { return React.createElement( "svg", { "data-name": "Layer 1", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 32 32", "aria-labelledby": "title", role: "img", className: "symbol symbol-resources-app" }, React.createElement( "title", { id: "title" }, "resources-app icon" ), React.createElement("path", { "className": "cls-1", d: "M26.973 2H5.027A3.027 3.027 0 0 0 2 5.027v21.946A3.027 3.027 0 0 0 5.027 30h21.946A3.027 3.027 0 0 0 30 26.973V5.027A3.027 3.027 0 0 0 26.973 2zm0 24.216a.757.757 0 0 1-.757.757H5.784a.757.757 0 0 1-.757-.757V5.784a.757.757 0 0 1 .757-.757h4.541v1.517a.753.753 0 0 0 .753.753h9.845a.753.753 0 0 0 .753-.753V5.027h4.541a.757.757 0 0 1 .757.757z", role: "presentation" }), React.createElement("rect", { "className": "cls-2", x: "9", y: "11", width: "6", height: "5", rx: ".431", ry: ".431" }), React.createElement("rect", { "className": "cls-2", x: "17", y: "11", width: "6", height: "5", rx: ".431", ry: ".431" }), React.createElement("rect", { "className": "cls-2", x: "9", y: "18", width: "6", height: "5", rx: ".431", ry: ".431" }), React.createElement("rect", { "className": "cls-2", x: "17", y: "18", width: "6", height: "5", rx: ".431", ry: ".431" }) ); },
    ServicesAppIcon: function ServicesAppIcon() { return React.createElement( "svg", { "data-name": "Layer 1", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 32 32", "aria-labelledby": "title", role: "img", className: "symbol symbol-services-app" }, React.createElement( "title", { id: "title" }, "services-app icon" ), React.createElement("path", { "className": "cls-1", d: "M26.973 2H5.027A3.027 3.027 0 0 0 2 5.027v21.946A3.027 3.027 0 0 0 5.027 30h21.946A3.027 3.027 0 0 0 30 26.973V5.027A3.027 3.027 0 0 0 26.973 2zm0 24.216a.757.757 0 0 1-.757.757H5.784a.757.757 0 0 1-.757-.757V5.784a.757.757 0 0 1 .757-.757h4.541v1.517a.753.753 0 0 0 .753.753h9.845a.753.753 0 0 0 .753-.753V5.027h4.541a.757.757 0 0 1 .757.757z", role: "presentation" }), React.createElement("rect", { "className": "cls-2", x: "9", y: "10", width: "14", height: "3", rx: ".464", ry: ".464" }), React.createElement("rect", { "className": "cls-2", x: "9", y: "15", width: "14", height: "3", rx: ".464", ry: ".464" }), React.createElement("rect", { "className": "cls-2", x: "9", y: "20", width: "14", height: "3", rx: ".464", ry: ".464" }) ); },
  }

  class MobileTopbarProfileButton extends React.Component {
    get appIconName() {
      switch (railsAppName) {
        case "Check-Ins":
          return "CheckInsAppIcon";
        case "PlanningCenter":
          return "ServicesAppIcon";
        case "RP":
          return "ResourcesAppIcon";
        default:
          return `${railsAppName}AppIcon`;
      }
    }

    render() {
      const AppIcon = icons[this.appIconName];

      return (
        <div
          className="mobile-topbar-app-icon"
          style={styles.root}
          {...this.props}
        >
          <AppIcon />
        </div>
      );
    }
  }

  global.MobileTopbarProfileButton = (global.module || {}).exports = MobileTopbarProfileButton;
})(this);
