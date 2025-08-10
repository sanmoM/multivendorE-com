"use client";

import MobileHeader from "@/components/root-layout/header/components/mobile-header/MobileHeader";
import Container from "@/components/shared/container/Container";
import SectionTitle from "@/components/shared/section-title/SectionTitle";
import SecondaryTitle from "@/components/shared/title/SecondaryTitle";

export default function ReturnRefundTerms() {
    return (
        <div>
            <MobileHeader title={"Return & Refund Policy"} />
            <Container className="my-6 lg:my-12 py-0 lg:py-0">
                <div className="max-w-4xl">
                    {/* <h1 className="text-4xl font-bold mb-8 text-gray-900">Return & Refund Policy</h1> */}
                    <SectionTitle title={"Return & Refund Policy"} className={"mb-6"} />

                    <p className="mb-6 text-gray-600">
                        We want you to be completely satisfied with your purchase. If you are not happy for any reason, please review our return and refund terms below.
                    </p>

                    {/* <h2 className="text-2xl font-semibold mt-8 mb-4 text-gray-900">1. Returns</h2> */}
                    <SecondaryTitle title={"1. Returns"} />
                    <p className="mb-4 text-gray-600">
                        Items can be returned within 30 days of delivery. To be eligible for a return, products must be unused, in the original packaging, and in the same condition you received them.
                    </p>

                    {/* <h2 className="text-2xl font-semibold mt-8 mb-4 text-gray-900">2. Refunds</h2> */}
                    <SecondaryTitle title={"2. Refunds"} />
                    <p className="mb-4 text-gray-600">
                        Once we receive your returned item, we will inspect it and notify you of the approval or rejection of your refund. Approved refunds will be processed to your original payment method within 5-7 business days.
                    </p>

                    {/* <h2 className="text-2xl font-semibold mt-8 mb-4 text-gray-900">3. Exchanges</h2> */}
                    <SecondaryTitle title={"3. Exchanges"} />
                    <p className="mb-4 text-gray-600">
                        If you wish to exchange an item for the same product or a different one, please contact our support team for assistance and availability.
                    </p>

                    {/* <h2 className="text-2xl font-semibold mt-8 mb-4 text-gray-900">4. Return Shipping</h2> */}
                    <SecondaryTitle title={"4. Return Shipping"} />
                    <p className="mb-4 text-gray-600">
                        We offer free return shipping for eligible returns. Please use the prepaid shipping label provided or contact us to arrange shipping.
                    </p>

                    {/* <h2 className="text-2xl font-semibold mt-8 mb-4 text-gray-900">5. Non-Returnable Items</h2> */}
                    <SecondaryTitle title={"5. Non-Returnable Items"} />
                    <p className="mb-4 text-gray-600">
                        Some items are non-returnable due to hygiene or safety reasons, including but not limited to:
                    </p>
                    <ul className="list-disc list-inside mb-6 text-gray-600">
                        <li>Personal care products</li>
                        <li>Gift cards</li>
                        <li>Downloadable software</li>
                    </ul>

                    {/* <h2 className="text-2xl font-semibold mt-8 mb-4 text-gray-900">6. Damaged or Defective Items</h2> */}
                    <SecondaryTitle title={"6. Damaged or Defective Items"} />
                    <p className="mb-4 text-gray-600">
                        If your item arrives damaged or defective, please contact us immediately. We will arrange for a replacement or refund at no extra cost.
                    </p>

                    {/* <h2 className="text-2xl font-semibold mt-8 mb-4 text-gray-900">7. Contact Us</h2> */}
                    <SecondaryTitle title={"7. Contact Us"} />
                    <p className="mb-4 text-gray-600">
                        For any questions about returns or refunds, please email us at{" "}
                        <a href="mailto:support@example.com" className="text-secondary underline">
                            support@example.com
                        </a>{" "}
                        or call us at (123) 456-7890.
                    </p>
                </div>
            </Container>
        </div>
    );
}
