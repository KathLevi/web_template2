import React from "react";
import axios from "axios";

class Register extends React.Component {
    constructor () {
        super();
        let random1 = Math.floor(Math.random() * 20) + 1,
            random2 = Math.floor(Math.random() * 10) + 1,
            sign = Math.floor(Math.random() * 3),
            answer = 0;
        if (sign === 0) {
            sign = '+';
            answer = random1 + random2;
        }
        else if (sign === 1) {
            sign = '-'; 
            answer = random1 - random2;
        }
        else {
            sign = '*'; 
            answer = random1 * random2;
        }
        this.state = {
            email: "",
            password: "",
            confirmPassword: "",
            rand1: random1,
            sign: sign,
            rand2: random2,
            userAns: "",
            answer: answer
        };
    }

    handleInputChange = event => {
        const target = event.target;
        this.setState({
            [target.name]:target.value
        });
    };

    submitForm = e => {
        e.preventDefault();
        if (this.state.password !== this.state.confirmPassword) {
            alert("passwords do not match");
        }
        else if (parseInt(this.state.userAns) !== this.state.answer){
            alert("you are a robot");
        }
        else {
            let data = {
                email: this.state.email,
                password: this.state.password,
                confirmPassword: this.state.confirmPassword
            };

            axios
                .post("http://127.0.0.1:5001/post", {
                    ...data
                })
                .then(function(response) {
                    alert("Request sent");
                })
                .catch(function(error) {
                    alert("Error");
                });
        }
    };
    render() {
        return (
            <div className="signInBox">
                <form className="form-signin" onSubmit={this.submitForm}>       
                    <h2 className="form-signin-heading">Register</h2>
                    
                    <h5 className="lbl">Email</h5>
                    <input type="email" className="form-control" name="email" onChange={this.handleInputChange} required="" autofocus="" />
                    
                    <h5 className="lbl">Password</h5>
                    <input type="password" className="form-control" name="password" onChange={this.handleInputChange} required=""/>      
                    
                    <h5 className="lbl">Retype Password<span id="noMatch">{this.state.error}</span></h5>
                    <input type="password" className="form-control" name="confirmPassword" onChange={this.handleInputChange} required=""/>      
                    
                        <h3 className="capcha">
                        <span id="number1">{this.state.rand1} </span>
                        <span id="sign">{this.state.sign}</span>
                        <span id="number2"> {this.state.rand2}</span>
                        <span> = </span>
                        <input type="number" id="capchaInput" name="userAns" onChange={this.handleInputChange} required=""/>
                    </h3>
                    
                    <button className="btn btn-lg btn-block mainBtn" type="submit">Register</button>  
                    
                    <h6 className="TnC">By registering you are agreeing to our <a href="#!TnC">Terms and Conditions</a></h6>
                </form>
            </div>
        );
    }
}

export default Register;