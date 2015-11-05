var React = require('react');

var App = React.createClass({

  getInitialState: function(){
    return {
      mouseX: 20,
      mouseY:20
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
    var zoomAreaStyles = {
      left: this.state.mouseX,
      top: this.state.mouseY
    };

    return(

      <div className='original-container' onMouseOver={this.mouseOverHandler}>
        <div className='zoom-area'>

        </div>
      </div>
    )
  }
});



module.exports = App;
