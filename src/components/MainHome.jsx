import React, { useState } from 'react';
import '../assets/styles/accueil.css';
import Img1 from '../assets/img/Logo Titi Burger.svg';
import Img2 from '../assets/img/resto.jpg';
import Img3 from '../assets/img/Burger1.jpg';
import Img4 from '../assets/img/Burger2.jpg';
import Img5 from '../assets/img/Burger3.jpg';
import Img6 from '../assets/img/Burger4.jpg';
import Img7 from '../assets/img/Burger-5.jpg';
import Img8 from '../assets/img/Burger4.jpg';
import Img9 from "../assets/img/Jus.jpg";
import Img10 from "../assets/img/Burger6.jpg";

const images = [Img3, Img4, Img5, Img6, Img7];



const MainHome = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === images.length - 1 ? 0 : prevIndex + 1
        );
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? images.length - 1 : prevIndex - 1
        );
    };

    return (
        <div>
            <div className='header'>
                <div className='section-logo'>
                    <img src={Img1} alt='logo' className='logo' ></img>
                </div>

                <div className='borders-sections'>
                    <div className='under-section-1'>
                        <p className='text-collect'>Click & collect</p>
                    </div>

                    <div className='under-section-2'>
                        <p className='text-delivery'>Livraison</p>
                    </div>
                </div>

                <div className='section-menu'>
                    <div className='under-section-menu'>
                        <p className='text-menu-1'>La carte</p>
                        <p className='text-menu-2'>Titi story</p>
                        <p className='text-menu-3'>Le resto</p>
                        <p className='text-menu-4'>Actus</p>
                        <p className='text-menu-5'>Réserver</p>
                    </div>
                </div>
            </div>

            <div className='section-1'>
                <div className='under-flex-1'>
                    <h1 className='title-resto'>Le Resto</h1>
                    <img src={Img2} alt="image" className="image-1"></img>

                </div>
                <div className='under-flex-2'>
                    <h1 className='title-story'>Titi Story</h1>
                    <h5 className='title-team'>Une équipe Authentique</h5>
                    <p className='text-story'>
                        Lorem ipsum dolor sit amet consectetur.
                        Sed interdum sociis tincidunt dolor.<br />
                        Molestie lacus ut sagittis proin interdum eu proin pellentesque blandit.<br />
                        Eu eu sagittis auctor eu egestas lorem malesuada sed etiam.<br />
                        At convallis bibendum nisl lobortis a sodales facilisis.
                    </p>
                    <p className='read-next'>Lire la suite</p>
                </div>
            </div>

            <div className='section-2'>
                <div className='under-flex-3'>
                    <h1 className='title-burger'>Nos Burgers</h1>
                    <p className='text-about'>
                        Lorem ipsum dolor sit amet consectetur.<br />
                        Leo enim enim velit velit id vulputate magna.
                    </p>
                </div>
                <div className='under-flex-4'>
                    <div className='carousel'>
                        <button className="carousel-button left" onClick={prevSlide}>
                            ❮
                        </button>

                        <div className="carousel-image-container">
                            <img
                                src={images[currentIndex]}
                                alt={`slide-${currentIndex}`}
                                className="carousel-image"
                            />
                        </div>

                        <button className="carousel-button right" onClick={nextSlide}>
                            ❯
                        </button>
                    </div>
                </div>
            </div>

            <div className='section-3'>
                <div className="under-title">
                    <h1 className="title-news">Actus</h1>
                </div>
                <div className='section-flex'>
                    <div className="under-section-flex-1">
                        <h4 className='title-article-1'>Article 1</h4>
                        <img src={Img8} alt='image' className="img-article-1"></img>
                        <div className="button-section-1">
                            <p className='paragraph-plus-1'>En savoir +</p>
                        </div>
                    </div>
                    <div className="under-section-flex-2">
                        <h4 className='title-article-2'>Article 2</h4>
                        <img src={Img9} alt='image' className="img-article-2"></img>
                        <div className="button-section-2">
                            <p className='paragraph-plus-2'>En savoir +</p>
                        </div>
                    </div>
                    <div className="under-section-flex-3">
                        <h4 className='title-article-3'>Article 3</h4>
                        <img src={Img10} alt='image' className="img-article-3"></img>
                        <div className="button-section-3">
                            <p className='paragraph-plus-3'>En savoir +</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className='section-newsletter'>
                <div className='newsletter-flex'>
                    <div className='flex-1'>
                        <p>Des offres et des actus</p>
                        <p>Chaque semaine sur Titi Burger</p>
                    </div>
                    <div className='flex-2'>
                        <p>c'est par ici</p>
                    </div>
                    <div className='flex-3'>
                        <form>
                            <input type='text' id='name'></input>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default MainHome