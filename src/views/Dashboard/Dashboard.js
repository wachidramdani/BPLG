import React, { Component } from 'react';
import { Col, Row, Card, CardHeader, CardBody, Button } from 'reactstrap';
import imgrepeat from '../../assets/img/seamless.png';
import '../../scss/tab.css';
import $ from 'jquery';

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
      $('#tab4').prop('checked',true);
    }else if(val === 'planner'){
      this.setState({ collapseMenu: "none", collapseMenu2: "block" }); 
      $('#tab6').prop('checked',true);
    }
  }

  loading = () => <div className="animated fadeIn pt-1 text-center">Loading...</div>

  render() {
    const styleImg = {
      backgroundImage: `url(${imgrepeat})`
    };
    return (
      <div className="animated fadeIn">
        <Row>
          <Col xs="12" sm="12" lg="8">
            <Card className="card-accent-primary" style={{minHeight: "calc(100vh - 85px)"}}>
              <CardBody style={styleImg}>
                <div className="pcss3t pcss3t-effect-scale pcss3t-theme-1" style={{display: this.state.collapseMenu}}>
                  <input type="radio" name="pcss3t" defaultChecked  id="tab1"className="tab-content-first" />
                  <label htmlFor="tab1"><i className="icon-users2"></i>BP Log Group</label>
                  
                  <input type="radio" name="pcss3t" id="tab2" className="tab-content-2" />
                  <label htmlFor="tab2"><i className="icon-users2"></i>BPL</label>
                  
                  <input type="radio" name="pcss3t" id="tab3" className="tab-content-3" />
                  <label htmlFor="tab3"><i className="icon-users2"></i>BPP</label>
                  
                  <input type="radio" name="pcss3t" id="tab4" className="tab-content-4" />
                  <label htmlFor="tab4"><i className="icon-users2"></i>KPA</label>

                  <input type="radio" name="pcss3t" id="tab5" className="tab-content-last" />
                  <label htmlFor="tab5"><i className="icon-users2"></i>BPK</label>
                  
                  <ul>
                    <li className="tab-content tab-content-first typography">
                      <h3>Group Access: <b>BP Log Group</b></h3>
                      <Row>
                        <Col sm="12" lg="3">
                          <Button className="btnCardMenu"><i className="icon-man-woman"></i> HR</Button>
                        </Col>
                        <Col sm="12" lg="3">
                          <Button className="btnCardMenu"><i className="icon-calculator2"></i> F&A</Button>
                        </Col>
                        <Col sm="12" lg="3">
                          <Button className="btnCardMenu"><i className="icon-cart4"></i> Purchasing</Button>
                        </Col>
                        <Col sm="12" lg="3">
                          <Button className="btnCardMenu"><i className="icon-shield2"></i> HSE</Button>
                        </Col>
                        <Col sm="12" lg="3">
                          <Button className="btnCardMenu"><i className="icon-chart"></i> Dashboard</Button>
                        </Col>
                        <Col sm="12" lg="3">
                          <Button className="btnCardMenu"><i className="icon-price-tags"></i> Asset Management</Button>
                        </Col>
                        <Col sm="12" lg="3">
                          <Button className="btnCardMenu"><i className="icon-phone-wave"></i> Customer Center</Button>
                        </Col>
                        <Col sm="12" lg="3">
                          <Button className="btnCardMenu"><i className="icon-puzzle3"></i> Sales & Marketing</Button>
                        </Col>
                        <Col sm="12" lg="3">
                          <Button className="btnCardMenu"><i className="icon-lan"></i> IT</Button>
                        </Col>
                      </Row>
                    </li>
                    
                    <li className="tab-content tab-content-2 typography">
                      <h3>Group Access: <b>BPL</b></h3>
                      <Row>
                        <Col sm="12" lg="3">
                          <Button className="btnCardMenu"><i className="icon-phone-wave"></i> Customer Center</Button>
                        </Col>
                        <Col sm="12" lg="3">
                          <Button className="btnCardMenu"><i className="icon-magic-wand"></i> Resources Management</Button>
                        </Col>
                        <Col sm="12" lg="3">
                          <Button className="btnCardMenu"><i className="icon-mobile3"></i> Coordinator</Button>
                        </Col>
                        <Col sm="12" lg="3">
                          <Button className="btnCardMenu"><i className="icon-chart"></i> Dashboard</Button>
                        </Col>
                        <Col sm="12" lg="3">
                          <Button className="btnCardMenu"><i className="icon-printer2"></i> Cashier</Button>
                        </Col>
                        <Col sm="12" lg="3">
                          <Button className="btnCardMenu"><i className="icon-balance"></i> Security</Button>
                        </Col>
                      </Row>
                    </li>
                    
                    <li className="tab-content tab-content-3 typography">
                      <h3>Group Access: <b>BPP</b></h3>
                      <Row>
                        <Col sm="12" lg="3">
                          <Button className="btnCardMenu"><i className="icon-phone-wave"></i> Customer Center</Button>
                        </Col>
                        <Col sm="12" lg="3">
                          <Button className="btnCardMenu"><i className="icon-magic-wand"></i> Resources Management</Button>
                        </Col>
                        <Col sm="12" lg="3">
                          <Button className="btnCardMenu"><i className="icon-mobile3"></i> Coordinator</Button>
                        </Col>
                        <Col sm="12" lg="3">
                          <Button className="btnCardMenu"><i className="icon-chart"></i> Dashboard</Button>
                        </Col>
                        <Col sm="12" lg="3">
                          <Button className="btnCardMenu"><i className="icon-printer2"></i> Cashier</Button>
                        </Col>
                        <Col sm="12" lg="3">
                          <Button className="btnCardMenu"><i className="icon-balance"></i> Security</Button>
                        </Col>
                      </Row>
                    </li>

                    <li className="tab-content tab-content-4 typography">
                      <h3>Group Access: <b>KPA</b></h3>
                      <Row>
                        <Col sm="12" lg="3">
                          <Button className="btnCardMenu"><i className="icon-phone-wave"></i> Customer Center</Button>
                        </Col>
                        <Col sm="12" lg="3">
                          <Button className="btnCardMenu"><i className="icon-hammer-wrench"></i> Maintenance / Workshop</Button>
                        </Col>
                        <Col sm="12" lg="3">
                          <Button className="btnCardMenu" onClick={() => this.openMenu('planner')}><i className="icon-presentation"></i> Planner</Button>
                        </Col>
                        <Col sm="12" lg="3">
                          <Button className="btnCardMenu"><i className="icon-shield2"></i> HSE</Button>
                        </Col>
                        <Col sm="12" lg="3">
                          <Button className="btnCardMenu"><i className="icon-magic-wand"></i> Resources Management</Button>
                        </Col>
                        <Col sm="12" lg="3">
                          <Button className="btnCardMenu"><i className="icon-printer2"></i> Cashier</Button>
                        </Col>
                        <Col sm="12" lg="3">
                          <Button className="btnCardMenu"><i className="icon-chart"></i> Dashboard</Button>
                        </Col>
                        <Col sm="12" lg="3">
                          <Button className="btnCardMenu"><i className="icon-balance"></i> Security</Button>
                        </Col>
                      </Row>
                    </li>
                    
                    <li className="tab-content tab-content-last typography">
                      <h3>Group Access: <b>BPK</b></h3>
                      <Row>
                        <Col sm="12" lg="3">
                          <Button className="btnCardMenu"><i className="icon-phone-wave"></i> Customer Center</Button>
                        </Col>
                        <Col sm="12" lg="3">
                          <Button className="btnCardMenu"><i className="icon-magic-wand"></i> Resources Management</Button>
                        </Col>
                        <Col sm="12" lg="3">
                          <Button className="btnCardMenu"><i className="icon-mobile3"></i> Coordinator</Button>
                        </Col>
                        <Col sm="12" lg="3">
                          <Button className="btnCardMenu"><i className="icon-chart"></i> Dashboard</Button>
                        </Col>
                        <Col sm="12" lg="3">
                          <Button className="btnCardMenu"><i className="icon-printer2"></i> Cashier</Button>
                        </Col>
                        <Col sm="12" lg="3">
                          <Button className="btnCardMenu"><i className="icon-balance"></i> Security</Button>
                        </Col>
                        <Col sm="12" lg="3">
                          <Button className="btnCardMenu"><i className="icon-man-woman"></i> HR BPK</Button>
                        </Col>
                      </Row>
                    </li>
                  </ul>
                </div>

                <div className="pcss3t pcss3t-effect-scale pcss3t-theme-1" style={{display: this.state.collapseMenu2}}>
                  <input type="radio" name="pcss3t" id="tab6"className="tab-content-first" />
                  <label htmlFor="tab6"><i className="icon-presentation"></i>Planner</label>
                  
                  <ul>
                    <li className="tab-content tab-content-first typography">
                      <div style={{display: 'flex'}}>
                        <Button className="btn-facebook btn-brand btn-sm" onClick={() => this.openMenu('back2')} style={{height: '30px'}}>
                          <i className="icon-arrow-left8" style={{fontSize: '12px', marginTop: '0'}}></i><span>Back</span>
                        </Button>
                        <h3 style={{marginTop: '-5px', marginLeft: '15px'}}><b>Planner KPA Menu</b></h3>
                      </div>
                      <Row>
                        <Col sm="12" lg="3">
                          <Button className="btnCardMenu"><i className="icon-truck"></i> Check Resources</Button>
                        </Col>
                        <Col sm="12" lg="3">
                          <Button className="btnCardMenu"><i className="icon-display"></i> Truck Monitoring</Button>
                        </Col>
                        <Col sm="12" lg="3">
                          <Button className="btnCardMenu"><i className="icon-location4"></i> Truck Tracking</Button>
                        </Col>
                        <Col sm="12" lg="3">
                          <Button className="btnCardMenu"><i className="icon-chart"></i> Dashboard</Button>
                        </Col>
                      </Row>
                    </li>
                  </ul>
                </div>
              </CardBody>
            </Card>
          </Col>
          <Col xs="12" sm="12" lg="4">
            <Row>
              <Col lg="12">
                <Card className="card-accent-primary" style={{minHeight: "calc(50vh - 42.5px"}}>
                  <CardHeader>
                    <i className="icon-bell3"></i>Announcement
                  </CardHeader>
                    <CardBody>
                      <code>
                        <div className="divBody">
                          <div className="divTime">
                            <div>
                              <i className="icon-user iconTime"></i> admin
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
                              <i className="icon-user iconTime"></i> admin
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
                              <i className="icon-user iconTime"></i> admin
                            </div>
                            <div>
                              <i className="icon-alarm iconTime"></i> 2 Apr 2020
                            </div>
                          </div>
                          <div className="divText"> Day Off 25 Mei</div>
                        </div>
                      </code>
                      <Button
                          type="submit"
                          variant="contained"
                          className="btnReadMore"
                          style={{backgroundColor:"rgb(74,74,255)", color:"white"}}
                      >
                      Read More...
                      </Button>
                    </CardBody>
                </Card>
              </Col>
              <Col lg="12">
                <Card className="card-accent-primary" style={{minHeight: "calc(50vh - 42.5px"}}>
                  <CardHeader>
                    <i className="icon-clipboard6"></i>Event Schedule
                  </CardHeader>
                    <CardBody>
                      <code>
                        <div className="divBody">
                          <div className="divTime">
                            <div>
                              <i className="icon-user iconTime"></i> admin
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
                              <i className="icon-user iconTime"></i> admin
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
                              <i className="icon-user iconTime"></i> admin
                            </div>
                            <div>
                              <i className="icon-alarm iconTime"></i> 7 Apr 2020
                            </div>
                          </div>
                          <div className="divText"> Training CoA Scheduled 30 Apr 2020 09.00 am di HO</div>
                        </div>
                      </code>
                      <Button
                          type="submit"
                          variant="contained"
                          className="btnReadMore"
                          style={{backgroundColor:"rgb(74,74,255)", color:"white"}}
                      >
                      Read More...
                      </Button>
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

export default Dashboard;
