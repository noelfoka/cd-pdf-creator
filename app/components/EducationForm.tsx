import { Education } from "@/type";
import { Plus } from "lucide-react";
import React from "react";

type Props = {
  education: Education[];
  setEducation: (education: Education[]) => void;
};

const EducationForm: React.FC<Props> = ({ education, setEducation }) => {
  const [newEducation, setNewEducation] = React.useState<Education>({
    degree: "",
    school: "",
    startDate: "",
    endDate: "",
    description: "",
  });

  const handleNewEducation = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    field: keyof Education
  ) => {
    setNewEducation({ ...newEducation, [field]: e.target.value });
  };

  const handleAddEducation = () => {
    setEducation([...education, newEducation]);
    setNewEducation({
      degree: "",
      school: "",
      startDate: "",
      endDate: "",
      description: "",
    });
  };

  return (
    <div>

<div className="flex flex-col gap-4">
        <div className="flex justify-between">
          <input
            type="text"
            value={newEducation.school}
            onChange={(e) => handleNewEducation(e, "school")}
            placeholder="Nom de l'école"
            className="input input-bordered w-full"
          />

          <input
            type="text"
            value={newEducation.degree}
            onChange={(e) => handleNewEducation(e, "degree")}
            placeholder="Niveau de diplome"
            className="input input-bordered w-full ml-2"
          />
        </div>

        <div className="flex justify-between">
          <input
            type="text"
            value={newEducation.startDate}
            onFocus={(e) => (e.target.type = "date")}
            onBlur={(e) => {
              if (!e.target.value) e.target.type = "text";
            }}
            onChange={(e) => handleNewEducation(e, "startDate")}
            placeholder="Date de debut"
            className="input input-bordered w-full"
          />

          <input
            type="text"
            value={newEducation.endDate}
            onFocus={(e) => (e.target.type = "date")}
            onBlur={(e) => {
              if (!e.target.value) e.target.type = "text";
            }}
            onChange={(e) => handleNewEducation(e, "endDate")}
            placeholder="Date de fin"
            className="input input-bordered w-full ml-2"
          />
        </div>

        <textarea
          placeholder="Description"
          value={newEducation.description}
          className="input input-bordered w-full"
          onChange={(e) => handleNewEducation(e, "description")}
        ></textarea>
      </div>

      <button className="btn btn-primary mt-4" onClick={handleAddEducation}>
        Ajouter
        <Plus className="w-4" />
      </button>
    </div>
  );
};

export default EducationForm;
