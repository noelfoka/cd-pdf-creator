"use client";

import { Eye, RotateCw } from "lucide-react";
import Image from "next/image";
import PersonalDetailsForm from "./components/PersonalDetailsForm";
import { useEffect, useState } from "react";
import {
  Certification,
  Education,
  Experience,
  Language,
  PersonalDetails,
} from "@/type";
import {
  certificationPreset,
  educationsPreset,
  experiencesPreset,
  languagesPreset,
  personalDetailsPreset,
} from "@/presets";
import CVPreview from "./components/CVPreview";
import ExperiencesForm from "./components/ExperiencesForm";
import EducationForm from "./components/EducationForm";
import CertificationForm from "./components/CertificationForm";
import LanguageForm from "./components/LanguageForm";

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

  const handleRestExperience = () => setExperience([]);
  const handleRestEducation = () => setEducation([]);
  const handleRestCertification = () => setCertification([]);
  const handleRestLanguage = () => setLanguage([]);

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
              <button className="btn btn-primary">
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

              <div className="flex justify-between items-center">
                <h1 className="badge badge-primary badge-outline">Compétences</h1>
                <button
                  className="btn btn-primary btn-sm"
                  onClick={handleRestSkills}
                >
                  <RotateCw className="w-4" />
                </button>
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
              />
            </div>
          </div>
        </section>
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
