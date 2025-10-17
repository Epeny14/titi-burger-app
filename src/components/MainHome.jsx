import React from 'react';
import '../assets/styles/accueil.css';
import Img1 from '../assets/img/Logo Titi Burger.svg';


const MainHome = () => {
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
            </div>
        </div>
    )
}

export default MainHome