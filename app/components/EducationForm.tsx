import { Education } from "@/type";
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

  return <div>EducationForm</div>;
};

export default EducationForm;
