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

        </Fragment>
    )
}
