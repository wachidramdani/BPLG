import React, { Component } from 'react';
import { Col, Row, Card, CardHeader, CardBody, Button } from 'reactstrap';
import imgrepeat from '../../assets/img/seamless.png';
import '../../scss/tab.css';
import $ from 'jquery';
import SplitterLayout from 'react-splitter-layout';
import 'react-splitter-layout/lib/index.css';
import { Bar, Pie } from 'react-chartjs-2';
import { CustomTooltips } from '@coreui/coreui-plugin-chartjs-custom-tooltips';
import '../../scss/tab2.css';

class Planner extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const styleImg = {
      backgroundImage: `url(${imgrepeat})`
    };
    const pie1 = {
        labels: ['Ready','On Duty','Not Ready'],
        datasets: [{
          data: [75,15,2],
          backgroundColor: ['green','yellow','red']
        }],
    }
    const pie = {
        labels: ['No Issue','With Issue'],
        datasets: [{
          data: [14,1],
          backgroundColor: ['orange','red']
        }],
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
          data: [2,8,1],
          backgroundColor: ['orange','yellow','green']
        }],
        labels: ['Complete','On Duty','With Isuue'],
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
                            <Col lg="2" className="leftContent">
                                <Button className="btnLSMenu">
                                    <span>Truck Allocation</span>
                                </Button>
                                <Button className="btnLSMenu">
                                    <span>Truck Availability</span>
                                </Button>
                                <Button className="btnLSMenu">
                                    <span>List DO</span>
                                </Button>
                                <Button className="btnLSMenu">
                                    <span>Truck Assignment</span>
                                </Button>
                                <Button className="btn-facebook btn-brand btn-sm btnBackBottom" onClick={() => this.props.history.goBack()} style={{height: '30px'}}>
                                    <i className="icon-arrow-left8" style={{fontSize: '12px', marginTop: '0'}}></i><span>Back</span>
                                </Button>
                            </Col>
                            <Col lg="10">
                                <img src={'../../../assets/img/truck.png'} className="truck"/>
                                <div style={{width: '100%', display: 'flex', justifyContent: 'center', paddingLeft: '80px'}}>
                                    <Pie data={pie1} options={options} width={270} height={200}/>
                                </div>
                                <div style={{width: '100%', display: 'flex', justifyContent: 'center'}}>
                                    <span>40 Ft - Monday 20 Apr 2020 09:00 am</span>
                                </div>
                                <div class="warpper">
                                    <input class="radio" id="one" name="group" type="radio" defaultChecked />
                                    <input class="radio" id="two" name="group" type="radio" />
                                    <input class="radio" id="three" name="group" type="radio" />
                                    <div class="tabs">
                                        <label class="tab" id="one-tab" for="one" style={{backgroundColor: 'green'}}>40 Ft</label>
                                        <label class="tab" id="two-tab" for="two" style={{backgroundColor: '#FF9F48'}}>40 Ft</label>
                                        <label class="tab" id="three-tab" for="three" style={{backgroundColor: 'red'}}>40 Ft</label>
                                    </div>
                                    <div class="panels">
                                        <div class="panel" id="one-panel" style={{borderTop: '3px solid green'}}>
                                            <Button className="btnPanelMenu">
                                                <span>1. B 1234 TB</span>
                                            </Button>
                                            <Button className="btnPanelMenu">
                                                <span>2. B 5432 KH</span>
                                            </Button>
                                            <Button className="btnPanelMenu">
                                                <span>3. B 4567 HH</span>
                                            </Button>
                                            <Button className="btnPanelMenu">
                                                <span>4. B 7775 GT</span>
                                            </Button>
                                            <Button className="btnPanelMenu">
                                                <span>5. B 4425 NN</span>
                                            </Button>
                                        </div>
                                        <div class="panel" id="two-panel" style={{borderTop: '3px solid #FF9F48'}}>
                                            <Button className="btnPanelMenu">
                                                <span>1. B 8890 FGH</span>
                                            </Button>
                                        </div>
                                        <div class="panel" id="three-panel" style={{borderTop: '3px solid red'}}>
                                            <Button className="btnPanelMenu">
                                                <span>1. B 4455 KL</span>
                                            </Button>
                                        </div>
                                    </div>
                                </div>
                                <div className="enlarge">
                                    <i className="icon-enlarge6" style={{fontSize:' 20px'}}></i>
                                </div>
                            </Col>
                        </Row>
                    </div>
                    <SplitterLayout vertical percentage secondaryInitialSize={50}>
                        <div>
                            <div className="left-area" style={{marginLeft: '20px', marginTop:'20px'}}>
                                <input placeholder="Truck Tracking"/> 
                                <Button className="btn-facebook btn-sm" 
                                    style={{marginTop: '-4px', marginLeft: '0', borderRadius: '0', height: '27px'}}>                     
                                    <i className="icon-search4"></i>
                                </Button>
                            </div>
                            <div style={{float: 'right'}}>
                                <div style={{marginRight: '10px', marginTop: '-30px'}}>
                                    <Pie data={pie} height={200} width={250} options={options}/>
                                    <span style={{ fontSize: 'smaller'}}>40 Ft - Monday 20 April 2010 09.00 am</span>
                                </div>
                            </div>
                            <div className="enlarge">
                                <i className="icon-enlarge6" style={{fontSize:' 20px'}}></i>
                            </div>
                        </div>
                        <div>
                            <div className="left-area" style={{marginLeft: '20px', marginTop:'20px'}}>
                                <Button className="btn-facebook" style={{marginBottom:'10px'}}>Truck Monitoring</Button>
                                    <br></br>
                                    <input placeholder="Search by Vehicle"/>
                                <Button className="btn-facebook btn-sm" 
                                    style={{marginTop: '-4px', marginLeft: '0', borderRadius: '0', height: '27px'}}>                     
                                    <i className="icon-search4"></i>
                                </Button>
                            </div>
                            <div style={{float: 'right'}}>
                            <div style={{marginRight: '10px', marginTop: '-30px'}}>
                                <Pie data={pie2} height={200} width={250} options={options2}/>
                            </div>
                            <div style={{ fontSize: 'smaller'}}>
                                <span >NSI-4O Ft - Monday 20 April 2020 09.00 am</span>
                            </div> 
                            </div>  
                            <div style={{width: '55%', float: 'left', marginLeft:'20px'}}>
                            <Button className="btn-youtube btn-brand btn-sm" style={{height: '30px'}}>
                            {/* <Button className="btn-youtube btn-sm" style={{ width: '20%', padding: '6px' }}> */}
                            <span>Next</span>  <i className="icon-arrow-right8" style={{fontSize: '1zpx', marginTop: '0'}}></i>
                            </Button>
                            </div>
                            <div className="enlarge">
                                <i className="icon-enlarge6" style={{fontSize:' 20px'}}></i>
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
