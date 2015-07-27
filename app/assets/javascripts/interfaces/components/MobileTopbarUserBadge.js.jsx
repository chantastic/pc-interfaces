/* global React */

(function (global) {
  "use strict";

  var styles = {
    root: {},
    media: {
      imgExt: {
        borderRadius: "50%",
      },
      bd: {
        paddingLeft: 10,
        textAlign: "left",
        lineHeight: "32px",
      },
    },
  };

  class MobileTopbarUserBadge extends React.Component {
    render () {
      return (
        <ReactMediaObject.Media>
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
