import React, { Component } from 'react';
import { Col, Row, Card, CardHeader, CardBody, Button, Modal, ModalHeader, ModalBody, UncontrolledTooltip,
  Form, FormGroup, Label, Input} from 'reactstrap';
import '../../scss/tab.css';
import Swal from 'sweetalert2';
import 'react-splitter-layout/lib/index.css';
import { Bar, Pie } from 'react-chartjs-2';
import { CustomTooltips } from '@coreui/coreui-plugin-chartjs-custom-tooltips';
import '../../scss/tab2.css';
import Table2Edit from '../Commons/Table/Table2Edit';
import Table2EditRow from '../Commons/Table/Table2EditRow';
import Table2EditCheck from '../Commons/Table/Table2EditCheck';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import { subDays, addDays } from "date-fns";

class Planner extends Component {
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
          {id: 1, md: 'MATIND', do: 'DO092012', dest: 'Cikarang', route: 'CGK-CKR', dt1: '2020-04-23', dt2: 'KPA2003163750', dt3: '40 Ft', dt4: 'IL2003123070', dt5: 'FCL', dt6: 'Sartika', dt7: 'Normal'},
          {id: 2, md: 'IPIIND', do: 'DO090291', dest: 'Majalengka', route: 'CGK-MJLK', dt1: '2020-04-23', dt2: 'KPA2003163751', dt3: '20 Ft', dt4: 'IL2003123071', dt5: 'FCL', dt6: 'Reza', dt7: 'Normal'},
          {id: 3, md: 'NATRAY', do: 'DO089308', dest: 'Cikarang', route: 'CGK-CKR', dt1: '2020-04-23', dt2: 'KPA2003163752', dt3: '40 Ft', dt4: 'OTR2003123072', dt5: 'LCL', dt6: 'Ravita', dt7: 'Priority'},
          {id: 4, md: 'SIBAL', do: 'DO078920', dest: 'Bogor', route: 'MJLK-BGR', dt1: '2020-04-23', dt2: 'KPA2003163753', dt3: '40 Ft', dt4: 'IL2003123073', dt5: 'FCL', dt6: 'Aiirna', dt7: 'Normal'},
          {id: 5, md: 'API', do: 'DO089789', dest: 'Majalengka', route: 'TJP-MJLK', dt1: '2020-04-24', dt2: 'KPA2003163754', dt3: '40 Ft', dt4: 'IL2003123074', dt5: 'LCL', dt6: 'Sugiarti', dt7: 'Urgent'},
          {id: 6, md: 'PIL', do: 'DO098002', dest: 'Bandung', route: 'TJP-BDG', dt1: '2020-04-24', dt2: 'KPA2003163758', dt3: '20 Ft', dt4: 'IU2003123075', dt5: 'FCL', dt6: 'Dhea', dt7: 'Normal'},
          {id: 7, md: 'YAMATO', do: 'DO082792', dest: 'Semarang', route: 'CGK-SMG', dt1: '2020-04-24', dt2: 'MP2003163759', dt3: '40 Ft', dt4: 'MP2003163759', dt5: 'FCL', dt6: 'Hidayat', dt7: 'Normal'},
          {id: 8, md: 'INDARO', do: 'DO091552', dest: 'Cikarang', route: 'BGR-CKR', dt1: '2020-04-24', dt2: 'MP2003163760', dt3: '40 Ft', dt4: 'MP2003163760', dt5: 'FCL', dt6: 'Adnan', dt7: 'Normal'},
          {id: 9, md: 'TAKIND', do: 'DO090019', dest: 'Majalengka', route: 'TJP-MJLK', dt1: '2020-04-24', dt2: 'MP2003163765', dt3: '40 Ft', dt4: 'MP2003163765', dt5: 'LCL', dt6: 'Hidayat', dt7: 'Priority'},
          {id: 10, md: 'NUTINDSE', do: 'DO082910', dest: 'Jakarta', route: 'CKR-JKT', dt1: '2020-04-25', dt2: 'MP2003163768', dt3: '20 Ft', dt4: 'MP2003163768', dt5: 'FCL', dt6: 'Sartika', dt7: 'Normal'},
          {id: 11, md: 'SINKO', do: 'DO090018', dest: 'Majalengka', route: 'BGR-MJLK', dt1: '2020-04-25', dt2: 'EB2003163757', dt3: '40 Ft', dt4: 'EB2003163757', dt5: 'FCL', dt6: 'Ravita', dt7: 'Normal'},
          {id: 12, md: 'NIPINDCO', do: 'DO084672', dest: 'Cikarang', route: 'CGK-CKR', dt1: '2020-04-25', dt2: 'EB2003163756', dt3: '40 Ft', dt4: 'EB2003163756', dt5: 'LCL', dt6: 'Adnan', dt7: 'Priority'},
        ],
        datas2: [
          {id: 1, md: 'KPA 1', dt1: 'B 9417 TCN', dt2: '2020', dt3: '40 Ft', dt4: '', dt5: 'Mitshubisi'},
          {id: 2, md: 'KPA 1', dt1: 'B 3621 USH', dt2: '2020', dt3: '20 Ft', dt4: '', dt5: 'Isuzu'},
          {id: 3, md: 'KPA 1', dt1: 'B 9420 TCN', dt2: '2020', dt3: '40 Ft', dt4: '', dt5: 'Mitshubisi'},
          {id: 4, md: 'KPA 2', dt1: 'B 9491 TCN', dt2: '2020', dt3: '40 Ft', dt4: '', dt5: 'Mitshubisi'},
        ],
        datas3: [
          {id: 1, md: 'DO1202978', dt1: 'Admin / 2020-04-20 07:00', dt2: '2020-04-20 11:15', dt3: '40 Ft', dt4: '', dt5: '4952'},
          {id: 2, md: 'DO1029845', dt1: 'Admin / 2020-04-20 07:10', dt2: '2020-04-20 13:45', dt3: '20 Ft', dt4: '', dt5: '618'},
          {id: 3, md: 'DO2901920', dt1: 'Admin / 2020-04-20 07:23', dt2: '2020-04-20 15:00', dt3: '40 Ft', dt4: '', dt5: '5077'},
          {id: 4, md: 'DO2900134', dt1: 'Admin / 2020-04-20 07:56', dt2: '2020-04-20 19:20', dt3: '40 Ft', dt4: '', dt5: '3916'},
        ],
    }
    this.toggleModal = this.toggleModal.bind(this);
    this.toggleModal2 = this.toggleModal2.bind(this);
    this.toggleModal2x = this.toggleModal2x.bind(this);
    this.toggleModal3 = this.toggleModal3.bind(this);
    this.toggleModal4 = this.toggleModal4.bind(this);
    this.onSelectTruck = this.onSelectTruck.bind(this);
    this.doChange = this.doChange.bind(this);
    this.submitSuratJalan = this.submitSuratJalan.bind(this);
  }

  setStartDate = date => {
    this.setState({
      startDate: date
    });
  };

  toggleModal(e) {
      e.preventDefault(); 
      this.setState({ modal: !this.state.modal, }); 
  }

  toggleModal2(e) {
    e.preventDefault(); 
    this.setState({ modal2: !this.state.modal2, datas3: this.state.do}); 
  }

  toggleModal2x(e, row) {
    e.preventDefault(); 
    this.setState({modal2: true, truck_no: row.md}); 
  }

  toggleModal3(e) {
    e.preventDefault(); 
    console.log(this.state.do, 'do');
    if(this.state.truck_no !== '' && this.state.do.length > 0) {
      this.setState({ modal3: !this.state.modal3, datas3: this.state.do}); 
    } else {
      Swal.fire({  
        title: 'Warning',  
        icon: 'warning',
        text: 'Please Select DO & Truck.',  
      });
    }
  }

  toggleModal4(e) {
    e.preventDefault(); 
    this.setState({ modal4: !this.state.modal4}); 
  }

  doChange = (row, isSelect) => {
    if(isSelect === true) {
      this.setState({ do: this.state.do.concat(row) });
    }else {
      var array = this.state.do;
      var index = array.findIndex(x => x.dt4 === row.dt4);
      if (index !== -1) {
        array.splice(index, 1);
        this.setState({do: array});
      }
    }
  }

  onSelectTruck = (row) => {
    this.setState({truck_no: row.dt1});
  }

  submitSuratJalan = (e) => {
    e.preventDefault();
    var array = this.state.do;
    var mainarr = this.state.datas;
    var truckarr = this.state.datas2;
    var empty = [];
    const trc = this.state.datas2.find(el => el.dt1 == this.state.truck_no);
    if(trc.dt3 === '40 Ft') {
      this.setState({truck_40: this.state.truck_40-1});
    }else {
      this.setState({truck_20: this.state.truck_20-1});
    }
    for (let i = 0; i < array.length; i++) {
      var index = mainarr.findIndex(x => x.dt4 === array[i].dt4);
      if (index !== -1) {
        mainarr.splice(index, 1);   
      }
    }
    var ind = truckarr.findIndex(x => x.dt1 === this.state.truck_no);
    if (ind !== -1) {
      truckarr.splice(ind, 1); 
    }
    this.setState({datas: mainarr, datas2: truckarr, modal3: false, do: empty});
    Swal.fire({  
      title: 'Success',  
      icon: 'success',
      text: 'Create Manifest Success!',  
    });
  }

  render() {
    const styleImg = {
    //   backgroundImage: `url(${imgrepeat})`
        backgroundColor: '#fff',
    };

    const columns = [
      { 
          dataField: 'dt1',
          text: 'Date TO', 
          headerAlign: 'center',
          headerStyle: (colum, colIndex) => {
            return { width: '140px' };
          },
          align: 'center',
          style: (cell, row, rowIndex, colIndex) => {
            if (row.dt7 === 'Normal') {
              return { backgroundColor: '#99CC99', fontWeight: 'bold' };
            }else if (row.dt7 === 'Priority') {
              return { backgroundColor: '#9292F8', fontWeight: 'bold' }
            }else {
              return { backgroundColor: '#F8D492', fontWeight: 'bold' }
            }
          },
          editable: false,
      },
      { 
          dataField: 'md',
          text: 'Customer',
          headerAlign: 'center',
          align: 'left',
          editable: false
      },
      { 
          dataField: 'dt2',
          text: 'KPA ID', 
          headerAlign: 'center',
          headerStyle: (colum, colIndex) => {
            return { width: '140px' };
          },
          align: 'left',
          editable: false,
      },
      { 
          dataField: 'dt4', 
          text: 'Job ID', 
          headerAlign: 'center',
          headerStyle: (colum, colIndex) => {
              return { width: '140px' };
          },
          align: 'left',
          editable: false
      },
      // { 
      //     dataField: 'dt3', 
      //     text: 'Size', 
      //     headerAlign: 'center',
      //     headerStyle: (colum, colIndex) => {
      //         return { width: '70px' };
      //     },
      //     align: 'center',
      //     editable: false
      // },
      { 
          dataField: 'dt5', 
          text: 'Type', 
          headerAlign: 'center',
          headerStyle: (colum, colIndex) => {
              return { width: '70px' };
          },
          align: 'center',
          editable: false
      },
      // { 
      //     dataField: 'dt6', 
      //     text: 'PIC', 
      //     headerAlign: 'center',
      //     headerStyle: (colum, colIndex) => {
      //         return { width: '100px' };
      //     },
      //     align: 'left',
      //     editable: false
      // },
      { 
          dataField: 'id', 
          text: 'Detail', 
          headerAlign: 'center',
          headerStyle: (colum, colIndex) => {
              return { width: '60px' };
          },
          align: 'center',
          editable: false,
          isDummyField: true,
          formatter: (cellContent, row) => {
            return (
              <span style={{background: '#9D0000', padding: '2px 4px', borderRadius: '2px', cursor: 'pointer'}}>
                <i className="icon-clipboard2" style={{fontSize: '12px', color: 'white'}}> </i>
              </span>
            );
          },
          events: {
            onClick: (e, column, columnIndex, row, rowIndex) => {
              this.toggleModal4(e);
            },
          }
      },
    ];
    
    const columns2 = [
        { 
            dataField: 'dt1',
            text: 'Vehicle Number', 
            headerAlign: 'center',
            headerStyle: (colum, colIndex) => {
                return { width: '120px' };
            },
            align: 'center',
            editable: false
        },
        { 
            dataField: 'dt2', 
            text: 'Year', 
            headerAlign: 'center',
            headerStyle: (colum, colIndex) => {
                return { width: '60px' };
            },
            align: 'center',
            editable: false
        },
        { 
            dataField: 'dt5', 
            text: 'Brand', 
            headerAlign: 'center',
            headerStyle: (colum, colIndex) => {
                return { width: '120px' };
            },
            align: 'center',
            editable: false
        },
        { 
            dataField: 'dt3', 
            text: 'Size', 
            headerAlign: 'center',
            align: 'center',
            editable: false
        },
        { 
            dataField: 'md',
            text: 'Location',
            headerAlign: 'center',
            headerStyle: (colum, colIndex) => {
                return { width: '90px' };
            },
            align: 'center',
            editable: false
        },
        { 
            dataField: 'dt4', 
            text: 'Track', 
            headerAlign: 'center',
            align: 'center',
            editable: false,
            isDummyField: true,
            formatter: (cellContent, row) => {
              return (
                <span style={{background: '#9D0000', padding: '2px 4px', borderRadius: '2px', cursor: 'pointer'}}>
                  <i className="icon-location4" style={{fontSize: '12px', color: 'white'}}> </i>
                </span>
              );
            },
            events: {
              onClick: (e, column, columnIndex, row, rowIndex) => {
                alert('show MAP '+row.dt1)
              },
            }
        },
    ];
    const columns3 = [
        { 
            dataField: 'do',
            text: 'DO',
            headerAlign: 'center',
            headerStyle: (colum, colIndex) => {
                return { width: '120px' };
            },
            align: 'center',
            editable: false
        },
        { 
            dataField: 'md',
            text: 'Customer', 
            headerAlign: 'center',
            align: 'left',
            editable: false
        },
        { 
          dataField: 'dest',
          text: 'Destination',
          headerAlign: 'center',
          headerStyle: (colum, colIndex) => {
              return { width: '90px' };
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
    ];

    const pie = {
        labels: ['Emergency','Urgent', 'Important', 'Priority', 'Normal'],
        datasets: [{
          data: [0,1,0,3,8],
          backgroundColor: ['red','#F8D492','yellow','#9292F8','#99CC99']
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

    const ExampleCustomInput = ({ value, onClick }) => (
      <button className="example-custom-input" onClick={onClick}>
        {value}
      </button>
    );

    return (
      <div className="animated fadeIn">
        <Row>
          <Col xs="12" sm="12" md="12" style={{marginBottom: '20px', marginTop: '-15px', marginLeft: '-15px', textAlign: 'center'}}>
            <div onClick={() => this.props.history.push('/planner') } id="btn1"
              style={{backgroundColor: '#fcfcfc', float: 'left', border: '1px solid #C8CED3', width:'50px', cursor: 'pointer', height: '40px', textAlign:'center', borderBottom: '2px solid black'}}>
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
          <Col xs="12" sm="12" lg="7" style={{marginBottom: '10px'}}>
            <Card style={{minHeight: "492px"}}>
              <CardHeader className="cardBgWhite">
                <i className="icon-warning22"></i>List TO (<b>{this.state.datas.length}</b>)
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
                <Table2EditCheck 
                    tableHead={ columns }
                    datas={ this.state.datas }
                    action={ this.doChange }
                />
              </CardBody>
            </Card>
          </Col>
          <Col xs="12" sm="12" lg="5">
            <Card className="mb10px" style={{minHeight: "218px"}}>
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
            <Card className="mb10px" style={{minHeight: "218px"}}>
              <CardHeader className="cardBgWhite">
                <i className="icon-truck"></i>Truck Available (40Ft : <b>{this.state.truck_40}</b>, 20Ft : <b>{this.state.truck_20}</b>)
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
                <Table2EditRow 
                    tableHead={ columns2 }
                    datas={ this.state.datas2 }
                    action={ this.onSelectTruck }
                />
              </CardBody>
            </Card>
            <Button className="btn-css3 btnMuat" onClick={(e) => this.toggleModal3(e)}>
              <i className="icon-file-check" style={{marginRight: '10px'}}></i><span>Create Manifest</span>
            </Button> 
          </Col>
        </Row>
        <Modal isOpen={ this.state.modal } toggle={ this.toggleModal } className='modal-md modal-dialog modal-warning' backdrop="static">
            <ModalHeader toggle={ this.toggleModal }><i className="icon-question3"></i> Help</ModalHeader>
            <ModalBody>
                <h6>Lorem ipsum dolor sit amet:</h6>
                <p>
                    <ul>
                        <li><b><i>First</i></b>, Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat</li>
                        <li><b><i>Second</i></b>, Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat</li>
                        <li><b><i>Third</i></b>, Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat</li>
                    </ul>
                </p>
            </ModalBody>
        </Modal>
        <Modal isOpen={ this.state.modal2 } toggle={ this.toggleModal2 } className='modal-md modal-dialog modal-primary' backdrop="static">
            <ModalHeader toggle={ this.toggleModal2 }><i className="icon-clipboard6"></i> Daftar DO ({this.state.do.length})</ModalHeader>
            <ModalBody className="card-body-nopad">
                <Table2Edit 
                    tableHead={ columns3 }
                    datas={ this.state.datas3 }
                />
            </ModalBody>
        </Modal>
        <Modal isOpen={ this.state.modal3 } toggle={ this.toggleModal3 } className='modal-md modal-dialog modal-primary' backdrop="static">
          <ModalHeader toggle={ this.toggleModal3 }><i className="icon-file-check"></i> Create Manifest</ModalHeader>
            <ModalBody>
              <Form>
                <FormGroup row>
                  <Label for="truck" sm={4}>Vehicle Number</Label>
                  <Col sm={5}><Input type="text" style={{borderRadius: '0'}} name="no_polisi" id="no_polisi" value={this.state.truck_no} disabled/></Col>
                  <Label for="truck" sm={3}>
                    <span className="doType">
                      {
                        (() => {
                            if(this.state.do.length > 1) {
                              return 'Multiple DO'
                            }else {
                              return 'Single DO'
                            }
                        })()
                      }
                    </span>
                  </Label>
                </FormGroup>
              </Form>
              <Table2Edit 
                  tableHead={ columns3 }
                  datas={ this.state.datas3 }
              />
              <div style={{display: 'flex', justifyContent: 'flex-end', marginBottom: '15px'}}>
                <label style={{lineHeight: '25px', marginRight: '5px'}}>Transfer Date</label>
                <DatePicker
                  selected={this.state.startDate}
                  onChange={date => this.setStartDate(date)}
                  dateFormat="dd/MM/yyyy"
                  minDate={subDays(new Date(), 0)}
                  customInput={<ExampleCustomInput />}
                  placeholderText="Select a date after 0 days ago"
                />
              </div>
              <Button className="btn-vimeo btnExec" onClick={(e) => this.submitSuratJalan(e)} >
                <i className="icon-checkmark2" style={{marginRight: '2px', marginTop: '2px'}}></i> Submit
              </Button>
              <Button className="btn-github btnExec" onClick={this.toggleModal3}>
                <i className="icon-arrow-left8" style={{marginRight: '2px', marginTop: '2px', fontSize: '13px'}}></i> Back
              </Button>
            </ModalBody>
        </Modal>
        <Modal isOpen={ this.state.modal4 } toggle={ this.toggleModal4 } className='modal-md modal-dialog modal-primary' backdrop="static">
            <ModalHeader toggle={ this.toggleModal4 }><i className="icon-clipboard6"></i> Detail DO</ModalHeader>
            <ModalBody>
              <Form>
                <FormGroup>
                  <Label >Status</Label><br></br>
                  <Label style={{padding: '15px', marginTop:'-25px'}}><b><i>Pending</i></b></Label>
                </FormGroup>
                <FormGroup style={{marginTop: '-30px'}} row>
                  <Label for="tgl" sm={4}>Date TO</Label>
                  <Col sm={8}>
                    <Label sm={12}><b>20 April 2020</b></Label>
                  </Col>
                </FormGroup>
                <FormGroup style={{marginTop: '-20px'}} row>
                  <Label for="job_bpp" sm={4}>Job KPA</Label>
                  <Col sm={8}>
                    <Label sm={12}><b>KPA2003163750</b></Label>
                  </Col>
                </FormGroup>
                <FormGroup style={{marginTop: '-20px'}} row>
                  <Label for="job_bpp" sm={4}>Job BPP</Label>
                  <Col sm={8}>
                    <Label sm={12}><b>IL2003123070</b></Label>
                  </Col>
                </FormGroup>
                <FormGroup style={{marginTop: '-20px'}} row>
                  <Label for="size" sm={4}>Size</Label>
                  <Col sm={8}>
                    <Label sm={12}><b>40 Ft</b></Label>
                  </Col>
                </FormGroup>
                <FormGroup style={{marginTop: '-20px'}} row>
                  <Label for="cust" sm={5}>Customer</Label>
                </FormGroup>
                <FormGroup style={{marginTop: '-20px'}} row>
                  <Col sm={4}>
                    <Label sm={12}><b>Name</b></Label>
                  </Col>
                  <Col sm={4}>
                    <Label sm={12}><b>Phone</b></Label>
                  </Col>
                  <Col sm={4}>
                    <Label sm={12}><b>Address</b></Label>
                  </Col>
                </FormGroup>
                <FormGroup style={{marginTop: '-20px'}} row>
                  <Col sm={4}>
                    <Label sm={12}>Mattel Indonesia, PT</Label>
                  </Col>
                  <Col sm={4}>
                    <Label sm={12}>021-12345678</Label>
                  </Col>
                  <Col sm={4}>
                    <Label sm={12}>Cikarang, Indonesia</Label>
                  </Col>
                </FormGroup>
                <FormGroup style={{marginTop: '-10px'}} row>
                <Label for="inv" sm={4}>Invoice</Label>
                  <Col sm={8}>
                    <Label sm={12}><b>INV/20200420/XX/IV/5510</b></Label>
                  </Col>
                </FormGroup>
                <FormGroup style={{marginTop: '-20px'}} row>
                  <Col sm={4}>
                    <Label sm={12}><b>Date</b></Label>
                  </Col>
                  <Col sm={4}>
                    <Label sm={12}><b>Idr</b></Label>
                  </Col>
                  <Col sm={4}>
                    <Label sm={12}><b>Status</b></Label>
                  </Col>
                </FormGroup>
                <FormGroup style={{marginTop: '-20px'}} row>
                  <Col sm={4}>
                    <Label sm={12}>20-4-2020</Label>
                  </Col>
                  <Col sm={4}>
                    <Label sm={12}>2.000.000</Label>
                  </Col>
                  <Col sm={4}>
                    <Label sm={12}>Paid Off</Label>
                  </Col>
                </FormGroup>
              </Form>
            </ModalBody>
        </Modal>
      </div>
    );
  }
}

export default Planner;
