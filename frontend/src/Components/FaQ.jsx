import React, { useState } from 'react';

function FaQ() {

    const [activeIndex, setActiveIndex] = useState(null);

    const questions = [
        {
            question: "What is SparkSF?",
            answer: "SparkSF is a student-run organization that builds a community of entrepreneurs and innovators."
        },
        {
            question: "How can I join SparkSF?",
            answer: "You can join by filling out the 'Join Us' form available on our website."
        },
        {
            question: "What events does SparkSF host?",
            answer: "We host networking events, workshops, hackathons, and team-building activities."
        }
    ];

    const handleClick = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <div className="faq-section">
            <h2>Frequently Asked Questions</h2>
            <div className="faq-questions">
                {questions.map((item, index) => (
                    <div key={index} className="faq-item">
                        <div
                            className="faq-question"
                            onClick={() => handleClick(index)}
                        >
                            <h4>{item.question}</h4>
                        </div>
                        {activeIndex === index && (
                            <div className="faq-answer">
                                <p>{item.answer}</p>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default FaQ;
