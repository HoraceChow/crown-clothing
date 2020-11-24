import React from 'react';
import SignIn from '../../component/sign-in/sign-in.component.jsx';
import SignUp from '../../component/sign-up/sign-up.component.jsx';
import './sign-in-and-sign-out.styles.scss';

const SignInAndSignUpPage = ()=>(
    <div className='sign-in-and-sign-out'>
        <SignIn/>
        <SignUp/>
    </div>
);

export default SignInAndSignUpPage;