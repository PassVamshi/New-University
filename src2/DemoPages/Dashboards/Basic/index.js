import React, { Fragment } from 'react'
import { Col, Row } from 'reactstrap'
import image from '../../../Images/CollegeLogo.jpg'

export default function Dashboard() {

    return (
        <Fragment>
            <Row><Col md='2'> <img src={image} with='90px' height={'120px'} /></Col>
                <Col md='9'> <h1 style={{ color: 'red', fontSize: '30px' }} className='text-center'><strong>
                    HOLY MARY INSTITUTE OF TECH AND SCIENCE</strong></h1>
                    <div style={{ color: 'blueviolet', fontSize: '20px' }} className='text-center'><strong>
                        UGC- AUTONOMOUS, Accredited by NAAC - A Grade </strong></div>
                    <div className='text-center'>
                        <strong>(Approved by AICTE, Recognized by UGC Under section 2(f) & 12(B), Permanently Affiliated to JNTUH)
                            EAMCET / ECET / POLYCET / ICET / PGECET Code : HOLY
                            HOLY TRINITY EDUCATIONAL SOCIETY, HYDERABAD</strong></div>
                </Col></Row>
            <Row height='700px' className='pt-5'>
                <Col style={{ borderRadius: '10px' }} className="bg-info">
                    <h1 className='text-white'>Latest News</h1>
                    <h5 className='text-center text-white pt-5 pb-5'>
                        ELYSIUM - TECHNICAL FEST
                    </h5>
                </Col>
                <Col className='bg-danger ' style={{ marginLeft: '10px', borderRadius: '10px' }}>
                    <h1 className='text-white pt-3 '>College Teaser</h1>
                </Col>
                <Col className='bg-success' style={{ marginLeft: '10px', borderRadius: '10px' }}>
                    <h1 className='text-white'>Upcoming events</h1>
                </Col>
            </Row>
        </Fragment>
    )
}
