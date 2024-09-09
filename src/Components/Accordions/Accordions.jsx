import React, { useState } from 'react';
import './Accordions.css';
import { useTranslation } from 'react-i18next';
import { LuPlus } from "react-icons/lu";
import { AiOutlineMinus } from "react-icons/ai";



const AccordionItem = ({ title, content, isOpen, toggleAccordion }) => {
  return (
    <div className="accordion-item">
      <div className="accordion-header" onClick={toggleAccordion}>
        <h3 className="accordion-item-title">{title}</h3>
        <circle className="accordion-icon">{isOpen ? <AiOutlineMinus /> : <LuPlus />}</circle>
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
  const {t} = useTranslation();
  const accordionData = [
    { title: t("accordions.text1"), content: t("accordions.text4") },
    { title: t("accordions.text2"), content: t("accordions.text5") },
    { title: t("accordions.text3"), content: t("accordions.text6") },
  ];

  const [activeIndex, setActiveIndex] = useState(null);

  const handleToggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="accordion" id='accordion'>
      <div className="container accordion-container">
        <div className="accordion-div">
        <h2 className="accordion-title">{t("accordions.text0")}</h2>
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
