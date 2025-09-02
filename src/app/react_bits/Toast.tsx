import React, { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import gsap from "gsap";
import { useGSAP } from '@gsap/react';

interface toastProps {
    toastMessage: string,
    autoClose: number,
    onClose:(status:boolean)=>void;
    // toastShow: boolean
}

const Toast = ({ toastMessage, autoClose = 3000,onClose }: toastProps) => {
    const [toastOpen, setToastOpen] = useState(true);
    let delaysec = Math.ceil(autoClose/1000);

    
    useEffect(() => {
        if (toastOpen) {
            setTimeout(() => {
                setToastOpen(false);
                onClose(false);
            }, autoClose)
        }
    }, [toastOpen])

    useGSAP(() => {
        gsap.from('#toast', {
            y: -20,
            opacity: 0,
            duration: 0.5,
            ease: "power2.out",
        })
        gsap.to('#toast', {
            y: -20,
            opacity: 0,
            delay:delaysec - 0.5,
            duration: 0.5,
            ease: "power2.out",
        })
    })
        
    if (toastOpen) {
        return createPortal(
            <div id='toast' className='max-w-xl p-2 fixed top-6 left-1/2 -translate-x-1/2 bg-blue-400 rounded-xl '>
                <p className='text-white text-sm font-normal'>{toastMessage}</p>
            </div>,
            document.body)
    }
    else {
        return null;
    }
}

export default Toast
