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
      open: false,
      userName: null,
      password: null,
      actions: [
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
        onTouchTap={this.handleSubmit.bind(this)}
        />
      ]
    };
  }

  handleOpen(){
    this.setState({open: true})
  }

  handleSubmit(e){
    e.preventDefault();
    axios.post('/login', {
      userName: this.state.userName,
      password: this.state.password
    })
    .then((res)=>{
      console.log('this request has been a success!');
      this.setState({open: false})
    })
    .catch((err)=>{
      console.log('this request has been a FAIL! ', err);
    })
  }

  render() {
    return (
      <MuiThemeProvider>
         <div>
            <RaisedButton label="Sign Up" onTouchTap={this.handleOpen.bind(this)}/>
            <Dialog 
              title="Sign up for an account" 
              open={this.state.open}
              actions={this.state.actions}
            />
         </div>
      </MuiThemeProvider>
    );
  }

}



export default SignUp;