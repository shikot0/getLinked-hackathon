import Image from 'next/image';
import { CTA } from '../Buttons/Buttons';
import './PrivacySection.css';

export default function PrivacySection() {
    return (
        <section id="privacy-section" className="section-border">
            <div className="section-content">
                <div className="privacy-section-info-wrapper">
                    <div className="privacy-section-text-wrapper">
                        <h2>
                            Privacy Policy and
                            <br />
                            <span className="purple">Terms</span>
                        </h2>
                        <small className="updated-at">Last updated on September 12, 2023</small>
                        <p>Below are our privacy-policies, which outline a lot of goodies. It's our aim to always take care of our participants</p>
                    </div>
                    <div className="privacy-policy-wrapper">
                        <p>At getlinked tech Hackathon 1.0, we value your privacy and are committed to protecting your personal information. This Privacy Policy outlines how we collect, use, disclose, and safeguard your data when you participate in our tech hackathon event. By participating in our event, you consent to the practices described in this policy</p>
                        <h3 className="purple">Licensing Policy</h3>
                        <b>Here are the terms of our Standard License:</b>
                        <div className="policy">
                            <div className="policy-image-wrapper">
                                <Image src="/images/green-tick.png" className="policy-image" fill alt="green check"/>
                            </div>
                            <p>The Standard License grants you a non-exclusive right to navigate and register for our event.</p>
                        </div>
                        <div className="policy">
                            <div className="policy-image-wrapper">
                                <Image src="/images/green-tick.png" className="policy-image" fill alt="green check"/>
                            </div>
                            <p>You are licensed to use the item available at any free source sites, for your project developement.</p>
                        </div>
                        <CTA>Read More</CTA>
                    </div>
                </div>
                <div className="privacy-section-image-wrapper bounce">
                    <Image src="/images/man-standing-on-padlock.png" className="privacy-section-image" fill alt="man standing on padlock"/>
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