import React, { Component } from 'react';
import { Col, Row, Card, CardHeader, CardBody, Button } from 'reactstrap';
import { withStyles } from '@material-ui/core';
import imgrepeat from '../../assets/img/seamless.png';
import '../../scss/tab.css';
import $ from 'jquery';
import 'react-perfect-scrollbar/dist/css/styles.css';
import ScrollBar from 'react-perfect-scrollbar';

// const styles = theme => ({
//   '@global': {
//     '*::-webkit-scrollbar': {
//       width: '0.4em'
//     },
//     '*::-webkit-scrollbar-track': {
//       '-webkit-box-shadow': 'inset 0 0 6px rgba(0,0,255,0.5)'
//     },
//     '*::-webkit-scrollbar-thumb': {
//       backgroundColor: 'rgba(0,0,0,.1)',
//       outline: '1px solid slategrey'
//     }
//   }
// });

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      collapseMenu: "block",
      collapseMenu2: "none",
    }
    this.openMenu = this.openMenu.bind(this);
  }

  openMenu = (val) => { 
    if(val === 'back2') {
      this.setState({ collapseMenu2: "none", collapseMenu: "block" }); 
      $('#tab1').prop('checked',true);
    }else if(val === 'planner'){
      this.setState({ collapseMenu: "none", collapseMenu2: "block" }); 
      $('#tab2').prop('checked',true);
    }
  }

  loading = () => <div className="animated fadeIn pt-1 text-center">Loading...</div>

  render() {
    const styleImg = {
      // backgroundImage: `url(${imgrepeat})`
      backgroundColor: '#f5f5f5',
      padding: '0',
      boder: 'none'
    };
    return (
      <div className="animated fadeIn">
        <Row>
          <Col xs="12" sm="12" lg="8" style={{marginBottom: '10px'}}>
            <Card className="noBorder" style={{minHeight: "calc(100vh - 217px)"}}>
              <CardBody style={styleImg}>
                <div className="pcss3t pcss3t-effect-scale pcss3t-theme-1" style={{display: this.state.collapseMenu}}>
                  <input type="radio" name="pcss3t" defaultChecked  id="tab1"className="tab-content-first" />
                  <label htmlFor="tab1"><i className="icon-users2"></i>Main Menu</label>
                  
                  <ul style={{width: '100%'}}>
                    <ScrollBar style={{ height: "calc(100vh - 217px)" }}>
                      <li className="tab-content tab-content-first typography" style={{width: '100%', padding: '20px'}}>
                        {/* <h6>Group Access: <b>Administrator</b></h6> */}
                        <Row>
                          <Col xs="6" lg="3">
                            <Button className="btnCardMenu"><i className="icon-man-woman"></i> HR</Button>
                          </Col>
                          <Col xs="6" lg="3">
                            <Button className="btnCardMenu"><i className="icon-calculator2"></i> F&A</Button>
                          </Col>
                          <Col xs="6" lg="3">
                            <Button className="btnCardMenu"><i className="icon-cart4"></i> Purchasing</Button>
                          </Col>
                          <Col xs="6" lg="3">
                            <Button className="btnCardMenu"><i className="icon-shield2"></i> HSE</Button>
                          </Col>
                          <Col xs="6" lg="3">
                            <Button className="btnCardMenu"><i className="icon-chart"></i> Dashboard</Button>
                          </Col>
                          <Col xs="6" lg="3">
                            <Button className="btnCardMenu"><i className="icon-price-tags"></i> Asset Management</Button>
                          </Col>
                          <Col xs="6" lg="3">
                            <Button className="btnCardMenu" onClick={() => this.openMenu('planner')}><i className="icon-presentation"></i> Planner</Button>
                          </Col>
                          <Col xs="6" lg="3">
                            <Button className="btnCardMenu"><i className="icon-phone-wave"></i> Customer Center</Button>
                          </Col>
                          <Col xs="6" lg="3">
                            <Button className="btnCardMenu"><i className="icon-puzzle3"></i> Sales & Marketing</Button>
                          </Col>
                          <Col xs="6" lg="3">
                            <Button className="btnCardMenu"><i className="icon-lan"></i> IT</Button>
                          </Col>
                          <Col xs="6" lg="3">
                            <Button className="btnCardMenu"><i className="icon-magic-wand"></i> Resources Management</Button>
                          </Col>
                          <Col xs="6" lg="3">
                            <Button className="btnCardMenu"><i className="icon-mobile3"></i> Coordinator</Button>
                          </Col>
                          <Col xs="6" lg="3">
                            <Button className="btnCardMenu"><i className="icon-printer2"></i> Cashier</Button>
                          </Col>
                          <Col xs="6" lg="3">
                            <Button className="btnCardMenu"><i className="icon-balance"></i> Security</Button>
                          </Col>
                          <Col xs="6" lg="3">
                            <Button className="btnCardMenu"><i className="icon-hammer-wrench"></i> Maintenance / Workshop</Button>
                          </Col>
                          <Col xs="6" lg="3">
                            <Button className="btnCardMenu"><i className="icon-man-woman"></i> HR BPK</Button>
                          </Col>
                        </Row>
                      </li>
                    </ScrollBar >
                  </ul>                  
                </div>
                <div className="pcss3t pcss3t-effect-scale pcss3t-theme-1" style={{display: this.state.collapseMenu2}}>
                  <input type="radio" name="pcss3t" id="tab2"className="tab-content-first" />
                  <label htmlFor="tab2"><i className="icon-magic-wand"></i>Planner</label>
                  <ul style={{width: '100%'}}>
                    <ScrollBar className="bgWhite" style={{ height: "calc(100vh -  220px)" }}>
                      <li className="tab-content tab-content-first typography" style={{width: '100%', padding: '20px'}}>
                        <div style={{display: 'flex', marginBottom: '10px'}}>
                          <Button className="btn-facebook btn-brand btn-sm" onClick={() => this.openMenu('back2')} style={{height: '30px', marginTop: '-5px'}}>
                            <i className="icon-arrow-left8" style={{fontSize: '12px', marginTop: '0'}}></i><span>Back</span>
                          </Button>
                          {/* <h6 style={{marginTop: '0px', marginLeft: '15px'}}>Administrator - <b>Planner</b></h6> */}
                        </div>
                        <Row>
                          <Col xs="6" lg="3">
                            <Button className="btnCardMenu" onClick={() => this.props.history.push('/planner')}><i className="icon-truck"></i> Check Resources</Button>
                          </Col>
                          <Col xs="6" lg="3">
                            <Button className="btnCardMenu"><i className="icon-display"></i> Truck Monitoring</Button>
                          </Col>
                          <Col xs="6" lg="3">
                            <Button className="btnCardMenu"><i className="icon-location4"></i> Truck Tracking</Button>
                          </Col>
                          <Col xs="6" lg="3">
                            <Button className="btnCardMenu"><i className="icon-chart"></i> Dashboard</Button>
                          </Col>
                        </Row>
                      </li>
                    </ScrollBar>
                  </ul>
                </div>
              </CardBody>
            </Card>
          </Col>
          <Col xs="12" sm="12" lg="4" style={{marginBottom: '10px'}}>
            <Row>
              <Col lg="12" style={{marginBottom: '10px'}}>
                <Card>
                  <CardHeader className="cardBgWhite">
                    <i className="icon-bell3"></i>Announcement
                    <div className="card-header-actions">
                      {/*eslint-disable-next-line*/}
                      <Button
                        type="submit"
                        variant="contained"
                        className="btnReadMore"
                        style={{backgroundColor:"rgb(74,74,255)", color:"white"}}
                      >
                      Read More...
                      </Button>
                    </div>
                  </CardHeader>
                  <CardBody style={{padding: '15px'}}>
                    <code>
                      <div className="divBody">
                        <div className="divTime">
                          <div>
                            <i className="icon-user iconTime"></i> HR
                          </div>
                          <div>
                            <i className="icon-alarm iconTime"></i> 14 Apr 2020
                          </div>
                        </div>
                        <div className="divText"> Bekerja Wajib Menggunakan Masker</div>
                      </div>
                      <div className="divBody">
                        <div className="divTime">
                          <div>
                            <i className="icon-user iconTime"></i> HSE
                          </div>
                          <div>
                            <i className="icon-alarm iconTime"></i> 7 Apr 2020
                          </div>
                        </div>
                        <div className="divText"> Fire Drill 23 Apr 2020 09.00 am</div>
                      </div>
                      <div className="divBody">
                        <div className="divTime">
                          <div>
                            <i className="icon-user iconTime"></i> HR
                          </div>
                          <div>
                            <i className="icon-alarm iconTime"></i> 2 Apr 2020
                          </div>
                        </div>
                        <div className="divText"> Day Off 25 Mei</div>
                      </div>
                    </code>
                  </CardBody>
                </Card>
              </Col>
              <Col lg="12">
                <Card>
                  <CardHeader className="cardBgWhite">
                    <i className="icon-clipboard6"></i>Event Schedule
                    <div className="card-header-actions">
                      {/*eslint-disable-next-line*/}
                      <Button
                        type="submit"
                        variant="contained"
                        className="btnReadMore"
                        style={{backgroundColor:"rgb(74,74,255)", color:"white"}}
                      >
                      Read More...
                      </Button>
                    </div>
                  </CardHeader>
                    <CardBody style={{padding: '15px'}}>
                      <code>
                        <div className="divBody">
                          <div className="divTime">
                            <div>
                              <i className="icon-user iconTime"></i> ADMIN
                            </div>
                            <div>
                              <i className="icon-alarm iconTime"></i> 10 Apr 2020
                            </div>
                          </div>
                          <div className="divText"> Management Metting Schedule 28 Apr 2020 10.00 am di HO</div>
                        </div>
                        <div className="divBody"> 
                          <div className="divTime">
                            <div>
                              <i className="icon-user iconTime"></i> ADMIN
                            </div>
                            <div>
                              <i className="icon-alarm iconTime"></i> 10 Apr 2020
                            </div>
                          </div>
                          <div className="divText"> Meeting Customer dgn KPA team scheduled 30 Apr 2020 11.00 am di KPA</div>
                        </div>
                        <div className="divBody">
                          <div className="divTime">
                            <div>
                              <i className="icon-user iconTime"></i> ADMIN
                            </div>
                            <div>
                              <i className="icon-alarm iconTime"></i> 7 Apr 2020
                            </div>
                          </div>
                          <div className="divText"> Training CoA Scheduled 30 Apr 2020 09.00 am di HO</div>
                        </div>
                      </code>
                    </CardBody>
                </Card>
              </Col>
            </Row>
          </Col>
        </Row>
      </div>
    );
  }
}

// export default withStyles(styles, { withTheme: true})(Dashboard);
export default Dashboard