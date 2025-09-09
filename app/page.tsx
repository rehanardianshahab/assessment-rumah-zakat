import { Globe, MapPinIcon } from "lucide-react";
import Image from "next/image";
import { FaGithubSquare, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export default function Home() {
  return (
    <div>
      <div className="center-container base-container">
        <div className="w-full max-w-4xl shadow-2xl rounded-2xl overflow-hidden">
          {/* Banner */}
          <div className="bg-red-950 w-full h-62 sm:h-52 md:h-60 lg:h-64 rounded-t-2xl">
            {/* Banner Teks */}
            <div className="relative w-full h-full">
              <div className="absolute flex justify-center w-full md:top-26 top-18">
                <span className="text-white md:text-4xl text-2xl font-semibold">Frontend Developer</span>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="p-6">
            {/*  Pengatur Layout Vertikal */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4">
              <div className="w-full space-y-4">
                {/* Foto Profil */}
                <div className="relative w-42 h-42 -mt-27 md:mx-0 mx-auto border-8 border-white rounded-full">
                  <Image src="/profile.jpg" className="rounded-full" alt="Rehan Ardian Shahab" fill/>
                </div>
                
                {/* Nama */}
                <p className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-800">
                  Rehan Ardian Shahab
                </p>
              </div>

              {/* Info kanan */}
              <div className="w-full flex flex-row md:items-center md:justify-end gap-3 md:gap-4">
                <p className="flex items-center rounded-full gap-2 font-semibold bg-blue-800/10 text-blue-800 py-1.5 px-4">
                  <MapPinIcon size={22} className="shrink-0" />
                  <span className="inline-block text-sm sm:text-base">
                    Bandung
                  </span>
                </p>

              </div>

            </div>
            {/* Deskripsi */}
            <div className="w-full text-justify space-y-4 mt-4">
              <p><span className="text-2xl font-semibold"> Halo</span>, perkenalkan saya <b>Rehan Ardian Shahab</b>.
              Saya seorang Frontend Developer yang fokus membangun antarmuka aplikasi dengan Next.js, Vue.js, dan Nuxt.js, serta memanfaatkan framework CSS seperti Tailwind CSS dan Windi CSS untuk membuat desain yang responsif dan modern.</p>
              <p>Selain mengerjakan frontend, saya juga bisa menangani backend sederhana, seperti pembuatan API dan pengelolaan data menggunakan Sequelize dan Fastify.
              Saya pernah berpengalaman sebagai Mentoring & Educational Consultant di PT Eduwork.id, sekaligus terlibat dalam proyek e-commerce sebagai frontend developer.</p>
              <p>Saya selalu terbuka untuk belajar hal baru dan berusaha menghadirkan pengalaman pengguna yang lebih baik melalui setiap proyek yang saya kerjakan.</p>
            </div>

            {/* Social Media */}
            <div className="mt-12">
              <p className="font-bold mb-4">Ikuti saya di :</p>
              <div className="flex md:justify-start justify-center gap-4 w-full">
                <a href="https://www.linkedin.com/in/rehan-ardian-shahab-070097192/" className="text-blue-800 hover:text-blue-900 transition-colors duration-200" target="_blank" rel="noopener noreferrer">
                  <FaLinkedin size={36} />
                </a>
                <a href="https://github.com/rehanardianshahab" className="hover:text-gray-700 transition-colors duration-200" target="_blank" rel="noopener noreferrer">
                  <FaGithubSquare size={36} />
                </a>
                <a href="mailto:rehanardian1@gmail.com" className="hover:text-blue-700 text-blue-500 transition-colors duration-200" target="_blank" rel="noopener noreferrer">
                  <MdEmail size={36} />
                </a>
                <a href="https://rehan-space.netlify.app/" className="hover:text-gray-700 text-gray-500 transition-colors duration-200" target="_blank" rel="noopener noreferrer">
                  <Globe size={36} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
