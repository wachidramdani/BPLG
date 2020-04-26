import React, { Component } from 'react';
import { Col, Row, Card, CardHeader, CardBody, Button, Modal, ModalHeader, ModalBody, UncontrolledTooltip,
  Form, FormGroup, Label, Input} from 'reactstrap';
import '../../scss/tab.css';
import 'react-splitter-layout/lib/index.css';
import '../../scss/tab2.css';
import {Line, Pie} from 'react-chartjs-2';
import 'chartjs-plugin-labels';

class Dashboard extends Component {
  constructor(props) {
    super(props);
  }

  render() {

    const data3 = {
      labels: ['18', '19', '20', '21', '22', '23'],
      datasets: [
        {
          label: 'Total DO',
          fill: false,
          lineTension: 0.1,
          backgroundColor: 'rgba(146,146,248,.6)',
          borderColor: 'rgb(153,204,153)',
          borderCapStyle: 'butt',
          borderDash: [],
          borderDashOffset: 0.0,
          borderJoinStyle: 'miter',
          pointBorderColor: 'rgb(153,204,153)',
          pointBackgroundColor: '#fff',
          pointBorderWidth: 1,
          pointHoverRadius: 5,
          pointHoverBackgroundColor: 'rgb(153,204,153)',
          pointHoverBorderColor: 'rgba(146,146,248,.6)',
          pointHoverBorderWidth: 2,
          pointRadius: 1,
          pointHitRadius: 10,
          data: [35, 40, 33, 31, 45, 25, 40]
        },
      ]
    };

    const data = {
      labels: ['18', '19', '20', '21', '22', '23'],
      datasets: [
        {
          label: 'Total Outsource',
          fill: false,
          lineTension: 0.1,
          backgroundColor: 'rgba(74,255,160,.6)',
          borderColor: 'rgb(153,204,153)',
          borderCapStyle: 'butt',
          borderDash: [],
          borderDashOffset: 0.0,
          borderJoinStyle: 'miter',
          pointBorderColor: 'rgb(153,204,153)',
          pointBackgroundColor: '#fff',
          pointBorderWidth: 1,
          pointHoverRadius: 5,
          pointHoverBackgroundColor: 'rgb(153,204,153)',
          pointHoverBorderColor: 'rgba(74,255,160,.6)',
          pointHoverBorderWidth: 2,
          pointRadius: 1,
          pointHitRadius: 10,
          data: [0, 0, 2, 3, 0, 5, 0]
        }
      ]
    };

    const data2 = {
      labels: ['18', '19', '20', '21', '22', '23'],
      datasets: [
        {
          label: 'On Time',
          fill: false,
          lineTension: 0.1,
          backgroundColor: 'rgba(74,255,160,.6)',
          borderColor: 'rgb(153,204,153)',
          borderCapStyle: 'butt',
          borderDash: [],
          borderDashOffset: 0.0,
          borderJoinStyle: 'miter',
          pointBorderColor: 'rgb(153,204,153)',
          pointBackgroundColor: '#fff',
          pointBorderWidth: 1,
          pointHoverRadius: 5,
          pointHoverBackgroundColor: 'rgb(153,204,153)',
          pointHoverBorderColor: 'rgba(74,255,160,.6)',
          pointHoverBorderWidth: 2,
          pointRadius: 1,
          pointHitRadius: 10,
          data: [30, 32, 33, 6, 42, 15, 37]
        },
        {
          label: 'Late',
          fill: false,
          lineTension: 0.1,
          backgroundColor: 'rgba(255,72,72,.6)',
          borderColor: 'rgba(255,35,35,.8)',
          borderCapStyle: 'butt',
          borderDash: [],
          borderDashOffset: 0.0,
          borderJoinStyle: 'miter',
          pointBorderColor: 'rgba(255,35,35,.8)',
          pointBackgroundColor: '#fff',
          pointBorderWidth: 1,
          pointHoverRadius: 5,
          pointHoverBackgroundColor: 'rgba(255,35,35,.8)',
          pointHoverBorderColor: 'rgba(255,72,72,.6)',
          pointHoverBorderWidth: 2,
          pointRadius: 1,
          pointHitRadius: 10,
          data: [5, 8, 0, 25, 3, 10, 3]
        }
      ]
    };

    var options = {
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero: true,
            min: 0
          },
          scaleLabel: {
            display: true,
            labelString: 'Quantity'
          }    
        }],
        xAxes: [{
          scaleLabel: {
            display: true,
            labelString: 'Date'
          }
        }],
      },
      legend: {
        position: 'top',
        labels: {
          boxWidth: 10,
          fontSize: 10,
        }
      }
    };

    const pie = {
      labels: ['Uncomplete', 'Complete'],
      datasets: [{
        data: [3,22],
        backgroundColor: ['#F8D492','#99CC99']
      }],
    }

    const pie2 = {
      labels: ['Export', 'Import', 'Local'],
      datasets: [{
        data: [10,8,22],
        backgroundColor: ['#4AADFF','#49FF4A', '#FF9F48']
      }],
    }

    const optionspie = {
      maintainAspectRatio: false,
      responsive: false,
      legend: {
        position: 'top',
        labels: {
          boxWidth: 10,
          fontSize: 10,
        }
      },
      plugins: {
        labels: {
          render: 'value',
          fontSize: 12,
          fontColor: '#000',
        }
      }
    }

    return (
      <div className="animated fadeIn">
        <Row>
          <Col xs="12" sm="12" md="12" style={{marginBottom: '20px', marginTop: '-15px', marginLeft: '-15px', textAlign: 'center'}}>
            <div onClick={() => this.props.history.push('/planner') } id="btn1"
              style={{backgroundColor: '#fcfcfc', float: 'left', border: '1px solid #C8CED3', width:'50px', cursor: 'pointer', height: '40px', textAlign:'center'}}>
              <i className="icon-clipboard5" style={{color: '#333', fontSize: '22px', lineHeight: '45px'}}></i>
              <UncontrolledTooltip placement="bottom" target="btn1">
                Create Manifest
              </UncontrolledTooltip>
            </div>
            <div onClick={() => this.props.history.push('/monitoring') } id="btn2"
              style={{backgroundColor: '#fcfcfc', float: 'left', border: '1px solid #C8CED3', width:'50px', cursor: 'pointer', height: '40px', textAlign:'center'}}>
              <i className="icon-truck" style={{color: '#333', fontSize: '22px', lineHeight: '45px'}}></i>
              <UncontrolledTooltip placement="bottom" target="btn2">
                Truck Monitoring
              </UncontrolledTooltip>
            </div>
            <div onClick={() => this.props.history.push('/tracking') } id="btn3"
              style={{backgroundColor: '#fcfcfc', float: 'left', border: '1px solid #C8CED3', width:'50px', cursor: 'pointer', height: '40px', textAlign:'center'}}>
              <i className="icon-location4" style={{color: '#333', fontSize: '22px', lineHeight: '45px'}}></i>
              <UncontrolledTooltip placement="bottom" target="btn3">
                Truck Tracking
              </UncontrolledTooltip>
            </div>
            <div id="btn4" onClick={() => this.props.history.push('/dashboard') }
              style={{backgroundColor: '#fcfcfc', cursor: 'pointer', float: 'left', border: '1px solid #C8CED3', width:'50px', height: '40px', textAlign:'center', borderBottom: '2px solid black'}}>
              <i className="icon-display" style={{color: '#333', fontSize: '22px', lineHeight: '45px'}}></i>
              <UncontrolledTooltip placement="bottom" target="btn4">
                Dashboard
              </UncontrolledTooltip>
            </div>
            <div onClick={() => this.props.history.push('/help') } id="btn5"
              style={{backgroundColor: '#fcfcfc', float: 'left', border: '1px solid #C8CED3', cursor: 'pointer', width:'50px', height: '40px', textAlign:'center'}}>
              <i className="icon-question4" style={{color: '#333', fontSize: '22px', lineHeight: '45px'}}></i>
              <UncontrolledTooltip placement="bottom" target="btn5">
                Help
              </UncontrolledTooltip>
            </div>
          </Col>
          <Col lg="3">
            <Card className="mb10px" style={{minHeight: "100px"}}>
              <CardBody style={{backgroundColor: '#ff6961', minHeight: '115px', color: 'white'}} className="card-body-nopadtop">
                <div style={{width: '100%', height: '115px', textAlign: 'center'}}>
                  <div style={{fontSize:'42px', fontWeight: 'bold', lineHeight: '60px', paddingTop: '20px'}}>6,913</div>
                  <div style={{fontWeight: 'bold'}}>Total Packages</div>
                </div>
              </CardBody>
            </Card>
          </Col>
          <Col lg="3">
            <Card className="mb10px" style={{minHeight: "100px"}}>
              <CardBody style={{backgroundColor: '#ff6961', minHeight: '115px', color: 'white'}} className="card-body-nopadtop">
                <div style={{width: '100%', height: '115px', textAlign: 'center'}}>
                  <div style={{fontSize:'42px', fontWeight: 'bold', lineHeight: '60px', paddingTop: '20px'}}>12,083</div>
                  <div style={{fontWeight: 'bold'}}>Total Container</div>
                </div>
              </CardBody>
            </Card>
          </Col>
          <Col lg="3">
            <Card className="mb10px" style={{minHeight: "100px"}}>
              <CardBody style={{backgroundColor: '#ff6961', minHeight: '115px', color: 'white'}} className="card-body-nopadtop">
                <div style={{width: '100%', height: '115px', textAlign: 'center'}}>
                  <div style={{fontSize:'42px', fontWeight: 'bold', lineHeight: '60px', paddingTop: '20px'}}>259,261</div>
                  <div style={{fontWeight: 'bold'}}>Gross</div>
                </div>
              </CardBody>
            </Card>
          </Col>
          <Col lg="3">
            <Card className="mb10px" style={{minHeight: "100px"}}>
              <CardBody style={{backgroundColor: '#ff6961', minHeight: '115px', color: 'white'}} className="card-body-nopadtop">
                <div style={{width: '100%', height: '115px', textAlign: 'center'}}>
                  <div style={{fontSize:'42px', fontWeight: 'bold', lineHeight: '60px', paddingTop: '20px'}}>2,108</div>
                  <div style={{fontWeight: 'bold'}}>Total Job</div>
                </div>
              </CardBody>
            </Card>
          </Col>
          <Col lg="4">
            <Card className="mb10px" style={{minHeight: "218px"}}>
              <CardHeader className="cardBgWhite">
                <i className="icon-truck"></i>Local Truck Status
                <div className="card-header-actions">
                    <a className="card-header-action btn btn-close"><i className="icon-enlarge"></i></a>
                </div>
              </CardHeader>
              <CardBody style={{backgroundColor: '#fff', minHeight: '230px'}} className="card-body-nopadtop">
                <div style={{width: '100%', height: '115px', textAlign: 'center'}}>
                  <div style={{fontSize:'64px', fontWeight: 'bold', lineHeight: '40px', paddingTop: '20px'}}>81</div>
                  <div style={{fontWeight: 'bold', padding: '20px'}}>Total Truck</div>
                </div>
                <div style={{width: '100%'}}>
                  <Row>
                    <Col lg="4" style={{textAlign: 'center', border: '1px solid #c8ced3', height: '115px'}}>
                      <div style={{fontSize:'64px', color: 'blue', fontWeight: 'bold', lineHeight: '40px', paddingTop: '20px'}}>64</div>
                      <div style={{fontWeight: 'bold', color: 'blue', padding: '20px'}}>On Duty</div>
                    </Col>
                    <Col lg="4" style={{textAlign: 'center', border: '1px solid #c8ced3', height: '115px'}}>
                      <div style={{fontSize:'64px', color: 'green', fontWeight: 'bold', lineHeight: '40px', paddingTop: '20px'}}>0</div>
                      <div style={{fontWeight: 'bold', color: 'green', padding: '20px'}}>Available</div>
                    </Col>
                    <Col lg="4" style={{textAlign: 'center', border: '1px solid #c8ced3', height: '115px'}}>
                      <div style={{fontSize:'64px', color: 'red', fontWeight: 'bold', lineHeight: '40px', paddingTop: '20px'}}>17</div>
                      <div style={{fontWeight: 'bold', color: 'red', padding: '20px'}}>Repair</div>
                    </Col>
                  </Row>
                </div>
              </CardBody>
            </Card>
          </Col>
          <Col lg="4">
            <Card className="mb10px" style={{minHeight: "218px"}}>
              <CardHeader className="cardBgWhite">
                <i className="icon-clipboard5"></i>History DO
                <div className="card-header-actions">
                    <a className="card-header-action btn btn-close"><i className="icon-enlarge"></i></a>
                </div>
              </CardHeader>
              <CardBody style={{backgroundColor: '#fff'}}>
                <Line data={data3} options={options} />
              </CardBody>
            </Card>
          </Col>
          <Col lg="4">
            <Card className="mb10px" style={{minHeight: "218px"}}>
              <CardHeader className="cardBgWhite">
                <i className="icon-alarm"></i>Time Delivery
                <div className="card-header-actions">
                    <a className="card-header-action btn btn-close"><i className="icon-enlarge"></i></a>
                </div>
              </CardHeader>
              <CardBody style={{backgroundColor: '#fff'}}>
                <Line data={data2} options={options} />
              </CardBody>
            </Card>
          </Col>
          <Col lg="4">
            <Card className="mb10px" style={{minHeight: "218px"}}>
              <CardHeader className="cardBgWhite">
                <i className="icon-truck"></i>Outsource Truck 23-04-2020
                <div className="card-header-actions">
                    <a className="card-header-action btn btn-close"><i className="icon-enlarge"></i></a>
                </div>
              </CardHeader>
              <CardBody style={{backgroundColor: '#fff', minHeight: '230px'}} className="card-body-nopadtop">
                <div style={{width: '100%', height: '115px', textAlign: 'center'}}>
                  <div style={{fontSize:'64px', fontWeight: 'bold', lineHeight: '40px', paddingTop: '20px'}}>5</div>
                  <div style={{fontWeight: 'bold', padding: '20px'}}>Total Truck</div>
                </div>
                <div style={{width: '100%'}}>
                  <Row>
                    <Col lg="6" style={{textAlign: 'center', border: '1px solid #c8ced3', height: '115px'}}>
                      <div style={{fontSize:'64px', color: 'blue', fontWeight: 'bold', lineHeight: '40px', paddingTop: '20px'}}>4</div>
                      <div style={{fontWeight: 'bold', color: 'blue', padding: '20px'}}>On Duty</div>
                    </Col>
                    <Col lg="6" style={{textAlign: 'center', border: '1px solid #c8ced3', height: '115px'}}>
                      <div style={{fontSize:'64px', color: 'green', fontWeight: 'bold', lineHeight: '40px', paddingTop: '20px'}}>1</div>
                      <div style={{fontWeight: 'bold', color: 'green', padding: '20px'}}>Complete</div>
                    </Col>
                  </Row>
                </div>
              </CardBody>
            </Card>
          </Col>
          <Col lg="4">
            <Card className="mb10px" style={{minHeight: "218px"}}>
              <CardHeader className="cardBgWhite">
                <i className="icon-clipboard5"></i>History Outsource
                <div className="card-header-actions">
                    <a className="card-header-action btn btn-close"><i className="icon-enlarge"></i></a>
                </div>
              </CardHeader>
              <CardBody style={{backgroundColor: '#fff'}}>
                <Line data={data} options={options} />
              </CardBody>
            </Card>
          </Col>
          <Col lg="4">
            <Card className="mb10px" style={{minHeight: "218px"}}>
              <CardHeader className="cardBgWhite">
                <i className="icon-alarm"></i>Shipment Status 23-04-2020
                <div className="card-header-actions">
                    <a className="card-header-action btn btn-close"><i className="icon-enlarge"></i></a>
                </div>
              </CardHeader>
              <CardBody style={{backgroundColor: '#fff', display: 'flex', justifyContent: 'center'}}>
                <Pie data={pie} height={190} width={250} options={optionspie}/>
              </CardBody>
            </Card>
          </Col>
          <Col lg="4">
            <Card className="mb10px" style={{minHeight: "218px"}}>
              <CardHeader className="cardBgWhite">
                <i className="icon-direction"></i>Shipment Destination 23-04-2020
                <div className="card-header-actions">
                    <a className="card-header-action btn btn-close"><i className="icon-enlarge"></i></a>
                </div>
              </CardHeader>
              <CardBody style={{backgroundColor: '#fff', display: 'flex', justifyContent: 'center'}}>
                <Pie data={pie2} height={190} width={250} options={optionspie}/>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Dashboard;