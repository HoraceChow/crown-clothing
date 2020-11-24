import React from 'react';
import './App.css';
import {Switch,Route} from 'react-router-dom';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component.jsx';
import Header from './component/header/header.component.jsx';
import SignInAndSignUpPage from './pages/sign-in-and-sign-out/sign-in-and-sign-out.component.jsx';
import {auth,createUserProfileDocument} from './firebase/firebase.utils';

class App extends React.Component{
  constructor(){
    super();
    this.state = {
      currentUser: null
    }
  }
  unsubscribeFromAuth = null;
  componentDidMount(){
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if(userAuth){
        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot(snapShot => {
          this.setState({
            currentUser:{
              id:snapShot.id,
              ...snapShot.data()
            }
          });
        });
        console.log(userAuth);
      }
      else this.setState({currentUser:userAuth});
    })
  }
  componentWillUnmount(){
    this.unsubscribeFromAuth();
  }
  render(){
    return (
      <div className='app'>
        <Header currentUser={this.state.currentUser}/> 
        <Switch>
          <Route exact path='/' component={HomePage}/>
          <Route path='/shop' component={ShopPage}/>
          <Route path='/signin' component={SignInAndSignUpPage}/>
        </Switch>
      </div>
    );
  }
}

export default App;
/*
included scss, react-router-dom


*/
