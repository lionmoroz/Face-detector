import React, {Component} from 'react';
import Navigation from './components/Navigation';
import Rank from './components/Rank';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import FaceRecognition from './components/FaceRecognition/FaceRecognition';
import Logo from './components/Logo/Logo';
import Clarifai from 'clarifai';
import Particles from 'react-particles-js';
import './App.css';

const app = new Clarifai.App({
 apiKey: '5cba64afbc2a4245b8032bca1989cff8'
});

const particleFunc = {
	"particles": {
		        "number": {
		            "value": 100
		        },
		        "size": {
		            "value": 3
		        },
		        "line_linked": {
        				shadow: {
        					enable: true,
        					color: "#800080",
        					blur: 5
        				}
        			}
		   		}
}



class App extends Component {
	constructor(){
		super();
		this.state = {
			input: '',
			imageUrl: '',
			box:{}
		}
	}

	culculateFaceLocation = (data) =>{
		const clarifaiFace = data.outputs[0].data.regions[0].region_info.bounding_box;
		const image = document.getElementById('inputimage');
		const width = Number(image.width);
		const height = Number(image.height);
		return{
			leftCol: clarifaiFace.left_col*width,
			topRow: clarifaiFace.top_row*height,
			rightCol: width - (clarifaiFace.right_col*width),
			bottomRow: height - (clarifaiFace.bottom_row*height),
		}
	}

	displayFaceBox = (box) =>{
		console.log(box);
		this.setState({box:box});
	}

	onInputChange = (event) =>{
		this.setState({input:event.target.value});
	}

	onButtonSubmit = () =>{
		this.setState({imageUrl:this.state.input});
		app.models.predict(
			Clarifai.FACE_DETECT_MODEL,
		    // URL
		    this.state.input
		)
		.then(response => this.displayFaceBox(this.culculateFaceLocation(response)))
		.catch(err => console.log(err))// there was an error}

	}
	render(){
		return (
		    <div className="App">
		      <Particles className='particles' params={particleFunc} />
		      <Navigation/>
		      <Logo/>
		      <Rank/>
		      <ImageLinkForm onInputChange={this.onInputChange} onButtonSubmit={this.onButtonSubmit}/>
		      <FaceRecognition box={this.state.box} imageUrl = {this.state.imageUrl}/>
		    </div>
		);
	}
}

export default App;
