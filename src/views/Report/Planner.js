import React, { Component } from 'react';
import { Col, Row, Card, CardHeader, CardBody, Button, Table } from 'reactstrap';
import imgrepeat from '../../assets/img/seamless.png';
import '../../scss/tab.css';
import $ from 'jquery';
import SplitterLayout from 'react-splitter-layout';
import 'react-splitter-layout/lib/index.css';
import { Bar, Pie } from 'react-chartjs-2';
import { CustomTooltips } from '@coreui/coreui-plugin-chartjs-custom-tooltips';
import Search from '../Commons/Search'

class Planner extends Component {
  constructor(props) {
    super(props);
  }

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
        position: 'right',
        labels: {
          boxWidth: 10,
          fontSize: 10,
        }
      }
    }

    const pie2 = {
      datasets: [{
        data: [2000,2000,6000],
        backgroundColor: ['green','yellow','orange']
      }],
      labels: ['With Issue','Complete','On Duty'],
    }

    const options2 = {
      maintainAspectRatio: false,
      responsive: false,
      legend: {
        position: 'right',
        labels: {
          boxWidth: 10,
          fontSize: 10,
        }
      }
    }
    return (
      <div className="animated fadeIn">
        <Row>
          <Col xs="12" sm="12" lg="12">
            <Card className="card-accent-primary" style={{minHeight: "calc(100vh - 85px)"}}>
              <CardBody style={styleImg} className="card-body-nopad">
                <SplitterLayout primaryIndex={1} percentage secondaryInitialSize={60} customClassName="spliter">
                    <div style={{height: '100%'}}>
                        <Row className="row-nomar">
                            <Col lg="2" style={{backgroundColor: "white", marginTop: '10px', marginLeft:'5px'}}>
                                <Button className="btnLSMenu">
                                    <span>Truck Allocation</span>
                                </Button>
                                <br></br>
                                <Button className="btnLSMenu">
                                    <span>Truck Availability</span>
                                </Button>
                                <br></br>
                                <Button className="btnLSMenu">
                                    <span>List DO</span>
                                </Button>
                                <br></br>
                                <Button className="btnLSMenu">
                                    <span>Truck Assignment</span>
                                </Button>
                                <Button className="btn-facebook btn-brand btn-sm btnBackBottom" onClick={() => this.props.history.goBack()} style={{height: '30px'}}>
                                    <i className="icon-arrow-left8" style={{fontSize: '12px', marginTop: '0'}}></i><span>Back</span>
                                </Button>
                            </Col>
                            <Col lg="9" style={{marginTop: '10px', marginRight:'5px'}}>

                            </Col>
                        </Row>
                    </div>
                    <SplitterLayout vertical percentage secondaryInitialSize={50}>
                      <div >
                        <div className="left-area" style={{marginLeft: '20px', marginTop:'20px'}}>
                          <input placeholder="Truck Tracking"/> 
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
                        <div style={{ fontSize: 'smaller',marginLeft:'20px'}}>
                          <span >40 Ft - Monday 20 April 2010 09.00 am</span>
                        </div> 
                        <div style={{width: '55%', float: 'left', marginLeft:'20px'}}>
                          <Button className="btn-github btn-sm" style={{ width: '20%',padding: '6px' }}>
                              <span>40 Ft</span>
                          </Button>
                          <Button className="btn-pinterest btn-sm" style={{ width: '20%', padding: '6px' }}>
                              <span>20 Ft</span>
                          </Button>
                        </div>
                      </div>
                      <div>
                        <div className="left-area" style={{marginLeft: '20px', marginTop:'20px'}}>
                          <Button className="btn-facebook" style={{marginBottom:'10px'}}>Truck Monitoring</Button>
                          <br></br>
                          <input placeholder="Search by Vehicle"/> 
                          <Button className="btn-facebook btn-sm" style={{marginBottom: '1.0%', marginLeft: '10px'}}>                     
                          <i className="icon-loop"></i></Button>
                        </div>
                        <div style={{width: '50%', float: 'right'}}>
                          <div style={{marginRight: '0'}}>
                            <Pie data={pie2} height={150} width={200} options={options2}/>
                          </div>
                          <div style={{ fontSize: 'smaller'}}>
                            <span >NSI-4OFt - Monday 20 April 2020 09.00 am</span>
                          </div> 
                        </div>  
                        <div style={{width: '55%', float: 'left', marginLeft:'20px'}}>
                          <Button className="btn-youtube btn-brand btn-sm" style={{height: '30px'}}>
                          {/* <Button className="btn-youtube btn-sm" style={{ width: '20%', padding: '6px' }}> */}
                          <span>Next</span>  <i className="icon-arrow-right8" style={{fontSize: '1zpx', marginTop: '0'}}></i>
                          </Button>
                        </div>              
                      </div>
                    </SplitterLayout>
                </SplitterLayout>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Planner;
