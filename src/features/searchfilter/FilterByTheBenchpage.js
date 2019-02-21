import React, { Component } from 'react';
import {Checkbox} from 'primereact/checkbox';
import {InputText} from 'primereact/inputtext';
import {Chips} from 'primereact/chips';


export default class FilterByTheBenchpage extends Component {
  static propTypes = {

  };

  constructor() {
    super();
    this.state = {
        benchsize: [],
        judgenames:[],
    };
    
  }

  onChangeBenchsize=(e)=>{
    
    let selectedBenchsize = [...this.state.benchsize];
    if(e.checked)
        selectedBenchsize.push(e.value);
    else
        selectedBenchsize.splice(selectedBenchsize.indexOf(e.value), 1);

    this.setState({benchsize: selectedBenchsize});
  
    let tempobj={
      judgenames:this.state.judgenames,

    };
    this.loaddata(selectedBenchsize,this.state.judgenames);
    
  }

  onChangeText=(values)=>{
      this.setState({judgenames:values})
      this.loaddata(this.state.benchsize,values);
  }

  loaddata=(selectedBenchsize,judgenames)=>{
    let tempobj={
      benchsize:selectedBenchsize,
      judgenames:judgenames
    };
    this.props.populatefilter('filterbench',tempobj);
  }

  render() {
    return (
      <React.Fragment>
        
          <div className="p-grid">
            <div className="p-col-4">Bench Size</div>
          </div>
          <div className="p-grid ">
          <div className="p-col-3">
              <div className="p-grid ">
                <Checkbox inputId="cb1" className="p-col-6" value="Single" onChange={(e)=>this.onChangeBenchsize(e)} checked={this.state.benchsize.includes('Single')}></Checkbox>
                <label htmlFor="cb1" className="p-col-6 p-checkbox-label">Single</label>
              </div>
          </div>
          <div className="p-col-3">
              <div className="p-grid ">
                <Checkbox inputId="cb2" className="p-col-6" value="Division" onChange={(e)=>this.onChangeBenchsize(e)} checked={this.state.benchsize.includes('Division')}></Checkbox>
                <label htmlFor="cb2" className="p-col-6 p-checkbox-label">Division</label>
              </div>
          </div>
          <div className="p-col-3">
              <div className="p-grid ">
                <Checkbox inputId="cb3" className="p-col-6" value="Constitution" onChange={(e)=>this.onChangeBenchsize(e)} checked={this.state.benchsize.includes('Constitution')}></Checkbox>
                <label htmlFor="cb3" className="p-col-6 p-checkbox-label">Constitution</label>
              </div>
          </div>
           
             
             
          <div className="p-col-12 ">
              <div className="p-col-12">Judge Name(s) <b><i>(Please press Enter for search)</i></b></div> 
              <Chips style={{width:'500px'}} className="p-col-12" value={this.state.judgenames} placeholder="Judge Names Press Enter" onChange={(e) => this.onChangeText(e.value)}></Chips>
          </div>  
        </div>
        
      </React.Fragment>
    );
  }
}
