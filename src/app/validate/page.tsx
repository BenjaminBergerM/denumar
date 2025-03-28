"use client"

import { sendConfirmation } from "@/actions/emailActions";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Validate() {
  const [step, setStep] = useState(0);

  useEffect(() => {
    const savedStep = localStorage.getItem("denumar_step");
    if (savedStep) {
      const parsedStep = parseInt(savedStep);
      if (!isNaN(parsedStep) && parsedStep >= 0 && parsedStep <= 4) {
        setStep(parsedStep);
      } else {
        localStorage.setItem("denumar_step", "0");
        setStep(0);
      }
    }
  }, []);

  const handleNextStep = () => {
    setStep((prev) => {
      const next = prev + 1;
      localStorage.setItem("denumar_step", next.toString());
      return next;
    });
  };

  const handlePrevious = () => {
    setStep((prev) => {
      const back = Math.max(prev - 1, 0);
      localStorage.setItem("denumar_step", back.toString());
      return back;
    });
  };

  const renderStep = () => {
    switch (step) {
      case 0:
        return <Step4 onClick={handleNextStep} />;
      case 1:
        return <Step1 onClick={handleNextStep} />;
      case 2:
        return <Step0 onClick={handleNextStep} />;
      case 3:
        return <Step2 onClick={handleNextStep} />;
      case 4:
        return <Step3 />;
      default:
        return <Step1 onClick={handleNextStep} />;
    }
  };

  return (
    <div className="">
      {step > 0 && (<BackButton onClick={handlePrevious} />)}
      {renderStep()}
    </div>
  )
}

function BackButton({ onClick }: { onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className="absolute top-4 left-4 z-20 text-white bg-black/30 backdrop-blur px-4 py-2 rounded-full hover:bg-black/50"
    >
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 15.75 3 12m0 0 3.75-3.75M3 12h18" />
      </svg>
    </button>
  );
}

function Step0({ onClick }: { onClick: () => void }) {
  return (
    <div className="overflow-hidden py-32">
      <div className="mx-auto max-w-7xl px-6 lg:flex lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-12 gap-y-16 lg:mx-0 lg:min-w-full lg:max-w-none lg:flex-none lg:gap-y-8">
          <div className="lg:col-end-1 lg:w-full lg:max-w-lg lg:pb-8">
            <h2 className="text-4xl font-semibold tracking-tight text-gray-100 sm:text-5xl">Nos moments ✨</h2>
            <p className="mt-6 text-xl/8 text-gray-200">
              Quiero compartirte algunos de los momentos que vivimos juntos.
              Cada uno de ellos fue especial para mí. Me llenaron de felicidad, de amor y de un montón de cosas que ni siquiera sé cómo poner en palabras.
            </p>
            <p className="mt-6 text-base/7 text-gray-200">
              Lo único que tengo claro es que me encantaría seguir construyendo más momentos así… con vos.
            </p>
            <div className="flex mt-10">
              <button
                className="bg-white text-black font-bold py-4 px-8 rounded-2xl shadow-lg hover:bg-gray-200 transition text-base sm:text-lg"
                onClick={onClick}
              >
                Seguí leyendo <span aria-hidden="true">&rarr;</span>
              </button>
            </div>
          </div>
          <div className="flex flex-wrap items-start justify-end gap-6 sm:gap-8 lg:contents">
            <div className="w-0 flex-auto lg:ml-auto lg:w-auto lg:flex-none lg:self-end">
              <Image
                alt="Team Moment 1"
                src="/images/img1.jpg"
                width={592}
                height={422}
                className="aspect-[7/5] w-[37rem] max-w-none rounded-2xl bg-gray-50 object-cover object-[25%_10%]"
              />
            </div>
            <div className="contents lg:col-span-2 lg:col-end-2 lg:ml-auto lg:flex lg:w-[37rem] lg:items-start lg:justify-end lg:gap-x-8">
              <div className="order-first flex w-64 flex-none justify-end self-end lg:w-auto">
                <Image
                  alt="Team Moment 2"
                  src="/images/img2.jpg"
                  width={384}
                  height={288}
                  className="aspect-[4/3] w-[24rem] max-w-none flex-none rounded-2xl bg-gray-50 object-cover"
                />
              </div>
              <div className="flex w-96 flex-auto justify-end lg:w-auto lg:flex-none">
                <Image
                  alt="Team Moment 3"
                  src="/images/img3.jpg"
                  width={592}
                  height={433}
                  className="aspect-[7/5] w-[37rem] max-w-none flex-none rounded-2xl bg-gray-50 object-cover"
                />
              </div>
              <div className="hidden sm:block sm:w-0 sm:flex-auto lg:w-auto lg:flex-none">
                <Image
                  alt="Team Moment 4"
                  src="/images/img4.jpg"
                  width={384}
                  height={288}
                  className="aspect-[4/3] w-[24rem] max-w-none rounded-2xl bg-gray-50 object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function Step1({ onClick }: { onClick: () => void }) {
  const [days, setDays] = useState(0)

  useEffect(() => {
    const knownSince = new Date('2025-02-06')
    const now = new Date()
    const diffTime = Math.abs(now.getTime() - knownSince.getTime())
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24))
    setDays(diffDays)
  }, [])

  return (
    <div className="h-screen flex flex-col items-center justify-center  text-center px-4">
      <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold leading-tight text-white">¿Sabés hace cuánto nos conocemos?</h1>
      <p className="font-bold mt-4 text-3xl sm:text-5xl md:text-6xl text-blue-200 mt-2">{days} días</p>
      <p className="mt-4 text-xl/8 text-gray-200 max-w-md">
        Desde entonces, cada mirada, cada charla, cada abrazo... suma magia a mi vida.
      </p>
      <div className="flex mt-10">
        <button
          className="bg-white text-black font-bold py-4 px-8 rounded-2xl shadow-lg hover:bg-gray-200 transition text-base sm:text-lg"
          onClick={onClick}
        >
          Seguí leyendo
        </button>
      </div>
    </div>
  )
}

function Step4({ onClick }: { onClick: () => void }) {
  return (
    <div className="h-screen flex flex-col items-center justify-center  text-center px-4">
      <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold leading-tight text-white">Identité validée 😎</h1>
      <div className="flex mt-10">
        <button
          className="bg-white text-black font-bold py-4 px-8 rounded-2xl shadow-lg hover:bg-gray-200 transition text-base sm:text-lg"
          onClick={onClick}
        >
          Seguí leyendo
        </button>
      </div>
    </div>
  )
}

function Step2({ onClick }: { onClick: () => void }) {
  const [showQuestion, setShowQuestion] = useState(false)

  useEffect(() => {
    const timeout = setTimeout(() => setShowQuestion(true), 4000)
    return () => clearTimeout(timeout)
  }, [])

  const onConfirmation = async () => {
    await sendConfirmation()
    onClick()
  }


  return (
    <div className="h-screen flex flex-col items-center justify-center text-center px-4">
      {!showQuestion ? (
        <div className="text-3xl sm:text-5xl md:text-6xl font-extrabold leading-tight text-white animate-pulse">
          Pensando en cómo decirte esto...
        </div>
      ) : (
        <>
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold leading-tight text-white">Denu, ¿querés ser mi novia?</h1>
          <div className="flex mt-10 gap-4">
            <button
              onClick={onConfirmation}
              className="bg-white text-black font-bold py-4 px-8 rounded-2xl shadow-lg hover:bg-gray-200 transition text-base sm:text-lg"
            >
              Oui 🥹
            </button>
            <button
              onClick={onConfirmation}
              className="bg-white text-black font-bold py-4 px-8 rounded-2xl shadow-lg hover:bg-gray-200 transition text-base sm:text-lg"
            >
              Bien sûr que oui 😍
            </button>
          </div>
        </>
      )}
    </div>
  )
}

function Step3() {
  const [showHearts, setShowHearts] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setShowHearts(true), 100);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="relative h-screen flex flex-col items-center justify-center text-center px-4 overflow-hidden">
      <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold leading-tight text-white">
        Merci d’avoir dit oui
      </h1>
      <p className="mt-4 text-xl text-white font-semibold z-10">
        Je t’aime. Te amo mucho! ❤️
      </p>

      {showHearts && (
        <div className="absolute inset-0 z-0 animate-pulse pointer-events-none">
          {Array.from({ length: 20 }).map((_, i) => (
            <div
              key={i}
              className="absolute text-pink-400 text-2xl animate-bounce"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
              }}
            >
              ❤️
            </div>
          ))}
        </div>
      )}
    </div>
  );
}