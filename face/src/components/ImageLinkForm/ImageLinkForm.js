import React from 'react';
import './ImageLinkForm.css';


const ImageLinkForm = () =>{
	return (
		<div>
			<p className='f3'>
				{
					"You haven't idea,who in the photo.Check your guesses"
				}
			</p>
			<div className='center'>
				<div className="form center pa4 br-3 shadow-3">
					<input className = 'f4 pa2 w-70 center' type='text'/>
					<button className = 'w-30 grow f4 link pv2 ph3 dib white bg-purple br-dark'  > Detect </button>
				</div>
			</div>
		</div>
	);
}

export default ImageLinkForm;