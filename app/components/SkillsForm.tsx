import { Skill } from "@/type";
import { Plus } from "lucide-react";
import React from "react";

type Props = {
  skills: Skill[];
  setSkills: (skills: Skill[]) => void;
};

const SkillsForm: React.FC<Props> = ({ skills, setSkills }) => {
  const [newSkill, setNewSkill] = React.useState<Skill>({
    id: "",
    name: "",
  });

  const handleNewSkill = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    field: keyof Skill
  ) => {
    setNewSkill({ ...newSkill, [field]: e.target.value });
  };

  const handleAddSkill = () => {
    setSkills([...skills, newSkill]);
    setNewSkill({
      id: "",
      name: "",
    });
  };

  return (
    <div className="space-y-4">
      <div>
        <input
          type="text"
          value={newSkill.name}
          onChange={(e) => handleNewSkill(e, "name")}
          placeholder="Compétence"
          className="input input-bordered w-full"
        />
      </div>

      <button className="btn btn-primary mt-4" onClick={handleAddSkill}>
        Ajouter
        <Plus className="w-4" />
      </button>
    </div>
  );
};

export default SkillsForm;
