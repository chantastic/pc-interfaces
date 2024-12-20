/* experiment: no `;` */

(function() {
  function handlePurposeChange(e) {
    return this.setState({ purpose: e.target.value });
  }

  function handleOutlineChange(e) {
    return this.setState({ outline: e.target.checked });
  }

  function applyAlertClasses(props) {
    return ["alert", props.purpose, props.outline && "alert--outline"]
      .filter(e => e)
      .join(" ");
  }

  class Alert extends React.Component {
    render() {
      return <div className={applyAlertClasses(this.props)}> Alert Text </div>;
    }
  }

  class AlertBuilder extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
        purpose: "",
        outline: false
      };
    }

    render() {
      let alert = (
        <Alert purpose={this.state.purpose} outline={this.state.outline} />
      );

      return (
        <div>
          <div className="d-f f_1 pb-1">
            <div>
              <h2> Roles Modifiers </h2>

              <form onChange={handlePurposeChange.bind(this)}>
                <label>
                  <input
                    type="radio"
                    value=""
                    checked={this.state.purpose === ""}
                    readOnly
                  />{" "}
                  <code>(default) </code>
                </label>
                <label>
                  <input
                    type="radio"
                    value="alert--success"
                    checked={this.state.purpose === "alert--success"}
                    readOnly
                  />
                  <code>.alert--success</code>
                </label>
                <label>
                  <input
                    type="radio"
                    value="alert--warning"
                    checked={this.state.purpose === "alert--warning"}
                    readOnly
                  />
                  <code>.alert--warning</code>
                </label>
                <label>
                  <input
                    type="radio"
                    value="alert--danger"
                    checked={this.state.purpose === "alert--danger"}
                    readOnly
                  />{" "}
                  <code>.alert--danger </code>
                </label>
                <label>
                  <input
                    type="radio"
                    value="alert--subtle"
                    checked={this.state.purpose === "alert--subtle"}
                    readOnly
                  />{" "}
                  <code>.alert--subtle </code>
                </label>
              </form>
            </div>

            <div>
              <h2> Generic Modifiers </h2>

              <form onChange={handleOutlineChange.bind(this)}>
                <label>
                  <input type="checkbox" checked={this.props.outline} />
                  <code>.alert--outline</code>
                </label>
              </form>
            </div>
          </div>

          {alert}

          <pre>
            <code className="language-markup">
              {ReactDOMServer.renderToStaticMarkup(alert)}
            </code>
          </pre>
        </div>
      );
    }
  }

  window.AlertBuilder = AlertBuilder;
})(this);
