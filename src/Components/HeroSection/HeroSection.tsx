import Image from 'next/image';
import { CTA } from '../Buttons/Buttons';
import './HeroSection.css'; 

export default function HeroSection() {
    return (
        <section id="hero-section" className="section-border">
            <div className="section-content">
                <div className="headline-text-wrapper">
                    <p className="headline-text">Igniting a Revolution in HR Innovation</p>
                    <div className="headline-image-wrapper">
                        <Image className="headline-image" src="/images/purple-underline.png" fill alt="purple underline" />
                    </div>
                </div>
                <div className="hero-text-wrapper">
                    <h1>
                        getLinked Tech
                        <br />
                        Hackathon <span className="purple">1.0</span>
                        <div className="lightbulb-image-wrapper">
                            <Image src="/images/lightbulb.png" className="lightbulb-image" fill alt="lightbulb"/>
                        </div>
                        <div className="chain-impact-image-wrapper">
                            <div className="chain-image-wrapper">
                                <Image src="/images/chain.png" className="chain-image" fill alt="chain"/>
                            </div>
                            <div className="impact-image-wrapper">
                                <Image src="/images/impact.png" className="impact-image" fill alt="chain"/>
                        </div>
                    </div>
                    </h1>
                    <p>Participate in getlinked tech Hackathon 2023 stand a chance to win a Big prize</p>
                    <CTA>Register</CTA>
                    <div className="countdown-wrapper">
                        <div className="countdown">
                            <h3 className="countdown-value">00</h3>
                            <p className="countdown-heading">H</p>
                        </div>
                        <div className="countdown">
                            <h3 className="countdown-value">00</h3>
                            <p className="countdown-heading">M</p>
                        </div>
                        <div className="countdown">
                            <h3 className="countdown-value">00</h3>
                            <p className="countdown-heading">S</p>
                        </div>
                    </div>
                    {/* <div className="lightbulb-image-wrapper">
                        <Image src="/images/lightbulb.png" className="lightbulb-image" fill alt="lightbulb"/>
                    </div> */}
                    {/* <div className="chain-impact-image-wrapper">
                        <div className="chain-image-wrapper">
                            <Image src="/images/chain.png" className="chain-image" fill alt="chain"/>
                        </div>
                        <div className="impact-image-wrapper">
                            <Image src="/images/impact.png" className="impact-image" fill alt="chain"/>
                        </div>
                    </div> */}
                </div>
                <div className="hero-image-wrapper">
                    <Image className='hero-image' src='/images/man-wearing-vr-glasses.png' fill sizes='(max-width: 600px) 25rem, 35rem' alt='man wearing VR' />
                    <Image className='hero-image' src='/images/cyber-globe.png' fill sizes='(max-width: 600px) 25rem, 35rem' alt='cyber-globe' />
                </div>
            </div>
            <div className="lens-flare">
                <Image src="/images/lens-flare.png" fill alt="lens-flare"/>
            </div>
            <div className="lens-flare">
                <Image src="/images/lens-flare.png" fill alt="lens-flare"/>
            </div>
        </section>
    )
}