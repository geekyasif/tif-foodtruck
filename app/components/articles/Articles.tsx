"use client";

import React, { useEffect, useState } from "react";
import Card from "./Card";
import {
  nextActiveIcon,
  prevDisableIcon,
  prevActiveIcon,
  nextDisableIcon,
} from "@/app/utils/SocialIcons";
import articleData from "../../utils/articles.json";
import CardShimmer from "./CardShimmer";

interface IArticle {
  id: number;
  title: string;
  desc: string;
  image: string;
}

function Articles() {
  const [data, setData] = useState<IArticle[]>([]);
  const [totalPage, setTotalPage] = useState<number>(
    Math.ceil(articleData.length / 3)
  );
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [start, setStart] = useState<number>(0);
  const [end, setEnd] = useState<number>(3);
  const [loading, setLoading] = useState<boolean>(true);

  const handlePrevPage = (): void => {
    if (currentPage > 1) {
      setLoading(true);
      setEnd(start);
      setStart(start - 3);
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextPage = (): void => {
    if (currentPage < totalPage) {
      setLoading(true);
      setStart(end);
      setEnd(end + 3);
      setCurrentPage(currentPage + 1);
    }
  };

  useEffect(() => {
    setTimeout(() => {
      const _data = articleData.slice(start, end);
      setData(_data);
      setLoading(false);
    }, 1000);
  }, [start, end]);

  return (
    <div className="mx-14 lg:mt-40 lg:mx-28">
      <h2 className="text-3xl text-center lg:text-start mb-12 lg:text-6xl font-semibold text-[#0E2368] font-poppins tracking-wide">
        Latest Articles
      </h2>
      <div className="flex flex-wrap lg:mb-16 lg:flex-grow lg:gap-10 lg:justify-between">
        {loading ? (
          <>
            <CardShimmer />
            <CardShimmer />
            <CardShimmer />
          </>
        ) : (
          data.map(({ id, title, desc, image }) => (
            <Card key={id} title={title} desc={desc} image={image} />
          ))
        )}
      </div>
      <div className="flex justify-center items-center mb-16">
        <button
          onClick={handlePrevPage}
          className={`${
            currentPage === 1 ? "disabled cursor-not-allowed" : ""
          }`}
          disabled={currentPage === 1}
        >
          {currentPage === 1 ? prevDisableIcon : prevActiveIcon}
        </button>
        <p className="mx-4 text-2xl font-normal leading-7 font-serif text-secondary">
          {currentPage} / {totalPage}
        </p>
        <button
          onClick={handleNextPage}
          className={`${
            currentPage === totalPage ? "disabled cursor-not-allowed" : ""
          }`}
          disabled={currentPage === totalPage}
        >
          {currentPage === totalPage ? nextDisableIcon : nextActiveIcon}
        </button>
      </div>
    </div>
  );
}

export default Articles;
