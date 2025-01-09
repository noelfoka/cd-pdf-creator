import { Skill } from '@/type';
import React from 'react'

type Props = {
  skills: Skill[];
  setSkills: (skills: Skill[]) => void;
}

const SkillsForm: React.FC<Props> = ({ skills, setSkills }) => {
  return (
    <div>SkillsForm</div>
  )
}

export default SkillsForm