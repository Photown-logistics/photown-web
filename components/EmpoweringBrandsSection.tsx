"use client";
import React, { useState, useEffect } from "react";
import GettingStartedButton from "./mini/GettingStartedButton";

const texts = ["Faster Deliveries", "1 Hour Delivery", "10 minutes Delivery"];

const EmpoweringBrandsSection = () => {
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
        <section className="bg-white shadow-md py-20 bg-gradient-to-r from-blue-50 via-blue-100 to-blue-50 w-full">
            <div className="container mx-auto text-center">
                 <h1 className="text-5xl font-bold  mb-4">
                    Empowering Brands with{" "}
                    <span
                        className={`text-brand-blue inline-block text-left min-w-[544px] transition-all duration-400 ${
                            animate ? "blur-xs opacity-0" : "blur-0 opacity-100"
                        }`}
                    >
                        {text}
                    </span>
                </h1>

                <p className="text-lg text-gray-700 m-10">
                    Transform your customer relationships with efficient delivery solutions that build trust and drive growth.
                </p>

                <GettingStartedButton />
            </div>
        </section>
    );
};

export default EmpoweringBrandsSection;