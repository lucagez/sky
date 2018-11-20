import React, { Component } from 'react';
import Sky from './components/sky/sky';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mode: 'space',
      background: '#2F3939',
      how: 200,
    };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(e) {
    this.setState({
      mode: e.target.value,
      how: e.target.attributes.how.value,
      background: e.target.attributes.background.value,
    });
  }
  render() {
    const { mode, background, how } = this.state;
    const modes = {
      space: {
        0: 'https://image.flaticon.com/icons/svg/124/124574.svg',
        1: 'https://image.flaticon.com/icons/svg/124/124570.svg',
        2: 'https://image.flaticon.com/icons/svg/124/124567.svg',
        3: 'https://image.flaticon.com/icons/svg/124/124560.svg',
        4: 'https://image.flaticon.com/icons/svg/124/124559.svg',
        5: 'https://image.flaticon.com/icons/svg/124/124582.svg',
        6: 'https://image.flaticon.com/icons/svg/124/124558.svg',
        7: 'https://image.flaticon.com/icons/svg/124/124588.svg',
        8: 'https://image.flaticon.com/icons/svg/124/124542.svg',
        9: 'https://image.flaticon.com/icons/svg/124/124569.svg',
        10: 'https://image.flaticon.com/icons/svg/124/124573.svg',
        11: 'https://image.flaticon.com/icons/svg/124/124586.svg',
        12: 'https://image.flaticon.com/icons/svg/124/124548.svg',
        13: 'https://image.flaticon.com/icons/svg/124/124555.svg',
      },
      404: {
        0: 'https://svgshare.com/i/9T5.svg',
      },
      animals: {
        0: 'https://image.flaticon.com/icons/svg/1198/1198051.svg',
        1: 'https://image.flaticon.com/icons/svg/1198/1198052.svg',
        2: 'https://image.flaticon.com/icons/svg/1198/1198053.svg',
        3: 'https://image.flaticon.com/icons/svg/1198/1198053.svg',
        4: 'https://image.flaticon.com/icons/svg/1198/1198056.svg',
        5: 'https://image.flaticon.com/icons/svg/1198/1198057.svg',
        6: 'https://image.flaticon.com/icons/svg/1198/1198059.svg',
        7: 'https://image.flaticon.com/icons/svg/1198/1198060.svg',
        8: 'https://image.flaticon.com/icons/svg/1198/1198062.svg',
        9: 'https://image.flaticon.com/icons/svg/1198/1198063.svg',
        10: 'https://image.flaticon.com/icons/svg/1198/1198065.svg',
        11: 'https://image.flaticon.com/icons/svg/1198/1198053.svg',
        12: 'https://image.flaticon.com/icons/svg/1198/1198068.svg',
        13: 'https://image.flaticon.com/icons/svg/1198/1198069.svg',
        14: 'https://image.flaticon.com/icons/svg/1198/1198070.svg',
        15: 'https://image.flaticon.com/icons/svg/1198/1198073.svg',
        16: 'https://image.flaticon.com/icons/svg/1198/1198075.svg',
        17: 'https://image.flaticon.com/icons/svg/1198/1198076.svg',
        18: 'https://image.flaticon.com/icons/svg/1198/1198079.svg',
      },
      gif: {
        0: 'http://static.vibe.com/uploads/2013/08/VIBE-Vixen-Michael-Jackson-Gif21.gif',
        1: 'https://media.giphy.com/media/otnqsqqzmsw7K/giphy.gif',
        2: 'https://33.media.tumblr.com/ef95f99ce3222e912037af845e52ed6b/tumblr_nhcohan9qL1u2jwbho1_400.gif',
        3: 'https://media.giphy.com/media/TSn2zVInxOm2c/giphy.gif',
        4: 'http://www.reactiongifs.com/r/gj1.gif',
        5: 'https://media2.giphy.com/media/HjPbLbmep2aJO/200.gif',
        6: 'http://i.imgur.com/CsEGVc8.gif',
        7: 'https://media.giphy.com/media/iPTTjEt19igne/giphy.gif',
        8: 'http://www.reactiongifs.com/wp-content/uploads/2013/04/tip-hat.gif',
        9: 'http://0.media.collegehumor.cvcdn.com/82/38/32771b4d97dd7d087187ec99e4f443e1-tina-fey-self-five.gif',
        10: 'https://media0.giphy.com/media/vnnoqBjIrJ73y/200.gif',
      },
      403: {
        0: 'https://image.flaticon.com/icons/svg/1244/1244031.svg',
      },
      500: {
        0: 'https://image.flaticon.com/icons/svg/155/155275.svg',
      },
      503: {
        0: 'https://image.flaticon.com/icons/svg/1234/1234292.svg',
      },
      food: {
        0: 'https://image.flaticon.com/icons/svg/135/135728.svg',
        1: 'https://image.flaticon.com/icons/svg/135/135687.svg',
        2: 'https://image.flaticon.com/icons/svg/135/135715.svg',
        3: 'https://image.flaticon.com/icons/svg/135/135628.svg',
        4: 'https://image.flaticon.com/icons/svg/135/135591.svg',
        5: 'https://image.flaticon.com/icons/svg/135/135702.svg',
        6: 'https://image.flaticon.com/icons/svg/135/135644.svg',
        7: 'https://image.flaticon.com/icons/svg/135/135629.svg',
        8: 'https://image.flaticon.com/icons/svg/135/135630.svg',
      },
      tech: {
        0: 'https://image.flaticon.com/icons/svg/141/141073.svg',
        1: 'https://image.flaticon.com/icons/svg/141/141070.svg',
        2: 'https://image.flaticon.com/icons/svg/141/141009.svg',
        3: 'https://image.flaticon.com/icons/svg/140/140993.svg',
        4: 'https://image.flaticon.com/icons/svg/141/141106.svg',
        5: 'https://image.flaticon.com/icons/svg/141/141015.svg',
        6: 'https://image.flaticon.com/icons/svg/141/141099.svg',
        7: 'https://image.flaticon.com/icons/svg/141/141008.svg',
        8: 'https://image.flaticon.com/icons/svg/141/141036.svg',
      },
      autumn: {
        0: 'https://image.flaticon.com/icons/svg/1230/1230864.svg',
        1: 'https://image.flaticon.com/icons/svg/1230/1230865.svg',
        2: 'https://image.flaticon.com/icons/svg/1230/1230867.svg',
        3: 'https://image.flaticon.com/icons/svg/1230/1230868.svg',
        4: 'https://image.flaticon.com/icons/svg/1230/1230869.svg',
        5: 'https://image.flaticon.com/icons/svg/1230/1230871.svg',
        6: 'https://image.flaticon.com/icons/svg/1230/1230882.svg',
        7: 'https://image.flaticon.com/icons/svg/1230/1230875.svg',
      },
      social: {
        0: 'https://image.flaticon.com/icons/svg/174/174855.svg',
        1: 'https://image.flaticon.com/icons/svg/174/174848.svg',
        2: 'https://image.flaticon.com/icons/svg/174/174883.svg',
        3: 'https://image.flaticon.com/icons/svg/174/174879.svg',
        4: 'https://image.flaticon.com/icons/svg/174/174857.svg',
        5: 'https://image.flaticon.com/icons/svg/174/174870.svg',
        6: 'https://image.flaticon.com/icons/svg/174/174869.svg',
        7: 'https://image.flaticon.com/icons/svg/174/174872.svg',
        8: 'https://image.flaticon.com/icons/svg/174/174875.svg',
        9: 'https://image.flaticon.com/icons/svg/174/174845.svg',
        10: 'https://image.flaticon.com/icons/svg/174/174837.svg',
        11: 'https://image.flaticon.com/icons/svg/174/174858.svg',
        12: 'https://image.flaticon.com/icons/svg/174/174844.svg',
        13: 'https://image.flaticon.com/icons/svg/174/174865.svg',
        14: 'https://image.flaticon.com/icons/svg/174/174874.svg',
      }
    }
    return (
      <div className="App">
        <div className="title">
          <h1>Sky</h1>
          <button how={35} background={'#2F3939'} value={'gif'} onClick={this.handleClick}>gif 🤣</button>
          <button how={100} background={'#2F3939'} value={'404'} onClick={this.handleClick}>404 💩</button>
          <button how={20} background={'#2F3939'} value={'animals'} onClick={this.handleClick}>animals 🦋</button>
          <button how={50} background={'#2F3939'} value={'space'} onClick={this.handleClick}>space 🚀</button>
          <button how={50} background={'#2F3939'} value={'403'} onClick={this.handleClick}>403 🛑</button>
          <button how={50} background={'#2F3939'} value={'500'} onClick={this.handleClick}>500 😯</button>
          <button how={50} background={'#2F3939'} value={'503'} onClick={this.handleClick}>503 🤐</button>
          <button how={50} background={'#2F3939'} value={'food'} onClick={this.handleClick}>food 🥕</button>
          <button how={50} background={'#2F3939'} value={'tech'} onClick={this.handleClick}>tech 💻</button>
          <button how={50} background={'#2F3939'} value={'autumn'} onClick={this.handleClick}>autumn 🍁</button>
          <button how={50} background={'#2F3939'} value={'social'} onClick={this.handleClick}>social 🤳</button>
        </div>
        <Sky
          images={modes[mode]}
          how={how}
          size={'100px'}
          time={30}
          background={background}
        />
      </div>
    );
  }
}

export default App;
