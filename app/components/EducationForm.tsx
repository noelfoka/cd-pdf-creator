import { Education } from '@/type';
import React from 'react'

type Props = {
  education: Education[];
  setEducation: (education: Education[]) => void;
};

const EducationForm : React.FC<Props> = ({ education, setEducation }) => {
  return (
    <div>EducationForm</div>
  )
}

export default EducationForm