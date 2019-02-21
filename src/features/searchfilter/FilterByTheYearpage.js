import React, { Component } from 'react';
import {InputText} from 'primereact/inputtext';

export default class FilterByTheYearpage extends Component {
  static propTypes = {

  };
  constructor() {
        super();
        this.state = {
          filteryearsdata:{}
        };
        //this.op.toggle(e)
        //this.setState({visibleLeft:true})
  }
  

  onYearChange(paramtype,value){
      let tempobj=this.state.filteryearsdata;

      tempobj[paramtype]=value;

      this.setState({filteryearsdata:tempobj});

      if(tempobj.fromyear=='' || tempobj.toyear==''){
        tempobj={};
      }
      this.props.populatefilter('filteryear',tempobj);

  }

  render() {
    // const {fromyear,toyear}=this.state.filteryearsdata;
    return (
      <React.Fragment>

 
        <div className="p-grid">
          <div className="p-col-6">
            From
          </div>
          <div className="p-col-6">
            To
          </div>
          <div className="p-col-6">
            <InputText keyfilter="pint" placeholder="YYYY" value={this.state.filteryearsdata.fromyear || ''} onChange={(e) => this.onYearChange('fromyear', e.target.value)}/>
          </div>
          <div className="p-col-6">
            <InputText keyfilter="pint" placeholder="YYYY" value={this.state.filteryearsdata.toyear || ''} onChange={(e) =>  this.onYearChange('toyear', e.target.value) }/>
          </div>
        </div>

       </React.Fragment>
    );
  }
}
