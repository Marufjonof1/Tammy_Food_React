import React,{Component} from "react";
import "./header.css"
import 'boxicons'
import hedimg from "./img/hed_img.png"

class HeaderComponent extends Component{
    render(){
        return(
            <header className="hed">
                <nav className="hnavbar">
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
                </nav>
                <div className="hed_content">
                   <div className="htext">
                   <p className="fast">Fast Delivery</p>
                    <h1>Discover Your Favourite <br /> Food and <span> Test Forever</span></h1>
                    <p className="lorem">Lorem Ipsum is simply dummy text of the printing and typesetting <br /> industry. Lorem Ipsum has been the industry's standard dummy <br /> text ever since the 1500s.</p>
                    <div className="btn">
                        <button className="getstart">Get Started</button>
                        <button className="info"><box-icon name='play-circle' color='#fff' ></box-icon> More Information</button>
                    </div>
                   </div>
                   <img src={hedimg} alt="" />
                </div>
            </header>
        )
    }
}



export default HeaderComponent;