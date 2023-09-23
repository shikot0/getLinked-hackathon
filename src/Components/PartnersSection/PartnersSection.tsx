import Link from 'next/link';
import Image from 'next/image';
import './PartnersSection.css';

export default function PartnersSection() {
    return (
        <section id="partners-section">
            <div className="section-content">
                <div className="partners-section-text-wrapper">
                    <h2>Partners and Sponsors</h2>
                    <p>Getlinked Hackathon 1.0 is honored to have the following major companies as its partners and sponsors.</p>
                </div>
                <div className="sponsors-grid">
                    <div className="sponsor-wrapper">
                        <Link href="" className="sponsor-link">
                            <Image src="/images/liberty-assured-company-logo.png" className="sponsor-image" fill alt=""/>
                        </Link>
                    </div>
                    <div className="sponsor-wrapper">
                        <Link href="" className="sponsor-link">
                            <Image src="/images/liberty-pay-company-logo.png" className="sponsor-image" fill alt=""/>
                        </Link>
                    </div>
                    <div className="sponsor-wrapper">
                        <Link href="" className="sponsor-link">
                            <Image src="/images/winwise-company-logo.png" className="sponsor-image" fill alt=""/>
                        </Link>
                    </div>
                    <div className="sponsor-wrapper">
                        <Link href="" className="sponsor-link">
                            <Image src="/images/whispersms-company-logo.png" className="sponsor-image" fill alt=""/>
                        </Link>
                    </div>
                    <div className="sponsor-wrapper">
                        <Link href="" className="sponsor-link">
                            <Image src="/images/paybox-company-logo.png" className="sponsor-image" fill alt=""/>
                        </Link>
                    </div>
                    <div className="sponsor-wrapper">
                        <Link href="" className="sponsor-link">
                            <Image src="/images/vuzual-plus-company-logo.png" className="sponsor-image" fill alt=""/>
                        </Link>
                    </div>
                </div>
            </div>
            <div className="lens-flare">
                <Image src="/images/lens-flare.png" fill alt="lens-flare"/>
            </div>
        </section>
    )
}