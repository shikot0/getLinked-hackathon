import Image from 'next/image';
import './FAQSection.css';

export default function FAQSection() {
    return (
        <section id="faq-section" className="section-border">
            <div className="section-content">
                <div className="faq-section-text-wrapper">
                    <h2>
                        Frequently Asked
                        <br />
                        <span className="purple">Questions</span>
                    </h2>
                    <p>We got answers to the questions that you might want to ask about getlinked Hackathon 1.0</p>
                    <div className="faq-wrapper">
                        <div className="faq">
                            <div className="faq-question-wrapper">
                                <p className="faq-question">Can I work on a project I started before the hackathon?</p>
                                <div className="faq-image-wrapper">
                                    <Image src="/images/plus.png" className="faq-image" fill alt="plus"/>
                                </div>
                            </div>
                            <div className="faq-answer"></div>
                        </div>
                        <div className="faq">
                            <div className="faq-question-wrapper">
                                <p className="faq-question">What happens if I need help during the hackathon?</p>
                                <div className="faq-image-wrapper">
                                    <Image src="/images/plus.png" className="faq-image" fill alt="plus"/>
                                </div>
                            </div>
                            <div className="faq-answer"></div>
                        </div>
                        <div className="faq">
                            <div className="faq-question-wrapper">
                                <p className="faq-question">What happens if I dont have an idea for a project?</p>
                                <div className="faq-image-wrapper">
                                    <Image src="/images/plus.png" className="faq-image" fill alt="plus"/>
                                </div>
                            </div>
                            <div className="faq-answer"></div>
                        </div>
                        <div className="faq">
                            <div className="faq-question-wrapper">
                                <p className="faq-question">Can I join a team or do I have to come with one?</p>
                                <div className="faq-image-wrapper">
                                    <Image src="/images/plus.png" className="faq-image" fill alt="plus"/>
                                </div>
                            </div>
                            <div className="faq-answer"></div>
                        </div>
                        <div className="faq">
                            <div className="faq-question-wrapper">
                                <p className="faq-question">What happens after the hackathon ends?</p>
                                <div className="faq-image-wrapper">
                                    <Image src="/images/plus.png" className="faq-image" fill alt="plus"/>
                                </div>  
                            </div>
                            <div className="faq-answer"></div>
                        </div>
                        <div className="faq">
                            <div className="faq-question-wrapper">
                                <p className="faq-question">Can I work on a project I started before the hackathon?</p>
                                <div className="faq-image-wrapper">
                                    <Image src="/images/plus.png" className="faq-image" fill alt="plus"/>
                                </div>
                            </div>
                            <div className="faq-answer"></div>
                        </div>
                    </div>
                </div>
                <div className="faq-section-image-wrapper bounce">
                    <Image className="faq-section-image" src="/images/man-sitting-on-a-cloud.png" fill alt="man sitting on a cloud" />
                </div>
            </div>
            <div className="lens-flare">
                <Image src="/images/lens-flare.png" fill alt="lens-flare"/>
            </div>
        </section>
    )
}