import React, { Component } from 'react';
import {Checkbox} from 'primereact/checkbox';
import {InputText} from 'primereact/inputtext';


export default class FilterByTheSubject extends Component {
  static propTypes = {

  };
  constructor() {
    super();
    this.state = {
        subject: [],
        othersubject:'',
    };
    
  }
  onChangeSubject=(e)=>{
    let selectedSubject = [...this.state.subject];
    if(e.checked)
        selectedSubject.push(e.value);
    else
        selectedSubject.splice(selectedSubject.indexOf(e.value), 1);

    this.setState({subject: selectedSubject});
    this.loaddata(selectedSubject,this.state.othersubject);
  }

  onChangeText=(txt)=>{
      this.setState({othersubject:txt})
      this.loaddata(this.state.subject,txt);
  }

  loaddata=(selectedSubject,othersubjects)=>{
    let tempobj={};

      
    if(selectedSubject.length>0 || othersubjects.length>0){
      tempobj={
        subjects:selectedSubject,
        othersubjects:othersubjects
      };
    }
    this.props.populatefilter('filtersubject',tempobj);
  }

  render() {
    return (
            <React.Fragment>
        <div className="p-grid ">
          <div className="p-col-3">
              <div className="p-grid ">
                <Checkbox inputId="cb1" className="p-col-6" value="Civil" onChange={(e)=>this.onChangeSubject(e)} checked={this.state.subject.includes('Civil')}></Checkbox>
                <label htmlFor="cb1" className="p-col-6 p-checkbox-label">Civil</label>
              </div>
          </div>
          <div className="p-col-3">
              <div className="p-grid ">
                <Checkbox inputId="cb2" className="p-col-6" value="Criminal" onChange={(e)=>this.onChangeSubject(e)} checked={this.state.subject.includes('Criminal')}></Checkbox>
                <label htmlFor="cb2" className="p-col-6 p-checkbox-label">Criminal</label>
              </div>
          </div>
          <div className="p-col-3">
              <div className="p-grid ">
                <Checkbox inputId="cb3" className="p-col-6" value="Corporate" onChange={(e)=>this.onChangeSubject(e)} checked={this.state.subject.includes('Corporate')}></Checkbox>
                <label htmlFor="cb3" className="p-col-6 p-checkbox-label">Corporate</label>
              </div>
          </div>
          <div className="p-col-12 ">
            
              <InputText className="p-col-12" value={this.state.othersubject} placeholder="Other Subjects" onChange={(e) => this.onChangeText(e.target.value)} />
            
          </div>
        </div>
      </React.Fragment>
    );
  }
}
