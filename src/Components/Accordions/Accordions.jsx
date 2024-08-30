import React, { useState } from 'react';
import './Accordions.css';

const AccordionItem = ({ title, content, isOpen, toggleAccordion }) => {
  return (
    <div className="accordion-item">
      <div className="accordion-header" onClick={toggleAccordion}>
        <h3 className="accordion-item-title">{title}</h3>
        <circle className="accordion-icon">{isOpen ? '-' : '+'}</circle>
      </div>
      {isOpen && (
        <div className="accordion-content">
          <p>{content}</p>
        </div>
      )}
    </div>
  );
};

const Accordions = () => {
  const accordionData = [
    { title: "O’quv materallar bilan ta’minlaysizlarmi yoki o’zim izlab topamanami?", content: " " },
    { title: "O’quv materallar bilan ta’minlaysizlarmi yoki o’zim izlab topamanami?", content: " " },
    { title: "O’quv materallar bilan ta’minlaysizlarmi yoki o’zim izlab topamanami?", content: " " },
  ];

  const [activeIndex, setActiveIndex] = useState(null);

  const handleToggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="accordion">
      <div className="container">
        <div className="accordion-div">
        <h2 className="accordion-title">Ko'p beriladigan savollar</h2>
          <div className="accordion-div-item">
          {accordionData.map((item, index) => (
            <AccordionItem
              key={index}
              title={item.title}
              content={item.content}
              isOpen={activeIndex === index}
              toggleAccordion={() => handleToggle(index)}
            />
          ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Accordions;
