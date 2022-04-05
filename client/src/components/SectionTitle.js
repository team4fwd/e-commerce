import React from 'react';
import './SectionTitle.scss';

const SectionTitle = ({ title }) => {
  return (
    <div className='title-section'>
      <header className='title-section__header'>
        <h1>{title}</h1>
      </header>
    </div>
  );
};

export default SectionTitle;
