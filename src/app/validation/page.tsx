"use client"

import Image from "next/image";
import { useEffect, useState } from "react";

export default function Validate() {
  const [step, setStep] = useState(0);

  const handleNextStep = () => {
    setStep((prev) => prev + 1);
  };

  const renderStep = () => {
    switch (step) {
      case 0:
        return <Step0 onClick={handleNextStep} />;
      case 1:
        return <Step1 onClick={handleNextStep} />;
      case 2:
        return <Step2 />;
      default:
        return <Step1 onClick={handleNextStep} />;
    }
  };

  return (
    <div className="">
      {renderStep()}
    </div>
  )
}

function Step0({ onClick }: { onClick: () => void }) {
  return (
    <div className="overflow-hidden py-32">
      <div className="mx-auto max-w-7xl px-6 lg:flex lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-12 gap-y-16 lg:mx-0 lg:min-w-full lg:max-w-none lg:flex-none lg:gap-y-8">
          <div className="lg:col-end-1 lg:w-full lg:max-w-lg lg:pb-8">
            <h2 className="text-4xl font-semibold tracking-tight text-gray-100 sm:text-5xl">Nuestros momentos</h2>
            <p className="mt-6 text-xl/8 text-gray-200">
              Quasi est quaerat. Sit molestiae et. Provident ad dolorem occaecati eos iste. Soluta rerum quidem minus ut
              molestiae velit error quod. Excepturi quidem expedita molestias quas.
            </p>
            <p className="mt-6 text-base/7 text-gray-200">
              Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet
              fugiat veniam occaecat fugiat. Quasi aperiam sit non sit neque reprehenderit.
            </p>
            <div className="mt-10 flex">
              <a
                onClick={onClick}
                className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Seguí leyendo <span aria-hidden="true">&rarr;</span>
              </a>
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
    const knownSince = new Date('2023-09-15')
    const now = new Date()
    const diffTime = Math.abs(now.getTime() - knownSince.getTime())
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24))
    setDays(diffDays)
  }, [])

  return (
    <div className="h-screen flex flex-col items-center justify-center bg-pink-200 text-center px-4">
      <h1 className="text-3xl text-pink-700">Hola Denu 🌸</h1>
      <p className="mt-4 text-lg text-gray-700">¿Sabés hace cuánto nos conocemos?</p>
      <p className="text-4xl font-bold text-pink-600 mt-2">{days} días</p>
      <p className="mt-4 text-md text-gray-600 max-w-md">
        Desde entonces, cada mirada, cada charla, cada abrazo... suma magia a mi vida.
      </p>
      <button
        className="mt-10 bg-pink-400 hover:bg-pink-500 text-white px-6 py-3 rounded-full text-lg shadow-md"
        onClick={onClick}
      >
        Seguí leyendo
      </button>
    </div>

  )
}

function Step2() {
  const [showQuestion, setShowQuestion] = useState(false)

  useEffect(() => {
    const timeout = setTimeout(() => setShowQuestion(true), 4000)
    return () => clearTimeout(timeout)
  }, [])

  return (
    <div className="h-screen flex flex-col items-center justify-center bg-pink-50 text-center px-4">
      {!showQuestion ? (
        <div className="text-xl text-gray-700 animate-pulse">
          Pensando en cómo decirte esto...
        </div>
      ) : (
        <>
          <h1 className="text-3xl text-pink-700 mb-6">Denu, ¿querés ser mi novia?</h1>
          <div className="flex gap-4">
            <button className="bg-pink-500 hover:bg-pink-600 text-white px-6 py-3 rounded-full text-lg shadow">
              Sí 🥹
            </button>
            <button className="bg-pink-300 hover:bg-pink-400 text-white px-6 py-3 rounded-full text-lg shadow">
              Obvio que sí 😍
            </button>
          </div>
        </>
      )}
    </div>
  )
}

// function Step3() {
//   return (
//     <div className="h-screen flex flex-col items-center justify-center bg-pink-200 text-center px-4">
//       <h1 className="text-3xl text-pink-700">Verificando tu identidad...</h1>
//       <p className="mt-4 text-gray-700">Revisá tu bandeja de entrada (o tu corazón 💌)</p>
//       <p className="mt-2 text-sm text-gray-600">(Este paso es simbólico... vos sabés que sos vos 💖)</p>
//     </div>
//   )
// }