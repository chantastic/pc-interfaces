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
          <ReactMediaObject.MediaImg>
           <ReactMediaObject.MediaImgExt
            src={this.props.src}
            alt={this.props.alt}
            style={styles.media.imgExt} />
          </ReactMediaObject.MediaImg>

          <ReactMediaObject.MediaBd style={styles.media.bd}>
            Pico das Robot
          </ReactMediaObject.MediaBd>
        </ReactMediaObject.Media>
      );
    }
  }

  MobileTopbarUserBadge.propTypes = {
    alt: React.PropTypes.string,
    src: React.PropTypes.string,
    width: React.PropTypes.string,
  };

  MobileTopbarUserBadge.defaultProps = {
    alt: "Missing",
    src: "https://www.planningcenteronline.com/photos/icon/missing.png",
    width: 32,
  };

  global.MobileTopbarUserBadge = (global.module || {}).exports = MobileTopbarUserBadge;
})(this);
