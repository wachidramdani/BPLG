import React, { Component } from 'react';
import { Col, Row, Card, CardHeader, CardBody, Button, Table } from 'reactstrap';
import imgrepeat from '../../assets/img/seamless.png';
import '../../scss/tab.css';
import $ from 'jquery';
import { Bar, Pie } from 'react-chartjs-2';
import Search from '../Commons/Search';

class Dashboard_2 extends Component {
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

    const pie = {
      datasets: [{
        data: [2000,8000],
        backgroundColor: ['yellow','orange']
      }],
      labels: ['No Issue','With Issue'],
    }

    const options = {
      maintainAspectRatio: false,
      responsive: false,
      legend: {
        position: 'bottom',
        labels: {
          boxWidth: 10,
          fontSize: 10,
        }
      }
    }

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
                          <Button className="btnCardMenu" onClick={() => this.props.history.push('/report/planner')}><i className="icon-presentation"></i> Planner</Button>
                          {/* <Button className="btnCardMenu" onClick={() => this.openMenu('planner')}><i className="icon-presentation"></i> Planner</Button> */}
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
                        {/* <Button className="btn-facebook btn-brand btn-sm" onClick={() => this.openMenu('back2')} style={{height: '30px'}}>
                          <i className="icon-arrow-left8" style={{fontSize: '12px', marginTop: '0'}}></i><span>Back</span>
                        </Button> */}
                        {/* <h3 style={{marginTop: '-5px', marginLeft: '15px'}}><b>Planner KPA Menu</b></h3> */}
                      </div>
                      <Row>
                        <Col sm="6">
                          <Button className="btn-github btn-sm" style={{marginBottom: '1.0%'}}>
                              <span>Truck Allocation</span>
                          </Button>
                          <br></br>
                          <Button className="btn-twitter btn-sm" style={{marginBottom: '1.0%'}}>
                              <span>Truck Availability</span>
                          </Button>
                          <br></br>
                          <Button className="btn-facebook btn-sm" style={{marginBottom: '1.0%'}}>
                              <span>List DO</span>
                          </Button>
                          <br></br>
                          <Button className="btn-youtube btn-sm" style={{marginBottom: '1.0%'}}>
                              <span>Truck Assignment</span>
                          </Button>
                        </Col>
                        <Col sm="6" style={{padding: '0 10px 0 5px !important'}}>
                          <Card className="card-accent-primary">
                              <CardBody>
                                <div className="left-area" style={{marginLeft: '0'}}>
                                  <Search /> 
                                  <Button className="btn-facebook btn-sm" style={{marginBottom: '1.0%', marginLeft: '10px'}}>                     
                                  <i className="icon-loop"></i></Button>
                                </div>
                                <div style={{width: '50%', float: 'right'}}>
                                  <div style={{marginRight: '0'}}>
                                    <Pie data={pie} height={150} width={200} options={options}/>
                                  </div>
                                  {/* <div style={{ fontSize: 'smaller'}}>
                                    <span >40 Ft - Monday 20 April 2010 09.00</span>
                                  </div>  */}
                                </div>
                                <br></br><br></br><br></br><br></br><br></br><br></br>
                                <div style={{ fontSize: 'smaller'}}>
                                  <span >40 Ft - Monday 20 April 2010 09.00</span>
                                </div> 
                                <div style={{width: '55%', float: 'left'}}>
                                <Button className="btn-github btn-sm" style={{ width: '50%',padding: '6px' }}>
                                    <span>40 Ft</span>
                                </Button>
                                <Button className="btn-pinterest btn-sm" style={{ width: '50%', padding: '6px' }}>
                                    <span>20 Ft</span>
                                </Button>
                                  <Table size="xs" bordered dark>
                                    <tbody>
                                      <tr>
                                        <th  class="w-25" scope="row">1</th>
                                        <td>B1234 TB</td>
                                      </tr>
                                      <tr>
                                        <th scope="row">2</th>
                                        <td>B1234 TB</td>
                                      </tr>
                                      <tr>
                                        <th scope="row">3</th>
                                        <td>B1234 TB</td>
                                      </tr>
                                    </tbody>
                                  </Table>
                                </div>                             
                              </CardBody>
                          </Card>
                        </Col>
                          <Button className="btn-facebook btn-brand btn-sm" onClick={() => this.openMenu('back2')} style={    {height: '30px'}}>
                            <i className="icon-arrow-left8" style={{fontSize: '12px', marginTop: '0'}}></i><span>Back</span>
                          </Button>
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

export default Dashboard_2;
