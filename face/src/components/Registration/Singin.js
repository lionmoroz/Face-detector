import React from 'react';

class Singin extends React.Component{
	constructor (props){
		super(props)
		this.state = {
			singInEmail: '',
			singInPassword: ''
		}
	}

	onEmailChange = (event) =>{
		this.setState({singInEmail: event.target.value});
	}
	onPasswordChange = (event) =>{
		this.setState({singInPassword: event.target.value});
	}
	onSubmitSingIn = () =>{
		fetch('http://localhost:3000/singin', {
			method: 'post',
			headers: {'Content-Type': 'application/json'},
			body: JSON.stringify({
				email: this.state.singInEmail,
				password: this.state.singInPassword,
			})
		}).then(response => response.json()).then(data =>{
			if(data === 'success'){
				this.props.onRouteChange('home');	
			}
		})	// this.props.onRouteChange('home');
	}
	render(){
		const {onRouteChange} = this.props;
		return(
			<article className="br3 ba b--black-10 mv4 w-100 w-50-m w-25-l shadow-5  center">
				<main className="pa4 black-80">
				  <div className="measure">
				    <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
				      <legend className="f2 fw6 ph0 mh0">Sign In</legend>
				      <div className="mt3">
				        <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
				        <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
				        type="email" 
				        name="email-address"  
				        id="email-address"
				        onChange= {this.onEmailChange}/>
				      </div>
				      <div className="mv3">
				        <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
				        <input className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
				        type="password" 
				        name="password"  
				        id="password"
				        onChange= {this.onPasswordChange}/>
				      </div>
				    </fieldset>
				    <div className="">
				      <input onClick = {this.onSubmitSingIn} className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" type="submit" value="Sign in"/>
				    </div>
				    <div className="lh-copy mt3">
				      <p onClick = {() => onRouteChange('register')} className="f6 link dim black db pointer">Register</p>
				    </div>
				  </div>
				</main>
			</article>	
		);
	}	
}

export default Singin;