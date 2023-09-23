'use client';

import Link from 'next/link';
import { ButtonHTMLAttributes } from 'react';
import './Buttons.css';

type CTAProps = ButtonHTMLAttributes<HTMLButtonElement> & {
    link?: string
    callback?: Function
}

function handleCallback(callback: Function | undefined, params?: any[]) {
    if(!callback) return;

    if(params) {
        callback(params)
    }else {
        callback();
    }
}

export function CTA({link, callback, ...props}: CTAProps) {
    return (
        <>
            {link ?
                <Link href={link} className="cta-button">{props.children}</Link>
            : <button onClick={() => handleCallback(callback)} className="cta-button">{props.children}</button>}
        </>
    )
}