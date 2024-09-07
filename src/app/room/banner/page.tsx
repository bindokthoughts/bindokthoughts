import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
// import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import Image from 'next/image';
import './Banner.scss';
import BrandLogo from '../../../../public/assets/BindokLogo.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faEnvelope, faMessage} from '@fortawesome/free-solid-svg-icons'

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
                Back In Business Soon! <br/> Watch Out!
            </p>
            <h4 className="services">Web | Space | Product | Brand</h4>
            <h4 className="business">Design & Consulting</h4>
            </Col>
            
        </Row>
       
      </Container>
      <Container className='wall-banner'>
        <Row>
            <Col lg={6} xs={12} md={12} className='brandLogo'>
                <h2>Site Under Construction</h2>
            </Col>
            <Col lg={12} xs={12} md={12} className='brandMail'>
                <h6 className="">
                    Reach Out Via
                </h6>
                <div className="shareSocial">
                    <ul className="socialList">
                        <li><a href="mailto:bindokthoughts@gmail.com"><FontAwesomeIcon icon={faEnvelope}/></a></li>
                        <li><a href="https://wa.me/917276007787?text=Hi!%20How%20Bindok%20Thought%20can%20help%20me?"><FontAwesomeIcon icon={faMessage}/></a></li>
                    </ul>
                </div>

            </Col>
        </Row>
      </Container>
      
   </>
  )
}