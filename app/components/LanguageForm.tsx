import { Language } from '@/type';
import React from 'react'

type Props = {
  language: Language[];
  setLanguage: (language: Language[]) => void;
}

const LanguageForm: React.FC<Props> = ({ language, setLanguage }) => {
  return (
    <div>LanguageForm</div>
  )
}

export default LanguageForm