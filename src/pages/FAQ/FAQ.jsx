import React, { useState } from 'react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null); // State to track the currently open FAQ

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index); // Toggle open/close the FAQ
  };

  const faqData = [
    {
      question: "How Do I Contact Your Customer Service?",
      answer: `Our Modimal Customer Service Team is available Monday through Friday 9 AM - 5 PM ET (excluding holidays). 
              You can reach us via email at Help@modimal.com or call us at 1-800-555-0199. For faster responses, 
              we offer live chat Monday to Friday from 9 AM - 5 PM ET in the right bottom corner of our website.`,
    },
    {
      question: "When Will My Order Ship?",
      answer: "Orders typically ship within 2-3 business days after they are placed. You will receive a shipping confirmation email with tracking information once your order has shipped.",
    },
    {
      question: "Can I Cancel Or Modify My Order?",
      answer: "Yes, orders can be modified or canceled within 24 hours of placing the order. Contact our customer service team at Help@modimal.com for assistance.",
    },
    {
      question: "What Are My Shipping Options?",
      answer: "We offer standard, expedited, and international shipping options. Shipping fees and delivery times vary depending on the shipping method and destination.",
    },
    {
      question: "What Type Of Payment Methods Do You Offer?",
      answer: "We accept all major credit cards, PayPal, and Apple Pay for your convenience.",
    },
    {
      question: "Which Size Will Fit Me Best?",
      answer: `For the best fit, please refer to our Size Guide, which can be found on each product page, or contact us for personalized advice.`,
    },
    {
      question: "How Do I Take Care Of My Modimal Pieces?",
      answer: `Each item has specific care instructions that are included on the garment’s label and in the product description. 
              To ensure the longevity of your Modimal pieces, please follow the care instructions closely.`,
    },
    {
      question: "Where And How Do You Manufacture Your Products?",
      answer: "Our products are ethically manufactured in certified facilities located around the world. We prioritize sustainability and fair labor practices in our manufacturing process.",
    },
    {
      question: "How Do You Find And Evaluate Your Suppliers?",
      answer: "We have a rigorous process for evaluating and selecting suppliers. This includes ensuring compliance with our sustainability and ethical labor standards.",
    },
    {
      question: "How Do Your Suppliers Support Their Workers?",
      answer: "Our suppliers are committed to providing safe working environments, fair wages, and benefits for all workers, and we regularly audit them to ensure these standards are upheld.",
    },
  ];

  return (
    <div className="max-w-4xl mx-auto py-10">
      <h1 className="text-3xl font-bold text-center mb-8">FAQs</h1>
      <div className="space-y-4">
        {faqData.map((item, index) => (
          <div key={index} className="border-b border-gray-200 pb-4">
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full text-left focus:outline-none flex justify-between items-center py-3 text-lg font-bold text-gray-900"
            >
              {item.question}
              <span className="text-gray-500 ">
                {openIndex === index ? '-' : '+'}
              </span>
            </button>
            {openIndex === index && (
              <p className="mt-2 text-gray-600">{item.answer}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
