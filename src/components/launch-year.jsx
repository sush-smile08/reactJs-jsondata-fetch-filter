import React, { Component } from 'react';

class LaunchYear extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [],
            url: 'https://api.spaceXdata.com/v3/launches?limit=100&launch_success=true&land_success=true&launch_year=',
            dataStatus: '',
        };

        this.componentDidMount = this.componentDidMount.bind(this);
    }

    
    componentDidMount(){
        let urlData = this.state.url;
        console.log(urlData);
        fetch(urlData)
        .then((res) => res.json())
        .then((data) => {
          this.setState({ items: data,})
        });

      }


    componentDidUpdate(prevProps, prevState, snapshot) {
        if(this.props.year !== prevState.year) {
            let updatedUrl = this.state.url + this.props.year;
                fetch(updatedUrl)
                .then((res) => res.json())
                .then((data) => {
                    if (!data.length){
                        this.setState({dataStatus: 'Oops, No data found.'});
                        this.setState({ items: data,});
                    }
                    else{
                        this.setState({ items: data,});
                        this.setState({dataStatus: ''});
                  }
                });
        }
    }

    render() {         
        const {items} = this.state;
        return ( 
            <div className="container">
                <h2 className="no-data">{this.state.dataStatus}</h2>
                <div className="row">
                    {this.state.items.map((item, i) => (  
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
 
export default LaunchYear;