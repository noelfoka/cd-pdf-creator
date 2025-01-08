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
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
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
    <div className='space-y-4'>
      <input
            type="text"
            value={newLanguage.language}
            onChange={(e) => handleNewLanguage(e, "language")}
            placeholder="Langue"
            className="input input-bordered w-full"
          />

          <select
            value={newLanguage.proficiency}
            onChange={(e) => handleNewLanguage(e, "proficiency")}
            className="select select-bordered w-full"
          ></select>
    </div>
  )
}

export default LanguageForm