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
    render () {
      return (
        <ReactMediaObject.Media style={styles.root}>
          <ReactMediaObject.Img href="">
           <ReactMediaObject.ImgExt
            src={this.props.src}
            alt={this.props.alt}
            style={styles.media.imgExt} />
          </ReactMediaObject.Img>

          <ReactMediaObject.Bd style={styles.media.bd}>
            Pico das Robot
          </ReactMediaObject.Bd>
        </ReactMediaObject.Media>
      );
    }
  }

  MobileTopbarUserBadge.propTypes = {
    alt: React.PropTypes.string,
    src: React.PropTypes.string,
    width: React.PropTypes.number,
  };

  MobileTopbarUserBadge.defaultProps = {
    alt: "Missing",
    src: "https://www.planningcenteronline.com/photos/icon/missing.png",
    width: 32,
  };

  global.MobileTopbarUserBadge = (global.module || {}).exports = MobileTopbarUserBadge;
})(this);
