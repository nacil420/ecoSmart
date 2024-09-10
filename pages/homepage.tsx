"use client";

import { useMemo } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { IoArrowForwardCircleOutline } from "react-icons/io5";
import Link from "next/link";
import TransitionLayout from "@/components/transtition";

function variants() {
  return {
    offscreen: {
      y: 150,
      opacity: 0,
    },
    onscreen: ({ duration = 2 } = {}) => ({
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        duration,
      },
    }),
  };
}

export default function HomePage() {
  const setVariants = useMemo(() => variants(), []);

  return (
    <div id="home" className="bg-[#f5f5db] py-4 px-6 md:px-12">
      <TransitionLayout />
      <div className="max-w-screen-xl mx-auto mt-4">
        <motion.div
          className="grid grid-flow-row w-full h-screen sm:grid-flow-col grid-rows-2 md:grid-rows-1 sm:grid-cols-2 gap-4 py-2 sm:py-4"
          variants={setVariants}
          initial="offscreen"
          animate="onscreen"
        >
          <div className="flex flex-col justify-center items-center sm:items-start text-center sm:text-left px-6 sm:px-10 py-4 sm:py-8">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight text-black">
              DARI <span className="text-[#2f7d32]">WARGA</span> UNTUK{" "}
              <span className="text-[#2f7d32]">BUMI</span>
            </h1>
            <p className="text-[#2f7d32] mt-4 mb-8 text-sm sm:text-base">
              DAUR ULANG DAN PRODUK LOKAL YANG MENDUKUNG KEBERLANGSUNGAN
            </p>
            <Link
              href="/about"
              className="flex items-center gap-2 text-white bg-[#2f7d32] px-5 py-2 rounded-lg font-semibold transition duration-300 ease-in-out hover:bg-[#245a24]"
            >
              {" "}
              TENTANG KAMI
              <IoArrowForwardCircleOutline size={24} />
            </Link>
          </div>

          <div className="relative w-full h-80 sm:h-auto overflow-hidden rounded-lg">
            <Image
              src="/assets/image/ecoSmartLogo.png"
              alt="Bumi"
              layout="fill"
              objectFit="cover"
              className="object-center"
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
}
