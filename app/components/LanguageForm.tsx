import { Language } from '@/type';
import { Plus } from 'lucide-react';
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
          >
            <option value="">Selectionnez la maitrise</option>
            <option value="Débutant">Débutant</option>
            <option value="Intermédiaire">Intermédiaire</option>
            <option value="Avancé">Avancé</option>
          </select>

          <button className="btn btn-primary mt-4" onClick={handleAddLanguage}>
        Ajouter
        <Plus className="w-4" />
      </button>
    </div>
  )
}

export default LanguageForm