import Image from "next/image";
import EmpoweringBrandsSection from "../../components/EmpoweringBrandsSection";
import type { Metadata } from "next";
import PartnerWithUs from "@/components/partner-with-us";

export const metadata: Metadata = {
    title: "Photawn | What We Do",
    description: "Learn how Photawn enables faster deliveries, builds customer relationships, drives store traffic, and enhances brand trust.",
    keywords: [
        "Photawn",
        "faster delivery",
        "customer relationships",
        "store traffic",
        "brand trust",
        "quick commerce",
        "smart fulfillment",
    ],
    openGraph: {
        title: "Photawn | What We Do",
        description: "Learn how Photawn enables faster deliveries, builds customer relationships, drives store traffic, and enhances brand trust.",
        url: "https://photawn.com/what-we-do",
        images: [
            {
                url: "/assets/images/fast-delivery_truck.svg",
                alt: "Faster Delivery",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Photawn | What We Do",
        description: "Learn how Photawn enables faster deliveries, builds customer relationships, drives store traffic, and enhances brand trust.",
        images: ["/assets/images/fast-delivery_truck.svg"],
    },
};

export default function WhatWeDo() {
    return (
        <>
            <EmpoweringBrandsSection />

            <section className="bg-white py-16">
                <div className="container mx-auto px-6 text-center">
                    <h2 className="text-5xl font-bold mb-10">What We Do</h2>
                    <div className="mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-6 ">
                        <div className="order border-blue-200 rounded-md px-10 py-20 text-center shadow-sm bg-blue hover:shadow-md transition duration-300 background-brand-light">
                            <Image
                                src="/assets/images/fast-delivery_truck.svg"
                                alt="Brand-Centric"
                                width={150}
                                height={50}
                                className="mx-auto mb-4"
                            />
                            <h4 className="text-xl font-semibold mb-2">
                                Faster & Efficient Delivery
                            </h4>
                            <p className="text-gray-600">
                                Enable your brand to deliver to customers faster and more
                                efficiently than ever before.
                            </p>
                        </div>
                        <div className="border border-blue-200 rounded-md  px-10 py-20 text-center shadow-sm bg-blue hover:shadow-md transition duration-300 background-brand-light">
                            <Image
                                src="/assets/images/customer_review.svg"
                                alt="Quick Commerce"
                                width={150}
                                height={50}
                                className="mx-auto mb-4"
                            />
                            <h4 className="text-xl font-semibold mb-2">
                                Own Customer Relationships
                            </h4>
                            <p className="text-gray-600">
                                Build lasting relationships with your customers beyond the
                                initial sale.
                            </p>
                        </div>
                        <div className="border border-blue-200 rounded-md px-10 py-20 text-center shadow-sm bg-blue hover:shadow-md transition duration-300 background-brand-light">
                            <Image
                                src="/assets/images/growth_icon.svg"
                                alt="Smart Fulfillment"
                                width={150}
                                height={50}
                                className="mx-auto mb-4"
                            />
                            <h4 className="text-xl font-semibold mb-2">
                                Drive Store Traffic
                            </h4>
                            <p className="text-gray-600">
                                Increase traffic to your online store through quick and
                                reliable delivery services.
                            </p>
                        </div>
                        <div className="border border-blue-200 rounded-md  px-10 py-20 text-center shadow-sm bg-blue hover:shadow-md transition duration-300 background-brand-light">
                            <Image
                                src="/assets/images/trade-union.svg"
                                alt="Smart Fulfillment"
                                width={150}
                                height={50}
                                className="mx-auto mb-4"
                            />
                            <h4 className="text-xl font-semibold mb-2">
                                Enhanced Brand Trust
                            </h4>
                            <p className="text-gray-600">
                                Build consistent brand experiences that foster trust, even with
                                rapid deliveries.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Partner with Us Section */}
            <PartnerWithUs />
        </>
    );
}