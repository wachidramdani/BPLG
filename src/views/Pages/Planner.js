import React, { Component } from 'react';
import { Col, Row, Card, CardHeader, CardBody, Button, Modal, ModalHeader, ModalBody } from 'reactstrap';
import imgrepeat from '../../assets/img/seamless.png';
import '../../scss/tab.css';
import $ from 'jquery';
import SplitterLayout from 'react-splitter-layout';
import 'react-splitter-layout/lib/index.css';
import { Bar, Pie } from 'react-chartjs-2';
import { CustomTooltips } from '@coreui/coreui-plugin-chartjs-custom-tooltips';
import '../../scss/tab2.css';
import Table2Edit from '../Commons/Table/Table2Edit';

class Planner extends Component {
  constructor(props) {
    super(props);
    this.state = {
        modal: false,
        modal2: false,
        truck_no: '',
        datas: [
            {id: 1, md: 'B 2526 FG', dt1: 'Gudang Utara', dt2: 'Waiting Checkout', dt3: '40 Ft', dt4: '', dt5: '4952'},
            {id: 2, md: 'B 3867 PLS', dt1: 'Gudang Utara', dt2: 'Free', dt3: '20 Ft', dt4: '', dt5: '618'},
            {id: 3, md: 'B 7869 AG', dt1: 'Gudang Selatan', dt2: 'Free', dt3: '40 Ft', dt4: '', dt5: '5077'},
            {id: 4, md: 'B 9820 HH', dt1: 'Gudang Utara', dt2: 'Incomplete', dt3: '40 Ft', dt4: '', dt5: '3916'},
            {id: 5, md: 'B 5746 AN', dt1: 'Gudang Selatan', dt2: 'Incomplete', dt3: '40 Ft', dt4: '', dt5: '3916'},
            {id: 6, md: 'B 8492 LL', dt1: 'Gudang Selatan', dt2: 'Free', dt3: '20 Ft', dt4: '', dt5: '3916'},
            {id: 7, md: 'B 7899 AT', dt1: 'Gudang Utara', dt2: 'Free', dt3: '40 Ft', dt4: '', dt5: '3916'},
            {id: 8, md: 'B 9027 BKN', dt1: 'Gudang Utara', dt2: 'Free', dt3: '40 Ft', dt4: '', dt5: '3916'},
            {id: 9, md: 'B 5029 ED', dt1: 'Gudang Utara', dt2: 'Incomplete', dt3: '40 Ft', dt4: '', dt5: '3916'},
            {id: 10, md: 'B 4949 LM', dt1: 'Gudang Selatan', dt2: 'Free', dt3: '20 Ft', dt4: '', dt5: '3916'},
            {id: 11, md: 'B 8093 OL', dt1: 'Gudang Selatan', dt2: 'Waiting Checkout', dt3: '40 Ft', dt4: '', dt5: '3916'},
            {id: 12, md: 'B 7675 GG', dt1: 'Gudang Selatan', dt2: 'Free', dt3: '40 Ft', dt4: '', dt5: '3916'},
        ],
        datas2: [
            {id: 1, md: 'B 9910 PL', dt1: 'Gudang Utara', dt2: '2020-04-20 11:15', dt3: '40 Ft', dt4: '', dt5: '4952'},
            {id: 2, md: 'B 2244 NG', dt1: 'Gudang Utara', dt2: '2020-04-20 13:45', dt3: '20 Ft', dt4: '', dt5: '618'},
            {id: 3, md: 'B 1234 HNN', dt1: 'Gudang Selatan', dt2: '2020-04-20 15:00', dt3: '40 Ft', dt4: '', dt5: '5077'},
            {id: 4, md: 'B 5432 L', dt1: 'Gudang Utara', dt2: '2020-04-20 19:20', dt3: '40 Ft', dt4: '', dt5: '3916'},
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
  }

  toggleModal(e) {
      e.preventDefault(); 
      this.setState({ modal: !this.state.modal, }); 
  }

  toggleModal2(e) {
    e.preventDefault(); 
    this.setState({ modal2: !this.state.modal2}); 
  }

  toggleModal2x(e, row) {
    e.preventDefault(); 
    this.setState({modal2: true, truck_no: row.md}); 
  }

  render() {
    const styleImg = {
    //   backgroundImage: `url(${imgrepeat})`
        backgroundColor: '#fff',
    };
    const columns = [
        { 
            dataField: 'id',
            text: 'No',
            headerAlign: 'center',
            headerStyle: (colum, colIndex) => {
                return { width: '60px' };
            },
            align: 'center',
            editable: false
        },
        { 
            dataField: 'dt1',
            text: 'Posisi', 
            headerAlign: 'center',
            align: 'left',
            editable: false
        },
        { 
            dataField: 'md',
            text: 'ID',
            headerAlign: 'center',
            headerStyle: (colum, colIndex) => {
                return { width: '110px' };
            },
            align: 'left',
            editable: false
        },
        { 
            dataField: 'dt3', 
            text: 'Size', 
            headerAlign: 'center',
            headerStyle: (colum, colIndex) => {
                return { width: '90px' };
            },
            align: 'center',
            editable: false
        },
        { 
            dataField: 'dt2', 
            text: 'Status', 
            headerAlign: 'center',
            headerStyle: (colum, colIndex) => {
                return { width: '160px' };
            },
            align: 'center',
            style: (cell, row, rowIndex, colIndex) => {
                if (row.dt2 === 'Waiting Checkout') {
                  return { backgroundColor: 'orange', fontWeight: 'bold' };
                }else if(row.dt2 === 'Incomplete') {
                  return { backgroundColor: '#FFFDB3', fontWeight: 'bold' };
                }else {
                  return { backgroundColor: '#0EAF18', fontWeight: 'bold' };
                }
            },
            editable: false
        },
        { 
            dataField: 'dt4', 
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
                this.toggleModal2x(e, row);
              },
            }
        },
    ];
    const columns2 = [
        { 
            dataField: 'md',
            text: 'ID',
            headerAlign: 'center',
            headerStyle: (colum, colIndex) => {
                return { width: '90px' };
            },
            align: 'left',
            editable: false
        },
        { 
            dataField: 'dt1',
            text: 'Tujuan', 
            headerAlign: 'center',
            headerStyle: (colum, colIndex) => {
                return { width: '110px' };
            },
            align: 'left',
            editable: false
        },
        { 
            dataField: 'dt2', 
            text: 'Tanggal', 
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
                alert('show MAP '+row.md)
              },
            }
        },
    ];
    const columns3 = [
        { 
            dataField: 'id',
            text: 'No',
            headerAlign: 'center',
            headerStyle: (colum, colIndex) => {
                return { width: '60px' };
            },
            align: 'center',
            editable: false
        },
        { 
            dataField: 'md',
            text: 'DO',
            headerAlign: 'center',
            headerStyle: (colum, colIndex) => {
                return { width: '160px' };
            },
            align: 'center',
            editable: false
        },
        { 
            dataField: 'dt1',
            text: 'Created By', 
            headerAlign: 'center',
            align: 'left',
            editable: false
        },
    ];

    const pie = {
        labels: ['Emergency','Urgent', 'Important', 'Priority', 'Normal'],
        datasets: [{
          data: [4,2,5,8,40],
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

    return (
      <div className="animated fadeIn">
        <Row>
          <Col xs="12" sm="12" lg="7" style={{marginBottom: '10px'}}>
            <Card style={{minHeight: "calc(100vh - 160px)"}}>
              <CardHeader className="cardBgWhite">
                <i className="icon-truck"></i>Truck Resource
                <div className="card-header-actions">
                    {/*eslint-disable-next-line*/}
                    <Button
                    type="submit"
                    variant="contained"
                    className="btnReadMore"
                    style={{backgroundColor:"rgb(74,74,255)", color:"white"}}
                    onClick={(e) => this.toggleModal(e)}
                    >
                        <i className="icon-question3"></i> Help
                    </Button>
                </div>
              </CardHeader>
              <CardBody style={styleImg} className="card-body-nopad">
                <Table2Edit 
                    tableHead={ columns }
                    datas={ this.state.datas }
                />
              </CardBody>
            </Card>
          </Col>
          <Col xs="12" sm="12" lg="5">
            <Card className="mb10px" style={{minHeight: "calc(50vh - 85px)"}}>
              <CardBody style={styleImg} className="card-body-nopad">
                <CardHeader className="cardBgWhite">
                    <i className="icon-truck"></i>Estimasi Kedatangan Truk
                </CardHeader>
                <Table2Edit 
                    tableHead={ columns2 }
                    datas={ this.state.datas2 }
                />
              </CardBody>
            </Card>
            <Card className="mb10px" style={{minHeight: "calc(50vh - 85px)"}}>
              <CardHeader className="cardBgWhite">
                <i className="icon-warning22"></i>Pending Job Type / 2020-04-20
              </CardHeader>
              <CardBody style={styleImg} className="card-body-nopad">
                <div style={{display: 'flex', justifyContent: 'center', marginTop: '10px'}}>
                    <Pie data={pie} height={180} width={250} options={options}/>
                </div>
              </CardBody>
            </Card>
          </Col>
        </Row>
        <Modal style={{maxWidth: '400px', width: '30%'}} isOpen={ this.state.modal } toggle={ this.toggleModal } className='modal-dialog modal-warning' backdrop="static">
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
        <Modal style={{maxWidth: '400px', width: '50%'}} isOpen={ this.state.modal2 } toggle={ this.toggleModal2 } className='modal-dialog modal-primary' backdrop="static">
        <ModalHeader toggle={ this.toggleModal2 }><i className="icon-clipboard6"></i> Detail DO - {this.state.truck_no}</ModalHeader>
            <ModalBody className="card-body-nopad">
                <Table2Edit 
                    tableHead={ columns3 }
                    datas={ this.state.datas3 }
                />
                <div>
                    <Button
                    type="submit"
                    variant="contained"
                    className="btnReadMore"
                    style={{backgroundColor:"rgb(74,74,255)", color:"white"}}
                    onClick={(e) => alert('show surat jalan')}
                    >
                        Surat Jalan <i className="icon-arrow-right8" style={{fontSize: '12px', marginTop: '2px'}}></i>
                    </Button>   
                </div>
            </ModalBody>
        </Modal>
      </div>
    );
  }
}

export default Planner;
