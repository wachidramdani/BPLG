import React, { Component } from 'react';
import { Col, Row, Card, CardHeader, CardBody, Button, Modal, ModalHeader, ModalBody, UncontrolledTooltip,
  Form, FormGroup, Label, Input} from 'reactstrap';
import '../../scss/tab.css';
import Swal from 'sweetalert2';
import 'react-splitter-layout/lib/index.css';
import { Bar, Pie, Line } from 'react-chartjs-2';
import { CustomTooltips } from '@coreui/coreui-plugin-chartjs-custom-tooltips';
import '../../scss/tab2.css';
import Table2Edit from '../Commons/Table/Table2Edit';
import Table2EditRow from '../Commons/Table/Table2EditRow';
import Table2EditCheck from '../Commons/Table/Table2EditCheck';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import { subDays, addDays } from "date-fns";

class Monitoring extends Component {
  constructor(props) {
    super(props);
    this.state = {
        startDate: new Date(),
        modal: false,
        modal2: false,
        modal3: false,
        modal4: false,
        truck_no: '',
        truck_40: 3,
        truck_20: 1,
        do: [],
        datas: [
          {id: 1, md: '3', do: 'DO092012', dest: 'Cikarang', route: 'CGK-CKR', dt1: 'B 9070 IT', dt2: '2020-04-25 08:50', dt3: '40 Ft', dt4: 'IL2003123070', dt5: 'On Duty', dt6: 'Sartika', dt7: 'Normal'},
          {id: 2, md: '1', do: 'DO090291', dest: 'Majalengka', route: 'CGK-MJLK', dt1: 'B 9084 JU', dt2: '-', dt3: '20 Ft', dt4: 'IL2003123071', dt5: 'Waiting Scan Out', dt6: 'Reza', dt7: 'Normal'},
          {id: 3, md: '2', do: 'DO089308', dest: 'Cikarang', route: 'CGK-CKR', dt1: 'B 9064 UCC', dt2: '2020-04-25 04:20', dt3: '40 Ft', dt4: 'OTR2003123072', dt5: 'On Duty', dt6: 'Ravita', dt7: 'Priority'},
          {id: 4, md: '1', do: 'DO078920', dest: 'Bogor', route: 'MJLK-BGR', dt1: 'B 9063 UCC', dt2: '2020-04-24 10:30', dt3: '40 Ft', dt4: 'IL2003123073', dt5: 'On Duty', dt6: 'Aiirna', dt7: 'Normal'},
          {id: 5, md: '1', do: 'DO089789', dest: 'Majalengka', route: 'TJP-MJLK', dt1: 'B 9006 OJ', dt2: '-', dt3: '40 Ft', dt4: 'IL2003123074', dt5: 'Waiting Scan Out', dt6: 'Sugiarti', dt7: 'Urgent'},
          {id: 6, md: '3', do: 'DO098002', dest: 'Bandung', route: 'TJP-BDG', dt1: 'B 9007 OJ', dt2: '2020-04-24 09:10', dt3: '20 Ft', dt4: 'IU2003123075', dt5: 'On Duty', dt6: 'Dhea', dt7: 'Normal'},
          {id: 7, md: '3', do: 'DO082792', dest: 'Semarang', route: 'CGK-SMG', dt1: 'B 9008 OJ', dt2: '2020-04-24 09:00', dt3: '40 Ft', dt4: 'MP2003163759', dt5: 'Complete', dt6: 'Hidayat', dt7: 'Normal'},
          {id: 8, md: '2', do: 'DO091552', dest: 'Cikarang', route: 'BGR-CKR', dt1: 'B 9010 OJ', dt2: '2020-04-24 08:43', dt3: '40 Ft', dt4: 'MP2003163760', dt5: 'Complete', dt6: 'Adnan', dt7: 'Normal'},
          {id: 9, md: '3', do: 'DO090019', dest: 'Majalengka', route: 'TJP-MJLK', dt1: 'B 9018 TRO', dt2: '2020-04-24 08:30', dt3: '40 Ft', dt4: 'MP2003163765', dt5: 'Complete', dt6: 'Hidayat', dt7: 'Priority'},
          {id: 10, md: '1', do: 'DO082910', dest: 'Jakarta', route: 'CKR-JKT', dt1: 'B 9108 JU', dt2: '2020-04-24 08:10', dt3: '20 Ft', dt4: 'MP2003163768', dt5: 'Complete', dt6: 'Sartika', dt7: 'Normal'},
          {id: 11, md: '1', do: 'DO090018', dest: 'Majalengka', route: 'BGR-MJLK', dt1: 'B 9109 JU', dt2: '2020-04-24 06:05', dt3: '40 Ft', dt4: 'EB2003163757', dt5: 'Complete', dt6: 'Ravita', dt7: 'Normal'},
          {id: 12, md: '2', do: 'DO084672', dest: 'Cikarang', route: 'CGK-CKR', dt1: 'B 9110 JU', dt2: '2020-04-24 05:40', dt3: '40 Ft', dt4: 'EB2003163756', dt5: 'Complete', dt6: 'Adnan', dt7: 'Priority'},
        ],
    }
    this.toggleModal = this.toggleModal.bind(this);
  }

  toggleModal(e) {
    e.preventDefault(); 
    this.setState({ modal: !this.state.modal, }); 
  }

  render() {
    const columns = [
      { 
          dataField: 'dt1',
          text: 'Vehicle Number', 
          headerAlign: 'center',
          headerStyle: (colum, colIndex) => {
            return { width: '140px' };
          },
          align: 'center',
          editable: false,
      },
      { 
          dataField: 'md',
          text: 'Total DO',
          headerAlign: 'center',
          headerStyle: (colum, colIndex) => {
            return { width: '70px' };
          },
          align: 'center',
          editable: false
      },
      { 
          dataField: 'dt2',
          text: 'Departure', 
          headerAlign: 'center',
          headerStyle: (colum, colIndex) => {
            return { width: '140px' };
          },
          align: 'center',
          editable: false,
      },
      { 
        dataField: 'dest',
        text: 'Destination',
        headerAlign: 'center',
        headerStyle: (colum, colIndex) => {
          return { width: '110px' };
      },
        align: 'center',
        editable: false
      },
      { 
        dataField: 'route',
        text: 'Route',
        headerAlign: 'center',
        headerStyle: (colum, colIndex) => {
            return { width: '90px' };
        },
        align: 'center',
        editable: false
      },
      { 
          dataField: 'dt6', 
          text: 'Driver', 
          headerAlign: 'center',
          headerStyle: (colum, colIndex) => {
              return { width: '100px' };
          },
          align: 'left',
          editable: false
      },
      { 
          dataField: 'dt5', 
          text: 'Status', 
          headerAlign: 'center',
          headerStyle: (colum, colIndex) => {
              return { width: '120px' };
          },
          align: 'center',
          style: (cell, row, rowIndex, colIndex) => {
            if (row.dt5 === 'Complete') {
              return { backgroundColor: '#99CC99', fontWeight: 'bold' };
            }else if (row.dt5 === 'On Duty') {
              return { backgroundColor: '#9292F8', fontWeight: 'bold' }
            }else {
              return { backgroundColor: '#F8D492', fontWeight: 'bold' }
            }
          },
          editable: false
      },
      { 
          dataField: 'id', 
          text: 'Action', 
          headerAlign: 'center',
          headerStyle: (colum, colIndex) => {
              return { width: '100px' };
          },
          align: 'center',
          editable: false,
          isDummyField: true,
          formatter: (cellContent, row) => {
            return (
              <div>
                <span style={{background: '#9D0000', padding: '2px 4px', borderRadius: '2px', cursor: 'pointer', marginRight: '5px'}}>
                  <i className="icon-clipboard2" style={{fontSize: '12px', color: 'white'}}> </i>
                </span>
                <span style={{background: '#9D0000', padding: '2px 4px', borderRadius: '2px', cursor: 'pointer', marginRight: '5px'}}>
                  <i className="icon-location4" style={{fontSize: '12px', color: 'white'}}> </i>
                </span>
                <span style={{background: '#9D0000', padding: '2px 4px', borderRadius: '2px', cursor: 'pointer'}}>
                  <i className="icon-printer2" style={{fontSize: '12px', color: 'white'}}> </i>
                </span>
              </div>
            );
          },
          events: {
            onClick: (e, column, columnIndex, row, rowIndex) => {
              // this.toggleModal4(e);
            },
          }
      },
    ];

    const pie = {
      labels: ['Uncomplete', 'Complete'],
      datasets: [{
        data: [3,22],
        backgroundColor: ['#F8D492','#99CC99']
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
              style={{backgroundColor: '#fcfcfc', float: 'left', border: '1px solid #C8CED3', width:'50px', cursor: 'pointer', height: '40px', textAlign:'center', borderBottom: '2px solid black'}}>
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
              style={{backgroundColor: '#fcfcfc', cursor: 'pointer', float: 'left', border: '1px solid #C8CED3', width:'50px', height: '40px', textAlign:'center'}}>
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
          <Col lg="8" style={{marginBottom: '10px'}}>
            <Card style={{minHeight: "492px"}}>
              <CardHeader className="cardBgWhite">
                <i className="icon-truck"></i>Truck Monitoring (<b>{this.state.datas.length}</b>)
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
              <CardBody style={{backgroundColor: '#fff'}} className="card-body-nopad">
                <Table2Edit
                    tableHead={ columns }
                    datas={ this.state.datas }
                    action={ this.doChange }
                />
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
        </Row>
        <Modal isOpen={ this.state.modal } toggle={ this.toggleModal } className='modal-md modal-dialog modal-warning' backdrop="static">
            <ModalHeader toggle={ this.toggleModal }><i className="icon-question3"></i> Help</ModalHeader>
            <ModalBody>
                <h6>Status Truck Monitoring:</h6>
                <p>
                    <ul>
                        <li><b><i>Waiting Scan Out</i></b>, documents have been made but the vehicle has not yet departed.</li>
                        <li><b><i>On Duty</i></b>, vehicles on the way of delivering orders.</li>
                        <li><b><i>Complete</i></b>, the process is complete.</li>
                    </ul>
                </p>
            </ModalBody>
        </Modal>
      </div>
    );
  }
}

export default Monitoring;