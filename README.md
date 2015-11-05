# react-magnifier

React Magnifier is a versatile react component which allows the user to create a zoom pane for an image that they input.

The user needs to specify the image url and size of the original image as well as the zoom level of the zoom pane.

This will then create a box underneath the original image which will show the zoomed portion of the image as the mouse is hovered over it.

### Installation

```
$ npm install react-magnifier --save
```
### Usage

After installing add the line of code below to your main javascript file. e.g. app.js
```javascript
var magnify = require('react-magnifier');
```
The properties that you can set are defined below. In your HTMl file add whatever you've named your component and then the properties that you'd like to add from the list below.

```HTMl
<magnify width={300}
```

### Basic Setup & Values

| Prop  | Default  |Type | Description |
| :------------ |:---------------:| :-----------:| :---------------:|
| width | 550 | number | width of the initial image div and zoom box div|
| height | 300 | number | height of the initial image div and zoom box div |
| units | 'px' | string | units for sizes, our default is px|
| backgroundColor| string |`rgba(0,0,0,0.1)` | background colour of the area between the image box and the zoom box |
| zoomLevel | 350 | number | percentage zoom for the zoomed in image box e.g. 200%, 300% |
| backgroundImage | string | 'https://images.unsplash.com/photo-1445251836269-d158eaa028a6?ixlib=rb-0.3.5&q=80&fm=jpg&s=199ad024e77a5f179278e2ce0199e84e' | url for the image that will be zoomed |
