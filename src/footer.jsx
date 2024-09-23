import React,{Component} from "react";
import "./footer.css"




class FooterComponent extends Component{
    render(){
        return(
            <footer>
                <div className="container">
                    <div className="mailPhone">
                        <div className="mail call">
                            <div className="mpicon"><box-icon name='envelope' type='solid' animation='tada' color='#ffffff' ></box-icon></div>
                            <input type="email" placeholder="info@youremail.com" />
                        </div>
                        <div className="linia"></div>
                        <div className="phoneNumber call">
                            <div className="mpicon"><box-icon name='phone' type='solid' animation='tada' color='#ffffff' ></box-icon></div>
                            <input type="tel" placeholder="+880 321 655 9985" />
                        </div>
                    </div>
                    <div className="quicklink">
                        <div className="tammy">
                            <h2>Tammy <span>Food</span></h2>
                            <p>Lorem Ipsum is simply dummy text of the printing <br /> and typesetting industry. Lorem Ipsum has been <br /> the industry's standard dummy text ever since <br /> the 1500s.</p>
                            <div className="footerIcons">
                                <box-icon name='facebook' type='logo' animation='tada' color='#007aff' ></box-icon>
                                <div className="lin"></div>
                                <box-icon name='instagram-alt' type='logo' animation='tada' color='#ef5295' ></box-icon>
                                <div className="lin"></div>
                                <box-icon name='twitter' type='logo' animation='tada' color='#00bcff' ></box-icon>
                                <div className="lin"></div>
                                <box-icon name='youtube' type='logo' animation='tada' color='#ff0000' ></box-icon>
                            </div>
                        </div>
                        <div className="quick">
                            <h2>QUICK LINK</h2>
                            <p>About Us</p>
                            <p>Menu</p>
                            <p>Blog</p>
                            <p>Conatct Us</p>
                        </div>
                        <div className="news">
                            <h2>NEWS LETTER</h2>
                            <p>Subscribe our newsletter to get our latest <br />
                            update & news</p>
                            <div className="news_inp">
                                <input type="email" placeholder="Your email address" />
                                <box-icon name='send' type='solid' animation='tada' color='#ffffff' ></box-icon>
                            </div>
                        </div>
                    </div>
                    <div className="linya"></div>
                    <p className="copyright"><box-icon name='copyright' color='#ffffff' ></box-icon> Copyright 2021 .Tammy Food. All Right Reserved.</p>
                </div>
            </footer>
        )
    }
}



export default FooterComponent;