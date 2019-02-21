import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {Card} from 'primereact/card';
import {Button} from 'primereact/button';
import {InputText} from 'primereact/inputtext';
import {Password} from 'primereact/password';
import history from '../../common/history';
import HomeMenuContainer from "../home/HomeMenuContainer";

import * as actions from './redux/actions';

export class Registerpage extends Component {
  static propTypes = {
    useradmin: PropTypes.object.isRequired,
    actions: PropTypes.object.isRequired,
  };

  constructor(){
    super();
    this.state={
      username:'',
      name:'',
      password:'',
    }
    this.isregistered=false;
  }

  loginForRegister=()=>{
    const {username,name,password}=this.state;
    if(username && name && password && username.trim() && name.trim() && password.trim()){
      var regobj={username:username,name:name,password:password,status:'true'};
      //alert('register='+JSON.stringify(regobj));
      this.props.actions.doRegister(regobj);
      this.isregistered=true;
    }
    else{
      alert("Enter all fields");
      this.isregistered=false;
    }
  }

  clearForRegister=()=>{
    this.setState({username:'',name:'',password:''});
    this.isregistered=false;
  }

  render() {

   if(this.isregistered && this.props.useradmin.adminuser){
      history.push('/searchquerydetails');
    }  
    const header = <span className="p-grid p-justify-center">
                    <h3 className="p-col-6 p-offset-3">
                          Register Page
                    </h3>
                   </span>;
    const footer = <span className="p-grid">
                    <Button label="Save" onClick={()=>this.loginForRegister()} className="p-col-4" icon="pi pi-check" style={{marginRight: '.25em'}}/>
                    <Button label="Cancel" onClick={()=>this.clearForRegister()} className="p-col-4" icon="pi pi-times" className="p-button-secondary"/>
                  </span>;


    return (
        <React.Fragment>
          <HomeMenuContainer/>
          <div className="useradmin-registerpage section">
          <div className="p-grid p-align-center">
            <Card className="p-col-6 p-offset-3" title="Welcome to Register Page" footer={footer} >
              <div className="p-grid p-col-6" >
                <div className="p-col-12"><b>User Name</b></div>
                <div className="p-col-12">
                  <InputText value={this.state.username} placeholder="Enter User Name" onChange={(e) => this.setState({username: e.target.value})} />
                </div>
                <div className="p-col-12"><b>Display Name</b></div>
                <div className="p-col-12">
                  <InputText value={this.state.name} placeholder="Enter Display Name" onChange={(e) => this.setState({name: e.target.value})} />
                </div>
                <div className="p-col-12"><b>Password</b></div>
                <div className="p-col-12">
                  <Password value={this.state.password} placeholder="Enter Password" onChange={(e) => this.setState({password: e.target.value})} />
                </div>
                
            </div>
            </Card>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

/* istanbul ignore next */
function mapStateToProps(state) {
  return {
    useradmin: state.useradmin,
  };
}

/* istanbul ignore next */
function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({ ...actions }, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Registerpage);
