"use client";

import { Eye, RotateCw, Save } from "lucide-react";
import Image from "next/image";
import PersonalDetailsForm from "./components/PersonalDetailsForm";
import { useEffect, useRef, useState } from "react";
import {
  Certification,
  Education,
  Experience,
  Hobby,
  Language,
  PersonalDetails,
  Skill,
} from "@/type";
import {
  certificationPreset,
  educationsPreset,
  experiencesPreset,
  hobbiesPreset,
  languagesPreset,
  personalDetailsPreset,
  skillsPreset,
} from "@/presets";
import CVPreview from "./components/CVPreview";
import ExperiencesForm from "./components/ExperiencesForm";
import EducationForm from "./components/EducationForm";
import CertificationForm from "./components/CertificationForm";
import LanguageForm from "./components/LanguageForm";
import SkillsForm from "./components/SkillsForm";
import HobbyForm from "./components/HobbyForm";
import html2canvas from "html2canvas-pro";
import jsPDF from "jspdf";

export default function Home() {
  // Variables d'etat
  const [personalDetails, setPersonalDetails] = useState<PersonalDetails>(
    personalDetailsPreset
  );
  const [file, setFile] = useState<File | null>(null);
  const [theme, setTheme] = useState<string>("cupcake");
  const [zoom, setZoom] = useState<number>(163);
  const [experience, setExperience] = useState<Experience[]>(experiencesPreset);
  const [education, setEducation] = useState<Education[]>(educationsPreset);
  const [certification, setCertification] =
    useState<Certification[]>(certificationPreset);
  const [language, setLanguage] = useState<Language[]>(languagesPreset);
  const [skills, setSkills] = useState<Skill[]>(skillsPreset);
  const [hobbies, setHobbies] = useState<Hobby[]>(hobbiesPreset);

  useEffect(() => {
    const defaulImageUrl = "/photo1.jpg";
    fetch(defaulImageUrl)
      .then((response) => response.blob())
      .then((blob) => {
        const defaultFile = new File([blob], "photo1.jpg", { type: blob.type });
        setFile(defaultFile);
      });
  }, []);

  const themes = [
    "light",
    "dark",
    "cupcake",
    "bumblebee",
    "emerald",
    "corporate",
    "synthwave",
    "retro",
    "cyberpunk",
    "valentine",
    "halloween",
    "garden",
    "forest",
    "aqua",
    "lofi",
    "pastel",
    "fantasy",
    "wireframe",
    "black",
    "luxury",
    "dracula",
    "cmyk",
    "autumn",
    "business",
    "acid",
    "lemonade",
    "night",
    "coffee",
    "winter",
    "dim",
    "nord",
    "sunset",
  ];

  const handlePersonalDetails = () =>
    setPersonalDetails({
      fullName: "",
      email: "",
      phone: "",
      address: "",
      photoUrl: "",
      description: "",
      postSeeking: "",
    });

    const cvPreviewref = useRef(null);
    const handleDownloadPdf = async () => {
      const element = cvPreviewref.current;
      if(element) {
        try {
          // convertir html en canva
          const canvas = await html2canvas(element, {
            scale: 3,
            useCORS: true,
          });

          //recuperer l'image
          const imgData = canvas.toDataURL("image/png");
          // Creer un pdf
          const pdf = new jsPDF({
            orientation: "portrait",
            unite: "mm",
            format: "A4"
          })

          // Définir la largeur du pdf
          const pdfWidht = pdf.internal.pageSize.getWidth();

          // Définir la hauteur du pdf
          const pdfHeight = (canvas.height * pdfWidht) / canvas.width;

          // generation de l'image
          pdf.addImage(imgData, "PNG", 0, 0, pdfWidht, pdfHeight);

          pdf.save(`cv.pdf`)

          const modal = document.getElementById("my_modal_3") as HTMLDialogElement;

          if (modal) {
            modal.close();
          }
          
        } catch (error) {
          console.error("Erreur lors de la génération du pdf", error);
        }
      }
    }

  const handleRestExperience = () => setExperience([]);
  const handleRestEducation = () => setEducation([]);
  const handleRestCertification = () => setCertification([]);
  const handleRestLanguage = () => setLanguage([]);
  const handleRestSkills = () => setSkills([]);
  const handleRestHobbies = () => setHobbies([]);

  return (
    <div>
      <div className="hidden lg:block">
        <section className="flex items-center h-screen">
          <div className="w-1/3 h-full bg-base-200 p-10 scroolable no-scrollbar">
            <div className="mb-4 flex justify-between items-center">
              <h1 className="text-2xl font-bold italic">
                CV
                <span className="text-primary">Ppros</span>
              </h1>
              {/*<button className="btn btn-primary">
                Prévisualisez
                <Eye className="w-4" />
              </button>*/}
              <button
                className="btn btn-primary"
                onClick={() =>
                  (
                    document.getElementById("my_modal_3") as HTMLDialogElement
                  ).showModal()
                }
              >
                Prévisualisez
                <Eye className="w-4" />
              </button>
            </div>

            <div className="flex flex-col gap-6 rounded-lg">
              <div className="flex justify-between items-center">
                <h1 className="badge badge-primary badge-outline">
                  Qui êtes vous ?
                </h1>
                <button
                  className="btn btn-primary btn-sm"
                  onClick={handlePersonalDetails}
                >
                  <RotateCw className="w-4" />
                </button>
              </div>
              <PersonalDetailsForm
                personalDetails={personalDetails}
                setPersonalDetails={setPersonalDetails}
                setFile={setFile}
              />

              <div className="flex justify-between items-center">
                <h1 className="badge badge-primary badge-outline">
                  Expériences
                </h1>
                <button
                  className="btn btn-primary btn-sm"
                  onClick={handleRestExperience}
                >
                  <RotateCw className="w-4" />
                </button>
              </div>

              <ExperiencesForm
                experience={experience}
                setExperience={setExperience}
              />

              <div className="flex justify-between items-center">
                <h1 className="badge badge-primary badge-outline">
                  Educations
                </h1>
                <button
                  className="btn btn-primary btn-sm"
                  onClick={handleRestEducation}
                >
                  <RotateCw className="w-4" />
                </button>
              </div>
              <EducationForm
                education={education}
                setEducation={setEducation}
              />

              <div className="flex justify-between items-center">
                <h1 className="badge badge-primary badge-outline">
                  Certification
                </h1>
                <button
                  className="btn btn-primary btn-sm"
                  onClick={handleRestCertification}
                >
                  <RotateCw className="w-4" />
                </button>
              </div>
              <CertificationForm
                certification={certification}
                setCertification={setCertification}
              />

              <div className="flex justify-between items-center">
                <h1 className="badge badge-primary badge-outline">Langues</h1>
                <button
                  className="btn btn-primary btn-sm"
                  onClick={handleRestLanguage}
                >
                  <RotateCw className="w-4" />
                </button>
              </div>
              <LanguageForm language={language} setLanguage={setLanguage} />

              <div className="flex justify-between">
                <div className="w-1/2">
                  <div className="flex justify-between items-center mb-4">
                    <h1 className="badge badge-primary badge-outline">
                      Compétences
                    </h1>
                    <button
                      className="btn btn-primary btn-sm"
                      onClick={handleRestSkills}
                    >
                      <RotateCw className="w-4" />
                    </button>
                  </div>
                  <SkillsForm skills={skills} setSkills={setSkills} />
                </div>

                <div className="w-1/2 ml-4">
                  <div className="flex justify-between items-center mb-4 ">
                    <h1 className="badge badge-primary badge-outline">
                      Loisirs
                    </h1>
                    <button
                      className="btn btn-primary btn-sm"
                      onClick={handleRestHobbies}
                    >
                      <RotateCw className="w-4" />
                    </button>
                  </div>
                  <HobbyForm hobbies={hobbies} setHobbies={setHobbies} />
                </div>
              </div>
            </div>
          </div>

          <div className='w-2/3 h-full bg-base-100 bg-[url("/file.svg")] bg-cover bg-center scroolable-preview relative'>
            <div className="flex justify-center items-center fixed z-[9999] top-5 right-5">
              <input
                type="range"
                min={50}
                max={200}
                value={zoom}
                onChange={(e) => setZoom(Number(e.target.value))}
                className="range range-xs range-primary"
              />
              <p className="ml-4 text-sm text-primary">{zoom}%</p>
            </div>

            <select
              value={theme}
              onChange={(e) => setTheme(e.target.value)}
              className="select select-bordered fixed z-[9999] select-sm top-12 right-5"
            >
              {themes.map((themeName) => (
                <option key={themeName} value={themeName}>
                  {themeName}
                </option>
              ))}
            </select>

            <div
              className="flex justify-center items-center"
              style={{
                transform: `scale(${zoom / 200})`,
              }}
            >
              <CVPreview
                personalDetails={personalDetails}
                file={file}
                theme={theme}
                experience={experience}
                education={education}
                certification={certification}
                language={language}
                skills={skills}
                hobies={hobbies}
              />
            </div>
          </div>
        </section>

        {/* You can open the modal using document.getElementById('ID').showModal() method */}
        <button
          className="btn"
          onClick={() =>
            (
              document.getElementById("my_modal_3") as HTMLDialogElement
            ).showModal()
          }
        >
          open modal
        </button>

        <dialog id="my_modal_3" className="modal">
          <div className="modal-box w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                ✕
              </button>
            </form>
            <div className="mt-5">
              <div className="flex justify-end mb-5">
                <button className="btn btn-primary">
                  Telecharger
                  <Save className="w-4" />
                </button>
              </div>

              <div className="w-full max-w-full overflow-auto">
                <div className="w-full max-w-full flex justify-center items-center">
                  <CVPreview
                    personalDetails={personalDetails}
                    file={file}
                    theme={theme}
                    experience={experience}
                    education={education}
                    certification={certification}
                    language={language}
                    skills={skills}
                    hobies={hobbies}
                    download={true}
                  />
                </div>
              </div>
            </div>
          </div>
        </dialog>
      </div>

      <div className="lg:hidden">
        <div className="hero bg-base-200 min-h-screen">
          <div className="hero-content text-center">
            <div className="max-w-md">
              <h1 className="text-3xl font-bold">
                Désolé, le CV builder est uniquement disponible sur desktop.
              </h1>
              <Image
                src="/emoji.gif"
                alt="Gift"
                width={500}
                height={500}
                className="mx-auto my-6"
              />
              *
              <p className="py-6">
                Pour creer et personnaliser votre CV, veuillez utiliser un
                ordinateur. Nous vous remercions de votre compréhension.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
