import React, { Component } from 'react';
import { Col, Row, Card, CardHeader, CardBody, Button, Modal, ModalHeader, ModalBody, UncontrolledTooltip,
  Form, FormGroup, Label, Input} from 'reactstrap';
import imgrepeat from '../../assets/img/seamless.png';
import '../../scss/tab.css';
import $ from 'jquery';
import SplitterLayout from 'react-splitter-layout';
import 'react-splitter-layout/lib/index.css';
import { Bar, Pie } from 'react-chartjs-2';
import { CustomTooltips } from '@coreui/coreui-plugin-chartjs-custom-tooltips';
import '../../scss/tab2.css';

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
        modal: false,
        truck_no: '',
    }
    this.toggleModal = this.toggleModal.bind(this);
  }

  toggleModal(e) {
      e.preventDefault(); 
      this.setState({ modal: !this.state.modal, }); 
  }

  render() {
    const styleImg = {
    //   backgroundImage: `url(${imgrepeat})`
        backgroundColor: '#fff',
    };

    const pie = {
        labels: ['Emergency','Urgent', 'Important', 'Priority', 'Normal'],
        datasets: [{
          data: [0,1,0,3,8],
          backgroundColor: ['red','orange','yellow','blue','green']
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

    const bar = {
      labels: ['12:00', '16:00', '20:00', '23:59', 'H+1'],
      datasets: [
        {
          label: 'Estimated Truck Arrival',
          backgroundColor: 'rgba(255,99,132,0.2)',
          borderColor: 'rgba(255,99,132,1)',
          borderWidth: 1,
          hoverBackgroundColor: 'rgba(255,99,132,0.4)',
          hoverBorderColor: 'rgba(255,99,132,1)',
          data: [2, 1, 5, 3, 8],
        },
      ],
    };

    const optionsbar = {
      tooltips: {
        enabled: false,
        custom: CustomTooltips
      },
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero: true,
            min: 0
          }    
        }]
      },
      maintainAspectRatio: false
    }

    return (
      <div className="animated fadeIn">
        <Row>
          <Col xs="12" sm="12" md="12" style={{marginBottom: '20px', marginTop: '-15px', marginLeft: '-15px', textAlign: 'center'}}>
            <div onClick={() => this.props.history.push('/planner') } id="btn1"
              style={{backgroundColor: '#fcfcfc', float: 'left', border: '1px solid #C8CED3', width:'50px', cursor: 'pointer', height: '40px', textAlign:'center'}}>
              <i className="icon-clipboard5" style={{color: '#333', fontSize: '22px', lineHeight: '45px'}}></i>
              <UncontrolledTooltip placement="bottom" target="btn1">
                Buat Surat Muat
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
          <Col xs="12" sm="12" lg="7" style={{marginBottom: '10px'}}>
            <Card>
              <CardHeader className="cardBgWhite">
                <i className="icon-warning22"></i>Pending Job (12)
                <div className="card-header-actions">
                    {/*eslint-disable-next-line*/}
                    <Button
                    type="submit"
                    variant="contained"
                    className="btnReadMore"
                    style={{backgroundColor:"rgb(74,74,255)", color:"white"}}
                    onClick={(e) => this.toggleModal(e)}
                    >
                        <i className="icon-question3" style={{fontSize: '12px', marginTop: '2px'}}></i> Help
                    </Button>
                </div>
              </CardHeader>
              <CardBody style={styleImg} className="card-body-nopad">
                Test
              </CardBody>
            </Card>
          </Col>
          <Col xs="12" sm="12" lg="5">
            <Card className="mb10px">
              <CardHeader className="cardBgWhite">
                <i className="icon-chart"></i>Chart Display
                <div className="card-header-actions">
                    {/*eslint-disable-next-line*/}
                    <Button
                    type="submit"
                    variant="contained"
                    className="btnReadMore"
                    style={{backgroundColor:"rgb(74,74,255)", color:"white"}}
                    onClick={(e) => this.toggleModal(e)}
                    >
                        <i className="icon-question3" style={{fontSize: '12px', marginTop: '2px'}}></i> Help
                    </Button>
                </div>
              </CardHeader>
              <CardBody style={styleImg} className="card-body-nopadtop">
                <Row>
                <Col xs="12" sm="12" lg="6">
                  <div style={{display: 'flex', justifyContent: 'center', marginTop: '10px'}}>
                      <Pie data={pie} height={150} width={250} options={options}/>
                  </div>
                </Col>
                <Col xs="12" sm="12" lg="6">
                  <div style={{width: '100%', height: '100%'}}>
                    <Bar data={bar} options={optionsbar} />
                  </div>
                </Col>
                </Row>
              </CardBody>
            </Card>
            <Card className="mb10px">
              <CardHeader className="cardBgWhite">
                <i className="icon-truck"></i>Truck Available (40Ft : 3, 20Ft : 1)
                <div className="card-header-actions">
                  {/*eslint-disable-next-line*/}
                  <Button
                  type="submit"
                  variant="contained"
                  className="btnReadMore"
                  style={{backgroundColor:"rgb(74,74,255)", color:"white"}}
                  onClick={(e) => this.toggleModal(e)}
                  >
                      <i className="icon-question3" style={{fontSize: '12px', marginTop: '2px'}}></i> Help
                  </Button>
                </div>
              </CardHeader>
              <CardBody style={styleImg} className="card-body-nopad">
                Test
              </CardBody>
            </Card>
          </Col>
        </Row>
        <Modal isOpen={ this.state.modal } toggle={ this.toggleModal } className='modal-md modal-dialog modal-warning' backdrop="static">
            <ModalHeader toggle={ this.toggleModal }><i className="icon-question3"></i> Help</ModalHeader>
            <ModalBody>
                <h6>Pengertian Status:</h6>
                <p>
                    <ul>
                        <li><b><i>Free</i></b>, menunjukkan status truk dalam keadaan kosong, belum ada register DO</li>
                        <li><b><i>Incomplete</i></b>, menunjukkan status truk sudah memuat DO tetapi belum complete</li>
                        <li><b><i>Waiting Checkout</i></b>, menunjukkan status truk sudah complete dan menunggu pemberangkatan</li>
                    </ul>
                </p>
            </ModalBody>
        </Modal>
      </div>
    );
  }
}

export default Dashboard;
