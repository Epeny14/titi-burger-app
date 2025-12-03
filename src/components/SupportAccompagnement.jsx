import React from 'react';
import { Link } from 'react-router-dom';
import "../assets/styles/accompagnement.css";
import Img20 from "../assets/img/logo.png";
import Img21 from "../assets/img/Clic & Collect.png";
import Img22 from "../assets/img/Bank Cards.png";
import Img23 from "../assets/img/frites.jpg";
import Img24 from "../assets/img/frites-2.jpg";
import Img25 from "../assets/img/salades.jpg";
import Img26 from "../assets/img/frites-3.jpg";
import Img27 from "../assets/img/Instagram.png";
import Img28 from "../assets/img/Facebook.png";
import Img29 from "../assets/img/TikTok.png";

const SupportAccompagnement = () => {
    return (
        <div>
            <div className="menu-section-10">
                <div className="section-logo-60">
                    <img src={Img20} alt="logo-titi" className="logo-titi-60"></img>
                </div>

                <div className='borders-sections-60'>
                    <div className='under-section-accompaniment'>
                        <Link to="/clickcollect" className="link-collect-60">
                            <p className='text-collect-60'>Click & collect</p>
                        </Link>
                    </div>

                    <div className='under-section-60'>
                        <p className='text-delivery-60'>Livraison</p>
                    </div>
                </div>

                <div className="section-flex-60">
                    <div className="section-description-60">
                        <h1 className="title-burgers-60">Nos Accompagnements</h1>
                        <p className="description-accompaniment-1">Lorem ipsum dolor sit amet,<br />
                            consectetur adipiscing elit.<br /> Enim mi<br />
                            at ultrices praesent posuere sit.<br />
                            Pulvinar
                        </p>
                    </div>
                    <div className="section-collect-60">
                        <img src={Img21} alt="image" className="img-accompaniment"></img>
                        <p className="under-description-60">commander et déguster</p>
                    </div>
                </div>

                <div className="section-progress-60">
                    <div className="under-tracker-60">
                        <div className="progress-tracker-5"></div>
                        <hr className="line-5"></hr>
                        <div className="progress-tracker-6"></div>
                        <hr className="line-6"></hr>
                        <div className="progress-tracker-7"></div>
                        <hr className="line-7"></hr>
                        <div className="progress-tracker-8"></div>
                        <hr className="line-8"></hr>
                        <img src={Img22} alt="bank cards" className="img-cards-60"></img>
                        <p className="paycheck-60">Paiement</p>
                    </div>
                </div>

                <div className="menu-flex-60">
                    <div className="under-menu-flex-60">
                        <div className="flex-menu-60">
                            <label className="radio-4">
                                <input type="radio" checked></input>
                                <span class="custom-radio-4"></span>

                            </label>
                            <img src={Img23} alt="accompaniment-image-1" className="burger-dark-60"></img>
                            <h5 className="titi-dark-60">Frites</h5>
                        </div>
                        <div className="flex-menu-61">
                            <label className="radio-5">
                                <input type="radio" checked></input>
                                <span class="custom-radio-5"></span>

                            </label>
                            <img src={Img24} alt="accompaniment-image-2" className="original-burger-60"></img>
                            <h5 className="titi-original-60">Frites de Patate Douce</h5>
                        </div>
                    </div>
                    <div className="under-menu-flex-61">
                        <div className="flex-menu-62">
                            <label className="radio-6">
                                <input type="radio" checked></input>
                                <span class="custom-radio-6"></span>

                            </label>
                            <img src={Img25} alt="accompaniment-image-3" className="vegie-burger-60"></img>
                            <h5 className="titi-vegie-60">Salades</h5>
                        </div>
                        <div className="flex-menu-63">
                            <label className="radio-7">
                                <input type="radio" checked></input>
                                <span class="custom-radio-7"></span>

                            </label>
                            <img src={Img26} alt="accompaniment-image-4" className="big-burger-60"></img>
                            <h5 className="titi-big-60">Maïs Frit</h5>
                        </div>
                    </div>
                </div>

                <div className="section-start-60">
                    <div className="border-start-60">
                        <div className="under-border-start-60">
                            <Link to="/boissons">
                                <p className="text-start-60">Suivant</p>
                            </Link>
                        </div>
                    </div>
                </div>

            </div>
            <div className="footer-accompaniment">
                <div className='under-section-footer-accompaniment'>
                    <div className='under-footer-accompaniment-1'>
                        <ul className='footer-list-accompaniment'>
                            <li className="list-legal-collect-accompaniment">Mention legales</li>
                            <li className="list-cgu-collect-accompaniment">CGU</li>
                            <li className="list-cgv-collect-accompaniment">CGV</li>
                        </ul>
                    </div>
                    <div className='under-footer-accompaniment-2'>
                        <ul className='footer-list-accompaniment-1'>
                            <li className="list-web-collect-accompaniment">Plan du site</li>
                            <li className="list-map-collect-accompaniment">La carte</li>
                            <li className="list-titi-collect-accompaniment">Titi Story</li>
                            <li className="list-story-collect-accompaniment">Le Story</li>
                            <li className="list-actu-collect-accompaniment">Actu</li>
                        </ul>
                    </div>
                    <div className='under-footer-accompaniment-3'>
                        <ul className='footer-list-accompaniment-2'>
                            <li>Où nous trouver</li>

                        </ul>
                    </div>
                    <div className='under-footer-accompaniment-4'>
                        <ul className='footer-list-accompaniment-3'>
                            <li className="list-contact-collect-accompaniment">Contact</li>
                            <li className="list-find-collect-accompaniment">Où nous trouver</li>
                            <li className='list-faq-collect-accompaniment'>FAQ</li>
                        </ul>
                    </div>
                    <div className='under-footer-accompaniment-5'>
                        <ul className='footer-list-accompaniment-4'>
                            <li><img src={Img27} alt="logo instagram" className="logo-insta-accompaniment-1"></img></li>
                            <li><img src={Img28} alt="logo facebook" className="logo-facebook-accompaniment-2"></img></li>
                            <li><img src={Img29} alt="logo tik tok" className="logo-tiktok-accompaniment-3"></img></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SupportAccompagnement