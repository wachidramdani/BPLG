import React, { Component } from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import { Badge, Button, UncontrolledDropdown, DropdownItem, DropdownMenu, DropdownToggle, Nav, NavItem } from 'reactstrap';
import PropTypes from 'prop-types';

import { AppNavbarBrand, AppSidebarToggler } from '@coreui/react';
import logo from '../../assets/img/brand/logo.png'
import sygnet from '../../assets/img/brand/bplg.png'
import avatar from '../../assets/img/1.jpg'
import Swal from 'sweetalert2';
import 'react-block-ui/style.css';

import API from '../../API';

const propTypes = {
  children: PropTypes.node,
};

const defaultProps = {};

class DefaultHeader extends Component {
  constructor(props){
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();

    Swal.fire({
      title: 'Logout',
      text: "Are you sure to logout?",
      icon: 'warning',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes!',
      confirmButtonColor: '#3085d6',
      showCancelButton: true,
    }).then((result) => {
      if (result.value) {
        localStorage.clear();
        this.props.history.push('/login');
        // API.get('api/auth/logout/')
        // .then(res => {
        //   if(res.status === 200){ 
        //     localStorage.clear();
        //     this.props.history.push('/login');
        //   }
        // }).catch((error) => {
        //   if(error && error.response && error.response.status === 401){
        //       Swal.fire({  
        //           title: 'Warning',  
        //           icon: 'warning',  
        //           text: 'Your ID Unauthorized.',  
        //       });
        //   }else{
        //       Swal.fire({  
        //           title: 'Error',  
        //           icon: 'error',  
        //           text: 'Please Check Your Network Connection.',  
        //       });
        //   }
        // });
      }
    });
  }

  render() {
    // eslint-disable-next-line
    const { children, ...attributes } = this.props;
    const dataUser = JSON.parse(localStorage.getItem('data'));
    const usavatar = (dataUser) ? dataUser.avatar : '';
    const usname = (dataUser) ? dataUser.name.split(' ')[0] : '';

    return (
        <React.Fragment>
          {/* <AppSidebarToggler className="d-lg-none" display="md" mobile /> */}
          <AppNavbarBrand
            full={{ src: logo, width: 140, height: 28, alt: 'Logo' }}
            minimized={{ src: sygnet, width: 38, height: 28, alt: 'Logo' }}
          />
          {/* <AppSidebarToggler className="d-md-down-none" display="lg" /> */}

          <Nav className="d-md-down-none" navbar>
            {/* <Button className="btnMainMenu" onClick={() => this.props.history.push('/home')}>Main Menu <i className="icon-home2"></i></Button>
            <Button className="btnHelp">Help <i className="icon-question3"></i></Button> */}
            {/* <NavItem className="topBtn">
              <NavLink to="/dashboard" className="nav-link" style={{backgroundColor: 'rgb(111,190,255)', padding: '3px', border: '1px solid #555'}}>Main Menu <i className="icon-home2"></i></NavLink>
            </NavItem>
            <NavItem style={{width: '100px'}}>
              <NavLink to="/users" className="nav-link"  style={{backgroundColor: 'rgb(110,255,252)', padding: '3px', border: '1px solid #555', borderLeft: 'none'}}>Help <i className="icon-question3"></i></NavLink>
            </NavItem> */}
          </Nav>
          <Nav className="ml-auto" navbar>
            <NavItem className="d-md-down-none">
              <NavLink to="#" className="nav-link"><i className="icon-envelope"></i><Badge pill color="danger" style={{marginLeft: '-20px'}}>5</Badge> <span>Pesan</span></NavLink>
            </NavItem>
            <UncontrolledDropdown nav direction="down">
              <DropdownToggle nav>
                <img src={ avatar } className="img-avatar" alt="avatar" />
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem header tag="div" className="text-center"><strong><span className="name-bar">{localStorage.getItem('token')}</span></strong></DropdownItem>
                <DropdownItem><i className="icon-user-tie"></i> Profile</DropdownItem>
                <DropdownItem><i className="icon-cogs"></i> Settings</DropdownItem>
                <DropdownItem onClick={this.handleSubmit}><i className="icon-lock5"></i> Logout</DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
          {/*<AppAsideToggler className="d-md-down-none" />
          <AppAsideToggler className="d-lg-none" mobile />*/}
        </React.Fragment>
    );
  }
}

DefaultHeader.propTypes = propTypes;
DefaultHeader.defaultProps = defaultProps;

export default withRouter(DefaultHeader);
