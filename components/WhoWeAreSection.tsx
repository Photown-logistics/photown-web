import Image from "next/image";

export default function WhoWeAreSection() {
    return (
        <section className="bg-white shadow-md py-16 justify-center">
            <div className="container mx-auto px-6 text-center">
                <h3 className="uppercase text-brand-blue font-medium mb-4 text-[20px]">
                    Who we are
                </h3>
                <p className="text-[40px] font-bold mb-8 font-roboto">
                    We help brands drive traffic to their own online
                    store by unlocking{" "}
                    <span className="text-brand-blue">Quick Deliveries</span>.
                </p>
                <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-6 ">
                    <div className="border border-blue-200 rounded-md py-25 text-center shadow-sm bg-blue hover:shadow-md transition duration-300 background-brand-light">
                        <Image
                            src="/assets/images/star.svg"
                            alt="Brand-Centric"
                            width={150}
                            height={50}
                            className="mx-auto mb-4"
                        />
                        <h4 className="text-xl font-semibold mb-2">Brand-Centric</h4>
                        <p className="text-gray-600">
                            Empower your brand with direct customer engagement
                        </p>
                    </div>
                    <div className="border border-blue-200 rounded-md py-25 text-center shadow-sm bg-blue hover:shadow-md transition duration-300 background-brand-light">
                        <Image
                            src="/assets/images/cart.svg"
                            alt="Quick Commerce"
                            width={150}
                            height={50}
                            className="mx-auto mb-4"
                        />
                        <h4 className="text-xl font-semibold mb-2">Quick Commerce</h4>
                        <p className="text-gray-600">
                            Enable rapid delivery for your products
                        </p>
                    </div>
                    <div className="border border-blue-200 rounded-md py-25 text-center shadow-sm bg-blue hover:shadow-md transition duration-300 background-brand-light">
                        <Image
                            src="/assets/images/verification.svg"
                            alt="Smart Fulfillment"
                            width={150}
                            height={50}
                            className="mx-auto mb-4"
                        />
                        <h4 className="text-xl font-semibold mb-2">Smart Fulfillment</h4>
                        <p className="text-gray-600">
                            Strategic intra-city warehouse network
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}