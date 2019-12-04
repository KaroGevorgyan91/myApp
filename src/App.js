import React, { Component } from 'react';
import {Button} from '@material-ui/core/';
import { TextField } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import 'typeface-roboto';



class App extends Component{
  constructor(props){
    super(props)
    this.state = {
      login:"",
      password: "",
      emailError: "",
      passwordError: ""  
    } 
  }
  updateInputLog(key, value){
    return this.setState({
      [key]: value,
    })
    }
  
    validate(e, p){
      let emailError = "";
      let passwordError = "";
      let minNumberofChars = 6;
      let maxNumberofChars = 16;
      let reEm = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      let re = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
      if(reEm.test(e) !== true){
        emailError ="Invalid email! it should contain at(@) and dot(.)";
      }
      if(p.length < minNumberofChars || p.length > maxNumberofChars ){
        passwordError = "Invalid Password";
    } else if(re.test(p) !== true){
      passwordError = "min 8 chars password, with at least one symbol,\n upper and lower case letters and a number";
    }
      if(emailError || passwordError){
        this.setState({emailError:emailError, passwordError:passwordError, login:"", password:""});
        return false;
      }
      alert(e);
      alert(p);
      this.setState({login:"", password:"", emailError:"", passwordError:""})
    }; 
  render () {
    return ( 
      <div style={{background: 'linear-gradient(45deg, #64b5f6 30%, #673ab7 70%)',
                    border: 0,
                    borderRadius: 3,
                    boxShadow: '0 3px 5px 2px rgba(105, 105, 135, .3)',
                    color: 'white',
                    height: 48,
                    alignItemn: 'center',
                    padding: '0 30px',
                    margin: "auto",
                    display:'absalute',
                    justify:'center',
                    position: 'absolute', 
                    left: '50%', 
                    top: '20%',
                    transform: 'translate(-50%, -50%)'}} 
          className= "App">
          <div> <h3>Password and Email validation </h3> </div>
            <div>
               <TextField
              required
              id="standard-required"
              autoFocus
              label="Add Email"
              defaultValue="Email"
              margin="normal"
              value = {this.state.login}
              onChange ={e=> this.updateInputLog("login", e.target.value)}
              />
            </div>
              {this.state.emailError? <div style = {{fontSize:10, color: "red"}}>{this.state.emailError}</div>:null}
            <div>
              <TextField
          required
          id="standard-password-input"
          label="Password"
          type="password"
          autoComplete="current-password"
          margin="normal"
          value = {this.state.password}
          onChange ={e => this.updateInputLog("password", e.target.value)}
        
          />
        </div>
    {this.state.passwordError? <div style = {{fontSize:10, color: "red"}}>{this.state.passwordError}</div>:null}
          <div> 
            <div>
                  <Button variant="contained" color = "primary"
                  onClick = {() => this.validate(this.state.login, this.state.password)}>Submit
                  </Button>
            </div>
         

          </div>
      </div>
    );
  }
}

export default App;
// //autofocus