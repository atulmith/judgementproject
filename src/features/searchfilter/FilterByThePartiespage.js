import React, { Component } from 'react';
import {InputText} from 'primereact/inputtext';
import {Chips} from 'primereact/chips';

export default class FilterByThePartiespage extends Component {
  static propTypes = {

  };
  constructor() {
    super();
    this.state = {
        petitionerarr: [],
        repsondentarr:[],
    };
    
  }

  onChangeTextPetitoner=(values)=>{
      this.setState({petitionerarr:values})
      this.loaddata(this.state.repsondentarr,values);
  }

  onChangeTextRespondent=(values)=>{
      this.setState({repsondentarr:values})
      this.loaddata(values,this.state.petitionerarr);
  }

  loaddata=(respoarr,petarr)=>{
    let tempobj={};
    if(respoarr.length>0 || petarr.length>0){
      tempobj={
        petitioner:petarr,
        respondent:respoarr
      };
    }
    this.props.populatefilter('filterparties',tempobj);
  }


  render() {
    return (
      <React.Fragment>
          <div className="p-grid">
             <div className="p-col-12">
             <b><i>(Please press Enter for search)</i></b>
             </div>
            <div className="p-col-12">
            Appellant/Petitioner/Complainant/Plaintiff
            </div>
            <div className="p-col-12">
                <Chips style={{width:'500px'}} className="p-col-12" value={this.state.petitionerarr} placeholder="Party Names Press Enter" onChange={(e) => this.onChangeTextPetitoner(e.value)}></Chips>
            </div>

            <div className="p-col-12">
            Respondent/Defendant
            </div>
            <div className="p-col-12">
                <Chips style={{width:'500px'}} className="p-col-12" value={this.state.repsondentarr} placeholder="Party Names Press Enter" onChange={(e) => this.onChangeTextRespondent(e.value)}></Chips>
            </div>
          </div>
      </React.Fragment>
    );
  }
}
