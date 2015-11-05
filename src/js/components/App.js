var React = require('react');

var App = React.createClass({

  getInitialState: function(){
    return {
      mouseX: 20,
      mouseY:20,
      zoomLevel: 500
    }
  },

  mouseOverHandler(e) {
    console.log(e.clientX);
    console.log(e.clientY);
    this.setState({
      mouseX: e.clientX,
      mouseY: e.clientY
    });

  },

  render: function () {

    var zoomImgStyle = {
      width: this.state.zoomLevel + '%',
      height: this.state.zoomLevel + '%',
      left: -this.state.mouseX*((this.state.zoomLevel/100)-1) + 'px',
      top: -this.state.mouseY*((this.state.zoomLevel/100)-1) + 'px'
    };

    var zoomAreaStyles = {
      left: this.state.mouseX-5,
      top: this.state.mouseY-5
    };

    return(
      <div className="wrapper">
        <div className='original-container' onMouseMove={this.mouseOverHandler}>
          <div className='zoom-area' style={zoomAreaStyles}>

          </div>
        </div>

        <div className='img-container-zoom'>
          <div className='zoom-image' style={zoomImgStyle}>
          </div>
        </div>
      </div>
    )
  }
});



module.exports = App;
