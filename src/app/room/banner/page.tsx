import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
// import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import Image from 'next/image';
import './Banner.scss';
import BrandLogo from '../../../../public/assets/BindokLogo.svg'

export default function Banner() {
 
  return (
    <>
      <Container className='banner'>
        <Row>
            <Col lg={6} xs={12} md={12} className='brandLogo'>
                <Image priority src={BrandLogo} alt=""/>
            </Col>
            <Col lg={6} xs={12} md={12} className='brandName'>
                <h2 className="">Bindok Thoughts</h2>
            </Col>
            <Col lg={12} xs={12} md={12} className='brandText'>
            {/* <p className="">
                We're coming back after 10 years with Ideas and Innovation. Our space and website is under development with exciting products and services. Stay tuned for updates!
            </p> */}
            <p className="">
                Back In Business Soon! Stay Tuned!
            </p>
            </Col>
            <Col lg={12} xs={12} md={12} className='brandMail'>
                <p className="">
                    Contact Us: <a>bindokthoughts@gmail.com</a>
                </p>
            </Col>
        </Row>
      </Container>
   </>
  )
}