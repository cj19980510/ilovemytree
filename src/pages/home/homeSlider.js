import React from 'react'
import { Carousel, WingBlank } from 'antd-mobile';
import 'style/homeSlider.scss'
import icon1 from '../../assets/img/6_01.jpg'
import icon2 from '../../assets/img/6_02.gif'
import icon3 from '../../assets/img/6_03.jpg'
import icon4 from '../../assets/img/6_04.gif'
export default class HomeSlider extends React.Component {
  state = {
    data: ['1', '2', '3'],
    imgHeight: 176,
  }
  componentDidMount() {
    // simulate img loading
    setTimeout(() => {
      this.setState({
        data: [icon4,icon2,icon3,icon1,icon2,],
      });
    }, 100);
  }
  render() {
    return (
      <WingBlank>
        <Carousel
          autoplay
          infinite
          autoplayInterval="3000"
          // beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)}
          // afterChange={index => console.log('slide to', index)}
        
        >
          {this.state.data.map(val => (
            <a
              key={val}
              href="javaScrtipt:"
              style={{ display: 'inline-block', width: '100%', height: this.state.imgHeight }}
            >
              <img          
                src=  {`${val}`}
               
                alt=""
                style={{ width: '100%', verticalAlign: 'top',height:'170px' }}
                onLoad={() => {
                  // fire window resize event to change height
                  window.dispatchEvent(new Event('resize'));
                  this.setState({ imgHeight: 'auto' });
                }}
              />
            </a>
          ))}
        </Carousel>
        <a href="javaScript:"><span className="slider-right"><i className="fa fa-share-alt" aria-hidden="true"></i><span>分享</span></span></a>
      </WingBlank>
    );
  }
}