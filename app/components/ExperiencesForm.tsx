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
          value={newExperience.startDate}
          onFocus={(e) => e.target.type = "date"}
          onBlur={(e) => {
            if (!e.target.value) e.target.type = "text";
          }}
          onChange={(e) => handleNewExperience(e, "startDate")}
          placeholder="Date de debut"
          className="input input-bordered w-full"
        />

        <input
          type="text"
          value={newExperience.endDate}
          onFocus={(e) => e.target.type = "date"}
          onBlur={(e) => {
            if (!e.target.value) e.target.type = "text";
          }}
          onChange={(e) => handleNewExperience(e, "endDate")}
          placeholder="Date de fin"
          className="input input-bordered w-full ml-2"
        />
      </div>

      <textarea
        placeholder="Description du poste"
        value={newExperience.description}
        className="input input-bordered w-full"
        onChange={(e) => handleNewExperience(e, "description")}
      ></textarea>

    </div>
  );
};

export default ExperiencesForm;
