"use client";
import git from '@/assets/icons/50 x 50/SOC Gh.png';
import lin from '@/assets/icons/50 x 50/SOC Lin.png';
import cv from '@/assets/icons/50 x 50/SOC CV 2.png'
import Image from 'next/image';
import { useTheme } from '@/context/themeContext';
import ContactForm from './utils/form';

const Links: React.FC = () => {
    const { theme } = useTheme();
    const buttonClass = theme === 'light' ? 'iconButtonLight' : 'iconButtonDark';

    return (
        <>
        <h1 className="title">Contáctame</h1>
        <div className="contactArea">
            <section>
            <ContactForm />
            </section>
            <section>
            <h1 className="sub-title">Info. Extra</h1>
            <div className='flex flex-col justify-around mt-8'>
                <div className='links'>
                <button
                    onClick={() => window.open("https://drive.google.com/file/d/1N8zH3t_5OFHuZ82NzRzgqekckGPFHBSK/view?usp=drive_link", "_blank")} 
                    className={buttonClass}>
                <Image src={cv} alt='Curriculum'/>
                </button>
                <p className='text'>Currículum</p>
                </div>
                <div className='links'>
                <button
                    onClick={() => window.open("https://github.com/EduardoCabrejas", "_blank")} 
                    className={buttonClass}>
                <Image src={git} alt='GitHub'/>
                </button>
                <p className='text'>GitHub</p>
                </div>
                <div className='links'>
                <button
                    onClick={() => window.open("https://linkedin.com/in/eduardo-cabrejas", "_blank")} 
                    className={buttonClass}>
                <Image src={lin} alt='Linkedin'/>
                </button>
                <p className='text'>Linkedin</p>
                </div>
                </div>
            </section>
        </div>
        </>
    )
}

export default Links;