import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from './redux/actions';
import {Card} from 'primereact/card';
import {Button} from 'primereact/button';
import {InputText} from 'primereact/inputtext';
import {Password} from 'primereact/password';
import history from '../../common/history';
import HomeMenuContainer from "../home/HomeMenuContainer";

export class Loginpage extends Component {
  static propTypes = {
    useradmin: PropTypes.object.isRequired,
    actions: PropTypes.object.isRequired,
  };
  constructor(){
    super();
    this.state={
      username:'',
      password:'',
    }

    this.loggedin=false;
  }

  componentDidMount() {
     this.props.actions.updateadminuser();
  }

  loginForLogin=()=>{
    const {username,password}=this.state;
    if(username  && password && username.trim()   && password.trim()){
      var loginobj={username:username,password:password};
      //alert('login='+JSON.stringify(loginobj));
      this.props.actions.doLogin(loginobj);
      this.loggedin=true;
    }
    else{
      alert("Enter all fields");
    }
  }

  clearForLogin=()=>{
    this.setState({username:'',password:''});
    this.loggedin=false;
  }

  render() {

    if(this.props.useradmin.doLoginError){
      // var errmsg=this.props.useradmin.doLoginError.response.data.message;
      //alert(this.props.useradmin.doLoginError);
      this.props.actions.dismissDoLoginError();
      
    }
    if(this.loggedin && this.props.useradmin.adminuser){
      history.push('/searchquerydetails');
    }
    
    const header = <span className="p-grid p-justify-center">
                    <h3 className="p-col-6 p-offset-3">
                          Login Page
                    </h3>
                   </span>;
    const footer = <span className="p-grid">
                    <Button label="Login" onClick={()=>this.loginForLogin()} className="p-col-4" icon="pi pi-check" style={{marginRight: '.25em'}}/>
                    <Button label="Cancel" onClick={()=>this.clearForLogin()} className="p-col-4" icon="pi pi-times" className="p-button-secondary"/>
                  </span>;

    return (
      <React.Fragment>
      <HomeMenuContainer/>
      <div className="useradmin-loginpage section">
        <div className="p-grid p-align-center">
          <Card className="p-col-6 p-offset-3" title="Login Page" footer={footer} >
            <div className="p-grid p-col-6" >
              <div className="p-col-12"><b>User Name</b></div>
              <div className="p-col-12">
                <InputText value={this.state.username} placeholder="Enter User Name" onChange={(e) => this.setState({username: e.target.value})} />
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
)(Loginpage);
