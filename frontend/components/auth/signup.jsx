import React from 'react';
import { signup } from '../../actions/session_actions';
import { Link, withRouter } from 'react-router';

class SignUp extends React.Component{
  constructor(props){
    super(props);

    this.state = {username: "", email: "", password: ""};
    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.parseErrors = this.parseErrors.bind(this);
    this.resetErrors = this.resetErrors.bind(this);
  }

  componentDidMount(){
    
  }

  handleInput(field){
    return (e) => {
      e.preventDefault();
      this.setState({[field]: e.target.value});
    };
  }

  handleSubmit(e){
    e.preventDefault();
    this.resetErrors();
    this.props.signup(this.state).then(() => this.props.router.push('/'), console.log("something went wrong"));
  }

  resetErrors(){
    let elements = document.getElementsByClassName("show");
    if (elements.length > 0){
      for (let i = 0; i < elements.length; i++){
        elements[i].setAttribute("class", "form-errors");
      }
    }
  }

  parseErrors(errors){
    let errorHash = {};
    let first_word;
    let element;
    errors.forEach((error) => {
      first_word = error.split(" ")[0];
      errorHash[first_word] = error;
      element = document.getElementById(`${first_word}`);
      if (element){
        element.setAttribute("class", "show-signup-error");
      }
    });
    return errorHash;
  }

  render(){
    const errors = this.props.errors;
    let collectErrors = errors ? this.parseErrors(errors) : "";
    const usernameErrors = collectErrors.Username ? collectErrors.Username : "";
    const emailErrors = collectErrors.Email ? collectErrors.Email : "";
    const passwordErrors = collectErrors.Password ? collectErrors.Password : "";

    return (
      <div className="signup-form-page">
        <div className="signup-container">
          <h3>Sign up with your email address </h3>
          <form className="signup-form">
            <input type="text" value={this.state.username} placeholder="e.g.marshmallow" onChange={this.handleInput('username')}/><div className="form-errors" id="Username">{usernameErrors}</div>
            <br/>
            <input type="email" value={this.state.email} placeholder="e.g.marshmallow@email.com" onChange={this.handleInput('email')}/><div className="form-errors" id="Email">{emailErrors}</div>
            <br/>
            <input type="password" value={this.state.password} placeholder="Choose a password" onChange={this.handleInput('password')}/><div className="form-errors" id="Password">{passwordErrors}</div>
            <br/>
            <button onClick={this.handleSubmit}>SIGN UP</button>
          </form>
          <br/>
          <div className="login-link-container">
          <Link className="login-link" to='/login'>Already have an account? Log In here</Link>
          </div>
        </div>
        <div className="slogan-container">
          <h2>Get the right music, right now</h2>
            <br/>
            <p>Listen to millions of songs for free.</p>
        </div>
      </div>
    );
  }
}

export default withRouter(SignUp);
