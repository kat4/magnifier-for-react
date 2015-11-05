var React = require('react');
var PropTypes = React.PropTypes;

var App = React.createClass({

  propTypes: {
    width: PropTypes.number,
    height: PropTypes.number,
    units: PropTypes.string,
    backgroundColor: PropTypes.string,
    zoomLevel: PropTypes.number,
    backgroundImage: PropTypes.string,
  },

  getDefaultProps: function() {
    return {
      width: 550,
      height: 300,
      units: 'px',
      backgroundColor: 'rgba(0,0,0,0.1)',
      zoomLevel: 350,
      backgroundImage: 'https://images.unsplash.com/photo-1445251836269-d158eaa028a6?ixlib=rb-0.3.5&q=80&fm=jpg&s=199ad024e77a5f179278e2ce0199e84e'
    };
  },

  getInitialState: function(){
    return {
      mouseX: 20,
      mouseY:20,
    };
  },

  componentDidMount(){
    var originalContainer = document.getElementById('react-magnifier-image');
    this.setState({
      offset:{
        x:originalContainer.offsetLeft,
        y:originalContainer.offsetTop
      }
    });
  },

  mouseOverHandler(e) {
    console.log('sgsijg');
    this.setState({
      mouseX: e.clientX - this.state.offset.x,
      mouseY: e.clientY - this.state.offset.y
    });

  },

  render: function () {

    var wrapperStyle = {
      width: this.props.width
    };

    var zoomImgStyle = {
      width: this.props.zoomLevel + '%',
      height: this.props.zoomLevel + '%',
      left: -this.state.mouseX*((this.props.zoomLevel/100)-1) + 'px',
      top: -this.state.mouseY*((this.props.zoomLevel/100)-1) + 'px',
      backgroundImage: 'url("' + this.props.backgroundImage + '")'
    };

    var normalImgStyle ={
      width: this.props.width,
      height: this.props.height,
      backgroundColor: this.props.backgroundColor,
      backgroundImage: 'url("' + this.props.backgroundImage + '")'
    };

    var zoomContainerStyle = {
      width: this.props.width,
      height: this.props.height,
      backgroundColor: this.props.backgroundColor,
    };

    return(
      <div className="react-magnifier-wrapper" style={wrapperStyle}>
        <div id='react-magnifier-image' className='react-magnifier-image' onMouseMove={this.mouseOverHandler} style={normalImgStyle}></div>
        <div className='react-magnifier-zoom-container' style={zoomContainerStyle}>
          <div className='react-magnifier-zoom-image' style={zoomImgStyle}>
          </div>
        </div>
      </div>
    )
  }
});



module.exports = App;
