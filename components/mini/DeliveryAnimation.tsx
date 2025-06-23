'use client';
import React, { useEffect, useState } from 'react';

const texts = ["Faster Deliveries", "10 minutes Delivery", "1 Hour Delivery", "2 Hour Delivery", "Same-Day Delivery"];

export default function DeliveryAnimation() {

    const [text, setText] = useState("Faster Deliveries");
    const [animate, setAnimate] = useState(false);
    useEffect(() => {
        let index = 0;
        const interval = setInterval(() => {
            setAnimate(true);
            setTimeout(() => {
                index = (index + 1) % texts.length;
                setText(texts[index]);
                setAnimate(false);
            }, 400);
        }, 2000);

        return () => clearInterval(interval);
    }, []);
    return (
        <span className={`text-brand-blue inline-block text-left min-w-[150px] transition-all duration-400 ${animate ? "blur-xs opacity-0" : "blur-0 opacity-100"}`}>
            {text}
        </span>
    );
}