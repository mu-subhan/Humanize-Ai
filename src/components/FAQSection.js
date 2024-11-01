import React, { useState } from 'react';

const FAQSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const faqs = [
    { question: 'What is included?', answer: 'Detailed description of what is included.' },
    { question: 'Can I get a free trial?', answer: 'Yes, free trials are available.' },
    // Add more FAQs as needed
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="p-8 text-center">
      <h2 className="text-2xl font-bold">Frequently Asked Questions</h2>
      <div className="mt-8 space-y-4">
        {faqs.map((faq, index) => (
          <div key={index}>
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full text-left bg-gray-200 p-4 rounded"
            >
              {faq.question}
            </button>
            {activeIndex === index && (
              <p className="p-4 text-gray-600">{faq.answer}</p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQSection;
