/* experiment: no `;` */

(function () {

function handlePurposeChange (e) {
  return this.setState({purpose: e.target.value})
}

function handleOutlineChange (e) {
  return this.setState({outline: e.target.checked})
}

function applyBadgeClasses (props) {
  return [
    "badge",
    props.purpose,
    props.outline && "badge--outline",
  ].filter(e => e).join(' ')
}

class Badge extends React.Component {
  render () {
    return <div className={applyBadgeClasses(this.props)}> badge </div>
  }
}

class BadgeBuilder extends React.Component {
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
    let alert = <Badge
      purpose={this.state.purpose}
      outline={this.state.outline}
    />

    return (
      <div>
        <div className="d-f f_1 pb-1">
          <div>
            <h2> Roles Modifiers </h2>

            <form onChange={handlePurposeChange.bind(this)}>
              <label><input type="radio" value=""               checked={this.state.purpose === ""} readOnly />              <code>(default)      </code></label>
              <label><input type="radio" value="badge--success" checked={this.state.purpose === "badge--success"} readOnly /><code>.badge--success</code></label>
              <label><input type="radio" value="badge--warning" checked={this.state.purpose === "badge--warning"} readOnly /><code>.badge--warning</code></label>
              <label><input type="radio" value="badge--danger"  checked={this.state.purpose === "badge--danger"} readOnly /> <code>.badge--danger </code></label>
              <label><input type="radio" value="badge--subtle"  checked={this.state.purpose === "badge--subtle"} readOnly /> <code>.badge--subtle </code></label>
            </form>
          </div>

          <div>
            <h2> Generic Modifiers </h2>

            <form onChange={handleOutlineChange.bind(this)}>
              <label><input type="checkbox" checked={this.props.outline}/><code>.badge--outline</code></label>
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
    )
  }
}

window.BadgeBuilder = BadgeBuilder

}(this))
