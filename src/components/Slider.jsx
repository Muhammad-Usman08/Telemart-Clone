import Carousel from 'react-bootstrap/Carousel';
import '../styles/style.css'


function Mycarousel() {
  return (
    <Carousel className='w-100 carousle-main'>
      <Carousel.Item>
       <img className='w-[100%]' src="https://d1iv6qgcmtzm6l.cloudfront.net/banner_desktops/jags2Jp3QiLRBel8jRIPEiDMI2UxTO4nFxaaM8ze.png" alt="" />
      </Carousel.Item>
      <Carousel.Item>
       <img className='' src="https://d1iv6qgcmtzm6l.cloudfront.net/banner_desktops/4jj2atkFThUQaXdrRmWvqTcW64oCFjSqcvpUIalw.jpg" alt="" />
      </Carousel.Item>
      <Carousel.Item>
        <img className='w-[100%]' src="https://d1iv6qgcmtzm6l.cloudfront.net/banner_desktops/tsEeojXFwDuBWw26arLyk5S0Sh3pxZkjnn1H0FLh.png" alt="" />
      </Carousel.Item>
    </Carousel>
  );
}

export default Mycarousel;