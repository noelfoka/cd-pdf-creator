import { Experience } from '@/type';
import React from 'react'

type Props = {
  experience: Experience[];
  setExperience: (experience: Experience[]) => void;
};

const ExperiencesForm: React.FC<Props> = ({ experience, setExperience }) => {
  return (
    <div>ExperiencesForm</div>
  )
}

export default ExperiencesForm