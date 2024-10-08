"use client";

import React, { useState } from "react";
import { IoArrowDownCircleOutline } from "react-icons/io5";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  MdKeyboardDoubleArrowRight,
  MdKeyboardDoubleArrowLeft,
} from "react-icons/md";
import { Baju, Product, Pupuk } from "@/data/product";
import TransitionLayout from "@/components/transtition";

const ITEMS_PER_PAGE = 6;
const variants = {
  offscreen: { y: 150, opacity: 0 },
  onscreen: {
    y: 0,
    opacity: 1,
    transition: { type: "spring", duration: 1.5 },
  },
};

export default function ProductPage() {
  const [currentPage, setCurrentPage] = useState(0);
  const [currentCategory, setCurrentCategory] = useState("Product");

  const currentProducts =
    currentCategory === "Baju"
      ? Baju
      : currentCategory === "Pupuk"
      ? Pupuk
      : Product;

  const startIndex = currentPage * ITEMS_PER_PAGE;
  const paginatedProduct = currentProducts.slice(
    startIndex,
    startIndex + ITEMS_PER_PAGE
  );

  const handleNext = () => {
    if ((currentPage + 1) * ITEMS_PER_PAGE < currentProducts.length) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevious = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleCategoryChange = (category: string) => {
    setCurrentCategory(category);
    setCurrentPage(0);
  };

  return (
    <>
      <TransitionLayout />
      {/* cover product */}
      <div className="w-full h-screen bg-aboutpage bg-cover bg-center">
        <div className="h-full w-full py-[125px] px-8 flex md:items-end items-center justify-center bg-black/80">
          <motion.div
            variants={variants}
            initial="offscreen"
            animate="onscreen"
            className="md:w-[60%] w-full flex flex-col items-center justify-center"
          >
            {/* text */}
            <motion.div
              variants={variants}
              initial="offscreen"
              animate="onscreen"
            >
              <p className="text-4xl md:text-5xl lg:text-6xl font-bold text-center text-slate-100">
                INOVASI<span className="text-[#2f7d32]"> HIJAU </span>DARI
                <span className="text-[#2f7d32]"> KOMUNITAS </span>KAMI
              </p>
            </motion.div>
            <motion.div
              variants={variants}
              initial="offscreen"
              animate="onscreen"
              className="py-8"
            >
              <p className="text-slate-100 text-center text-md">
                Produk berkualitas hasil daur ulang, dibuat dengan cinta oleh
                warga lokal
              </p>
              <p className="text-slate-100 text-center text-md">
                untuk masa depan yang lebih baik.
              </p>
            </motion.div>
            <motion.div
              variants={variants}
              initial="offscreen"
              animate="onscreen"
              className="flex items-center justify-center"
            >
              <Link
                href="#product"
                className="flex items-center gap-2 text-slate-100 bg-[#2f7d32] px-4 py-2 rounded-lg scroll-smooth font-bold"
              >
                LIHAT PRODUK
                <IoArrowDownCircleOutline
                  size={24}
                  className="text-slate-100"
                />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* product */}
      <div id="product" className="h-auto w-full bg-[#f5f5db] py-[125px] px-8">
        <div className="flex md:flex-row flex-col items-start justify-center gap-8">
          <motion.div
            className="h-full xl:w-[70%] md:w-[80%] w-full gap-8"
            variants={variants}
            initial="offscreen"
            animate="onscreen"
          >
            <p className="text-2xl font-bold text-[#2f7d32]">PRODUCT KAMI</p>
            <div className="w-full h-[3px] bg-[#2f7d32] my-2"></div>
            <div className="grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8">
              {paginatedProduct.map((product, index) => (
                <motion.div
                  variants={variants}
                  initial="offscreen"
                  animate="onscreen"
                  viewport={{ once: true }}
                  key={index}
                  className="border-[3px] border-[#2f7d32] bg-slate-100 p-4 rounded-md hover:scale-110"
                >
                  <Link
                    href={{
                      pathname: `/product/${product.id}`,
                      query: {
                        id: product.id,
                        Head: product.Head,
                        SubHead: product.SubHead,
                        Image: product.Image,
                        Description: product.Description,
                        Harga: product.Harga,
                        LinkWa: product.LinkWa,
                      },
                    }}
                    passHref
                    className="scroll-smooth"
                  >
                    <div className="m-5">
                      <p className="text-xl text-justify font-bold text-[#2f7d32] ">
                        {product.Head}
                      </p>
                      <div className="pb-2">
                        <p className="text-md text-[#2f7d32]">
                          {product.SubHead}
                        </p>
                      </div>
                      <div>
                        <Image
                          alt="misi"
                          src={product.Image}
                          width="1000"
                          height="1000"
                          className="w-full h-[200px]"
                        />
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>

            {/* Pagination buttons */}
            <div className="flex items-center justify-between mt-8">
              <button
                onClick={handlePrevious}
                className={`text-[#2f7d32] flex font-bold ${
                  currentPage === 0 ? "hidden" : ""
                }`}
              >
                <MdKeyboardDoubleArrowLeft
                  size={24}
                  className="text-[#2f7d32]"
                />
                Previous
              </button>
              <button
                onClick={handleNext}
                className={`text-[#2f7d32] flex font-bold`}
              >
                Next
                <MdKeyboardDoubleArrowRight
                  size={24}
                  className="text-[#2f7d32]"
                />
              </button>
            </div>
          </motion.div>

          {/* Daftar (Categories) */}
          <motion.div
            className="h-full xl:w-[30%] md:w-[20%] w-full"
            variants={variants}
            initial="offscreen"
            animate="onscreen"
          >
            <p className="text-2xl font-bold text-[#2f7d32]">DAFTAR</p>
            <div className="w-full h-[3px] bg-[#2f7d32] my-2"></div>
            <div className="py-2">
              <button
                className={`text-[#2f7d32] ${
                  currentCategory === "Product" ? "font-bold" : ""
                }`}
                onClick={() => handleCategoryChange("Product")}
              >
                Product
              </button>
              {Product.map((Product) => (
                <motion.div
                  variants={variants}
                  initial="offscreen"
                  animate="onscreen"
                  viewport={{ once: true }}
                  key={Product.id}
                >
                  <Link
                    className="text-[#2f7d32] scroll-smooth"
                    href={{
                      pathname: `/product/${Product.id}`,
                      query: {
                        id: Product.id,
                        Head: Product.Head,
                        SubHead: Product.SubHead,
                        Image: Product.Image,
                        Description: Product.Description,
                        Harga: Product.Harga,
                        LinkWa: Product.LinkWa,
                      },
                    }}
                    passHref
                  >
                    - {Product.Head}
                  </Link>
                </motion.div>
              ))}
            </div>
            <div className="py-2">
              <button
                className={`text-[#2f7d32] ${
                  currentCategory === "Baju" ? "font-bold" : ""
                }`}
                onClick={() => handleCategoryChange("Baju")}
              >
                Baju
              </button>
              {Baju.map((Baju) => (
                <motion.div
                  variants={variants}
                  initial="offscreen"
                  animate="onscreen"
                  viewport={{ once: true }}
                  key={Baju.id}
                >
                  <Link
                    className="text-[#2f7d32] scroll-smooth"
                    href={{
                      pathname: `/product/${Baju.id}`,
                      query: {
                        id: Baju.id,
                        Head: Baju.Head,
                        SubHead: Baju.SubHead,
                        Image: Baju.Image,
                        Description: Baju.Description,
                        Harga: Baju.Harga,
                        LinkWa: Baju.LinkWa,
                      },
                    }}
                    passHref
                  >
                    - {Baju.Head}
                  </Link>
                </motion.div>
              ))}
            </div>
            <div className="py-2">
              <button
                className={`text-[#2f7d32] ${
                  currentCategory === "Pupuk" ? "font-bold" : ""
                }`}
                onClick={() => handleCategoryChange("Pupuk")}
              >
                Pupuk
              </button>
              {Pupuk.map((Pupuk) => (
                <motion.div
                  variants={variants}
                  initial="offscreen"
                  animate="onscreen"
                  viewport={{ once: true }}
                  key={Pupuk.id}
                >
                  <Link
                    className="text-[#2f7d32] scroll-smooth"
                    href={{
                      pathname: `/product/${Pupuk.id}`,
                      query: {
                        id: Pupuk.id,
                        Head: Pupuk.Head,
                        SubHead: Pupuk.SubHead,
                        Image: Pupuk.Image,
                        Description: Pupuk.Description,
                        Harga: Pupuk.Harga,
                        LinkWa: Pupuk.LinkWa,
                      },
                    }}
                    passHref
                  >
                    - {Pupuk.Head}
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
}
