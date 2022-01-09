import React, { Component } from "react";
import Auth from "./auth";
import "./login.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope,faKey } from '@fortawesome/free-solid-svg-icons'

export default class Login extends Component {
    constructor(props){
        super(props);
        this.login=this.login.bind(this);
        this.logout=this.logout.bind(this);
        }
        login(){
        Auth.authenticate();
        }
        logout(){
        Auth.signout();
        }
    render() {
        return (
            <div className="back swbcP">
                <img className="logo" src={require("../Logo-smart-waves.png")} alt="Smart Waves Inc. logo"/>
                <div className="div-center">
            <form >
                <div className="form-group swbcB specialB">
                    <FontAwesomeIcon icon={faEnvelope} className="icons"/>
                    <input type="email" className="nb" placeholder="Enter email" />
                </div>
                <br/>
                <div className="form-group swbcB specialB">
                <FontAwesomeIcon icon={faKey} className="icons"/>
                    <input type="password" className="nb" placeholder="Enter password" />
                </div>
                <br/>
                <div className="form-group">
                    <div className="d-flex custom-control custom-checkbox">
                        <input type="checkbox" className="nb" id="customCheck1" />
                        <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                        <input type="checkbox" className="nb" id="customCheck2" />
                        <label className="custom-control-label" htmlFor="customCheck2">Forgot Password</label>
                    </div>
                </div>
                <div className="login">
                <button type="submit" className="btn btn-primary btn-block swbcG" onClick={this.login}  to="/Dashboard"><a href="/Dashboard" className="nodec">Login</a></button>
                </div>
            </form>
            </div>
            </div>
        );
    }
}