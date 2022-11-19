import {
    faAngleDown
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { Fragment } from 'react';
import 'react-toastify/dist/ReactToastify.css';
import bgImage from '../..//../assets/utils/images/originals/abstract3.jpg'
import { Col, DropdownMenu, DropdownToggle, NavLink, Row, UncontrolledButtonDropdown } from 'reactstrap';
import image from '../../../Images/icon-5359553_1280.webp';

const UserBox = (props) => {
    const Logout = () => {
        localStorage.removeItem('login');
        window.location.reload();
    }
    return (
        <Fragment>
            <div className="header-btn-lg pe-0">
                <div className="widget-content p-0">
                    <div className="widget-content-wrapper">
                        <div className="widget-content-left">
                            <Row>
                                <Col md='4' />
                                <Col md='3'>
                                    <UncontrolledButtonDropdown style={{ paddingRight: '50px', width: '10px' }} >
                                        <DropdownToggle color="link" className="p-0">
                                            <img width={42} className="rounded-circle" src={image} alt="Mahesh Patnam" />
                                            <FontAwesomeIcon className="ms-2 opacity-8" icon={faAngleDown} />
                                        </DropdownToggle>

                                        <DropdownMenu style={{ width: '10px', backgroundImage:`url(${bgImage}) `}} right >
                                            <Row>
                                                <Col md='4' />
                                                <Col>   <img src={image} width="70px" height={"60px"} /></Col></Row>
                                            <Row>
                                                <Col md='3' />
                                                <Col>    <NavLink href="#" onClick={() => Logout()}>
                                                    Log out
                                                </NavLink></Col></Row>
                                                <Row>
                                                <Col md='2' />
                                                <Col>   <NavLink href="#" onClick={() => Logout()}>
                                                Change Password
                                            </NavLink></Col></Row>
                                        </DropdownMenu>
                                    </UncontrolledButtonDropdown>
                                </Col>
                            </Row>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}
export default UserBox;