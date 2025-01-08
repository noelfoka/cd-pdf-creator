import { Certification } from "@/type";
import { Plus } from "lucide-react";
import React from "react";

type Props = {
  certification: Certification[];
  setCertification: (education: Certification[]) => void;
};

const CertificationForm: React.FC<Props> = ({ certification, setCertification }) => {
  const [newCertification, setNewCertification] = React.useState<Certification>({
    name: '',
    organization: '',
    startDate: '',
    endDate: '',
    description: ''
  });

  const handleNewCertification = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    field: keyof Certification
  ) => {
    setNewCertification({ ...newCertification, [field]: e.target.value });
  };

  const handleAddCertification = () => {
    setCertification([...certification, newCertification]);
    setNewCertification({
      name: '',
    organization: '',
    startDate: '',
    endDate: '',
    description: ''
    });
  };

  return (
    <div>

<div className="flex flex-col gap-4">
        <div className="flex justify-between">
          <input
            type="text"
            value={newCertification.organization}
            onChange={(e) => handleNewCertification(e, "organization")}
            placeholder="Nom de l'école"
            className="input input-bordered w-full"
          />

          <input
            type="text"
            value={newCertification.name}
            onChange={(e) => handleNewCertification(e, "name")}
            placeholder="Niveau de diplome"
            className="input input-bordered w-full ml-2"
          />
        </div>

        <div className="flex justify-between">
          <input
            type="text"
            value={newCertification.startDate}
            onFocus={(e) => (e.target.type = "date")}
            onBlur={(e) => {
              if (!e.target.value) e.target.type = "text";
            }}
            onChange={(e) => handleNewCertification(e, "startDate")}
            placeholder="Date de debut"
            className="input input-bordered w-full"
          />

          <input
            type="text"
            value={newCertification.endDate}
            onFocus={(e) => (e.target.type = "date")}
            onBlur={(e) => {
              if (!e.target.value) e.target.type = "text";
            }}
            onChange={(e) => handleNewCertification(e, "endDate")}
            placeholder="Date de fin"
            className="input input-bordered w-full ml-2"
          />
        </div>

        <textarea
          placeholder="Description"
          value={newCertification.description}
          className="input input-bordered w-full"
          onChange={(e) => handleNewCertification(e, "description")}
        ></textarea>
      </div>

      <button className="btn btn-primary mt-4" onClick={handleAddCertification}>
        Ajouter
        <Plus className="w-4" />
      </button>
    </div>
  );
};

export default CertificationForm;
