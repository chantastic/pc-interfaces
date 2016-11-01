/* experiment: no `;` */

(function () {

function handlePurposeChange (e) {
  return this.setState({purpose: e.target.value})
}

function handleOutlineChange (e) {
  return this.setState({outline: e.target.checked})
}

function handleSizeChange (e) {
  return this.setState({size: e.target.value})
}

function handleDisabledChange (e) {
  return this.setState({disabled: e.target.checked})
}

function applyButtonClasses (props) {
  return [
    "btn",
    props.purpose,
    props.size,
    props.outline && "btn--outline",
  ].filter(e => e).join(' ')
}

class Button extends React.Component {
  render () {
    return (
      <button
        type="button"
        className={applyButtonClasses(this.props)}
        disabled={this.props.disabled}
      >
        Button
      </button>
    )
  }
}

class ButtonBuilder extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      disabled: false,
      outline: false,
      purpose: "",
      size: "",
    }
  }

  componentDidUpdate() {
    // this could be optimized with `highlightElement`.
    // i didn't use it because React 13.3 has a depricated DOM API
    // and i don't want to come back and update it later.
    Prism.highlightAll()
  }

  render () {
    let button = <Button
      disabled={this.state.disabled}
      outline={this.state.outline}
      purpose={this.state.purpose}
      size={this.state.size}
    />

    return (
      <div>
        <div className="d-f f_1 pb-1">
          <div>
            <h2> Roles Modifiers </h2>

            <form onChange={handlePurposeChange.bind(this)}>
              <label><input type="radio" value=""             checked={this.state.purpose === ""} readOnly />            <code>(default)    </code></label>
              <label><input type="radio" value="btn--primary" checked={this.state.purpose === "btn--primary"} readOnly /><code>.btn--primary</code></label>
              <label><input type="radio" value="btn--success" checked={this.state.purpose === "btn--success"} readOnly /><code>.btn--success</code></label>
              <label><input type="radio" value="btn--warning" checked={this.state.purpose === "btn--warning"} readOnly /><code>.btn--warning</code></label>
              <label><input type="radio" value="btn--danger"  checked={this.state.purpose === "btn--danger"} readOnly /> <code>.btn--danger </code></label>
            </form>
          </div>

          <div>
            <h2> Size Modifiers </h2>

            <form onChange={handleSizeChange.bind(this)}>
              <label><input type="radio" value=""           checked={this.state.size === ""} readOnly />          <code>(default)  </code></label>
              <label><input type="radio" value="btn--large" checked={this.state.size === "btn--large"} readOnly /><code>.btn--large</code></label>
              <label><input type="radio" value="btn--small" checked={this.state.size === "btn--small"} readOnly /><code>.btn--small</code></label>
              <label><input type="radio" value="btn--tiny"  checked={this.state.size === "btn--tiny"} readOnly /> <code>.btn--tiny </code></label>
              <label><input type="radio" value="btn--micro" checked={this.state.size === "btn--micro"} readOnly /><code>.btn--micro</code></label>
            </form>
          </div>

          <div>
            <h2> Generic Modifiers </h2>

            <form onChange={handleOutlineChange.bind(this)}>
              <label><input type="checkbox" checked={this.state.outline}/><code>.button--outline</code></label>
            </form>
            <form onChange={handleDisabledChange.bind(this)}>
              <label><input type="checkbox" checked={this.state.disabled}/><code>[disabled]</code></label>
            </form>
          </div>
        </div>

        {button}

        <pre>
          <code className="language-markup">
            {ReactDOMServer.renderToStaticMarkup(button)}
          </code>
        </pre>

      </div>
    )
  }
}

window.ButtonBuilder = ButtonBuilder

}(this))
