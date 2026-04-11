import React from "react";
import { useState } from "react";
import Allbanner from "../../assets/all-banner.jpg";
const FAQs = () => {
  {
    const [openIndex, setOpenIndex] = useState(null);

    const toggleFAQ = (index) => {
      setOpenIndex(openIndex === index ? null : index);
    };
    return (
      <div
        className=" h-[50vh] md:w-full md:w-[60vh] mt-25 flex-1 justify-center text-center text-2xl hover:shadow-zinc-400 shadow-xl duration-400 items-center bg-center bg-cover relative"
      >
        <h2 className="bg-zinc-100 text-3xl font-bold p-2  ">FA<span className="text-orange-500">Q</span>s</h2>

        {faqData.map((item, index) => (
          <div
            className="  flex-col text-1xl "
            key={index}
            style={{ borderBottom: "1px solid #ccc", padding: "10px" }}
          >
            {/* Question */}
            <div
              onClick={() => toggleFAQ(index)}
              style={{ cursor: "pointer", fontWeight: "bold" }}
            >
              {item.question}
            </div>

            {/* Answer */}
            {openIndex === index && (
              <div style={{ marginTop: "8px" }}>{item.answer}</div>
            )}
          </div>
        ))}
      </div>
    );
  }
};

export default FAQs;

const faqData = [
  {
    question: "What is QuickBasket?",
    answer:
      "QuickBasket is an online grocery platform for fresh and daily essentials.",
  },
  {
    question: "How can I place an order?",
    answer: "Browse products, add to cart, and proceed to checkout easily.",
  },
  {
    question: "What are the delivery timings?",
    answer: "We offer same-day or next-day delivery depending on location.",
  },
  {
    question: "What if I receive wrong items?",
    answer: "You can request a replacement or refund by contacting support.",
  },
];
