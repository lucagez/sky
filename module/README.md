![](../gif/sky-gif.gif)

# Sky

React component for interactive backgrounds

## Demo

https://codepen.io/lucagez/full/oQoRyK/

## Installation

```
$ npm install --save react-sky
```



## Usage

```javascript
import React, { Component } from 'react';
import Sky from 'react-sky';

// you can pass imported images to Sky
import myImage from "./media/myImage.png"

class App extends Component {
  render() {
    return (
      <div> 
        /* Sky adapts size to its container */
        <Sky 
          images={{
            /* FORMAT AS FOLLOWS */
            0: "https://linkToYourImage0",  /* You can pass as many images as you want */
            1: "https://linkToYourImage1",
            2: myImage /* you can pass images in any form: link, imported via webpack... */
            /* 3: your other image... */
            /* 4: your other image... */
            /* 5: your other image... */
            /* ... */
          }}
          how={130} /* Pass the number of images Sky will render chosing randomly */
          time={40} /* time of animation */
          size={'100px'} /* size of the rendered images */
          background={'palettedvioletred'} /* color of the background */
        />
      </div>
    );
  }
}

export default App;
```



## Props

### images

Type: Object. Default: null

**NOTE:** Only one object is allowed to be passed.

### how

Type: Number. Default: null

Number of images you want to display

**NOTE:** you must pass a number to display your images

### time

Type: Number. Default: 20

Number of seconds of every single animation

### size

Type: String. Default: 150px

Dimension of the images 

### background

Type: String. Default: none

Color of the background 



## License

MIT