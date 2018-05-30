/* experiment: no `;` */

(function() {
  function handlePositionChange(e) {
    return this.setState({ position: e.target.value });
  }

  function handleMultilineChange(e) {
    return this.setState({ multiline: e.target.checked });
  }

  function handleAnchorChange(e) {
    return this.setState({ anchor: e.target.value });
  }

  function applyTipOptions(props) {
    return ["", props.position, props.anchor, props.multiline && "multiline"]
      .filter(e => e)
      .join(" ");
  }

  function getTipContent(props) {
    if (props.multiline)
      return "This is a long tip to illustrate how the `multiline` option works.";
    return "This is a tip!";
  }

  class Tip extends React.Component {
    render() {
      const { position, anchor, multiline } = this.props;

      if (!anchor && !position && !multiline)
        return (
          <span data-has-tip data-tip-content="This is a tip">
            {" "}
            Hover me for a tip{" "}
          </span>
        );
      return (
        <span
          data-has-tip={applyTipOptions(this.props)}
          data-tip-content={getTipContent(this.props)}
        >
          {" "}
          Hover me for a tip{" "}
        </span>
      );
    }
  }

  class TipBuilder extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
        anchor: "",
        position: "",
        multiline: false
      };
    }

    render() {
      const { anchor, position, multiline } = this.state;

      let tip = (
        <Tip
          anchor={this.state.anchor}
          position={this.state.position}
          multiline={this.state.multiline}
        />
      );

      return (
        <div className="TipBuilder">
          <div className="d-f f_1 pb-1">
            <div>
              <h2> Position </h2>

              <form onChange={handlePositionChange.bind(this)}>
                <label>
                  <input
                    type="radio"
                    value=""
                    checked={position === ""}
                    readOnly
                  />
                  <code> (default)</code>
                </label>
                <label>
                  <input
                    type="radio"
                    value="top"
                    checked={position === "top"}
                    readOnly
                  />
                  <code> top</code>
                </label>
                <label>
                  <input
                    type="radio"
                    value="right"
                    checked={position === "right"}
                    disabled={
                      anchor === "anchor-right" || anchor === "anchor-left"
                    }
                    readOnly
                  />
                  <code> right</code>
                </label>
                <label>
                  <input
                    type="radio"
                    value="bottom"
                    checked={position === "bottom"}
                    readOnly
                  />
                  <code> bottom</code>
                </label>
                <label>
                  <input
                    type="radio"
                    value="left"
                    checked={position === "left"}
                    disabled={
                      anchor === "anchor-right" || anchor === "anchor-left"
                    }
                    readOnly
                  />
                  <code> left</code>
                </label>
              </form>
            </div>

            <div>
              <h2> Anchor </h2>

              <form onChange={handleAnchorChange.bind(this)}>
                <label>
                  <input
                    type="radio"
                    value=""
                    checked={anchor === ""}
                    disabled={position === "right" || anchor === "left"}
                    readOnly
                  />
                  <code> (default)</code>
                </label>
                <label>
                  <input
                    type="radio"
                    value="anchor-right"
                    checked={anchor === "anchor-right"}
                    disabled={position === "right" || anchor === "left"}
                    readOnly
                  />
                  <code> anchor-right</code>
                </label>
                <label>
                  <input
                    type="radio"
                    value="anchor-left"
                    checked={anchor === "anchor-left"}
                    disabled={position === "right" || anchor === "left"}
                    readOnly
                  />
                  <code> anchor-left</code>
                </label>
              </form>
            </div>

            <div>
              <h2> Generic Modifiers </h2>

              <form onChange={handleMultilineChange.bind(this)}>
                <label>
                  <input
                    type="checkbox"
                    checked={this.props.multiline}
                    readOnly
                  />
                  <code> tip--multiline</code>
                </label>
              </form>
            </div>
          </div>

          <div className="py-2">{tip}</div>

          <pre>
            <code className="language-markup">
              {ReactDOMServer.renderToStaticMarkup(tip)}
            </code>
          </pre>
          <em className="c-l.5">
            * The tip is visually persisted for customization only. You'll have
            to hover them in actual use.
          </em>
        </div>
      );
    }
  }

  window.TipBuilder = TipBuilder;
})(this);
