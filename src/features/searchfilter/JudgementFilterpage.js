import React, { Component } from 'react';
import {Accordion,AccordionTab} from 'primereact/accordion';
import {Button} from 'primereact/button';

import FilterByTheYearpage from './FilterByTheYearpage';
import FilterByTheCourtpage from './FilterByTheCourtpage';
import FilterByTheBenchpage from './FilterByTheBenchpage';
import FilterByThePartiespage from './FilterByThePartiespage';
import FilterByTheSubject from './FilterByTheSubject';



export default class JudgementFilterpage extends Component {
  static propTypes = {

  };
  constructor() {
        super();
        this.state = {
            
        };
        this.filteryearsdata={};
        this.filtercourttypedata={};
        this.filterbybenchdata={};
        this.filterbypartiesdata={};
        this.filterbysubjectdata={};

        //this.op.toggle(e)
        //this.setState({visibleLeft:true})
  }
  populatefilter=(paramtype,obj)=>{
      if(paramtype=='filteryear'){
          
          this.filteryearsdata=obj;
          // alert('yearfilter='+JSON.stringify(this.filteryearsdata,1));
      }
      if(paramtype=='filtercourt'){
         this.filtercourttypedata=obj;
      }
      if(paramtype=='filterbench'){
          this.filterbybenchdata=obj;
      }
      if(paramtype=='filterparties'){
        this.filterbypartiesdata=obj;
      }
      if(paramtype=='filtersubject'){
        
        this.filterbysubjectdata=obj;
      }
  }

  loadFilterparams(){
      
      let parentobj={
        filteryearsdata:this.filteryearsdata,
        filtercourttypedata:this.filtercourttypedata,
        filterbybenchdata:this.filterbybenchdata,
        filterbypartiesdata:this.filterbypartiesdata,
        filterbysubjectdata:this.filterbysubjectdata,
      }
      this.props.sendfilterparams(parentobj);
  }
  
  render() {
    return (
    <React.Fragment>
      
        <div className="searchfilter-judgement-filterpage">

          <Accordion  id="idjudgmenetfilter" activeIndex={0}>
            <AccordionTab header="Year">
                <FilterByTheYearpage populatefilter={(p,o)=>this.populatefilter(p,o)}/>
            </AccordionTab>
            <AccordionTab header="By Court">
                <FilterByTheCourtpage populatefilter={(p,o)=>this.populatefilter(p,o)}/>
            </AccordionTab>
            <AccordionTab header="By Bench">
                <FilterByTheBenchpage populatefilter={(p,o)=>this.populatefilter(p,o)}/>
            </AccordionTab>
            <AccordionTab header="By Parties">
                <FilterByThePartiespage populatefilter={(p,o)=>this.populatefilter(p,o)}/>
            </AccordionTab>
            <AccordionTab header="By Subject / Act,Rule,Order">
                <FilterByTheSubject populatefilter={(p,o)=>this.populatefilter(p,o)}/>
                
            </AccordionTab>
          </Accordion>

          <div className="p-grid" style={{padding:'10px'}} >
            
              <Button label="Reset" className="p-col  p-button-secondary" />
              <Button className="p-col" label="Apply Filter(s)" onClick={(e)=>this.loadFilterparams()}/>
            

          </div>

        </div>

    </React.Fragment>
   
    );
  }
}
