import { PersonalDetails } from "@/type";
import React from "react";

type Props = {
  personalDetails: PersonalDetails;
  setPersonalDetails: (pd: PersonalDetails) => void;
  setFile: (file: File | null) => void;
};

const PersonalDetailsForm: React.FC<Props> = ({
  personalDetails,
  setPersonalDetails,
  setFile,
}) => {
  return (
    <div className="flex flex-col gap-4">
      <input
        type="text"
        placeholder="Nom complet"
        value={personalDetails.fullName}
        className="input input-bordered w-full"
        onChange={(e) => setPersonalDetails({ ...personalDetails, fullName: e.target.value })}
      />
    </div>
  );
};

export default PersonalDetailsForm;
