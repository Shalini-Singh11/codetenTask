import React, { useState, useRef } from 'react';
import FirstSection from './FirstSection';
import SecondSection from './SecondSection';
import ThirdSection from './ThirdSection';

const MainSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const sectionRefs = useRef([]);

  const scrollableSection = (index) => {
    sectionRefs.current[index].scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <FirstSection
        currentIndex={currentIndex}
        setCurrentIndex={setCurrentIndex}
        scrollableSection={scrollableSection}
      />
      <SecondSection sectionRefs={sectionRefs}/>
      <ThirdSection/>
    </>
  );
};

export default MainSection;
