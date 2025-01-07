"use client";

import { PersonalDetails } from "@/type";
import React from "react";
import Image from "next/image";
import { Mail, MapPinCheckInside, Phone } from "lucide-react";

type Props = {
  personalDetails: PersonalDetails;
  file: File | null;
};

const CVPreview: React.FC<Props> = ({ personalDetails, file }) => {
  return (
    <div className={`flex p-16 w-[950px] h-[1200px] shadow-lg`}>
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
                if(typeof file !== 'string') {
                  URL.revokeObjectURL(URL.createObjectURL(file))
                }
              }}
            />
          )}
        </div>

        <div className="mt-4 flex flex-col w-full">
          <div>
            <h1 className="uppercase font-bold my-2">
              contact
            </h1>

            <ul className="space-y-2">
              <li className="flex">
                <div className="break-all text-sm relative">
                  <div className="ml-8">
                    {personalDetails.phone}
                  </div>
                  {personalDetails.phone && (
                    <div className="absolute left-0 top-0">
                      <Phone className="w-5 text-primary" />
                    </div>
                  )}
                </div>
              </li>

              <li className="flex">
                <div className="break-all text-sm relative">
                  <div className="ml-8">
                    {personalDetails.email}
                  </div>
                  {personalDetails.email && (
                    <div className="absolute left-0 top-0">
                      <Mail className="w-5 text-primary" />
                    </div>
                  )}
                </div>
              </li>

              <li className="flex">
                <div className="break-all text-sm relative">
                  <div className="ml-8">
                    {personalDetails.address}
                  </div>
                  {personalDetails.address && (
                    <div className="absolute left-0 top-0">
                      <MapPinCheckInside className="w-5 text-primary" />
                    </div>
                  )}
                </div>
              </li>

            </ul>
          </div>
        </div>

      </div>
      
      <div></div>
    </div>
  );
};

export default CVPreview;
