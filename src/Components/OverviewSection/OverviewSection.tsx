import Image from 'next/image';
import './OverviewSection.css';

export default function OverviewSection() {
    return (
        <>
            <section id="introduction" className="section-border">
                <div className="section-content">
                    <div className="overview-section-image-wrapper bounce">
                        <Image src="/images/the-big-idea.png" className='overview-section-image' fill sizes='(max-width: 600px) 15rem, 25rem' alt='lightbulb that represents a big idea'/>
                    </div>
                    <div className="overview-section-text-wrapper">
                        <h2>Introduction to getLinked
                            <br />
                            <span className="purple">tech Hackathon 1.0</span>
                        </h2>
                        <p>Our tech hackathon is a melting pot of visionaries, and its purpose is as clear as day: to shape the future. Whether you're a coding genius, a design maverick, or a concept wizard, you'll have the chance to transform your ideas into reality. Solving real-world problems, pushing the boundaries of technology, and creating solutions that can change the world, that's what we're all about!</p>
                    </div>
                </div>
                <div className="lens-flare">
                    <Image src="/images/lens-flare.png" fill alt="lens-flare"/>
                </div>
                <div className="lens-flare">
                    <Image src="/images/lens-flare.png" fill alt="lens-flare"/>
                </div>
            </section>
            <section id="rules" className="section-border">
                <div className="section-content">
                    <div className="overview-section-text-wrapper">
                        <h2>Rules and 
                            <br />
                            <span className="purple">Guidelines</span>
                        </h2>
                        <p>Our tech hackathon is a melting pot of visionaries, and its purpose is as clear as day: to shape the future. Whether you're a coding genius, a design maverick, or a concept wizard, you'll have the chance to transform your ideas into reality. Solving real-world problems, pushing the boundaries of technology, and creating solutions that can change the world, that's what we're all about!</p>
                    </div>
                    <div className="overview-section-image-wrapper bounce fade-in">
                        <Image src="/images/woman-jigsaw.png" className='overview-section-image' fill sizes='(max-width: 600px) 15rem, 25rem' alt='lightbulb that represents a big idea'/>
                    </div>
                </div>
                <div className="lens-flare">
                    <Image src="/images/lens-flare.png" fill alt="lens-flare"/>
                </div>
            </section>
        </>
    )
}