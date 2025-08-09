/* eslint-disable @next/next/no-img-element */
"use client";
import React, { useEffect, useState } from "react";
import Layout from "./Layout";
import { useAccount, useContractRead } from "wagmi";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useRouter } from "next/navigation";

export default function Home() {
  const [hasMounted, setHasMounted] = useState(false);
  const router = useRouter();

  useEffect(() => {
    setHasMounted(true);
  }, []);

  if (!hasMounted) return null;
  return (
    <Layout>
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 opacity-30 bg-black" />

        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/70 to-black/90" />
      </div>

      {/* Scrollable Content */}
      <div className="relative z-10 px-10 sm:px-16 lg:px-24 xl:px-32 py-8 flex flex-col items-center min-h-screen justify-center text-center">
        {/* Hero Section */}
        <section className="max-w-screen-xl px-4 py-8 mx-auto">
          <h1 className="mb-4 text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight lg:text-6xl bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text text-transparent drop-shadow-lg">
            Welcome to Edufunds
          </h1>

          <p className="mb-8 text-md sm:text-lg md:text-xl font-medium text-gray-200 sm:px-16 xl:px-48 drop-shadow-md">
            A Celo-powered platform for managing student stipends — with smart
            spending controls, automated savings, real-time withdrawal tracking,
            and transparent fund allocation between parents and students.
          </p>

          {/* Buttons Container */}
          <div className="flex justify-center gap-6 mt-8">
            <button
              onClick={() => router.push("/parent")}
              type="button"
              className="px-8 py-3 rounded-md bg-gray-900 text-white font-semibold hover:bg-gray-700 transition"
            >
              Parent
            </button>
            <button
              onClick={() => router.push("/student")}
              type="button"
              className="px-8 py-3 rounded-md bg-gray-900 text-white font-semibold hover:bg-gray-700 transition"
            >
              Student
            </button>
          </div>
        </section>
      </div>

      <ToastContainer />
    </Layout>
  );
}
