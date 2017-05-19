/* global React */

(function(global) {
  "use strict";
  var styles = {
    root: {
      padding: "9px 10px 15px 5px",
      margin: 0,
      whiteSpace: "nowrap",
      textAlign: "left"
    },
    media: {
      imgExt: {
        borderRadius: "50%",
        height: 30,
        border: "1px solid #7b7b7b"
      },
      bd: {
        textAlign: "left",
        lineHeight: "30px"
      }
    }
  };

  class MobileTopbarUserBadge extends React.Component {
    get altText() {
      if (this.props.src && this.props.name) {
        return `${this.props.name} avatar`;
      }

      return "Missing";
    }

    render() {
      return (
        <ReactMediaObject.Media style={styles.root}>
          <ReactMediaObject.Img href="#">
            <ReactMediaObject.ImgExt
              src={this.props.src}
              alt={this.altText}
              style={styles.media.imgExt}
            />
          </ReactMediaObject.Img>

          <ReactMediaObject.Bd style={styles.media.bd}>
            {this.props.name}
          </ReactMediaObject.Bd>
        </ReactMediaObject.Media>
      );
    }
  }

  MobileTopbarUserBadge.propTypes = {
    src: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    width: PropTypes.number
  };

  MobileTopbarUserBadge.defaultProps = {
    width: 32
  };

  global.MobileTopbarUserBadge = ((global.module || {
  }).exports = MobileTopbarUserBadge);
})(this);
