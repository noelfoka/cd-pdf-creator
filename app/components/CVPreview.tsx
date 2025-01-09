"use client";

import {
  Certification,
  Education,
  Experience,
  Hobby,
  Language,
  PersonalDetails,
  Skill,
} from "@/type";
import React from "react";
import Image from "next/image";
import {
  BookOpenCheck,
  BriefcaseBusiness,
  GraduationCap,
  Mail,
  MapPinCheckInside,
  Phone,
  Star,
} from "lucide-react";

type Props = {
  personalDetails: PersonalDetails;
  file: File | null;
  theme: string;
  experience: Experience[];
  education: Education[];
  certification: Certification[];
  language: Language[];
  skills: Skill[];
  hobies: Hobby[];
};

function formatDate(dateString: string): string {
  const date = new Date(dateString);
  const options: Intl.DateTimeFormatOptions = {
    day: "2-digit",
    month: "short",
    year: "numeric",
  };
  return date.toLocaleDateString("fr-FR", options);
}

const getStarRating = (proficiency: string) => {
  let filledStars = 0;
  const maxStars = 5;

  switch (proficiency) {
    case "Débutant":
      filledStars = 1;
      break;
    case "Intermédiaire":
      filledStars = 3;
      break;
    case "Avancé":
      filledStars = 5;
      break;
    default:
      filledStars = 0;
      break;
  }

  return (
    <>
      {Array.from({ length: filledStars }, (_, index) => (
        <Star key={index} className="text-primary" />
      ))}
      {Array.from({ length: maxStars - filledStars }, (_, index) => (
        <Star key={index + filledStars} className="text-gray-300" />
      ))}
    </>
  );
};

const CVPreview: React.FC<Props> = ({
  personalDetails,
  file,
  theme,
  experience,
  education,
  certification,
  language,
  skills,
  hobies,
}) => {
  return (
    <div
      className={`flex p-16 w-[950px] h-[1200px] shadow-lg`}
      data-theme={theme}
    >
      <div className="flex flex-col w-1/3">
        <div className="h-80 rounded-full border-8 overflow-hidden border-primary">
          {file && (
            <Image
              src={URL.createObjectURL(file)}
              alt="Profile"
              width={300}
              height={300}
              className="w-full h-full rounded-lg object-cover"
              onLoadingComplete={() => {
                if (typeof file !== "string") {
                  URL.revokeObjectURL(URL.createObjectURL(file));
                }
              }}
            />
          )}
        </div>

        <div className="mt-4 flex flex-col w-full">
          <div>
            <h1 className="uppercase font-bold my-2">contact</h1>

            <ul className="space-y-2">
              <li className="flex">
                <div className="break-all text-sm relative">
                  <div className="ml-8">{personalDetails.phone}</div>
                  {personalDetails.phone && (
                    <div className="absolute left-0 top-0">
                      <Phone className="w-5 text-primary" />
                    </div>
                  )}
                </div>
              </li>

              <li className="flex">
                <div className="break-all text-sm relative">
                  <div className="ml-8">{personalDetails.email}</div>
                  {personalDetails.email && (
                    <div className="absolute left-0 top-0">
                      <Mail className="w-5 text-primary" />
                    </div>
                  )}
                </div>
              </li>

              <li className="flex">
                <div className="break-all text-sm relative">
                  <div className="ml-8">{personalDetails.address}</div>
                  {personalDetails.address && (
                    <div className="absolute left-0 top-0">
                      <MapPinCheckInside className="w-5 text-primary" />
                    </div>
                  )}
                </div>
              </li>
            </ul>
          </div>

          <div className="mt-6">
            <h1 className="uppercase font-bold mb-2">Compétences</h1>

            <div className="flex flex-wrap gap-2">
              {skills.map((skill, index) => (
                <p key={index} className="badge badge-primary uppercase">
                  {skill.name}
                </p>
              ))}
            </div>
          </div>

          <div className="mt-6">
            <h1 className="uppercase font-bold mb-2">Langues</h1>

            <div className="flex flex-col space-y-2">
              {language.map((lang, index) => (
                <div key={index}>
                  <span className="capitalize font-semibold">
                    {lang.language}
                  </span>
                  <div className="flex mt-2">
                    {getStarRating(lang.proficiency)}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-6">
            <h1 className="uppercase font-bold mb-2">Loisirs</h1>

            <div className="flex flex-col space-y-2">
              {hobies.map((hobby, index) => (
                <div key={index}>
                  <span className="capitalize">{hobby.name}</span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>

      <div className="w-2/3 ml-8">
        <div className="w-full flex flex-col space-y-4">
          <h1 className="uppercase text-xl">{personalDetails.fullName}</h1>
          <h2 className="uppercase text-5xl text-primary font-bold">
            {personalDetails.postSeeking}
          </h2>
          <p className="break-all w-full text-sm">
            {personalDetails.description}
          </p>
        </div>

        <section className="w-full h-fit p-5">
          <div>
            <h1 className="uppercase font-bold mb-2">Expériences</h1>

            <ul className="steps steps-vertical space-y-3">
              {experience.map((exp, index) => (
                <li key={index} className="step step-primary">
                  <div className="text-left">
                    <h2 className="flex text-md uppercase font-bold">
                      <BriefcaseBusiness className="w-5" />
                      <span className="ml-2">{exp.jobTitle}</span>
                    </h2>
                    <div className="text-sm my-2">
                      <span className="badge badge-primary">
                        {exp.companyName}
                      </span>
                      <span className="italic ml-2">
                        {formatDate(exp.startDate)} au {formatDate(exp.endDate)}
                      </span>
                    </div>
                    <p className="text-sm">{exp.description}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-6">
            <h1 className="uppercase font-bold mb-2">Education</h1>

            <ul className="steps steps-vertical space-y-3">
              {education.map((exp, index) => (
                <li key={index} className="step step-primary">
                  <div className="text-left">
                    <h2 className="flex text-md uppercase font-bold">
                      {/* <BriefcaseBusiness className="w-5" /> */}
                      <GraduationCap className="w-5" />
                      <span className="ml-2">{exp.degree}</span>
                    </h2>
                    <div className="text-sm my-2">
                      <span className="badge badge-primary">{exp.school}</span>
                      <span className="italic ml-2">
                        {formatDate(exp.startDate)} au {formatDate(exp.endDate)}
                      </span>
                    </div>
                    <p className="text-sm">{exp.description}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-6">
            <h1 className="uppercase font-bold mb-2">Certifications</h1>

            <ul className="steps steps-vertical space-y-3">
              {certification.map((cert, index) => (
                <li key={index} className="step step-primary">
                  <div className="text-left">
                    <h2 className="flex text-md uppercase font-bold">
                      {/* <BriefcaseBusiness className="w-5" /> */}
                      <BookOpenCheck className="w-5" />
                      <span className="ml-2">{cert.name}</span>
                    </h2>
                    <div className="text-sm my-2">
                      <span className="badge badge-primary">
                        {cert.organization}
                      </span>
                      <span className="italic ml-2">
                        {formatDate(cert.startDate)} au{" "}
                        {formatDate(cert.endDate)}
                      </span>
                    </div>
                    <p className="text-sm">{cert.description}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
};

export default CVPreview;
