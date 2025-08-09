/* eslint-disable @next/next/no-img-element */
"use client";
import React, { useEffect, useState } from "react";
import { Chip, Icon } from "konsta/react";
import Layout from "./Layout";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaChevronRight } from "react-icons/fa";


export default function Home() {
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);



  if (!hasMounted) return null;
  return (
    <Layout>
      {/* Fixed Background Elements - These stay in place during scroll */}
      <div className="fixed inset-0 z-0">
        {/* Three.js Star Field Background */}

        {/* Original background image with reduced opacity for layering */}
        <div className="absolute inset-0 opacity-30 bg-black" />

        {/* Enhanced gradient overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/70 to-black/90" />
      </div>

      {/* Scrollable Content */}
      <div className="relative z-10 px-10 sm:px-16 lg:px-24 xl:px-32 py-8">
        {/* Hero Section */}
        <section className="relative flex items-center min-h-screen">
          <div className="max-w-screen-xl px-4 py-8 mx-auto text-center lg:py-16 lg:px-12">
            <a
              href="https://celo.org"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-between px-1 py-1 pr-4 pl-4 text-sm rounded-full mb-7 bg-gray-800/80 backdrop-blur-sm text-white hover:bg-gray-700/80 transition-all duration-300"
            >
              <Chip
                media={
                  <img
                    alt="Celo Logo"
                    className="ios:h-7 material:h-6 rounded-full"
                    src="/celo.png"
                  />
                }
                className="text-xs bg-black/80 backdrop-blur-sm rounded-full text-white px-4 py-1.5 mr-3"
              />
              <span className="text-xs sm:text-sm font-medium ml-2">
                Powered by Celo
              </span>
              <Icon
                ios={<FaChevronRight />}
                material={<FaChevronRight />}
                className="w-5 h-5 ml-2 mt-1.5"
              />
            </a>

            <h1 className="mb-4 text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight lg:text-6xl bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text text-transparent drop-shadow-lg">
              Welcome to Edufunds
            </h1>

            <p className="mb-8 text-md sm:text-lg md:text-xl font-medium text-gray-200 sm:px-16 xl:px-48 drop-shadow-md">
              A Celo-powered platform for managing student stipends — with smart
              spending controls, automated savings, real-time withdrawal
              tracking, and transparent fund allocation between parents and
              students.
            </p>
          </div>
          {/* Scroll indicator */}
        </section>

        {/* Features section */}
      </div>

      <ToastContainer />
    </Layout>
  );
}
