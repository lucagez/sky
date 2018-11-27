# Sky

React component for interactive backgrounds

## Demo

https://codepen.io/lucagez/full/oQoRyK/

## Installation

```
$ npm install --save react-sky
```



## Usage

```react
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
            0: "https://linkToYourImage0,  /* You can pass as much images as you want */
            1: "https://linkToYourImage1",
            2: myImage /* you can pass images in any form: link, imported via webpack.. */
            /* 3: your other image.. */
            /* 4: your other image.. */
            /* 5: your other image.. */
            /* ... */
          }}
          how={130} /* You have to pass a number so Sky will render that amount of images chosen randomly from the object you passed in the previous step */
          time={40} /* time of the animation. Dfaults at 20s */
          size={'100px'} /* size of the rendered images. Defaults at 150px */
          background={'palettedvioletred'} /* color of background. Defaults to none */
        />
      </div>
    );
  }
}

export default App;
```



## Props

### images

Type: Object. **Required**

**NOTE:** Only one object is allowed to be passed.

### how

Type: Number. **Required**

Number of images you want to display

**NOTE:** you must pass a number to display your images

### time

Type: Number. Default: 20

Number of seconds of every single animation

### size

Type: String. Default: 150px

Dimension of the images 

### size

Type: String. Default: none

Color of the background 



## License

MIT