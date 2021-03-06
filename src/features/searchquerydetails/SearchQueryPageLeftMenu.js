import React from "react";
import {Sidebar} from 'primereact/sidebar';
import DefaultPage from '../searchfilter/DefaultPage';
import {OverlayPanel} from 'primereact/overlaypanel';

class SearchQueryPageLeftMenu extends React.Component {
  constructor() {
        super();
        this.state = {
            visibleLeft: false,
        };
        //this.op.toggle(e)
        //this.setState({visibleLeft:true})
  }

  setVisibleLeft=(param)=>{
    this.setState({visibleLeft:param});    
    
  }

  render() {
    return (
      <React.Fragment>
        <DefaultPage visibleLeft={this.state.visibleLeft} setVisibleLeft={(p)=>this.setVisibleLeft(p)} />
        <OverlayPanel style={{width:'500px'}} ref={(el) => this.op = el} showCloseIcon={true} dismissable={true}>
             <DefaultPage/>
        </OverlayPanel>
      <div
        data-collapse="all"
        data-animation="over-right"
        data-duration={400}
        data-doc-height={1}
        className="navbar w-nav"
      >
        <div className="div_qicon">
          <img
            src="images/q-logo-white.png"
            width={18}
            alt="ALT IMAGE"
            className="image-3"
          />
        </div>
        <div className="dividerline w-hidden-tiny" />
        <div className="div-block-11 w-hidden-main w-hidden-medium w-hidden-small w-hidden-tiny">
          <div className="menu-button-2 w-hidden-main w-hidden-medium w-hidden-small w-nav-button">
            <div className="icon w-hidden-main w-hidden-medium w-hidden-small w-icon-nav-menu" />
          </div>
        </div>
        
        <nav role="navigation" className="nav-menu1 w-nav-menu">
          <a href="#" className="navlink w-nav-link">
            Settings
          </a>
          <a href="#" className="w-nav-link">
            Upgrade Plan
          </a>
          <a href="#" className="w-nav-link">
            Support
          </a>
        </nav>
        <div className="dividerline" />
        <a href="#" className="link-block w-inline-block" onClick={(e)=>this.setState({visibleLeft:true})}>
          <div className="filterbutton">
            <div
              id="filter-button"
              data-w-id="a36dbe21-8b43-f5fa-5a50-674ee465893f"
              className="div_filterbutton"
            />
          </div>
        </a>
        <div className="dividerline" />
        <a href="bookmarksdetails" className="link-block w-inline-block">
          <div className="settingsbutton">
            <div className="div_bookmark" />
          </div>
        </a>
        <div className="dividerline" />
        <a href="#" className="link-block w-inline-block">
          <div className="settingsbutton">
            <div className="div_settingsbutton" />
          </div>
        </a>
        <div className="dividerline" />
        
                    
      </div>
      </React.Fragment>
    );
  }
}

export default SearchQueryPageLeftMenu;
