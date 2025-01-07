import { PersonalDetails } from '@/type'
import React from 'react'

type Props = {
  personalDetails: PersonalDetails;
  file: File | null;
}

const CVPreview: React.FC<Props> = ({personalDetails, file}) => {
  return (
    <div>CVPreview</div>
  )
}

export default CVPreview