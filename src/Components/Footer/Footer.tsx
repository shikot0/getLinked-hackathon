import Link from 'next/link';
import Image from 'next/image';
import './Footer.css';

export default function Footer() {
    return (
        <footer>
            <div className="footer-content">
                <div className="footer-text-wrapper">
                    <div className="footer-text-wrapper-top-section">
                        <Link href="/" className="logo-link">
                            <Image src="/images/icon.png" className="logo" fill alt="logo"/>
                        </Link>
                        <p>Getlinked Tech Hackathon is a technology innovation program established by a group of organizations with the aim of showcasing young and talented individuals in the field of technology</p>
                    </div>
                    <a className="terms-of-use" href="#privacy-policy-section">
                        Terms of use
                        <div className="divider"></div>
                        Privacy Policy
                    </a>
                </div>
                <div className="footer-links-wrapper">
                    <h3 className="purple">Useful Links</h3>
                    <a href="#introduction" className="page-link">Overview</a>
                    <a href="#timeline-section" className="page-link">Timeline</a>
                    <a href="#faq-section" className="page-link">FAQs</a>
                    <Link href="/register" className="page-link">Register</Link>
                    <div className="social-media-links-wrapper">
                        <b className="purple">Follow us</b>
                        <Link href="/" className="social-media-link">
                            <Image src="/images/instagram-logo.png" fill alt="instagram"/>
                        </Link>
                        <Link href="/" className="social-media-link">
                            <Image src="/images/x-logo.png" fill alt="x"/>
                        </Link>
                        <Link href="/" className="social-media-link">
                            <Image src="/images/facebook-logo.png" fill alt="facebook"/>
                        </Link>
                        <Link href="/" className="social-media-link">
                            <Image src="/images/linkedin-logo.png" fill alt="linkedin"/>
                        </Link>
                    </div>
                </div>
                <div className="footer-information-wrapper">
                    <h3 className="purple">Contact Us</h3>
                    <div className="footer-page-info">
                        <div className="page-info-image-wrapper">
                            <Image src="/images/phone-logo.png" className="page-info-image" fill alt=""/>
                        </div>
                        <p>+234 679 81819</p>
                    </div>
                    <div className="footer-page-info">
                        <div className="page-info-image-wrapper">
                            <Image src="/images/location-logo.png" className="page-info-image" fill alt=""/>
                        </div>
                        <p>
                            27,Alara Street
                            <br />
                            Yaba 100012
                            <br />
                            Lagos State
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    )
}