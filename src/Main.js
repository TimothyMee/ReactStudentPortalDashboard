import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import PropTypes from 'prop-types';

const propTypes = {
  submenu: PropTypes.arrayOf(PropTypes.shape({
      icon : PropTypes.string,
      Link : PropTypes.string,
      title : PropTypes.string.isRequired
  }))
};

const centerStyle = {
    justifyContent: 'center'
};
const fontSize = {
    fontSize: '25px'
};
const border = {
    border: '2px solid red'
};
const bgColorHarsh = {
    backgroundColor: '#ecf0f5'
};
const bgColorWhite = {
    backgroundColor: 'white',
    boxShadow:'2px 2px 2px #A1A1A1'
};
const mainDiv = {
    top: '0',
    bottom: '0',
    minHeight: '630px',
    height:'100%',
    backgroundColor: '#ecf0f5'
};


class Main extends Component{
    render() {
        return (
            <div className="container" style={mainDiv}>
                <div className={"col-md-12"} style={centerStyle}>
                    <div className={"col-md-12"}>&nbsp;</div>
                    <div className={"col-md-12"}>&nbsp;</div>
                    <div className={"col-md-12"}>&nbsp;</div>
                    <div className={"col-md-9 col-md-offset-1"} style={bgColorWhite}>
                        <br/>
                        <div className = {"col-lg-3 col-xs-6"}>
                            <div className={"small-box bg-aqua"}>
                                <div className="inner">
                                    <p style={fontSize}>Registration</p>
                                </div>
                                <div className={"icon"}>
                                    <i className={"fa ion-person"}></i>
                                </div>
                                <a href="#" className={"small-box-footer"}> Open </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

Main.propTypes = propTypes;
export default Main;
