import React from 'react';
import { Link } from 'react-router-dom';
import "../assets/styles/section-collect.css";
import Img1 from "../assets/img/logo.png";
import Img2 from "../assets/img/Logo Titi Burger.png";
import Img3 from "../assets/img/Shopify.png";
import Img4 from "../assets/img/Bicycle.png";
import Img5 from "../assets/img/Instagram.png";
import Img6 from "../assets/img/Facebook.png";
import Img7 from "../assets/img/TikTok.png";



const SectionCollect = () => {
    return (
        <div>
            <div className="background-section">
                <div className="logo-titi-2">
                    <img src={Img1} alt="logo-titi" className="logo-section"></img>
                </div>

                <div className="section-border">
                    <div className="logo-titi-3">
                        <img src={Img2} alt="logo-titi-2" className="logo-border"></img>
                    </div>
                    <p className="paragraph-order">Vous souhaitez commander</p>
                    <div className="section-choice">
                        <div className="under-choice-1">
                            <Link to="/burgers" className="link-choice-1">
                                <p className="away">Emporter</p>
                            </Link>
                            <img src={Img3} alt="logo-shopify" className="img-shopify"></img>
                        </div>
                        <div className="under-choice-2">
                            <Link to="/burgers" className="link-choice-2">
                                <p className="delivery">En Livraison</p>
                            </Link>
                            <img src={Img4} alt="logo-bicycle" className="img-bicycle"></img>
                        </div>
                    </div>
                </div>
            </div>

            <div className="footer-1">
                <div className='under-section-footer-1'>
                    <div className='under-footer-2'>
                        <ul className='footer-list-2'>
                            <li className="list-legal-collect">Mention legales</li>
                            <li className="list-cgu-collect">CGU</li>
                            <li className="list-cgv-collect">CGV</li>
                        </ul>
                    </div>
                    <div className='under-footer-3'>
                        <ul className='footer-list-3'>
                            <li className="list-web-collect">Plan du site</li>
                            <li className="list-map-collect">La carte</li>
                            <li className="list-titi-collect">Titi Story</li>
                            <li className="list-story-collect">Le Story</li>
                            <li className="list-actu-collect">Actu</li>
                        </ul>
                    </div>
                    <div className='under-footer-4'>
                        <ul className='footer-list-4'>
                            <li>Où nous trouver</li>

                        </ul>
                    </div>
                    <div className='under-footer-5'>
                        <ul className='footer-list-5'>
                            <li className="list-contact-collect">Contact</li>
                            <li className="list-find-collect">Où nous trouver</li>
                            <li className='list-faq-collect'>FAQ</li>
                        </ul>
                    </div>
                    <div className='under-footer-6'>
                        <ul className='footer-list-6'>
                            <li><img src={Img5} alt="logo instagram" className="logo-insta-1"></img></li>
                            <li><img src={Img6} alt="logo facebook" className="logo-facebook-1"></img></li>
                            <li><img src={Img7} alt="logo tik tok" className="logo-tiktok-1"></img></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default SectionCollect