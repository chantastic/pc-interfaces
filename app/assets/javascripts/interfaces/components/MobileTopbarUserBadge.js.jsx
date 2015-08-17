/* global React */

(function (global) {
  "use strict";

  var styles = {
    root: {
      borderBottom: "1px solid #e5e5e5",
      padding: "15px 10px 15px 8px",
      margin: 0,
    },
    media: {
      imgExt: {
        borderRadius: "50%",
        height: 30,
      },
      bd: {
        textAlign: "left",
        lineHeight: "30px",
      },
    },
  };

  class MobileTopbarUserBadge extends React.Component {
    get altText () {
      if(this.props.src && this.props.name) {
        return `${this.props.name} avatar`;
      }

      return "Missing";
    }

    render () {
      return (
        <ReactMediaObject.Media style={styles.root}>
          <ReactMediaObject.Img href="">
           <ReactMediaObject.ImgExt
            src={this.props.src}
            alt={this.altText}
            style={styles.media.imgExt} />
          </ReactMediaObject.Img>

          <ReactMediaObject.Bd style={styles.media.bd}>
            {this.props.name}
          </ReactMediaObject.Bd>
        </ReactMediaObject.Media>
      );
    }
  }

  MobileTopbarUserBadge.propTypes = {
    src: React.PropTypes.string.isRequired,
    name: React.PropTypes.string.isRequired,
    width: React.PropTypes.number,
  };

  MobileTopbarUserBadge.defaultProps = {
    width: 32,
  };

  global.MobileTopbarUserBadge = (global.module || {}).exports = MobileTopbarUserBadge;
})(this);
