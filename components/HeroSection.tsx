import Link from "next/link"

const HeroSection = () => {
  return (
    <div className="animate-move-in mx-4 flex flex-col-reverse gap-10 items-center md:gap-0 md:flex-row md:justify-between md:my-8">
        <div className="space-y-10">
            <h1 className="text-4xl lg:text-7xl font-bold text-amber-400">Hola Amigos! 👋
                <br/><span className="underline underline-offset-8 decoration-violet-600 text-white">{"JD this side."}</span>
            </h1>
            <p className="md:w-96 text-lg text-gray-300">
                {"Sports and tech enthusiast who loves creating content, exploring emerging tech, and watching sitcoms. My passions fuel my love for wordplay, puns, and humor."}
            </p>
            <div className="flex flex-col md:flex-row gap-5 items-center">
                <Link href="https://linktr.ee/janavdua7" className="inline-block text-xl font-bold hover:text-emerald-400 transition-colors -rotate-2">
                    <div>
                        <h1>
                            Contact Me 🙋
                        </h1>
                        <div className="w-full h-1 bg-amber-400"></div>
                        <div className="w-full h-1 bg-violet-600 translate-x-1"></div>
                    </div>
                </Link>
                <Link href="/assets/Janav_Dua_Resume.pdf" target="_blank" className="text-xl font-bold transition-all">
                    <h1 className="bg-violet-600 px-5 py-2 rounded-xl hover:ring-2 ring-amber-400 hover:bg-violet-900">
                        Resume 📃
                    </h1>
                </Link>
            </div>
            <div className="mt-12 w-full h-[1px] bg-gray-300 opacity-30"></div>
        </div>

        <div className="flex flex-col justify-center items-center w-72 h-72 space-y-3 -rotate-[30deg] relative">
            <div className="flex gap-3 translate-x-8">
                <div className="w-24 h-24 md:w-32 md:h-32 rounded-3xl bg-gradient-to-tr from-amber-300 to-amber-500 hover:scale-90 transition-all cursor-pointer"></div>
                <div className="w-24 h-24 md:w-32 md:h-32 rounded-full bg-gradient-to-br from-violet-500 to-violet-700 hover:scale-125 transition-all cursor-pointer"></div>
            </div>
            <div className="flex gap-3 -translate-x-8">
                <div className="w-24 h-24 md:w-32 md:h-32 rounded-full bg-gradient-to-r from-amber-300 to-amber-500 hover:scale-125 transition-all cursor-pointer"></div>
                <div className="w-24 h-24 md:w-32 md:h-32 rounded-3xl bg-gradient-to-bl from-violet-500 to-violet-700 hover:scale-90 transition-all cursor-pointer"></div>
            </div>
            <div className="glow top-[40%] right-1/2 -z-10 absolute"></div>
        </div>
    </div>
  )
}

export default HeroSection