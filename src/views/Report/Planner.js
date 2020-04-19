import React, { Component } from 'react';
import { Col, Row, Card, Label, Input, CardHeader, CardBody, Button, Table, Form, FormGroup, Collapse,Modal, ModalHeader, ModalBody } from 'reactstrap';
import imgrepeat from '../../assets/img/seamless.png';
import Dropdown from 'react-dropdown';
import '../../scss/tab.css';
import $ from 'jquery';
import SplitterLayout from 'react-splitter-layout';
import 'react-splitter-layout/lib/index.css';
import { Bar, Pie } from 'react-chartjs-2';
import { CustomTooltips } from '@coreui/coreui-plugin-chartjs-custom-tooltips';
import Search from '../Commons/Search'
import Table2Edit from '../Commons/Table/Table2Edit';
import BlockUi from 'react-block-ui';
import Swal from 'sweetalert2';
import CommonFormPopUp from '../Commons/Form/CommonFormPopUp';



class Planner extends Component {
  constructor(props) {
    super(props);
    this.state={
      collapseFilter: true,
      datas: [
        {id: 1, kd_truk:'B 123 ABC', nama:'Truck A', kapasitas:'40Ft'},
        {id: 2, kd_truk:'B 456 DEF', nama:'Truck B', kapasitas:'60Ft'},
    ],
    DoDatas: [
        {id: 1, kd_transaksi:'012345678', nama:'Truck A', client:'PT ABC', tanggal:'16-4-2019', alamat:'Jakarta'},
        {id: 2, kd_transaksi:'987288233', nama:'Truck B', client:'PT DEF', tanggal:'17-4-2019', alamat:'Bandung'},
    ],
    addModal: false,
    blocking_modal: false,
    active: true
    }

    this.toggleFilter = this.toggleFilter.bind(this);
    this.toggleAddModal = this.toggleAddModal.bind(this);

  }

  toggleFilter() { this.setState({ collapseFilter: !this.state.collapseFilter }); }

  toggleAddModal() { this.setState({ addModal: !this.state.addModal, }); }

  submitAction(e) {
    e.preventDefault();

    Swal.fire({
      title: 'Delivery Order',
      text: "Are you sure to continue?",
      icon: 'warning',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes!',
      confirmButtonColor: '#3085d6',
      showCancelButton: true,
    }).then((result) => {
      if (result.value) {
        alert('tes')
      }
    });
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

    const pie1 = {
      labels: ['Ready','On Duty','Not Ready'],
      datasets: [{
        data: [75,15,2],
        backgroundColor: ['green','yellow','red']
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

    const columns = [
      { 
        dataField: 'kd_truk',
        text: 'Kode Truk',
        headerAlign: 'center',
        align: 'center',
        editable: false,
        headerStyle: (colum, colIndex) => {
          return { width: '120px' };
        },
      },
      { 
        dataField: 'nama',
        text: 'Nama Truk',
        headerAlign: 'center',
        align: 'center',
        editable: false,
        headerStyle: (colum, colIndex) => {
          return { width: '150px' };
        },
      },
      { 
        dataField: 'kapasitas',
        text: 'Kapasitas',
        headerAlign: 'center',
        align: 'center',
        editable: false,
        headerStyle: (colum, colIndex) => {
          return { width: '100px' };
        },
      },
      { 
        text: 'Action',
        headerAlign: 'center',
        editable: false,
        headerStyle: (colum, colIndex) => {
          return { width: '100px' };
        },
        formatter: (cellContent, row) => {
          return (
            <Button className="btn-facebook" onClick={this.toggleAddModal}>
              <span>List DO</span>
            </Button>
          );
        }
      },
    ]

    const DoColumns = [
      { 
        dataField: 'kd_transaksi',
        text: 'Kode Transaksi',
        headerAlign: 'center',
        align: 'center',
        editable: false,
        headerStyle: (colum, colIndex) => {
          return { width: '90px' };
        },
      },
      { 
        dataField: 'nama',
        text: 'Nama Truk',
        headerAlign: 'center',
        align: 'center',
        editable: false,
        headerStyle: (colum, colIndex) => {
          return { width: '50px' };
        }   
      },
      { 
        dataField: 'client', 
        text: 'Client', 
        headerAlign: 'center',
        align: 'center',
        editable: false,
        headerStyle: (colum, colIndex) => {
          return { width: '80px' };
        }
      },
      { 
        dataField: 'tanggal', 
        text: 'Tanggal Pengiriman', 
        headerAlign: 'center',
        align: 'center',
        editable: false,
        headerStyle: (colum, colIndex) => {
          return { width: '80px' };
        }
      },
      { 
        dataField: 'alamat', 
        text: 'Alamat Pengiriman', 
        headerAlign: 'center',
        align: 'center',
        editable: false,
        headerStyle: (colum, colIndex) => {
          return { width: '80px' };
        }
      },
      { 
        text: 'Status', 
        headerAlign: 'center',
        align: 'center',
        editable: false,
        isDummyField: true,
        headerStyle: (colum, colIndex) => {
          return { width: '50px' };
        },
        formatter: (cell, row) => {
          return (
            <input type='checkbox' checked={ this.props.active }/>
          );
        }
      },
      { 
        text: 'Action', 
        headerAlign: 'center',
        align: 'center',
        editable: false,
        isDummyField: true,
        headerStyle: (colum, colIndex) => {
          return { width: '80px' };
        },
        formatter: (cellContent, row) => {
          return (
            <Button className="btn-facebook" onClick={this.submitAction}>
              <span>Submit</span>
            </Button>
          );
        }
      }   
    ]

    return (
      <div className="animated fadeIn">
        <Row>
          <Col xs="12" sm="12" lg="12">
            <Card className="card-accent-primary" style={{minHeight: "calc(100vh - 85px)" }}>
              <CardBody style={styleImg} className="card-body-nopad">
              <Row className="row-nomar">
                  <Col lg="2" className="leftContent">
                      <Button className="btn-facebook btn-brand btn-sm">
                        <i className="icon-plus-circle2"></i>
                        <span>Add Allocation</span>
                      </Button>
                      <br></br><br></br>
                      <Table2Edit 
                        caption='Truck Allocation / Apr-2020'
                        tableHead={ columns }
                        datas={ this.state.datas }
                      />
                  </Col>
                </Row>
                <Row className="row-nomar">
                  <Col lg="2" className="leftContent">
                      
                      <br></br><br></br>
                      <div style={{width: '100%', display: 'flex', justifyContent: 'center', paddingLeft: '80px'}}>
                          <Pie data={pie1} options={options} width={270} height={200}/>
                      </div>
                      <div style={{width: '100%', display: 'flex', justifyContent: 'center', fontSize:'smaller'}}>
                          <span>40 Ft - Monday 20 Apr 2020 09:00 am</span>
                      </div>
                  </Col>
                  {/* <Col lg="6" style={{padding:'90px', marginLeft:'70px', marginTop:'40px'}}>
                    <Table2Edit 
                      tableHead={ columns2 }
                      datas={ this.state.datas }
                    />
                    <Button className="btn-facebook btn-brand btn-sm">
                      <i className="icon-plus-circle2"></i>
                      <span>Create DO</span>
                    </Button>
                  </Col> */}
                </Row>
              </CardBody>
            </Card>
          </Col>
        </Row>
        <Modal style={{maxWidth: '1600px', width: '60%'}} isOpen={ this.state.addModal } toggle={ this.toggleAddModal } className='modal-dialog modal-info' backdrop="static">
          <BlockUi tag="div" blocking={this.state.blocking_modal}>
            <ModalHeader toggle={ this.toggleAddModal }> List Delivery Order</ModalHeader>
            <ModalBody>
              <Table2Edit 
                tableHead={ DoColumns }
                datas={ this.state.DoDatas }
              />
            </ModalBody>
          </BlockUi>
        </Modal>
      </div>
    );
  }
}

export default Planner;
