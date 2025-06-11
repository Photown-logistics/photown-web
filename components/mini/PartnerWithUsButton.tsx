'use client';
import React from 'react';

export default function PartnerWithUsButton() {
    const scrollToPartnerWithUs = () => {
        const partnerSection = document.getElementById('partner-with-us-section');


        if (partnerSection) {
            partnerSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <>
            <div className="hidden md:block">
                <button
                    className="bg-black text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-800"
                    onClick={scrollToPartnerWithUs}
                >
                    Partner with us
                </button>
            </div>
        </>
    );
}
