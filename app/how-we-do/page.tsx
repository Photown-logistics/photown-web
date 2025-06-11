import Image from "next/image";
import EmpoweringBrandsSection from "@/components/EmpoweringBrandsSection";
import PartnerWithUs from "@/components/partner-with-us";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Photawn | How We Do",
    description: "Discover how Photawn integrates with brand storefronts and backend platforms to enable ultra-fast deliveries and AI-powered order routing.",
    keywords: [
        "Photawn",
        "how we do",
        "brand storefronts",
        "backend platforms",
        "ultra-fast deliveries",
        "AI-powered order routing",
    ],
    openGraph: {
        title: "Photawn | How We Do",
        description: "Discover how Photawn integrates with brand storefronts and backend platforms to enable ultra-fast deliveries and AI-powered order routing.",
        url: "https://photawn.com/how-we-do",
        images: [
            {
                url: "/assets/images/network.svg",
                alt: "How We Do",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Photawn | How We Do",
        description: "Discover how Photawn integrates with brand storefronts and backend platforms to enable ultra-fast deliveries and AI-powered order routing.",
        images: ["/assets/images/network.svg"],
    },
};

export default function WhatWeDo() {
    return (
        <>
            <EmpoweringBrandsSection />

            <section className="bg-white py-16">
                <div className="container max-w-[1200px] mx-auto px-6 text-center">
                    <h2 className="text-5xl font-bold">How We Do</h2>

                    <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="px-5 py-10 text-center md:order-1 order-2">
                            <Image
                                src="/assets/images/network.svg"
                                alt="Quick Commerce"
                                width={150}
                                height={50}
                                className="w-full mx-auto mb-4"
                            />
                        </div>

                        <div className="px-5 py-10 text-left flex flex-col justify-center items-center md:order-2 order-1">
                            <h4 className="text-xl font-semibold mb-2">
                                Seamless, Plug and Play Integration
                            </h4>
                            <p className="text-gray-600">
                                We integrate with brand storefronts (e.g., Shopify) and
                                backend WMS/OMS platforms like Unicommerce, Vinculum, and
                                Increff.
                            </p>
                        </div>
                    </div>
                    <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="px-5 py-10 text-left flex flex-col justify-center items-center md:order-1 order-1">
                            <h4 className="text-xl font-semibold mb-2">Dark Store Model</h4>
                            <p className="text-gray-600">
                                Unlock ultra-fast deliveries with our strategically located dark
                                stores — built exclusively to power your brands growth. We
                                store your inventory closer to high-demand zones, enabling
                                fulfillment in minutes and Hours.
                            </p>
                        </div>
                        <div className="px-5 py-10 text-center md:order-2 order-2">
                            <Image
                                src="/assets/images/darkstore.svg"
                                alt="Quick Commerce"
                                width={150}
                                height={50}
                                className="w-full mx-auto mb-4"
                            />
                        </div>
                    </div>

                    <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="px-5 py-10 text-center md:order-1 order-2">
                            <Image
                                src="/assets/images/ai.svg"
                                alt="Quick Commerce"
                                width={150}
                                height={50}
                                className="w-full mx-auto mb-4"
                            />
                        </div>

                        <div className="px-5 py-10 text-left flex flex-col justify-center items-center md:order-2 order-1">
                            <h4 className="text-xl font-semibold mb-2">
                                AI-Powered Order Routing
                            </h4>
                            <p className="text-gray-600">
                                AI-enabled routing built to evolve with scale —
                                continuously improving delivery accuracy, speed, and
                                cost-efficiency using real-world data.
                            </p>
                        </div>
                    </div>

                    <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="px-5 py-10 text-left flex flex-col justify-center items-center md:order-1 order-1">
                            <h4 className="text-xl font-semibold mb-2">
                                Dedicated Logistics Fleet
                            </h4>
                            <p className="text-gray-600">
                                Our trained riders handle only your category of goods,
                                ensuring better handling, fewer delays, and stronger brand
                                control. Your deliveries are our only focus. Boost NPS,
                                reduce RTOs, and ensure consistent service with a fleet
                                that moves only for you.
                            </p>
                        </div>
                        <div className="px-5 py-10 text-center md:order-2 order-2">
                            <Image
                                src="/assets/images/fleet.svg"
                                alt="Quick Commerce"
                                width={150}
                                height={50}
                                className="w-full mx-auto mb-4"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Partner with Us Section */}
            <PartnerWithUs />
        </>
    );
}