import React, {Component} from 'react';

class LandingData extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: []
        };

        this.componentWillMount = this.componentWillMount.bind(this);
    }

    componentWillMount() {
        fetch("https://api.spacexdata.com/v3/launches?limit=100")
        .then( (res) => res.json())
        .then((data) => this.setState({ items: data }));
    }
    render() { 
        const { items } = this.state;
        return ( 
            <div className="container">
                <div className="row">
                    {items.map((item, i) => (  
                        <div className="col-lg-3 col-md-6 col-sm-12 item-body">                  
                            <ul key={i} className="item-block">
                                <li><div className="img-body"> 
                                    <img src={item.links.mission_patch_small} className="img-fluid"/>
                                </div></li>
                                <li><p className="title">{item.mission_name} #{item.flight_number}</p></li>
                                <li><p>Mission Ids: <span>{item.mission_id}</span></p></li> 
                                <li><p>Launch Year: <span>{item.launch_year}</span></p></li>
                                <li><p>Successfull Launch: <span>{item.launch_success.toString()}</span></p></li>
                                <li><p>Successfull Landing: <span>{item.land_success}</span></p></li>
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
                
        );
    }
}
 
export default LandingData;