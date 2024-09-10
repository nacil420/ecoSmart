"use client";

import React from "react";
import { IoArrowDownCircleOutline } from "react-icons/io5";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

const variants = {
  offscreen: { y: 150, opacity: 0 },
  onscreen: {
    y: 0,
    opacity: 1,
    transition: { type: "spring", duration: 1.5 },
  },
};

export default function AboutPage() {
  return (
    <>
      {/* Cover Section */}
      <div className="w-full h-screen bg-aboutpage bg-cover bg-center">
        <div className="h-full w-full py-[125px] px-8 flex items-end justify-center bg-black/80">
          <motion.div
            className="w-full md:w-[55%] flex flex-col items-center justify-center"
            variants={variants}
            initial="offscreen"
            animate="onscreen"
          >
            <div className="w-[90%] md:w-[70%] text-center">
              <p className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-100">
                DARI <span className="text-[#2f7d32]">WARGA</span> UNTUK{" "}
                <span className="text-[#2f7d32]">BUMI</span>
              </p>
            </div>
            <div className="py-4 space-y-2 text-center">
              <p className="text-slate-100 text-md md:text-lg">
                Kami percaya bahwa perubahan besar dimulai dari langkah-langkah
                kecil.
              </p>
              <p className="text-slate-100 text-md md:text-lg">
                Didirikan oleh sekelompok warga yang peduli terhadap lingkungan,
              </p>
              <p className="text-slate-100 text-md md:text-lg">
                Kami bertujuan untuk menciptakan dunia yang lebih hijau dan
                berkelanjutan.
              </p>
              <p className="text-slate-100 text-md md:text-lg">
                Melalui daur ulang sampah dan inovasi komunitas.
              </p>
            </div>
            <div className="flex items-center justify-center">
              <Link
                href="#visimisi"
                className="flex items-center gap-2 text-slate-100 bg-[#2f7d32] px-4 py-2 rounded-lg font-bold transition duration-300 ease-in-out hover:bg-[#245a24] scroll-smooth"
              >
                TENTANG KAMI
                <IoArrowDownCircleOutline
                  size={24}
                  className="text-slate-100"
                />
              </Link>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Visi Misi Section */}
      <motion.div
        id="visimisi"
        className="h-auto w-full bg-[#f5f5db] py-[125px] px-8"
        variants={variants}
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true }}
      >
        <div className="h-full w-full flex flex-col md:flex-row items-center justify-center gap-8">
          {/* Visi */}
          <motion.div
            className="w-full md:w-[50%] h-auto bg-[#2f7d32] flex items-center justify-center p-8 rounded-lg"
            variants={variants}
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true }}
          >
            <div>
              <div className="flex items-center justify-center">
                <Image
                  alt="visi"
                  src="/assets/image/misi.png"
                  width="250"
                  height="250"
                  className="w-36 h-36"
                />
              </div>
              <div className="py-4">
                <p className="text-4xl font-bold text-center text-slate-100">
                  MISI
                </p>
              </div>
              <p className="text-md font-bold text-slate-100">
                Mengubah sampah menjadi sumber daya yang bermanfaat dan
                mempromosikan produk lokal yang ramah lingkungan. Kami ingin
                memberdayakan setiap anggota komunitas untuk terlibat dalam
                menjaga kebersihanlinhkungan dan memanfaatkan limbah secara
                kreatif.
              </p>
            </div>
          </motion.div>

          {/* Misi */}
          <motion.div
            className="w-full md:w-[50%] h-auto border-2 border-[#2f7d32] flex items-center justify-center p-8 rounded-lg"
            variants={variants}
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true }}
          >
            <div>
              <div className="flex items-center justify-center">
                <Image
                  alt="misi"
                  src="/assets/image/visi.png"
                  width="250"
                  height="250"
                  className="w-36 h-36"
                />
              </div>
              <div className="py-4">
                <p className="text-4xl font-bold text-center text-[#2f7d32]">
                  VISI
                </p>
              </div>
              <p className="text-md font-bold text-[#2f7d32]">
                Kami membayangkan dunia di mana setiap orang berkontribusi pada
                pelestarianlingkungan, dimana sampahtidak lagi menjadi masalah,
                tetapi menjadi solusi. Kami ingin menjadi jembatan antara warga
                dan lingkungan, menciptakan harmoni antara keduanya
              </p>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Activities Section */}
      <motion.div
        id="kegiatan"
        className="h-auto w-full bg-[#f5f5db] pb-[125px] px-8"
        variants={variants}
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true }}
      >
        <div className="h-full w-full space-y-8">
          {/* Judul Section */}
          <div className="pb-20">
            <p className="text-4xl font-bold text-center text-[#2f7d32]">
              APA YANG KAMI LAKUKAN?
            </p>
          </div>

          {/* Kegiatan Section */}
          <div className="flex flex-col md:flex-row justify-center gap-8">
            {/* Kegiatan 1 */}
            <motion.div
              className="w-full md:w-[30%] bg-[#2f7d32] flex flex-col items-center justify-center px-6 py-8 rounded-lg"
              variants={variants}
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true }}
            >
              <Image
                alt="edukasi"
                src="/assets/image/edukasi.png"
                width="144"
                height="144"
                className="w-36 h-36 mb-4"
              />
              <h3 className="text-2xl font-bold text-center text-slate-100 mb-4">
                EDUKASI & KESADARAN
              </h3>
              <p className="text-md text-center text-slate-100">
                Kami menyelenggarakan berbagai kegiatan untuk meningkatkan
                kesadaran masyarakat tentang pentingnya daur ulang.
              </p>
            </motion.div>

            {/* Kegiatan 2 */}
            <motion.div
              className="w-full md:w-[30%] border-2 border-[#2f7d32] flex flex-col items-center justify-center px-6 py-8 rounded-lg"
              variants={variants}
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true }}
            >
              <Image
                alt="dukungan"
                src="/assets/image/support.png"
                width="144"
                height="144"
                className="w-36 h-36 mb-4"
              />
              <h3 className="text-2xl font-bold text-center text-[#2f7d32] mb-4">
                DUKUNGAN KOMUNITAS
              </h3>
              <p className="text-md text-center text-[#2f7d32]">
                Melalui kerja sama dengan warga lokal, kami membantu
                mempromosikan produk-produk daur ulang.
              </p>
            </motion.div>

            {/* Kegiatan 3 */}
            <motion.div
              className="w-full md:w-[30%] bg-[#2f7d32] flex flex-col items-center justify-center px-6 py-8 rounded-lg"
              variants={variants}
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true }}
            >
              <Image
                alt="inovasi"
                src="/assets/image/inovation.png"
                width="144"
                height="144"
                className="w-36 h-36 mb-4"
              />
              <h3 className="text-2xl font-bold text-center text-slate-100 mb-4">
                INOVASI BERKELANJUTAN
              </h3>
              <p className="text-md text-center text-slate-100">
                Kami mencari cara baru untuk mengurangi, menggunakan kembali,
                dan mendaur ulang sampah.
              </p>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </>
  );
}
