import { Eye, RotateCw } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <div className="hidden lg:block">
        <section className="flex items-center h-screen">
          <div className="w-1/3 h-full bg-base-200 p-10 scroolable no-scrollbar">
            <div className="mb-4 flex justify-between items-center">
              <h1 className="text-2xl font-bold italic">
                CV
                <span className="text-primary">Builder</span>
              </h1>
              <button className="btn btn-primary">
                Prévisualisez
                <Eye className="w-4" />
              </button>
            </div>

            <div className="flex flex-col gap-6 rounded-lg">

              <div className="flex justify-between items-center">
                <h1 className="badge badge-primary badge-outline">Qui êtes vous ?</h1>
                <button className="btn btn-primary btn-sm">
                <RotateCw className="w-4" />
                </button>
              </div>

            </div>
          </div>

          <div className='w-2/3 h-full bg-base-100 bg-[url("/file.svg")] bg-cover bg-center scroolable-preview'>
            Test
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
