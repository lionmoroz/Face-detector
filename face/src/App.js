import React from 'react';
import Navigation from './components/Navigation';
import Rank from './components/Rank';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import Logo from './components/Logo/Logo';
import Particles from 'react-particles-js';
import './App.css';

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



function App() {
  return (
    <div className="App">
      <Particles className='particles'
        params={particleFunc} />
      <Navigation/>
      <Logo/>
      <Rank/>
      <ImageLinkForm/>
    </div>
  );
}

export default App;
