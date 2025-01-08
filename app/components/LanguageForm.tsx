import { Language } from '@/type';
import React, { useState } from 'react'

type Props = {
  language: Language[];
  setLanguage: (language: Language[]) => void;
}

const LanguageForm: React.FC<Props> = ({ language, setLanguage }) => {

  const [newLanguage, setNewLanguage] = useState<Language>({
    language: '',
    proficiency: ''
  });

  const handleNewLanguage = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    field: keyof Language
  ) => {
    setNewLanguage({ ...newLanguage, [field]: e.target.value });
  };

  const handleAddLanguage = () => {
    setLanguage([...language, newLanguage]);
    setNewLanguage({
      language: '',
      proficiency: ''
    });
  };

  return (
    <div>LanguageForm</div>
  )
}

export default LanguageForm