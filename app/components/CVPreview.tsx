"use client";

import { PersonalDetails } from "@/type";
import React from "react";
import Image from "next/image";

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
        <div></div>
      </div>
    </div>
  );
};

export default CVPreview;
