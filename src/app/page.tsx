"use client"

import { sendEmail } from '@/actions/emailActions';
import { AnimatePresence, motion } from 'framer-motion'
import Image from 'next/image';
import { useState } from "react";

export default function Page() {
  const [step, setStep] = useState(0);

  const handleNextStep = () => {
    setStep((prev) => prev + 1);
  };

  const renderStep = () => {
    switch (step) {
      case 0: return <Home key="step1" onClick={handleNextStep} />;
      case 1: return <Name key="step2" onClick={handleNextStep} />;
      case 2: return <Email key="step3" />;
      default: return <Home key="step1" onClick={handleNextStep} />;
    }
  };

  return (
    <div className="relative">
      <AnimatePresence mode="wait">
        {renderStep()}
      </AnimatePresence>
    </div>
  )
}

function Home({ onClick }: { onClick: () => void }) {
  return (
    <>
      <motion.div
        key="step1" // o step2, step3
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -50 }}
        transition={{ duration: 0.6 }}
        className="h-screen flex items-center justify-center relative isolate overflow-hidden bg-gray-900"
      >
        <Image
          alt="Decorative Background"
          src="/images/background-2.jpg"
          fill
          className="absolute inset-0 -z-10 size-full object-cover object-bottom backdrop-blur-md"
        />
        <div
          aria-hidden="true"
          className="absolute inset-x-0 -z-10 transform-gpu overflow-hidden backdrop-blur-md"
        >
          <div className="h-screen" />
        </div>
        <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:flex lg:items-center lg:justify-between lg:px-8">
          <div className="text-white text-left max-w-3xl">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="text-4xl sm:text-6xl md:text-7xl font-extrabold uppercase leading-tight"
            >
              Bienvenue à denumar!
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.5 }}
              className="text-base sm:text-lg md:text-xl mt-4 text-gray-300"
            >
              Ce n’est pas seulement le site de Denu Mar. C’est un endroit créé avec beaucoup d’amour. Un petit coin qui existe parce que tu existes.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.5, delay: 0.5 }}
              className="flex items-center gap-x-6 mt-10 lg:shrink-0"
            >
              <button
                className="bg-white text-black font-bold py-4 px-8 rounded-2xl shadow-lg hover:bg-gray-200 transition text-base sm:text-lg"
                onClick={onClick}
              >
                Découvrir
              </button>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </>
  );
}

function Name({ onClick }: { onClick: () => void }) {
  const [name, setName] = useState('')
  const [error, setError] = useState('')

  const handleSubmit = async () => {
    if (name.toLowerCase().includes('eliane denise marfetan') || name.toLowerCase().includes('denu')) {
      await sendEmail();
      onClick()
    } else {
      setError('Mmm... no sé si este sitio es para vos 🤔')
    }
  }

  return (
    <>
      <>
        <motion.div
          key="step2"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -50 }}
          transition={{ duration: 0.6 }}
          className="h-screen flex items-center justify-center relative isolate overflow-hidden bg-gray-900"
        >
          <Image
            alt="Decorative Background"
            src="/images/background.jpg"
            fill
            className="absolute inset-0 -z-10 size-full object-cover object-bottom backdrop-blur-md"
          />
          <div
            aria-hidden="true"
            className="absolute inset-x-0 -z-10 transform-gpu overflow-hidden backdrop-blur-md"
          >
            <div className="h-screen" />
          </div>
          <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:flex lg:items-center lg:justify-between lg:px-8 md:space-x-16">
            <div className="text-white text-left max-w-2xl">
              <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold uppercase leading-tight" >
                Comment tu t&apos;appelles ?
              </h1>

              <p className="text-base sm:text-lg md:text-xl mt-4 text-white">
                S’il te plaît, entre ton nom complet.
              </p>

              <div className="mt-10 space-y-4">
                <div className="flex items-center rounded-md bg-white pl-3 outline outline-1 -outline-offset-1 outline-gray-300 focus-within:outline focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-indigo-600">
                  <input
                    id="name"
                    name="name"
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Escribí tu nombre"
                    className="block min-w-0 grow py-1.5 pl-1 pr-3 text-base text-gray-900 sm:text-md md:text-lg placeholder:text-black focus:outline focus:outline-0 focus:border-yellow-500 sm:text-sm/6"
                  />
                </div>
                <p className="mt-4 text-base sm:text-lg md:text-xl mt-4 text-white">{error ? error : ''}</p>
                <button
                  className="bg-white text-black font-bold py-4 px-8 rounded-2xl shadow-lg hover:bg-gray-200 transition text-base sm:text-lg"
                  onClick={handleSubmit}
                >
                  Confirmer
                </button>
              </div>

            </div>
          </div>
        </motion.div>
      </>
    </>
  );
}

function Email() {
  return (
    <>
      <>
        <motion.div
          key="step3"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -50 }}
          transition={{ duration: 0.6 }}
          className="h-screen flex items-center justify-center relative isolate overflow-hidden bg-gray-900"
        >
          <Image
            alt="Decorative Background"
            src="/images/background-3.jpg"
            fill
            className="absolute inset-0 -z-10 size-full "
          />
          <div
            aria-hidden="true"
            className="absolute inset-x-0 -z-10 transform-gpu overflow-hidden"
          >
            <div className="h-screen" />
          </div>
          <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:flex lg:items-center lg:justify-between lg:px-8 md:space-x-16">
            <div className="text-white text-left max-w-2xl">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                className=" text-4xl sm:text-4xl md:text-5xl font-extrabold leading-tight"
              >
                Mmm... on va devoir vérifier ton identité
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.5 }}
                className="text-base sm:text-lg md:text-xl mt-4 text-gray-300"
              >
                Je t’ai envoyé un mail pour valider ton identité, s’il te plaît vérifie ta boîte mail 💌.
              </motion.p>
            </div>
          </div>
        </motion.div>
      </>
    </>
  )
}
