import React,{Component} from "react";
import "./main.css"
import how from "./img/howitwork.png"
import birinchi from "./img/oqat1.png"
import yulduz from "./img/yulduz.png"
import cart from "./img/cart.png"
import share from "./img/share.png"
import ikkinchi from"./img/oqat2.png"
import uchinchi from "./img/oqat3.png"
import tortinchi from "./img/oqat4.png"
import beshinchi from "./img/oqat5.png"
import oltinchi from "./img/oqat6.png"
import yettinchi from "./img/oqat7.png"
import sakkizinchi from "./img/oqat8.png"


class MainComponent extends Component{
    render(){
        return(
            <main className="main">
                <div className="main_content1"></div>
                <div className="main_content2">
                    <h1 className="our">Our Delicious Dish</h1>
                    <p className="lrem">Lorem Ipsum is simply dummy text of the printing and typesetting <br /> industry. Lorem Ipsum has been the industry</p>
                    <div className="m2_content1">
                        <div className="mc_content1">
                            <div className="box">
                                <img src={birinchi} alt="" />
                                <img className="yulduz" src={yulduz} alt="" />
                                <h3>New York Vega</h3>
                                <p>Lorem Ipsum is simply dummy text of <br /> the printing and typesetting....</p>
                                <div className="price">
                                    <h4>$7.10</h4>
                                    <div className="icon">
                                        <img src={cart} alt="" />
                                        <img src={share} alt="" />
                                    </div>
                                </div>
                            </div>
                            <div className="box">
                                <img src={ikkinchi} alt="" />
                                <img className="yulduz" src={yulduz} alt="" />
                                <h3>New York Vega</h3>
                                <p>Lorem Ipsum is simply dummy text of <br /> the printing and typesetting....</p>
                                <div className="price">
                                    <h4>$7.10</h4>
                                    <div className="icon">
                                        <img src={cart} alt="" />
                                        <img src={share} alt="" />
                                    </div>
                                </div>
                            </div>
                            <div className="box">
                                <img src={uchinchi} alt="" />
                                <img className="yulduz" src={yulduz} alt="" />
                                <h3>New York Vega</h3>
                                <p>Lorem Ipsum is simply dummy text of <br /> the printing and typesetting....</p>
                                <div className="price">
                                    <h4>$7.10</h4>
                                    <div className="icon">
                                        <img src={cart} alt="" />
                                        <img src={share} alt="" />
                                    </div>
                                </div>
                            </div>
                            <div className="box">
                                <img src={tortinchi} alt="" />
                                <img className="yulduz" src={yulduz} alt="" />
                                <h3>New York Vega</h3>
                                <p>Lorem Ipsum is simply dummy text of <br /> the printing and typesetting....</p>
                                <div className="price">
                                    <h4>$7.10</h4>
                                    <div className="icon">
                                        <img src={cart} alt="" />
                                        <img src={share} alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="mc_content2">
                        <div className="box">
                                <img src={beshinchi} alt="" />
                                <img className="yulduz" src={yulduz} alt="" />
                                <h3>New York Vega</h3>
                                <p>Lorem Ipsum is simply dummy text of <br /> the printing and typesetting....</p>
                                <div className="price">
                                    <h4>$7.10</h4>
                                    <div className="icon">
                                        <img src={cart} alt="" />
                                        <img src={share} alt="" />
                                    </div>
                                </div>
                            </div>
                            <div className="box">
                                <img src={oltinchi} alt="" />
                                <img className="yulduz" src={yulduz} alt="" />
                                <h3>New York Vega</h3>
                                <p>Lorem Ipsum is simply dummy text of <br /> the printing and typesetting....</p>
                                <div className="price">
                                    <h4>$7.10</h4>
                                    <div className="icon">
                                        <img src={cart} alt="" />
                                        <img src={share} alt="" />
                                    </div>
                                </div>
                            </div>
                            <div className="box">
                                <img src={yettinchi} alt="" />
                                <img className="yulduz" src={yulduz} alt="" />
                                <h3>New York Vega</h3>
                                <p>Lorem Ipsum is simply dummy text of <br /> the printing and typesetting....</p>
                                <div className="price">
                                    <h4>$7.10</h4>
                                    <div className="icon">
                                        <img src={cart} alt="" />
                                        <img src={share} alt="" />
                                    </div>
                                </div>
                            </div>
                            <div className="box">
                                <img src={sakkizinchi} alt="" />
                                <img className="yulduz" src={yulduz} alt="" />
                                <h3>New York Vega</h3>
                                <p>Lorem Ipsum is simply dummy text of <br /> the printing and typesetting....</p>
                                <div className="price">
                                    <h4>$7.10</h4>
                                    <div className="icon">
                                        <img src={cart} alt="" />
                                        <img src={share} alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        )
    }
}

export default MainComponent;