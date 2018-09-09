import React, {Component} from 'react';

import './App.css';
import {
	Map,
	//Circle,
	LayersControl,
	FeatureGroup,
	Polygon,
	TileLayer
} from 'react-leaflet';
import {EditControl} from 'react-leaflet-draw';

class App extends Component {

	constructor(props) {
		super(props);
		this.state={
			thing:'stuff'
		}
	}

	componentDidMount(){
		// This is a hack just to force a render to show the
		setTimeout(() => {
			this.setState({thing:'otherstuff'});
		}, 2000);
	}

	render() {
		console.log("Render...");
		let positions =[[37, -109.05],[41, -109.03],[41, -102.05],[37, -102.04]];
		let tileServerURL='http://tile.stamen.com/watercolor/{z}/{x}/{y}.png';
		let editableGeometry = [];
		//editableGeometry.push(<Circle key="circle" center={[37, -109.05]} radius={2000} />);
		editableGeometry.push(<Polygon key="polygon" positions={positions}/>);


		return (
			<div style={{width:'100vw',height:'100vh'}}>
			<Map ref='map' center={[37, -109.05]} zoom={13} className="ps_n3_mapComponent" style={{width:'100vw',height:'100vh'}}>
				<LayersControl position='topright'>
					<TileLayer key="tilelayer" url={tileServerURL}/>
					<FeatureGroup ref='editableFeaturegroup'>
						<EditControl/>
						{editableGeometry}
					</FeatureGroup>
				</LayersControl>
			</Map>
		</div>);
	}
}

export default App;
