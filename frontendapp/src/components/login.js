import React, { Component } from 'react';

class Login extends Component {

    state = {
        credentials: {username: '', password: '', email: '', first_name: '', last_name: ''}
    }

    login = async event => {
        console.log(this.state.credentials)

        try {
            const response = await fetch('http://127.0.0.1:8000/auth/', {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(this.state.credentials)
            });
            if (!response.ok) {
                throw Error(response.statusText);
            }

            const json_response = await response.json()

            await this.props.userLogin(json_response.token);

        } catch (error) {
            console.log(error);
        }
    }

    register = async event => {
        try {
            const response = await fetch('http://127.0.0.1:8000/api/users/', {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(this.state.credentials)
            });
            if (!response.ok) {
                throw Error(response.statusText);
            }

            const json_response = await response.json()

            console.log(json_response)

        } catch (error) {
            console.log(error);
        }
    }

    inputChanged = event => {
        const cred = this.state.credentials;
        cred[event.target.name] = event.target.value;
        this.setState({credentials: cred});
    }

    render() {
        return (
            <div>
                <h1>Login user</h1>


                <label>
                    Username:
                    <input type="text" name="username"
                     value={this.state.credentials.username}
                     onChange={this.inputChanged}/>
                </label>

                <br/>

                <label>
                    Password:
                    <input type="password" name="password"
                     value={this.state.credentials.password}
                     onChange={this.inputChanged}/>
                </label>

                <br/>

                <label>
                    Email Address:
                    <input type="email" name="email"
                     value={this.state.credentials.email}
                     onChange={this.inputChanged}/>
                </label>

                <br/>

                <label>
                    First Name:
                    <input type="text" name="first_name"
                     value={this.state.credentials.first_name}
                     onChange={this.inputChanged}/>
                </label>

                <br/>

                <label>
                    Last Name:
                    <input type="text" name="last_name"
                     value={this.state.credentials.last_name}
                     onChange={this.inputChanged}/>
                </label>

                <br/>

                <button onClick={this.login}>Login</button>
                <button onClick={this.register}>Register</button>
            </div>
        );
    }
}

export default Login;