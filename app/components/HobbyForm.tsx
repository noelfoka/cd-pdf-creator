import { Hobby } from '@/type';
import { Plus } from 'lucide-react';
import React, { useState } from 'react'

type Props = {
  hobbies: Hobby[];
  setHobbies: (hobbies: Hobby[]) => void;
}

const HobbyForm: React.FC<Props> = ({ hobbies, setHobbies }) => {

  const [newHobby, setNewHobby] = useState<Hobby>({
    id: '',
    name: ''
  });

  const handleNewHobby = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    field: keyof Hobby
  ) => {
    setNewHobby({ ...newHobby, [field]: e.target.value });
  };

  const handleAddHobby = () => {
    setHobbies([...hobbies, newHobby]);
    setNewHobby({
      id: '',
      name: ''
    });
  };

  return (
    <div className="space-y-4">
      <input
        type="text"
        value={newHobby.name}
        onChange={(e) => handleNewHobby(e, "name")}
        placeholder="Compétence"
        className="input input-bordered w-full"
      />

      <button className="btn btn-primary mt-4" onClick={handleAddHobby}>
        Ajouter
        <Plus className="w-4" />
      </button>
    </div>
  )
}

export default HobbyForm