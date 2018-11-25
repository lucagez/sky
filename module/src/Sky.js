import React from 'react'
import PropTypes from 'prop-types'
import Item from './item'

class Sky extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      moves: [],
    }
    this.movement = this.movement.bind(this);
  }

  componentDidMount() {
    const many = this.props.how;
    const temp_moves = [];
    for (let i = 0; i < many; i++) {
      temp_moves.push(this.movement());
    }
    this.setState({
      moves: temp_moves
    });
  }

  movement() {
    const rotation = Math.floor((Math.round(Math.random()) * 2 - 1) * 600);
    const fromX = Math.floor((Math.random() * window.innerWidth));
    const fromY = Math.floor((Math.random() * window.innerHeight * 1.5));
    const toX = Math.floor((Math.random() * window.innerWidth) * (Math.round(Math.random()) * 2 - 1));
    const toY = Math.floor((Math.random() * window.innerHeight * 1.5) * (Math.round(Math.random()) * 2 - 1));
    const temp = {
      rotation,
      fromX,
      fromY,
      toX,
      toY,
    };
    return temp;
  }

  render() {
    const { images, background, size, time } = this.props;
    const outerStyle = {
      position: 'absolute',
      top: '0',
      left: '0',
      width: '100%',
      height: '100%',
      margin: '0',
      padding: '0',
      overflow: 'hidden',
      zIndex: '-1',
      background
    }

    return (
      <div style={outerStyle} id="sky">
        {this.state.moves.map((e, i) => {
          const conditional = Math.floor(Math.random() * Object.keys(images).length);

          return <Item
            what={images[conditional]}
            from={[e.fromX, e.fromY]}
            to={[e.toX, e.toY]}
            rotation={e.rotation}
            size={size}
            time={time}
            key={i}
          />
        })}
      </div>
    );
  }
}


Sky.defaultProps = {
  size: '150px',
  background: '',
  time: 20
}

Sky.propTypes = {
  size: PropTypes.string,
  background: PropTypes.string,
  time: PropTypes.number,
  how: PropTypes.number.isRequired,
  images: PropTypes.object.isRequired
}

export default Sky;
