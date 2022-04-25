import React from 'react';

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleSubmit(event) {
        const { username, password } = this.state;
        alert(`Details submitted: ${username} ${password}`);
        event.preventDefault();
    }

    handleChange(event) {
      this.setState({ [event.target.name]: event.target.value });
    }

    render() {
        const { username, password } = this.state;
        return (
          <div className="login">
            <h3>Login</h3>
            <form onSubmit={this.handleSubmit}>
              <div>
                <label htmlFor="username">
                  Username:
                  <input type="text" value={username} onChange={this.handleChange} name="username" />
                </label>
              </div>
              <div>
                <label htmlFor="password">
                  Password:
                  <input type="password" value={password} onChange={this.handleChange} name="password" />
                </label>
              </div>
              <input type="submit" value="submit" />
            </form>
          </div>
        );
    }
}

export default Login;
