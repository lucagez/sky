import React from "react"

class Item extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      style: {
        transform: `translate(${this.props.from[0]}px, ${this.props.from[1]}px) rotate(${Math.random() * 360}deg)`,
      }
    }
    this.setStyle = this.setStyle.bind(this);
  }

  componentDidMount() {
    setTimeout(this.setStyle, 1);
  }

  setStyle() {
    const movingStyle = `translate(${Math.random() * window.innerHeight * 2}px, ${Math.random() * window.innerWidth * 2}px) rotate(${Math.random() * 360}deg)`;
    const time = this.props.time ? this.props.time : 10;
    const size = this.props.size ? this.props.size : '150px';
    const style = {
      position: 'absolute',
      zIndex: '-1',
      transform: movingStyle,
      transition: `transform ${time}s ease-out`,
      overflow: 'visible',
      willChange: 'transform',
    }
    const imgSize = {
      width: size,
      height: 'auto',
    }
    this.setState({
      style: style,
      size: imgSize,
    });
    setTimeout(this.setStyle, time * 1000);
  }

  render() {
    const { style, size } = this.state;

    return (
      <div style={style}>
        <img style={size} srcSet={this.props.what} alt="lol" />
      </div>
    );
  }
}

export default Item;