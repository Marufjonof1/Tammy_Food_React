import React,{Component} from "react";
import "./main.css"
import 'boxicons'
import ico from "./img/icons1.png"
import icon from "./img/icons2.png"
import icons from "./img/icons3.png"
import vector from "./img/chiziq.png"
import birinchi from "./img/oqat1.png"
import ikkinchi from "./img/oqat6.png"
import uchinchi from "./img/oqat3.png"
import tortinchi from "./img/oqat4.png"
import beshinchi from "./img/oqat5.png"
import oltinchi from "./img/oqat6.png"
import yettinchi from "./img/oqat7.png"
import sakkizinchi from "./img/oqat8.png"
import yulduz from "./img/yulduz.png"
import bola from "./img/bola.png"
import playmarket from "./img/playmarket.png"
import appstore from "./img/appstore.png"
import phone from "./img/phone.png"







class MainComponent extends Component{
    render(){
        return(
            <main>
                <div className="container">
                <div className="main_content">
                    <div className="m_text1">
                        <h1>How it works</h1>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. <br /> Lorem Ipsum has been the industry</p>
                    </div>
                    <div className="mC_content1">
                        <div className="order three">
                            <div className="icons icons1">
                                <img src={ico} alt="" />
                            </div>
                            <h4>Order Now</h4>
                            <p className="mcLorem">Lorem Ipsum is simply dummy text of the <br /> printing and typesetting industry. Lorem Ipsum <br /> has been the industry</p>
                        </div>
                        <img className="vector1 vec" src={vector} alt="" />
                        <div className="delivery">
                            <div className="icons icons2">
                                <img src={icon} alt="" />
                            </div>
                            <h4>Get Delivery</h4>
                            <p className="mcLorem">Lorem Ipsum is simply dummy text of the <br /> printing and typesetting industry. Lorem Ipsum <br /> has been the industry</p>
                        </div>
                        <img className="vector2 vec" src={vector} alt="" />
                        <div className="payment three">
                            <div className="icons icons3">
                                <img src={icons} alt="" />
                            </div>
                            <h4>Payment</h4>
                            <p className="mcLorem">Lorem Ipsum is simply dummy text of the <br /> printing and typesetting industry. Lorem Ipsum <br /> has been the industry</p>
                        </div>
                    </div>
                    <div className="mC_content2">
                        <div className="m_text2">
                            <h1>Our Delicious Dish</h1>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting <br /> industry. Lorem Ipsum has been the industry</p>
                        </div>
                        <div className="mCoqat1">
                            <div className="oqat oqat1">
                                <img className="oqatimg" src={birinchi} alt="" />
                                <img className="yulduz" src={yulduz} alt="" />
                                <h4>New York Vega</h4>
                                <p>Lorem Ipsum is simply dummy text of <br /> the printing and typesetting....</p>
                                <div className="price">
                                    <h5>$7.10</h5>
                                    <div className="cartshare">
                                        <div className="cart"><box-icon name='cart-download' color='#ffffff' ></box-icon></div>
                                        <div className="share"><box-icon name='share-alt' type='solid' color='#ffffff' ></box-icon></div>
                                    </div>
                                </div>
                            </div>
                            <div className="oqat oqat2">
                                <img className="oqatimg" src={ikkinchi} alt="" />
                                <img className="yulduz" src={yulduz} alt="" />
                                <h4>New York Vega</h4>
                                <p>Lorem Ipsum is simply dummy text of <br /> the printing and typesetting....</p>
                                <div className="price">
                                    <h5>$7.10</h5>
                                    <div className="cartshare">
                                        <div className="cart"><box-icon name='cart-download' color='#ffffff' ></box-icon></div>
                                        <div className="share"><box-icon name='share-alt' type='solid' color='#ffffff' ></box-icon></div>
                                    </div>
                                </div>
                            </div>
                            <div className="oqat oqat3">
                                <img className="oqatimg" src={uchinchi} alt="" />
                                <img className="yulduz" src={yulduz} alt="" />
                                <h4>New York Vega</h4>
                                <p>Lorem Ipsum is simply dummy text of <br /> the printing and typesetting....</p>
                                <div className="price">
                                    <h5>$7.10</h5>
                                    <div className="cartshare">
                                        <div className="cart"><box-icon name='cart-download' color='#ffffff' ></box-icon></div>
                                        <div className="share"><box-icon name='share-alt' type='solid' color='#ffffff' ></box-icon></div>
                                    </div>
                                </div>
                            </div>
                            <div className="oqat oqat4">
                                <img className="oqatimg" src={tortinchi} alt="" />
                                <img className="yulduz" src={yulduz} alt="" />
                                <h4>New York Vega</h4>
                                <p>Lorem Ipsum is simply dummy text of <br /> the printing and typesetting....</p>
                                <div className="price">
                                    <h5>$7.10</h5>
                                    <div className="cartshare">
                                        <div className="cart"><box-icon name='cart-download' color='#ffffff' ></box-icon></div>
                                        <div className="share"><box-icon name='share-alt' type='solid' color='#ffffff' ></box-icon></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="mCoqat2">
                            <div className="oqat oqat1">
                                <img className="oqatimg" src={beshinchi} alt="" />
                                <img className="yulduz" src={yulduz} alt="" />
                                <h4>New York Vega</h4>
                                <p>Lorem Ipsum is simply dummy text of <br /> the printing and typesetting....</p>
                                <div className="price">
                                    <h5>$7.10</h5>
                                    <div className="cartshare">
                                        <div className="cart"><box-icon name='cart-download' color='#ffffff' ></box-icon></div>
                                        <div className="share"><box-icon name='share-alt' type='solid' color='#ffffff' ></box-icon></div>
                                    </div>
                                </div>
                            </div>
                            <div className="oqat oqat2">
                                <img className="oqatimg" src={oltinchi} alt="" />
                                <img className="yulduz" src={yulduz} alt="" />
                                <h4>New York Vega</h4>
                                <p>Lorem Ipsum is simply dummy text of <br /> the printing and typesetting....</p>
                                <div className="price">
                                    <h5>$7.10</h5>
                                    <div className="cartshare">
                                        <div className="cart"><box-icon name='cart-download' color='#ffffff' ></box-icon></div>
                                        <div className="share"><box-icon name='share-alt' type='solid' color='#ffffff' ></box-icon></div>
                                    </div>
                                </div>
                            </div>
                            <div className="oqat oqat3">
                                <img className="oqatimg" src={yettinchi} alt="" />
                                <img className="yulduz" src={yulduz} alt="" />
                                <h4>New York Vega</h4>
                                <p>Lorem Ipsum is simply dummy text of <br /> the printing and typesetting....</p>
                                <div className="price">
                                    <h5>$7.10</h5>
                                    <div className="cartshare">
                                        <div className="cart"><box-icon name='cart-download' color='#ffffff' ></box-icon></div>
                                        <div className="share"><box-icon name='share-alt' type='solid' color='#ffffff' ></box-icon></div>
                                    </div>
                                </div>
                            </div>
                            <div className="oqat oqat4">
                                <img className="oqatimg" src={sakkizinchi} alt="" />
                                <img className="yulduz" src={yulduz} alt="" />
                                <h4>New York Vega</h4>
                                <p>Lorem Ipsum is simply dummy text of <br /> the printing and typesetting....</p>
                                <div className="price">
                                    <h5>$7.10</h5>
                                    <div className="cartshare">
                                        <div className="cart"><box-icon name='cart-download' color='#ffffff' ></box-icon></div>
                                        <div className="share"><box-icon name='share-alt' type='solid' color='#ffffff' ></box-icon></div>
                                    </div>
                                </div>
                            </div>
                            <div className="navigator">
                                <div className="raqam"><box-icon name='left-arrow-alt' animation='tada' flip='horizontal' color='#ffd982' ></box-icon></div>
                                <div className="raqam">1</div>
                                <div className="raqam">2</div>
                                <div className="raqam">3</div>
                                <div className="raqam">4</div>
                                <div className="raqam">5</div>
                                <div className="raqam"><box-icon name='right-arrow-alt' flip='horizontal' animation='tada' color='#ffd982' ></box-icon></div>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
                    <div className="mC_content3">
                        <div className="container">
                            <div className="mC3img">
                                <img src={bola} alt="" />
                            </div>
                            <div className="m_text3">
                                <p className="our">Our Target</p>
                                <h1>We Earn Your Trust and are <br /> Diligent in Your Case</h1>
                                <p className="mc3_lorems">When an unknown printer took a galley of type and scrambled it to <br /> make a type specimen book. It has survived not only five centuries, <br /> but also the leap into electronic typesetting,</p>
                                <p className="mc3_lorems">It was popularised in the 1960s with the release of Letraset sheets <br /> containing Lorem Ipsum passages, and more recently with desktop <br /> publishing software like Aldus PageMaker including versions of Lorem <br /> Ipsum.</p>
                                <button className="orderNow">Order Now</button>
                            </div>
                        </div>
                    </div>
                        <div className="mC_content4">
                          <div className="container">
                            <div className="txt_phone">
                            <div className="m_text4">
                                <h1>To Get 15% Discount <br /> Download The App</h1>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting <br /> industry. Lorem Ipsum has been the industry's standard dummy <br /> text ever since the 1500s.</p>
                                <div className="playmarket">
                                    <img src={playmarket} alt="" />
                                    <img src={appstore} alt="" />
                                </div>
                            </div>
                            <div className="phone">
                                <img src={phone} alt="" />
                            </div>
                            </div>
                          </div>
                        </div>
            </main>
        )
    }
}



export default MainComponent;