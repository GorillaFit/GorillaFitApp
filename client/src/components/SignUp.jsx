import React from 'react';
import Dialog from 'material-ui/Dialog';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import injectTapEventPlugin from 'react-tap-event-plugin';
import axios from 'axios';
injectTapEventPlugin();

class SignUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      signUpOpen: false,
      logInOpen: false,
      userName: null,
      password: null,
      signUpActions: [
        <TextField
          floatingLabelText="Username"
          onChange = {(event, newValue)=>
            this.setState({userName: newValue})}
        />,
        <TextField
          type="password"
          ref="password"
          floatingLabelText="Password"
          onChange = {(event, newValue)=>
            this.setState({password: newValue})}
        />,
        <RaisedButton
        label="Submit"
        onTouchTap={this.handleSignUpSubmit.bind(this)}
        />
      ], 
      logInActions: [
        <TextField
          floatingLabelText="Username"
          onChange = {(event, newValue)=>
            this.setState({userName: newValue})}
        />,
        <TextField
          type="password"
          ref="password"
          floatingLabelText="Password"
          onChange = {(event, newValue)=>
            this.setState({password: newValue})}
        />,
        <RaisedButton
        label="Log-in"
        onTouchTap={this.handleLogInSubmit.bind(this)}
        />
      ], 

    };
  }

  handleSignUpOpen() {
    this.setState({signUpOpen: true});
  }
  
  handleSignUpClose() {
    this.setState({signUpOpen: false});
  }

  handleLogInOpen() {
    this.setState({logInOpen: true});
  }
  
  handleLogInClose() {
    this.setState({logInOpen: false});
  }

  handleSignUpSubmit(e) {
    e.preventDefault();
    axios.post('/signup', {
      userName: this.state.userName,
      password: this.state.password
    })
    .then((res)=>{
      console.log('this request has been a success!');
      this.setState({signUpOpen: false});
      this.setState({logInOpen: true});
    })
    .catch((err)=>{
      console.log('this request has been a FAIL! ', err);
    });
  }

  handleLogInSubmit(e) {
    e.preventDefault();
    axios.post('/login', {
      username: this.state.userName,
      password: this.state.password
    })
    .then((res)=>{
      console.log('this request has been a success!');
      this.setState({logInOpen: false});
      this.props.setUsername(JSON.parse(res.config.data).username)
    })
    .catch((err)=>{
      console.log('this request has been a FAIL! ', err);
    });
  }

  render() {
    return (
      <MuiThemeProvider>
         <div>
            <RaisedButton primary={true} label="Sign Up" onTouchTap={this.handleSignUpOpen.bind(this)}/> <RaisedButton label="Log-in" onTouchTap={this.handleLogInOpen.bind(this)}/>
            <Dialog 
              title="Sign up for an account" 
              open={this.state.signUpOpen}
              actions={this.state.signUpActions}
              onRequestClose={this.handleSignUpClose.bind(this)}
            />
            <Dialog 
              title="Log into your account!" 
              open={this.state.logInOpen}
              actions={this.state.logInActions}
              onRequestClose={this.handleLogInClose.bind(this)}
            />
         </div>
      </MuiThemeProvider>
    );
  }

}

export default SignUp;