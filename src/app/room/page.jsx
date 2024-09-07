"use client";
import React from 'react';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';

import './ThreeDRoom.scss';

// import Bulb from './Bulb/Bulb';
import Banner from './banner/page';

function ThreeDRoom() {
  return (
    <>
    <div className="room">
    <div className="wall">
        <u></u> <u></u> <u></u> <u></u>
        <div className="window">
        <u></u> <u></u> <u></u>
        <u></u> <u></u> <u></u>
        </div>
    </div>
    <div className="wall"></div>
    <div className="wall"></div>
    <div className="wall"></div>
    <div className="wall">
        {/* <Bulb/> */}
        <Banner/>
    </div>

    <div className="light">
        <u></u><u></u><u></u><u></u>

        <u> <u></u> <u></u> <u></u></u>
    </div>
    </div>

    </>
  );
}

export default ThreeDRoom;


