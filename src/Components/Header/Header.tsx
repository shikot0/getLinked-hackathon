'use client';
import Link from 'next/link';
import Image from 'next/image';
import { CTA } from '../Buttons/Buttons';
import { useState } from 'react';
import './Header.css';

export function Header() {
    const [isMobileNavVisible, setIsMobileNavVisible] = useState(false);

    function openNav() {
        setIsMobileNavVisible(true);
    }
      
    function closeNav() {
        setIsMobileNavVisible(false)
    }
    return(
        <header>
            <div className="header-content">
                <Link href="/" className="logo-link">
                    <Image src="/images/icon.png" className="logo" fill alt="logo"/>
                </Link>
                <div className={`header-links ${isMobileNavVisible ? 'visible' : ''}`}>
                    <div className="page-links-wrapper">
                        <a href="/#timeline-section" onClick={() => closeNav()} className="page-link">Timeline</a>
                        <a href="/#introduction" onClick={() => closeNav()} className="page-link">Overview</a>
                        <a href="/#faq-section" onClick={() => closeNav()} className="page-link">FAQs</a>
                        <Link href="/contact" onClick={() => closeNav()} className="page-link">Contact</Link>
                        <button className="close-mobile-nav-button" onClick={closeNav}>
                            <Image src="/images/close-mobile-nav.png" width="14" height="14" alt="menu"/>
                        </button>
                    </div>
                    <CTA link="/register">Register</CTA>
                </div>
                <button className="open-mobile-nav-button" onClick={openNav}>
                    <Image src="/images/mobile-nav.png" fill alt="menu"/>
                </button>
            </div>
        </header>
    )
}