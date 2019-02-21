import React, { Component } from 'react';
import {Checkbox} from 'primereact/checkbox';
import {InputText} from 'primereact/inputtext';

export default class FilterByTheCourtpage extends Component {
  static propTypes = {

  };

  constructor() {
    super();
    this.state = {
        courts: [],
        courtname:'',
    };
    
  }

  onChangeCourt=(e)=>{
    let selectedCourts = [...this.state.courts];
    if(e.checked)
        selectedCourts.push(e.value);
    else
        selectedCourts.splice(selectedCourts.indexOf(e.value), 1);

    this.setState({courts: selectedCourts});
  
    this.loaddata(selectedCourts,this.state.courtname);
  }

  onChangeText=(txt)=>{
      this.setState({courtname:txt})
      this.loaddata(this.state.courts,txt);
  }

  loaddata=(selectedCourts,courtname)=>{
    let tempobj={
      courttypes:selectedCourts,
      courtname:courtname
    };
    this.props.populatefilter('filtercourt',tempobj);
  }

  render() {
    return (
      <React.Fragment>
        <div className="p-grid ">
          <div className="p-col-3">
              <div className="p-grid ">
                <Checkbox inputId="cb1" className="p-col-6" value="HC" onChange={(e)=>this.onChangeCourt(e)} checked={this.state.courts.includes('HC')}></Checkbox>
                <label htmlFor="cb1" className="p-col-6 p-checkbox-label">HC</label>
              </div>
          </div>
          <div className="p-col-3">
              <div className="p-grid ">
                <Checkbox inputId="cb2" className="p-col-6" value="SC" onChange={(e)=>this.onChangeCourt(e)} checked={this.state.courts.includes('SC')}></Checkbox>
                <label htmlFor="cb2" className="p-col-6 p-checkbox-label">SC</label>
              </div>
          </div>
          <div className="p-col-3">
              <div className="p-grid ">
                <Checkbox inputId="cb3" className="p-col-6" value="Tribunals" onChange={(e)=>this.onChangeCourt(e)} checked={this.state.courts.includes('Tribunals')}></Checkbox>
                <label htmlFor="cb3" className="p-col-6 p-checkbox-label">Tribunals</label>
              </div>
          </div>
          <div className="p-col-12 ">
            
              <InputText className="p-col-12" value={this.state.courtname} placeholder="Court Name" onChange={(e) => this.onChangeText(e.target.value)} />
            
          </div>
        </div>
      </React.Fragment>
    );
  }
}
