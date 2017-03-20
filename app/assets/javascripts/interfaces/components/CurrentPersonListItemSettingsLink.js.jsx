/* global React */

(function(global) {
  "use strict";
  var CogIcon = function CogIcon() {
    return React.createElement(
      "svg",
      {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 16 16",
        "aria-labelledby": "title",
        role: "img",
        className: "interfaces-symbol"
      },
      React.createElement("title", { id: "title" }, "cog icon"),
      React.createElement("path", {
        className: "cls-1",
        d: "M13.269 5.125a4.726 4.726 0 0 1 .512 1.236 7.1 7.1 0 0 0 1.04.131 3.548 3.548 0 0 1 1.02.2.179.179 0 0 1 .161.18v2.373c0 .08-.1.152-.3.215a4.341 4.341 0 0 1-.689.156c-.261.041-.515.07-.763.09s-.412.037-.492.051a4.872 4.872 0 0 1-.472 1.174 15.127 15.127 0 0 0 1.215 1.578l.06.152c0 .053-.092.182-.277.385s-.393.424-.627.66-.458.443-.668.627-.347.275-.407.275a1.773 1.773 0 0 1-.267-.184c-.165-.123-.345-.262-.543-.412s-.385-.3-.563-.432-.29-.219-.336-.246a5.15 5.15 0 0 1-.588.277 5.865 5.865 0 0 1-.6.195c-.013.082-.032.246-.055.5s-.055.506-.1.765-.087.49-.14.7-.124.311-.211.311h-2.37c-.094 0-.158-.057-.191-.17a5.572 5.572 0 0 1-.191-1.035q-.051-.541-.111-1.035a5.576 5.576 0 0 1-1.175-.5c-.276.209-.546.41-.815.607s-.532.408-.793.629l-.121.039a1.247 1.247 0 0 1-.372-.275q-.311-.277-.648-.627t-.613-.66c-.184-.2-.277-.332-.277-.385a1.889 1.889 0 0 1 .161-.267c.108-.164.233-.344.377-.537s.285-.381.422-.557.225-.3.266-.349a4.7 4.7 0 0 1-.512-1.236 7.616 7.616 0 0 0-1.05-.129 3.578 3.578 0 0 1-1.009-.2C.051 9.358 0 9.3 0 9.2V6.833c0-.08.1-.152.306-.215a4.69 4.69 0 0 1 .688-.156c.255-.039.5-.072.744-.09s.4-.037.483-.051a5.774 5.774 0 0 1 .489-1.175A16.077 16.077 0 0 0 1.5 3.568l-.07-.15c0-.053.093-.184.281-.387s.4-.424.628-.658.454-.443.668-.627.348-.279.4-.279a1.988 1.988 0 0 1 .267.187q.246.187.547.412c.2.152.39.3.568.432s.287.219.327.246a4.133 4.133 0 0 1 .588-.266c.2-.07.4-.137.608-.205a10.268 10.268 0 0 1 .12-1.246 5.32 5.32 0 0 1 .161-.695c.064-.205.136-.31.216-.31h2.382a.191.191 0 0 1 .191.15 7.168 7.168 0 0 1 .171 1.035q.049.544.14 1.066a5.4 5.4 0 0 1 .6.191 3.661 3.661 0 0 1 .568.281c.053-.039.167-.129.342-.266s.36-.281.558-.433.375-.283.532-.4a.865.865 0 0 1 .3-.176 1.3 1.3 0 0 1 .371.279q.312.277.654.627c.227.234.433.455.618.658s.276.334.276.387a1.139 1.139 0 0 1-.175.287 42.321 42.321 0 0 1-.815 1.094c-.137.178-.219.287-.246.326zM8.005 10.46a2.276 2.276 0 0 0 .935-.2 2.33 2.33 0 0 0 .76-.523 2.685 2.685 0 0 0 .512-.773 2.292 2.292 0 0 0 .2-.935 2.224 2.224 0 0 0-.2-.924 2.729 2.729 0 0 0-.512-.764 2.215 2.215 0 0 0-.758-.516 2.407 2.407 0 0 0-.935-.187 2.44 2.44 0 0 0-.94.187 2.3 2.3 0 0 0-.774.516 2.473 2.473 0 0 0-.512.764 2.32 2.32 0 0 0-.185.924 2.391 2.391 0 0 0 .185.935 2.421 2.421 0 0 0 1.286 1.3 2.307 2.307 0 0 0 .938.196z",
        "data-name": "Layer 1",
        role: "presentation"
      })
    );
  };

  var rootStyles = {
    display: "table-cell",
    textAlign: "right",
    width: 20,
    paddingRight: 9
  };

  class CurrentPersonListItemSettingsLink extends React.Component {
    render() {
      return (
        <div style={rootStyles}>
          <a href="/organization">
            <style>
              {
                `
              .__CurrentPersonListItemSettingsLink_CogIcon__:hover { color: #777 }
            `
              }
            </style>
            <span className="__CurrentPersonListItemSettingsLink_CogIcon__">
              <CogIcon />
            </span>
          </a>
        </div>
      );
    }
  }

  CurrentPersonListItemSettingsLink.propTypes = {};

  global.CurrentPersonListItemSettingsLink = ((global.module || {
  }).exports = CurrentPersonListItemSettingsLink);
})(this);
