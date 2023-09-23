'use client';
import Image from 'next/image';
import { useState, useEffect, FormEvent, useRef, LegacyRef, ChangeEvent } from 'react';
import Select from '@/Components/Select/Select';
import { API_URL } from '@/utils/statics';
import './page.css';
import { CTA } from '@/Components/Buttons/Buttons';
import { Toaster, toast } from 'sonner';
import { Types } from 'mongoose';

type Registration = {
    email: string,
    phone_number: string,
    team_name: string
    group_size: number | null,
    project_topic: string,
    category: string,
    privacy_policy_accepted: boolean
}

export default function RegisterPage() { 
    const [registration, setRegistration] = useState<Registration>({
        email: '',
        phone_number: '',
        team_name: '',
        group_size: null,
        project_topic: '',
        category: '',
        privacy_policy_accepted: false
    })
    const [categories, setCategories] = useState([]);
    const congratulationsModal = useRef<HTMLDialogElement>();
    const groupSizes = [
        {value: 1, label: 1},
        {value: 2, label: 2},
        {value: 3, label: 3},
        {value: 4, label: 4},
        {value: 5, label: 5},
        {value: 6, label: 6},
        {value: 7, label: 7},
        {value: 8, label: 8},
        {value: 9, label: 9},
        {value: 10, label: 10},
        {value: 11, label: 11},
        {value: 12, label: 12},
        {value: 13, label: 13},
        {value: 14, label: 14}
    ]


    function handleUpdateRegistration(e: FormEvent<HTMLInputElement> | FormEvent<HTMLTextAreaElement> | ChangeEvent<HTMLInputElement>) {
        const target = e.target as HTMLInputElement;

        console.log(registration)
        if(!target.name) return

        if(target?.type === 'checkbox') {
            return setRegistration((prev: Registration) => {
                return {...prev, [target?.name]: target?.checked}
            })
        }else {
            setRegistration((prev: Registration) => {
                return {...prev, [target?.name]: target?.value}
            })
        }
    }

    function getCategories() {
        fetch(`${API_URL}/hackathon/categories-list`, {
            method: 'GET',
            cache: 'no-store',
        })
        .then(res => res.json())
        .then(data => {
            const mappedCategories = data.categories.map((category: any) => {
                return {value: category._id, label: category.name}
            })
            // console.log(mappedCategories)
            setCategories(mappedCategories);
        })
    }

    useEffect(() => {
        getCategories();
    }, [])

    function addRegistration() {
        const {email, phone_number, team_name, group_size, project_topic, category} = registration;

        if(!email || !phone_number || !team_name || !group_size || !project_topic || !category) {
            return toast.error('The form is incomplete');
        }

        const toastPromise = fetch(`${API_URL}/hackathon/registration`, {
            method: 'POST',
            headers: {"Content-Type": "application/json"},
            cache: 'no-store',
            body: JSON.stringify(registration)
        })
        .then(res => res.json())
        .then(data => {
            if(!data.succeeded && congratulationsModal.current) {
                congratulationsModal.current.showModal()
            }
            return data;
        })
        .catch(err => {
            console.log(err);
        })

        toast.promise(toastPromise, {
            loading: 'Connecting to server',
            success: () => {
                return `Your registration was successful`
            },
            error: 'There has been an error'
        }) 
    }

    // useEffect(() => {
    //     console.log(registration)
    // }, [registration])
    return (
        <main>
            <section id="register-section">
                <div className="section-content">
                    <div className="register-section-image-wrapper">
                        <Image src="/images/man-sitting-at-a-desk.png" fill alt="man sitting at a desk"/>
                    </div>
                    <div className="form-wrapper">
                        <h2 className="purple">Register</h2>
                        <div className="movement-text-wrapper">
                            <p>Be part of this movement</p>
                            <div className="movement-image-wrapper">
                                <Image src="/images/girl-walking.png" fill alt="girl-walking"/>
                            </div>
                            <div className="movement-image-wrapper">
                                <Image src="/images/man-walking.png" fill alt="man-walking"/>
                            </div>
                        </div>
                        <b className="create-your-account-text">CREATE YOUR ACCOUNT</b>
                        <div className="form-grid">
                            <div className="input-wrapper">
                                {/* <input type="text" className="form-input" name="team_name" value={registration.team_name} onInput={e => handleUpdateRegistration(e)} placeholder="Enter the name of your group"/> */}
                                <input type="text" className="form-input" name="team_name" value={registration.team_name} onInput={e => handleUpdateRegistration(e)} placeholder="Enter the name of your group"/>
                                <label className="input-label">Team's Name</label>
                            </div>
                            <div className="input-wrapper">
                                {/* <input type="tel" className="form-input" name="phone_number" value={registration.phone_number} onInput={e => handleUpdateRegistration(e)} placeholder="Enter your phone number"/> */}
                                <input type="tel" className="form-input" name="phone_number" value={registration.phone_number} onInput={e => handleUpdateRegistration(e)} placeholder="Enter your phone number"/>
                                <label className="input-label">Phone</label>
                            </div>
                            <div className="input-wrapper">
                                {/* <input type="email" className="form-input" name="email" value={registration.email} onInput={e => handleUpdateRegistration(e)} placeholder="Enter your email address"/> */}
                                <input type="email" className="form-input" name="email" value={registration.email} onInput={e => handleUpdateRegistration(e)} placeholder="Enter your email address"/>
                                <label className="input-label">Email</label>
                            </div>
                            <div className="input-wrapper">
                                {/* <input type="text" className="form-input" name="project_topic" value={registration.project_topic} onInput={e => handleUpdateRegistration(e)} placeholder="What is your group project topic"/> */}
                                <input type="text" className="form-input" name="project_topic" value={registration.project_topic} onInput={e => handleUpdateRegistration(e)} placeholder="What is your group project topic"/>
                                <label className="input-label">Project Topic</label>
                            </div>
                            <Select setter={setRegistration} label="Category" placeholder="Select your category" options={categories} name={'category'}/>
                            <Select setter={setRegistration} label="Group Size" placeholder="Select" options={groupSizes} name={'group_size'}/>
                        </div>
                        <small className="purple">Please review your registration details before submitting</small>
                        <div className="checkbox-wrapper">
                            <input type="checkbox" name="privacy_policy_accepted" onChange={e => handleUpdateRegistration(e)} checked={registration.privacy_policy_accepted} />
                            <small>I agreed with the event terms and conditions and privacy policy</small>
                        </div>
                        <CTA callback={addRegistration}>Register Now</CTA>
                    </div>
                </div>
                <dialog ref={congratulationsModal as LegacyRef<HTMLDialogElement>} className="successfully-registered-modal">
                    <div className='successfully-registered-modal-image-wrapper'>
                        <Image src="/images/congratulations.png" fill alt="congratulations"/>
                    </div>
                    <h3 className="congratulations-text">Congratulations <br/> you have successfully Registered!</h3>
                    <p>Yes, it was easy and you did it! <br/> check your mail box for the next step 😉</p>
                    <CTA link="/">Back</CTA>
                </dialog>
            </section>
            <Toaster theme="dark" position="top-right" close-button  />
        </main>
    )
}