'use client'

import { useState } from "react";
import {v4} from 'uuid';
import './Select.css';

type SelectOption = {
    value: any,
    label: any
}
type SelectProps = {
    options: SelectOption[],
    name: string,
    label: string,
    setter: Function,
    placeholder: string
}

export default function Select({options, name, placeholder, setter, label}: SelectProps) {
    const [currentSelection, setCurrentSelection] = useState('');
    const [optionsVisible, setOptionsVisible] = useState(false);

    function handleOptionClick(option: SelectOption) {
        setCurrentSelection(option.label);
        setter((prev: any) => {
            return {...prev, [name]: option.value}
        })
        setOptionsVisible(false);
    }

    function handleToggleOptionsVisibility() {
        setOptionsVisible(prev => !prev);
    }

    return (
        <div className="select-wrapper">
            <div onClick={() => handleToggleOptionsVisibility()} className="select">
                <p>{currentSelection || placeholder}</p>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g data-name="Layer 2"><g data-name="chevron-down"><rect width="24" height="24" opacity="0"/><path d="M12 15.5a1 1 0 0 1-.71-.29l-4-4a1 1 0 1 1 1.42-1.42L12 13.1l3.3-3.18a1 1 0 1 1 1.38 1.44l-4 3.86a1 1 0 0 1-.68.28z"/></g></g></svg>
            </div>
            <div className={`select-options-wrapper ${optionsVisible ? 'visible' : ''}`}>
                {options.length !== 0  ?
                    options.map(option => {
                        return <p key={v4()} onClick={() => handleOptionClick(option)} className="option">{option.label}</p>
                    })
                : null}
            </div>
            <label className="input-label">{label}</label>
        </div>
    )
}