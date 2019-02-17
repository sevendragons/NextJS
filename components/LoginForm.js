import React, { Component } from 'react';
import Router from 'next/router';

import { loginUser } from '../lib/auth';

export default class LoginForm extends Component {
  state = {
    email: 'Sincere@april.biz',
    password: 'hildegard.org',
    error: '',
    isLoading: false
  }

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleSubmit = event => {
    const { email, password } = this.state;
    event.preventDefault();
    this.setState({error: "", isLoading: true })
        
    loginUser(email, password).then( () => {
      Router.push("/profile");
    })
    .catch(this.showError)

    console.log(this.state);
    
  }

  showError = err => {
    console.error(err);

    const error = err.response && err.response.data || err.message;    
    this.setState({ error, isLoading: false });
  
  }

  render() {
    const { email, password, error, isLoading } =this.state; 

    return (
      <form onSubmit={this.handleSubmit}>
        <div className="form-group">
           <label htmlFor="email" className="form-group-label">Email</label>
          <input type="email" placeholder="email" className="input-group"
                    name="email" onChange={this.handleChange}
                    value={email}  
                    />
        </div>
        <div className="form-group">
           <label htmlFor="email" className="form-group-label">Password</label>
          <input type="password" placeholder="password" className="input-group"
                    name="password" onChange={this.handleChange}
                    value={password}
                    />
        </div>
        <button disabled={isLoading} className="btn btn-info" type="submit">
          {isLoading ? "Sending" : "Submit"}
        </button>
      
        { error && <div>{error}</div>}
      </form>  
    )
  }
}
   
