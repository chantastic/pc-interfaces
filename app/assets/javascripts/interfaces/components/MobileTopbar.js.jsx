(function (global) {
  class MobileTopbar extends React.Component {
    constructor(props) {
      super(props);
      this.handleClick = () => {
        alert('hi');
      }
    }

    get appIconClassName() {
      return `icon icon-${this.props.railsAppName.toLowerCase()}-logo`;
    }

    render() {
      return (
        <div>
          <div
            onClick={this.handleClick}
            style={{float: "left", padding: "0 10px", borderRight: "1px solid rgba(0,0,0,0.2)", width: 51}}
          >
            <i style={{
              fontSize: 128,
              lineHeight: "51px",
              width: 30,
              overflow: "hidden",
              display: "block",
              color: "white"
            }} className={this.appIconClassName} />
          </div>
          <div dangerouslySetInnerHTML={{ __html: this.props.routes }}/>
        </div>
      );
    }
  }

  MobileTopbar.PropTypes = {
    routes: React.PropTypes.string.isRequired,
    railsAppName: React.PropTypes.string.isRequired
  }

  global.MobileTopbar = (global.module || {}).exports = MobileTopbar;
})(this);
