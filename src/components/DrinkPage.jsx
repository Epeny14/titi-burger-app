import React from 'react';
import { Link } from 'react-router-dom';
import "../assets/styles/boissons.css";
import Img30 from "../assets/img/logo.png";
import Img31 from "../assets/img/Clic & Collect.png";
import Img32 from "../assets/img/Bank Cards.png";
import Img33 from "../assets/img/jus-citron.jpg";
import Img34 from "../assets/img/coca-cola.jpg";
import Img35 from "../assets/img/bouteille-eau.jpeg";
import Img36 from "../assets/img/jus-de-pomme.jpeg";
import Img37 from "../assets/img/Instagram.png";
import Img38 from "../assets/img/Facebook.png";
import Img39 from "../assets/img/TikTok.png";

const DrinkPage = () => {
    return (
        <div>
            <div className="menu-section-drink">
                <div className="section-logo-drink">
                    <img src={Img30} alt="logo-titi" className="logo-titi-drink"></img>
                </div>

                <div className='borders-sections-drink'>
                    <div className='under-section-drink'>
                        <Link to="/clickcollect" className="link-collect-drink">
                            <p className='text-collect-drink'>Click & collect</p>
                        </Link>
                    </div>

                    <div className='under-section-drink-2'>
                        <p className='text-delivery-drink'>Livraison</p>
                    </div>
                </div>

                <div className="section-flex-drink">
                    <div className="section-description-drink">
                        <h1 className="title-drink-60">Nos Boissons</h1>
                        <p className="description-drink-1">Lorem ipsum dolor sit amet,<br />
                            consectetur adipiscing elit.<br /> Enim mi<br />
                            at ultrices praesent posuere sit.<br />
                            Pulvinar
                        </p>
                    </div>
                    <div className="section-collect-drink">
                        <img src={Img31} alt="image" className="img-drink"></img>
                        <p className="under-description-drink">commander et déguster</p>
                    </div>
                </div>

                <div className="section-progress-drink">
                    <div className="under-tracker-drink">
                        <div className="progress-tracker-9"></div>
                        <hr className="line-9"></hr>
                        <div className="progress-tracker-10"></div>
                        <hr className="line-10"></hr>
                        <div className="progress-tracker-11"></div>
                        <hr className="line-11"></hr>
                        <div className="progress-tracker-12"></div>
                        <hr className="line-12"></hr>
                        <img src={Img32} alt="bank cards" className="img-cards-drink"></img>
                        <p className="paycheck-drink">Paiement</p>
                    </div>
                </div>

                <div className="menu-flex-drink">
                    <div className="under-menu-flex-drink">
                        <div className="flex-menu-drink">
                            <label className="radio-8">
                                <input type="radio" checked></input>
                                <span class="custom-radio-8"></span>

                            </label>
                            <img src={Img33} alt="drink-image-1" className="burger-dark-drink"></img>
                            <h5 className="titi-dark-drink">Jus de citron</h5>
                        </div>
                        <div className="flex-menu-drink-2">
                            <label className="radio-9">
                                <input type="radio" checked></input>
                                <span class="custom-radio-9"></span>

                            </label>
                            <img src={Img34} alt="drink-image-2" className="original-burger-drink"></img>
                            <h5 className="titi-original-drink">Coca Cola</h5>
                        </div>
                    </div>
                    <div className="under-menu-flex-drink-2">
                        <div className="flex-menu-drink-3">
                            <label className="radio-10">
                                <input type="radio" checked></input>
                                <span class="custom-radio-10"></span>

                            </label>
                            <img src={Img35} alt="drink-image-3" className="vegie-burger-drink"></img>
                            <h5 className="titi-vegie-drink">Eau</h5>
                        </div>
                        <div className="flex-menu-drink-4">
                            <label className="radio-11">
                                <input type="radio" checked></input>
                                <span class="custom-radio-11"></span>

                            </label>
                            <img src={Img36} alt="drink-image-4" className="big-burger-drink"></img>
                            <h5 className="titi-big-drink">Jus de Pomme</h5>
                        </div>
                    </div>
                </div>

                <div className="section-start-drink">
                    <div className="border-start-drink">
                        <div className="under-border-start-drink">
                            <Link to="/desserts">
                                <p className="text-start-drink">Suivant</p>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            <div className="footer-drink">
                <div className='under-section-footer-drink'>
                    <div className='under-footer-drink-1'>
                        <ul className='footer-list-drink'>
                            <li className="list-legal-collect-drink">Mention legales</li>
                            <li className="list-cgu-collect-drink">CGU</li>
                            <li className="list-cgv-collect-drink">CGV</li>
                        </ul>
                    </div>
                    <div className='under-footer-drink-2'>
                        <ul className='footer-list-drink-1'>
                            <li className="list-web-collect-drink">Plan du site</li>
                            <li className="list-map-collect-drink">La carte</li>
                            <li className="list-titi-collect-drink">Titi Story</li>
                            <li className="list-story-collect-drink">Le Story</li>
                            <li className="list-actu-collect-drink">Actu</li>
                        </ul>
                    </div>
                    <div className='under-footer-drink-3'>
                        <ul className='footer-list-drink-2'>
                            <li>Où nous trouver</li>

                        </ul>
                    </div>
                    <div className='under-footer-drink-4'>
                        <ul className='footer-list-drink-3'>
                            <li className="list-contact-collect-drink">Contact</li>
                            <li className="list-find-collect-drink">Où nous trouver</li>
                            <li className='list-faq-collect-drink'>FAQ</li>
                        </ul>
                    </div>
                    <div className='under-footer-drink-5'>
                        <ul className='footer-list-drink-4'>
                            <li><img src={Img37} alt="logo instagram" className="logo-insta-drink-1"></img></li>
                            <li><img src={Img38} alt="logo facebook" className="logo-facebook-drink-2"></img></li>
                            <li><img src={Img39} alt="logo tik tok" className="logo-tiktok-drink-3"></img></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DrinkPage;