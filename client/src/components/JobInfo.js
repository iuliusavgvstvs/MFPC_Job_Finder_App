import Wrapper from '../assets/wrappers/JobInfo';
import React from 'react';

const JobInfo = ({ text }) => {
  return (
    <Wrapper>
      <span className="text">{text}</span>
    </Wrapper>
  );
};

export default JobInfo;
