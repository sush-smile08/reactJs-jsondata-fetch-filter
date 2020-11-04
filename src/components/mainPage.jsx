import React, { Component } from 'react';
import {Route, Switch} from 'react-router-dom';
import LandingData from './space-x-data-landing';
import LaunchYear from './launch-year';
import SuccessfulLaunch from './successful-launch';
import SuccessfulLanding from './successful-landing';
import {Link} from 'react-router-dom';


class MainPage extends Component {
    constructor() {
        super();
        this.state = {
            yearValue: '',
        };
        this.YearFilter = this.YearFilter.bind(this);
    }    

    YearFilter = (clicked_id) => { 
        this.state.yearValue = clicked_id;
        this.setState({yearValue: this.state.yearValue});
    };

    render() { 
        return ( 
            <div className="container-fluid">
                <Link to="/"  className="pageTitle"><h1>SpaceX Launch Programs</h1></Link>
                <div className="row">
                    <div className="col-lg-2 col-md-4 col-sm-12">
                        <div className="filter-wrapper">
                        <h3>Filter</h3>
                            <div className="filter-body">
                            <h5 className="filter-title">Launch Year</h5>
                                <div className="filter-button-body">
                                    <ul>
                                        <li><Link to="/launch-year" id="2006" onClick={e => this.YearFilter(e.target.id) }>2006</Link></li>
                                        <li><Link to="/launch-year" id="2007" onClick={e => this.YearFilter(e.target.id) }>2007</Link></li>
                                        <li><Link to="/launch-year" id="2008" onClick={e => this.YearFilter(e.target.id) }>2008</Link></li>
                                        <li><Link to="/launch-year" id="2009" onClick={e => this.YearFilter(e.target.id) }>2009</Link></li>                        
                                        <li><Link to="/launch-year" id="2010" onClick={e => this.YearFilter(e.target.id) }>2010</Link></li>
                                        <li><Link to="/launch-year" id="2011" onClick={e => this.YearFilter(e.target.id) }>2011</Link></li>
                                        <li><Link to="/launch-year" id="2012" onClick={e => this.YearFilter(e.target.id) }>2012</Link></li>
                                        <li><Link to="/launch-year" id="2013" onClick={e => this.YearFilter(e.target.id) }>2013</Link></li>
                                        <li><Link to="/launch-year" id="2014" onClick={e => this.YearFilter(e.target.id) }>2014</Link></li>
                                        <li><Link to="/launch-year" id="2015" onClick={e => this.YearFilter(e.target.id) }>2015</Link></li>
                                        <li><Link to="/launch-year" id="2016" onClick={e => this.YearFilter(e.target.id) }>2016</Link></li>
                                        <li><Link to="/launch-year" id="2017" onClick={e => this.YearFilter(e.target.id) }>2017</Link></li>
                                        <li><Link to="/launch-year" id="2018" onClick={e => this.YearFilter(e.target.id) }>2018</Link></li>
                                        <li><Link to="/launch-year" id="2019" onClick={e => this.YearFilter(e.target.id) }>2019</Link></li>
                                        <li><Link to="/launch-year" id="2020" onClick={e => this.YearFilter(e.target.id) }>2020</Link></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="filter-body">
                            <h5 className="filter-title">Successful Launch</h5>
                                <div className="filter-button-body">
                                    <ul>
                                        <li><Link to="/successful_launch" id="true" onClick={e => this.YearFilter(e.target.id) }>True</Link></li>
                                        <li><Link to="/successful_launch" id="false" onClick={e => this.YearFilter(e.target.id) }>False</Link></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="filter-body">
                            <h5 className="filter-title">Successful Landing</h5>
                                <div className="filter-button-body">
                                    <ul>
                                    <li><Link to="/successful_landing" id="true" onClick={e => this.YearFilter(e.target.id) }>True</Link></li>
                                        <li><Link to="/successful_landing" id="false" onClick={e => this.YearFilter(e.target.id) }>False</Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-10 col-md-8 col-sm-12">
                        <Switch>
                            <Route exact path="/" component={LandingData} />
                            <Route exact path="/launch-year" component={LaunchYear}>
                                <LaunchYear year={this.state.yearValue} /> 
                            </Route>
                            <Route exact path="/successful_launch" component={SuccessfulLaunch}>
                                <SuccessfulLaunch year={this.state.yearValue} /> 
                            </Route>
                            <Route exact path="/successful_landing" component={SuccessfulLanding}>
                                <SuccessfulLaunch year={this.state.yearValue} /> 
                            </Route>
                        </Switch>
                    </div>
                </div>
            </div>
         );
    }
}
 
export default MainPage;