"use client";
import React from "react";
import Image from "next/image";
import useFetchPortfoliosList from "../hooks/useFetchPortfoliosList";

type PortfolioDataTypes = {
  userId: string;
  pfId: string;
  slug: string;
  name: string;
  shortDescription: string;
  followerCount: number;
  dailyPercentGain: number;
  originalImageURL: string;
};

export default function PortfolioUI() {
  const { isLoading, data, error } = useFetchPortfoliosList();
  console.log(data, error);
  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;
  if (Object.hasOwn(data, "finance")) {
    const { name, total, portfolios } = data?.finance?.result[0];
    return (
      <div className="p-6 max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold">{name}</h1>
          <p className="text-gray-600">Total Portfolios: {total}</p>
        </div>

        {/* Portfolio Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {portfolios.map((portfolio: PortfolioDataTypes) => (
            <div
              key={portfolio.pfId}
              className="bg-white shadow-md rounded-lg overflow-hidden flex flex-col"
            >
              {/* Image */}
              <Image
                src={portfolio.originalImageURL}
                width={400}
                height={200}
                alt={portfolio.name}
                className="w-full h-40 object-cover"
                priority
              />

              {/* Content */}
              <div className="p-4 flex flex-col flex-grow">
                <h2 className="text-lg font-bold">{portfolio.name}</h2>
                <p className="text-sm text-gray-700 mt-2 line-clamp-3">
                  {portfolio.shortDescription}
                </p>

                {/* Footer */}
                <div className="mt-auto flex justify-between items-center">
                  <span className="text-gray-500">
                    Followers: {portfolio.followerCount.toLocaleString()}
                  </span>
                  <span
                    className={`text-sm font-bold ${
                      portfolio.dailyPercentGain > 0
                        ? "text-green-600"
                        : "text-red-600"
                    }`}
                  >
                    {portfolio?.dailyPercentGain > 0 ? "+" : ""}
                    {portfolio?.dailyPercentGain?.toFixed(2)}%
                  </span>
                </div>
                <button className="mt-4 w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
                  Follow
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}
