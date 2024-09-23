import React,{Component} from "react";
import "./header.css"
import 'boxicons'
import hedCsalat from "./img/hedC_salat.png"
import hedCback from "./img/hedC_back.png"

class HeaderComponent extends Component{
    render(){
        return(
            <header className="hed">
                <nav className="hnavbar">
                    <div className="container">
                    <div className="hnavbar_left">
                        <h1>Tammy <span>Food</span></h1>
                    </div>
                    <div className="hnavbar_right">
                        <ul className="list">
                            <li>Home</li>
                            <li>About us</li>
                            <li>Menu</li>
                            <li>Blog</li>
                            <li>Contact Us</li>
                        </ul>
                        <button className="menu"><box-icon name='menu'></box-icon></button>
                    </div>
                    </div>
                </nav>
                    <div className="hed_content">
                        <div className="hed_text">
                            <p className="fast">Fast Delivery</p>
                            <h1 className="discover">Discover Your Favourite <br /> Food and <span>Test Forever</span></h1>
                            <p className="hed_lorem">Lorem Ipsum is simply dummy text of the printing and typesetting <br /> industry. Lorem Ipsum has been the industry's standard dummy <br /> text ever since the 1500s.</p>
                            <div className="btn">
                                <button className="getstr">Get Started</button>
                                <button className="info"> <box-icon className="play" name='play-circle' color='#ffc130' ></box-icon> More Information</button>
                            </div>
                        </div>
                        <div className="hed_img">
                            <img className="hedBack" src={hedCback} alt="" />
                            <img className="hedSalat" src={hedCsalat} alt="" />
                        </div>
                    </div>
            </header>
        )
    }
}



export default HeaderComponent;