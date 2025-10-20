import React, { useState } from 'react';
import '../assets/styles/accueil.css';
import Img1 from '../assets/img/Logo Titi Burger.svg';
import Img2 from '../assets/img/resto.jpg';
import Img3 from '../assets/img/Burger1.jpg';
import Img4 from '../assets/img/Burger2.jpg';
import Img5 from '../assets/img/Burger3.jpg';
import Img6 from '../assets/img/Burger4.jpg';
import Img7 from '../assets/img/Burger-5.jpg';

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
        </div>
    )
}
export default MainHome