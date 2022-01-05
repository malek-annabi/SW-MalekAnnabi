import React, { Component } from "react";
import Auth from "./auth";
const isIn = function(){
    if(Auth.getAuth()){
        return '<h1>hello dashboard</h1>';
    }
    return '<h1>please login</h1>';
    }
export default class Dashboard extends Component {
    bingo=isIn();
    render(){
        return (
            <div className="content" dangerouslySetInnerHTML={{__html: this.bingo}}></div>
        );
    }
}