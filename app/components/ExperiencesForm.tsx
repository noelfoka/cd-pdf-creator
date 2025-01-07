import { Experience } from "@/type";
import React, { useState } from "react";

type Props = {
  experience: Experience[];
  setExperience: (experience: Experience[]) => void;
};

const ExperiencesForm: React.FC<Props> = ({ experience, setExperience }) => {
  const [newExperience, setNewExperience] = useState<Experience>({
    jobTitle: "",
    companyName: "",
    startDate: "",
    endDate: "",
    description: "",
  });

  const handleNewExperience = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    field: keyof Experience
  ) => {
    setNewExperience({ ...newExperience, [field]: e.target.value });
  };

  return (
    <div className="flex flex-col gap-4">

      <div className="flex justify-between">
        <input
          type="text"
          value={newExperience.jobTitle}
          onChange={(e) => handleNewExperience(e, "jobTitle")}
          placeholder="Titre du job"
          className="input input-bordered w-full"
        />

        <input
          type="text"
          value={newExperience.companyName}
          onChange={(e) => handleNewExperience(e, "companyName")}
          placeholder="Nom de l'entreprise"
          className="input input-bordered w-full ml-2"
        />
      </div>

      <div className="flex justify-between">
        <input
          type="text"
          value={newExperience.jobTitle}
          onFocus={(e) => e.target.type = "Date"}
          onChange={(e) => handleNewExperience(e, "jobTitle")}
          placeholder="Titre du job"
          className="input input-bordered w-full"
        />

        <input
          type="text"
          value={newExperience.companyName}
          onChange={(e) => handleNewExperience(e, "companyName")}
          placeholder="Nom de l'entreprise"
          className="input input-bordered w-full ml-2"
        />
      </div>

    </div>
  );
};

export default ExperiencesForm;
