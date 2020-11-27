import React from 'react';
import './sign-up.styles.scss';
import FormInput from '../form-input/form-input.component';
import {auth,createUserProfileDocument} from '../../firebase/firebase.utils';
import CustomButton from '../custom-button/custom-button.component';

class SignUp extends React.Component{
    constructor(){
        super();
        this.state = {
            displayName: '',
            email: '',
            password: '',
            comfirmPassword: ''
        }
    }
    handleChange = e =>{
        const {name,value} = e.target;
        this.setState({[name]:value});
    }
    handleSubmit = async e =>{
        e.preventDefault();
        const {displayName, email, password, comfirmPassword} = this.state;
        if(password!==comfirmPassword){
            alert("Passwords don't match!")
            return;
        }
        try {
            const {user} = await auth.createUserWithEmailAndPassword(email,password);
            createUserProfileDocument(user,{displayName});
            this.setState({
                displayName: '',
                email: '',
                password: '',
                comfirmPassword: ''
            });
        }
        catch(e){
            alert(e);
            console.error(e)
        }
    }
    render(){
        const {displayName, email, password, comfirmPassword} = this.state;
        return(
           <div className='sign-up' onSubmit = {this.handleSubmit}>
               <h2 className = 'title'>I do not have a account</h2>
               <span>Sign up with your email and password</span>
               <form className='sign-up-form' onSubmit={this.handleSubmit}>
                   <FormInput type='text' name='displayName' value={displayName} onChange={this.handleChange} label='Display Name' required />
                   <FormInput type='email' name='email' value={email} onChange={this.handleChange} label='Email' required />
                   <FormInput type='password' name='password' value={password} onChange={this.handleChange} label='Password' required />
                   <FormInput type='password' name='comfirmPassword' value={comfirmPassword} onChange={this.handleChange} label='Confirm Password' required />
                   <CustomButton type='submit'>SIGN UP</CustomButton>
               </form>
           </div> 
        );
    }
}

export default SignUp;