import React, { useState } from "react";

// Data for the FAQ section
const faqData = [
    {
        question: "What is Mobbin?",
        answer: `Mobbin is the world’s largest UI & UX reference library. It’s always up-to-date, 
        includes mobile and web, and lets you filter by specific app categories, UI elements, 
        flow patterns, and more. Join hundreds of thousands of designers using Mobbin to 
        accelerate research, get decision-makers on board, and start designing faster.`,
    },
    { question: "How often do you update the library?", answer: "We update the library weekly with new content." },
    { question: "Can I get a free trial?", answer: "Yes, we offer a 7-day free trial for new users." },
    { question: "Do you have a monthly plan?", answer: "Yes, we have both monthly and annual plans available." },
    { question: "Do you have discounts for students and educators?", answer: "Yes, we offer discounts for students and educators." },
    { question: "What forms of payment do you accept?", answer: "We accept credit cards, debit cards, and PayPal." },
    { question: "Can I cancel my subscription?", answer: "Yes, you can cancel your subscription at any time." },
    { question: "How do I switch from a Pro plan to a Team plan?", answer: "You can switch plans in your account settings." },
    { question: "What is the difference between Enterprise plan and Team plan?", answer: "The Enterprise plan includes additional features and support." },
    { question: "What is your refund policy?", answer: "We offer refunds within the first 14 days of purchase." },
];

// FAQ Accordion Component
function FAQAccordion({ question, answer, isOpen, onToggle }) {
    return (
        <div className="border-b border-gray-300 font-sans">
            <button
                onClick={onToggle}
                className="w-full text-left flex justify-between items-center py-4 px-6 bg-slate-100 text-blue-800 text-lg font-semibold rounded-lg focus:outline-none"
            >
                <span>{question}</span>
                <span>{isOpen ? "✕" : "+"}</span>
            </button>
            {isOpen && (
                <div className="px-6 py-4 bg-slate-100 text-gray-700">
                    {answer}
                </div>
            )}
        </div>
    );
}

// Main FAQ Component
function FAQSection() {
    const [openIndex, setOpenIndex] = useState(null);

    const handleToggle = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className="bg-gray-50 min-h-screen flex flex-col items-center py-12 px-6 lg:px-48">
            <div className="bg-textBlueColor text-white text-xs font-semibold px-4 py-2 rounded-full mb-4">
                FAQs
            </div>
            <h2 className="text-3xl font-bold text-textBlueColor text-center mb-4">
                Frequently Asked Questions
            </h2>
            <p className="text-center text-textBlueColor mb-8">
                Find questions and answers related to the design system, purchase, updates, and support.
            </p>
            <div className="w-full max-w-2xl">
                {faqData.map((faq, index) => (
                    <FAQAccordion
                        key={index}
                        question={faq.question}
                        answer={faq.answer}
                        isOpen={openIndex === index}
                        onToggle={() => handleToggle(index)}
                    />
                ))}
            </div>
            <button className="mt-8 px-6 py-2 bg-textBlueColor text-white rounded-lg font-semibold hover:bg-blue-800 transition duration-200">
                See All FAQs
            </button>
        </div>
    );
}

export default FAQSection;
