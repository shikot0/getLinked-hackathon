'use client';
import Link from 'next/link';
import Image from 'next/image';
import { CTA } from '@/Components/Buttons/Buttons';
import { FormEvent, useEffect, useState } from 'react';
import './page.css';
import { Toaster, toast } from 'sonner';
import { API_URL } from '@/utils/statics';

type ContactInfo = {
    email: string,
    phone_number: string,
    first_name: string,
    message: string
}

export default function ContactPage() {
    const [contactInfo, setContactInfo] = useState<ContactInfo>({
        email: '',
        phone_number: '',
        first_name: '',
        message: ''
    })

    function handleChangeContactInfo(e: FormEvent<HTMLInputElement> | FormEvent<HTMLTextAreaElement>) {
        const target = e.target as HTMLInputElement;
        setContactInfo((prev: ContactInfo) => {
            return {...prev, [target?.name]: target?.value}
        })
    }


    function handleSendData() {
        const {email, phone_number, first_name, message} = contactInfo;

        if(!email || !phone_number || !first_name || !message) {
            return toast.error('Incomplete data provided')
        }

        const toastPromise = fetch(`${API_URL}/hackathon/contact-form`, {
            method: 'POST',
            headers: {"Content-Type": "application/json"},
            cache: 'no-store',
            body: JSON.stringify(contactInfo)
        })
        .then(res => res.json())
        .then(data => data)
        .catch(err => {
            console.log(err);
        })

        toast.promise(toastPromise, {
            loading: 'Connecting to server',
            success: (data) => {
                return `Your message was sent`
            },
            error: 'There has been an error'
        }) 

        // fetch(`${API_URL}/hackathon/contact-form`, {
        //     method: 'POST',
        //     headers: {"Content-Type": "application/json"},
        //     cache: 'no-store',
        //     body: JSON.stringify(contactInfo)
        // })
        // .then(res => res.json())
        // .then(data => data)
        // .catch(err => {
        //     console.log(err);
        // })

    }
 
    // useEffect(() => {
    //     console.log(contactInfo)
    // }, [contactInfo])
    return (
        <main>
            <section id="contact-section">
                <div className="section-content">
                    <div className="contact-section-text-wrapper">
                        <h2 className="purple">Get in touch</h2>
                        <p>Contact <br /> Information</p>
                        <p>27, Alara Street <br /> Yaba 100012 <br/> Lagos State</p>
                        <p>Call Us: 07067981819</p>
                        <p>We are open from Monday-Friday <br /> 08:00am - 05:00pm</p>
                        <div className="social-media-section">
                            <b className="purple">Share on</b>
                            <div className="social-media-links-wrapper">
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
                    </div>
                    <div className="form-wrapper">
                        <h3 className="purple">Questions or need assistance? <br /> Let us know about it!</h3>
                        <input className="form-input" value={contactInfo.first_name} onInput={e => handleChangeContactInfo(e)} type="text" name="first_name" placeholder="First name" />
                        <input className="form-input" value={contactInfo.email} onInput={e => handleChangeContactInfo(e)} type="email" name="email" placeholder="Mail" />
                        <input className="form-input" value={contactInfo.phone_number} onInput={e => handleChangeContactInfo(e)} type="tel" name="phone_number" placeholder="Phone Number" />
                        <textarea className="form-input" name="message" onInput={e => handleChangeContactInfo(e)} placeholder="Message"></textarea>
                        <CTA callback={handleSendData}>Submit</CTA>
                    </div>
                    <div className="mobile-social-media-section">
                        <b className="purple">Share on</b>
                        <div className="social-media-links-wrapper">
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
                </div>
            </section>
            <Toaster theme="dark" position="top-right" close-button  />
        </main>
    )
}