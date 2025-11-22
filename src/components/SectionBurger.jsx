import React from 'react';
import "../assets/styles/burger.css";
import Img10 from "../assets/img/logo.png";
import { Link } from 'react-router-dom';
import Img11 from "../assets/img/Clic & Collect.png";
import Img12 from "../assets/img/Bank Cards.png";
import Img13 from "../assets/img/Burger4.jpg";
import Img14 from "../assets/img/Burger1.jpg";
import Img15 from "../assets/img/Burger2.jpg";
import Img16 from "../assets/img/Burger3.jpg";


const SectionBurger = () => {
    return (
        <div>
            <div className="menu-section">
                <div className="section-logo-5">
                    <img src={Img10} alt="logo-titi" className="logo-titi-5"></img>
                </div>

                <div className='borders-sections-13'>
                    <div className='under-section-burger'>
                        <Link to="/clickcollect" className="link-collect-13">
                            <p className='text-collect-13'>Click & collect</p>
                        </Link>
                    </div>

                    <div className='under-section-14'>
                        <p className='text-delivery-13'>Livraison</p>
                    </div>
                </div>

                <div className="section-flex-1">
                    <div className="section-description">
                        <h1 className="title-burgers-1">Nos Burgers</h1>
                        <p className="description-burger-1">Lorem ipsum dolor sit amet,<br />
                            consectetur adipiscing elit.<br /> Enim mi<br />
                            at ultrices praesent posuere sit.<br />
                            Pulvinar
                        </p>
                    </div>
                    <div className="section-collect-100">
                        <img src={Img11} alt="image" className="img-burger"></img>
                        <p className="under-description-1">commander et déguster</p>
                    </div>
                </div>

                <div className="section-progress">
                    <div className="under-tracker">
                        <div className="progress-tracker-1"></div>
                        <hr className="line-1"></hr>
                        <div className="progress-tracker-2"></div>
                        <hr className="line-2"></hr>
                        <div className="progress-tracker-3"></div>
                        <hr className="line-3"></hr>
                        <div className="progress-tracker-4"></div>
                        <hr className="line-4"></hr>
                        <img src={Img12} alt="bank cards" className="img-cards"></img>
                        <p className="paycheck">Paiement</p>
                    </div>
                </div>

                <div className="menu-flex-1">
                    <div className="under-menu-flex-1">
                        <div className="flex-menu-1">
                            <label className="radio">
                                <input type="radio" checked></input>
                                <span class="custom-radio"></span>

                            </label>
                            <img src={Img13} alt="burger-image-1" className="burger-dark"></img>
                            <h5 className="titi-dark">Le Dark Burger</h5>
                        </div>
                        <div className="flex-menu-2">
                            <label className="radio-1">
                                <input type="radio" checked></input>
                                <span class="custom-radio-1"></span>

                            </label>
                            <img src={Img14} alt="burger-image-2" className="original-burger"></img>
                            <h5 className="titi-original">L'original Titi</h5>
                        </div>
                    </div>
                    <div className="under-menu-flex-2">
                        <div className="flex-menu-3">
                            <label className="radio-2">
                                <input type="radio" checked></input>
                                <span class="custom-radio-2"></span>

                            </label>
                            <img src={Img15} alt="burger-image-3" className="vegie-burger"></img>
                            <h5 className="titi-vegie">Vegie Burger</h5>
                        </div>
                        <div className="flex-menu-4">
                            <label className="radio-3">
                                <input type="radio" checked></input>
                                <span class="custom-radio-3"></span>

                            </label>
                            <img src={Img16} alt="burger-image-4" className="big-burger"></img>
                            <h5 className="titi-big">Le Big Big</h5>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SectionBurger