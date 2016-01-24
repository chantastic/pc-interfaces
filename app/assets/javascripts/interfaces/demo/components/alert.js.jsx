/* experiment: no `;` */

(function () {

function handlePurposeChange (e) {
  return this.setState({purpose: e.target.value})
}

function handleOutlineChange (e) {
  return this.setState({outline: e.target.checked})
}

function applyAlertClasses (props) {
  return [
    "alert",
    props.purpose,
    props.outline && "alert--outline",
  ].filter(e => e).join(' ')
}

class Alert extends React.Component {
  render () {
    return <div className={applyAlertClasses(this.props)}> Alert Text </div>
  }
}

class AlertBuilder extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      purpose: "",
      outline: false,
    }
  }

  componentDidUpdate() {
    // this could be optimized with `highlightElement`.
    // i didn't use it because React 13.3 has a depricated DOM API
    // and i don't want to come back and update it later.
    Prism.highlightAll()
  }

  render () {
    let alert = <Alert
      purpose={this.state.purpose}
      outline={this.state.outline}
    />

    return (
      <div>
        <div className="d-f f_1 pb-1">
          <div>
            <h2> Roles Modifiers </h2>

            <form onChange={handlePurposeChange.bind(this)}>
              <label><input type="radio" value=""               checked={this.state.purpose === ""}/>              <code>(default)      </code></label>
              <label><input type="radio" value="alert--success" checked={this.state.purpose === "alert--success"}/><code>.alert--success</code></label>
              <label><input type="radio" value="alert--warning" checked={this.state.purpose === "alert--warning"}/><code>.alert--warning</code></label>
              <label><input type="radio" value="alert--danger"  checked={this.state.purpose === "alert--danger"}/> <code>.alert--danger </code></label>
              <label><input type="radio" value="alert--subtle"  checked={this.state.purpose === "alert--subtle"}/> <code>.alert--subtle </code></label>
            </form>
          </div>

          <div>
            <h2> Generic Modifiers </h2>

            <form onChange={handleOutlineChange.bind(this)}>
              <label><input type="checkbox" checked={this.props.outline}/><code>.alert--outline</code></label>
            </form>
          </div>
        </div>

        {alert}

        <pre>
          <code className="language-markup">
            {React.renderToStaticMarkup(alert)}
          </code>
        </pre>

      </div>
    )
  }
}

window.AlertBuilder = AlertBuilder

}(this))
