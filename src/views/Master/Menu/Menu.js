import React, { Component } from 'react';
import { Card, CardBody, CardHeader, Col, Row, Button, Modal, ModalHeader, ModalBody } from 'reactstrap';
import CommonTable from '../../Commons/Table/CommonTable';
import CommonFormPopUp from '../../Commons/Form/CommonFormPopUp';
import { POSITION } from '../../Constants/Position';
import { INPUT } from '../../Constants/Input';
import Swal from 'sweetalert2';
import BlockUi from 'react-block-ui';
import 'react-block-ui/style.css';

import API from '../../../API';

class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fadeIn: true,
      listForm: [],
      tableHead: [],
      datas: [],
      blocking: false,
      blocking_modal: false,
      modalTitle: '',
      addModal: false,
      errors: {},
    };   
    this.toggleImgModal = this.toggleImgModal.bind(this);
    this.toggleAddModal = this.toggleAddModal.bind(this);
  }

  componentDidMount() {
    this.setHead();
    this.setBody();
    this.setForm();
  }

  //-----modal-----
  toggleImgModal(name, avatar) { this.setState({ imgModal: !this.state.imgModal, modalTitle: name.toUpperCase(), ava: avatar }); }
  toggleAddModal() { this.setState({ addModal: !this.state.addModal, }); }
  //-----end modal-----

  //-----form-----
  setForm() {
    var headerColumns = [
      { inputType: INPUT.TEXT_FIELD, label: "Name", name: "name" },
      { inputType: INPUT.TEXT_FIELD, label: "Url", name: "url" },
      { inputType: INPUT.TEXT_FIELD, label: "Icon", name: "icon" },
      { inputType: INPUT.CHECKBOX, label: "Is Title", name: "title" },
      { inputType: INPUT.TEXT_FIELD, label: "Parent ID", type: 'number', name: "parent_id" },
      { inputType: INPUT.TEXT_FIELD, label: "Sequence", name: "sequence" }
    ];
    this.setState({ listForm: this.state.listForm.concat(headerColumns) });
  }

  handleValidation(dataForm){
    let formIsValid = true;

    //-----name-----
    if(!dataForm.name || dataForm.name === undefined){
      formIsValid = false;
      this.setState(prevState => {
        let listForm = { ...prevState.listForm };
        listForm[0].error = true;         
        return listForm;
      });
    }

    //-----name-----
    if(!dataForm.parent_id || dataForm.parent_id === undefined){
      formIsValid = false;
      this.setState(prevState => {
        let listForm = { ...prevState.listForm };
        listForm[4].error = true;         
        return listForm;
      });
    }

    return formIsValid;
  }

  actionForm = (dataForm) => {
    this.setState({blocking_modal: true});
    //-----set error false-----
    this.setState(prevState => {
      let listForm = { ...prevState.listForm };
      for(let i=0; i<this.state.listForm.length; i++){
        listForm[i].error = false;
      }
      return listForm;
    });

    if(this.handleValidation(dataForm)){
      const form = {
          name: dataForm.name,
          url: dataForm.url,
          icon: dataForm.icon,
          title: dataForm.title,
          parent_id: dataForm.parent_id,
          sequence: dataForm.sequence
      }
      Swal.fire({
        title: 'Register User',
        text: "Are you sure your data is correct?",
        icon: 'warning',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes!',
        confirmButtonColor: '#3085d6',
        showCancelButton: true,
      }).then((result) => {
        if (result.value) {
          // API.put('api/auth/menu/', form)
          // .then(res => {
          //     if(res.status === 201){                    
                  Swal.fire({
                    title: 'Success!',
                    icon: 'success',
                    text: 'Registration Success.',
                    showConfirmButton: false,
                    timer: 1500
                  })
                  .then(() => {
                    this.toggleAddModal();
                    this.setBody();
                  })
                  this.setState({blocking_modal: false});                    
        //       }else{
        //           Swal.fire({  
        //             title: 'Warning',  
        //             icon: 'warning',  
        //             text: 'Your ID Unauthorized.',  
        //           });
        //           this.setState({blocking_modal: false});
        //       }
        //   }).catch((error) => {
        //       if(error && error.response && error.response.status === 422){
        //           Swal.fire({  
        //               title: 'Warning',  
        //               icon: 'warning',  
        //               text: 'The email has already been taken.',  
        //           });
        //           this.setState(prevState => {
        //             let listForm = { ...prevState.listForm };
        //             listForm[1].error = true;
        //             return listForm;
        //           });
        //       }else{
        //           Swal.fire({  
        //               title: 'Error',  
        //               icon: 'error',  
        //               text: 'Please Check Your Network Connection.',  
        //           });
        //       }
        //       // console.log(error.response);            
        //       this.setState({blocking_modal: false});
        //   });
        }else {
          this.setState({blocking_modal: false});
        }
      });
    }else {
      this.setState({blocking_modal: false});
      Swal.fire({  
          title: 'Error',  
          icon: 'error',  
          text: 'Please Check Your Data.',  
      });
    }
  }
  //-----end form-----

  //-----table-----
  actionTable = (cell, row) => {
    return  <div>
                <Button className="btn-css3 btn-brand icon mr5px btn-sm" onClick={() => { this.handleAction('edit', row.id) } }>
                    <i className="icon-pencil7"></i>
                </Button>
                <Button className="btn-google-plus btn-brand icon btn-sm" onClick={() => { this.handleAction('delete', row.id) } }>
                    <i className="icon-cancel-circle2"></i>
                </Button>
            </div>;
  }

  icon = (cell, row) => {
    return  <i className={ row.icon }></i>;
  }

  title = (cell, row) => {
    let val = (row.title === '1') ? 'Yes' : 'No';
    return  <span>{ val }</span>;
  }

  bold = (cell, row) => {
    return  <b>{ row.sequence }</b>;
  }

  setHead() {
    var headerColumns = [
      { width: "150", title: "Name", dataField: "name", headerAlign: POSITION.CENTER, dataAlign: POSITION.LEFT, dataSort: true },
      { width: "", title: "Url", dataField: "url", headerAlign: POSITION.CENTER, dataAlign: POSITION.LEFT, dataSort: true, tdStyle: {whiteSpace: 'normal'} },
      { width: "150", title: "Icon", dataField: "icon", headerAlign: POSITION.CENTER, dataAlign: POSITION.CENTER, dataFormat: this.icon.bind(this) },
      { width: "150", title: "Is Title", dataField: "title", headerAlign: POSITION.CENTER, dataAlign: POSITION.CENTER, dataFormat: this.title.bind(this) },
      { width: "80", title: "ID", dataField: "id", headerAlign: POSITION.CENTER, dataAlign: POSITION.CENTER },
      { width: "80", title: "Parent ID", dataField: "parent_id", headerAlign: POSITION.CENTER, dataAlign: POSITION.CENTER },
      { width: "150", title: "Sequence", dataField: "sequence", headerAlign: POSITION.CENTER, dataAlign: POSITION.CENTER, dataFormat: this.bold.bind(this) },
      { width: "100", title: "Action", dataField: "action", headerAlign: POSITION.CENTER, dataAlign: POSITION.CENTER, dataFormat: this.actionTable.bind(this) }
    ];
    this.setState({ tableHead: this.state.tableHead.concat(headerColumns) });
  }

  setBody() {
    this.setState({blocking: true});
    this.setState({ datas: [
      {id: 1, name: 'Home', url: '', icon: '', title: '1', parent_id: '0', sequence: '00000'},
      {id: 2, name: 'Main Menu', url: '/main', icon: 'icon-home2', title: '0', parent_id: '0', sequence: '01000'},
      {id: 3, name: 'Transaction', url: '', icon: '', title: '1', parent_id: '0', sequence: '02000'},
      {id: 4, name: 'HR', url: '', icon: 'icon-man-woman', title: '0', parent_id: '0', sequence: '02100'},
      {id: 5, name: 'F&A', url: '', icon: 'icon-calculator2', title: '0', parent_id: '9', sequence: '02101'},
      {id: 6, name: 'Purchasing', url: '', icon: 'icon-cart4', title: '0', parent_id: '9', sequence: '02102'},
      {id: 7, name: 'HSE', url: '', icon: 'icon-shield2', title: '1', parent_id: '0', sequence: '03000'},
      {id: 8, name: 'Dashboard', url: '', icon: 'icon-chart', title: '0', parent_id: '0', sequence: '03100'},
      {id: 9, name: 'Asset Management', url: '', icon: 'icon-price-tags', title: '0', parent_id: '0', sequence: '03200'},
      {id: 10, name: 'Planner', url: '/planner', icon: 'icon-presentation', title: '0', parent_id: '0', sequence: '03300'},
      {id: 11, name: 'Check Resource', url: '/planner', icon: 'icon-truck', title: '0', parent_id: '0', sequence: '03400'},
      {id: 12, name: 'Truck Monitoring', url: '', icon: 'icon-display', title: '1', parent_id: '0', sequence: '09000'},
      {id: 13, name: 'Truck Tracking', url: '', icon: 'icon-location4', title: '0', parent_id: '0', sequence: '09100'},
      {id: 14, name: 'Dashboard', url: '', icon: 'icon-chart', title: '0', parent_id: '3', sequence: '09101'},
      {id: 15, name: 'Customer Center', url: '', icon: 'icon-phone-wave', title: '0', parent_id: '3', sequence: '09102'},
      {id: 16, name: 'Sales & Marketing', url: '', icon: 'icon-puzzle3', title: '0', parent_id: '3', sequence: '09103'},
      {id: 17, name: 'IT', url: '', icon: 'icon-lan', title: '0', parent_id: '3', sequence: '09104'},
      {id: 18, name: 'Resources Management', url: '', icon: 'icon-magic-wand', title: '0', parent_id: '3', sequence: '09105'},
      {id: 19, name: 'Coordinator', url: '', icon: 'icon-mobile3', title: '0', parent_id: '0', sequence: '10100'},
      {id: 20, name: 'Cashier', url: '', icon: 'icon-printer2', title: '0', parent_id: '27', sequence: '10101'},
      {id: 21, name: 'Security', url: '', icon: 'icon-balance', title: '0', parent_id: '27', sequence: '10101'},
      {id: 22, name: 'Maintain / Workshop', url: '', icon: 'icon-hammer-wrench', title: '0', parent_id: '27', sequence: '10102'},
      {id: 23, name: 'HR BPK', url: '', icon: 'icon-man-woman', title: '0', parent_id: '27', sequence: '10102'},
      {id: 24, name: 'Administration', url: '', icon: '', title: '1', parent_id: '0', sequence: '10102'},
      {id: 25, name: 'Master Data', url: '', icon: 'icon-database', title: '0', parent_id: '27', sequence: '10102'},
      {id: 26, name: 'truck', url: '', icon: 'icon-truck', title: '0', parent_id: '27', sequence: '10102'},
      {id: 27, name: 'Customer', url: '', icon: 'icon-store', title: '0', parent_id: '27', sequence: '10102'},
      {id: 28, name: 'Job Type', url: '', icon: 'icon-stars', title: '0', parent_id: '27', sequence: '10102'},
      {id: 29, name: 'User', url: '', icon: 'icon-users2', title: '0', parent_id: '27', sequence: '10102'},
      {id: 30, name: 'Menu', url: '', icon: 'icon-stack', title: '0', parent_id: '27', sequence: '10102'},
      {id: 31, name: 'User Management', url: '', icon: 'icon-users4', title: '0', parent_id: '27', sequence: '10102'},
      {id: 32, name: 'User Name', url: '', icon: 'icon-accessibility', title: '0', parent_id: '27', sequence: '10102'},
      {id: 33, name: 'Organization Type', url: '', icon: 'icon-crown', title: '0', parent_id: '27', sequence: '10102'},
    ] }, () => this.setState({blocking: false}));
    // API.get('api/auth/menu/')
    // .then(res => {
    //   if(res.status === 200){ 
    //     this.setState({ datas: this.state.datas.concat(res.data.data) });
    //   }
    //   this.setState({blocking: false});
    // }).catch((error) => {
    //   this.setState({blocking: false});
    //   Swal.fire({  
    //       title: 'Error',  
    //       icon: 'error',  
    //       text: 'Please Check Your Network Connection.',  
    //   });
    // });
  }

  handleAction = (tipe, val) => {
    switch (tipe) {
      case 'edit':
                alert('Edit!!!');
            break;  
      case 'delete':
                this.setState({blocking: true});
                Swal.fire({
                  title: 'Delete User',
                  text: "Are you sure to delete this user?",
                  icon: 'warning',
                  cancelButtonColor: '#d33',
                  confirmButtonText: 'Yes!',
                  confirmButtonColor: '#3085d6',
                  showCancelButton: true,
                }).then((result) => {
                  if (result.value) {
                    // API.delete('api/auth/menu/'+val)
                    // .then(res => {
                    //     if(res.status === 200){                    
                            Swal.fire({
                              title: 'Failed!',
                              icon: 'success',
                              text: 'Delete Failed.',
                              showConfirmButton: false,
                              timer: 1500
                            })
                            .then(() => {
                              this.setBody();
                            })
                            this.setState({blocking: false});                    
                  //       }else{
                  //           Swal.fire({  
                  //             title: 'Warning',  
                  //             icon: 'warning',  
                  //             text: 'Your ID Unauthorized.',  
                  //           });
                  //           this.setState({blocking: false});
                  //       }
                  //   }).catch((error) => {
                  //       if(error && error.response && error.response.status === 500){
                  //           Swal.fire({  
                  //               title: 'Warning',  
                  //               icon: 'warning',  
                  //               text: 'Delete Failed.',  
                  //           });
                  //       }else{
                  //           Swal.fire({  
                  //               title: 'Error',  
                  //               icon: 'error',  
                  //               text: 'Please Check Your Network Connection.',  
                  //           });
                  //       }           
                  //       this.setState({blocking: false});
                  //   });
                  }else{
                    this.setState({blocking: false});
                  }
                });
            break;
        case 'add':
                this.toggleAddModal();
            break;
        case 'download':
                alert('download');
            break;
        default:
            break;
    }
  }
  //-----end table-----

  render() {
    return (
      <div className="animated fadeIn">
        <BlockUi tag="div" blocking={this.state.blocking}>
          <Row>
            <Col xs="12" sm="12" md="12">
              <Card className="card-accent-primary">
                <CardHeader>
                  <i className="icon-users2"></i>Menu Management
                </CardHeader>
                  <CardBody className="card-body-nopad mt10px">
                    <CommonTable 
                      tableHead={ this.state.tableHead }
                      datas={ this.state.datas }
                      action={ this.handleAction }
                      />
                  </CardBody>
              </Card>
            </Col>
          </Row>
        </BlockUi>
        <Modal isOpen={ this.state.addModal } toggle={ this.toggleAddModal } className='modal-dialog modal-info' backdrop="static">
          <BlockUi tag="div" blocking={this.state.blocking_modal}>
            <ModalHeader toggle={ this.toggleAddModal }>Register User</ModalHeader>
            <ModalBody>
              <CommonFormPopUp action={ this.actionForm } list={ this.state.listForm } />
            </ModalBody>
          </BlockUi>
        </Modal>
      </div>
    );
  }
}

export default Menu;