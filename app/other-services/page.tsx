import Image from "next/image";
import EmpoweringBrandsSection from "@/components/EmpoweringBrandsSection";
import PartnerWithUs from "@/components/partner-with-us";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Photawn | Other Services",
    description: "Explore Photawn's next-gen 3PL logistics services, including electric vehicle fleets and adaptable networks for sustainable delivery solutions.",
    keywords: [
        "Photawn",
        "other services",
        "3PL logistics",
        "electric vehicle fleets",
        "adaptable networks",
        "sustainable delivery solutions",
    ],
    openGraph: {
        title: "Photawn | Other Services",
        description: "Explore Photawn's next-gen 3PL logistics services, including electric vehicle fleets and adaptable networks for sustainable delivery solutions.",
        url: "https://photawn.com/other-services",
        images: [
            {
                url: "/assets/images/groupbike.svg",
                alt: "Other Services",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Photawn | Other Services",
        description: "Explore Photawn's next-gen 3PL logistics services, including electric vehicle fleets and adaptable networks for sustainable delivery solutions.",
        images: ["/assets/images/groupbike.svg"],
    },
};

export default function WhatWeDo() {
    return (
        <>
            <EmpoweringBrandsSection />

            <section className="bg-white py-16">
                <div className="container max-w-[1200px] mx-auto px-6 text-center">
                    <h2 className="text-5xl font-bold">3PL Photawn</h2>

                    <p className="text-lg text-gray-800 m-10">
                        Businesses and Associates rent electric vehicles from us for
                        deliveries. We are a next-gen 3PL logistics partner powering
                        last-mile deliveries for leading e-commerce platforms.
                    </p>

                    <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="px-5 py-10 text-center md:order-1 order-2">
                            <Image
                                src="/assets/images/groupbike.svg"
                                alt="Quick Commerce"
                                width={150}
                                height={50}
                                className="w-full mx-auto mb-4"
                            />
                        </div>

                        <div className="px-5 py-10 text-left flex flex-col justify-center items-center md:order-2 order-1">
                            <h4 className="text-xl font-semibold mb-2">
                                Electric Vehicle Fleet
                            </h4>
                            <p className="text-gray-600">
                                {`Our next-gen 3PL logistics partner powers last-mile deliveries using a 100% electric vehicle fleet with > 95% uptime.`}
                            </p>
                        </div>
                    </div>
                    <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="px-5 py-10 text-left flex flex-col justify-center items-center md:order-1 order-1">
                            <h4 className="text-xl font-semibold mb-2">
                                Adaptable Network
                            </h4>
                            <p className="text-gray-600">
                                From high-density urban clusters to hyperlocal dark store
                                models, we adapt to your network with plug-and-play
                                simplicity.
                            </p>
                        </div>
                        <div className="px-5 py-10 text-center md:order-2 order-2">
                            <Image
                                src="/assets/images/doortodoor.svg"
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
                                src="/assets/images/dservice.svg"
                                alt="Quick Commerce"
                                width={150}
                                height={50}
                                className="w-full mx-auto mb-4"
                            />
                        </div>

                        <div className="px-5 py-10 text-left flex flex-col justify-center items-center md:order-2 order-1">
                            <h4 className="text-xl font-semibold mb-2">Dedicated Service</h4>
                            <p className="text-gray-600">
                                With dedicated riders and strong SLA compliance, we help
                                platforms scale sustainably — without compromising speed or
                                control.
                            </p>
                        </div>
                    </div>

                    <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="px-5 py-10 text-left flex flex-col justify-center items-center md:order-1 order-1">
                            <h4 className="text-xl font-semibold mb-2">Sustainable Future</h4>
                            <p className="text-gray-600">
                                Choose us for logistics that are clean, smart, and future-ready.
                                We're committed to sustainable delivery solutions.
                            </p>
                        </div>
                        <div className="px-5 py-10 text-center md:order-2 order-2">
                            <Image
                                src="/assets/images/growth2.svg"
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