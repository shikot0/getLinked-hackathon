import Image from 'next/image';
import './PrizesSection.css';

export default function PrizesSection() {
    return (
        <section id="prizes-section">
            <div className="section-content">
                <div className="prizes-section-image-wrapper bounce">
                    <Image className="prizes-section-image" src="/images/trophy.png" fill alt="trophy"/>
                </div>
                <div className="prizes-section-info-wrapper">
                    <div className="prizes-section-text-wrapper">
                        <h2>
                            Prizes and 
                            <br />
                            <span className="purple">Rewards</span>
                        </h2>
                        <p>Highlight of the prizes or rewards for winners and for participants.</p>
                    </div>
                    <div className="rewards-wrapper">
                        <div className="reward">
                            <div className="reward-image-wrapper">
                                <Image src="/images/silver-medal.png" className="reward-image" fill alt='medal'/>
                            </div>
                            <div className="position-wrapper">
                                <h3>2nd</h3>
                                <small>Runner</small>
                            </div>
                            <p className="prize">N300,000</p>
                        </div>
                        <div className="reward first-place">
                            <div className="reward-image-wrapper">
                                <Image src="/images/gold-medal.png" className="reward-image" fill alt='medal'/>
                            </div>
                            <div className="position-wrapper">
                                <h3>1st</h3>
                                <small>Runner</small>
                            </div>
                            <p className="prize">N400,000</p>
                        </div>
                        <div className="reward">
                            <div className="reward-image-wrapper">
                                <Image src="/images/bronze-medal.png" className="reward-image" fill alt='medal'/>
                            </div>
                            <div className="position-wrapper">
                                <h3>3rd</h3>
                                <small>Runner</small>
                            </div>
                            <p className="prize">N150,000</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}