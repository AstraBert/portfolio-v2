import React from "react";
import { Analytics } from "@vercel/analytics/react"
import { GitHubLogoIcon, LinkedInLogoIcon, RocketIcon } from "@radix-ui/react-icons";
import { ChevronRight, MailPlus, MouseIcon, Terminal } from "lucide-react";
// import Image from "next/image";
import Link from "next/link";

// import clock from "@/assets/clock.svg";
import { projectArray } from "@/assets/projects/projectsArray";
import CopyCmd from "@/components/CopyCmd";
import Card from "@/components/projects/card";
import Contact from "@/components/shared/Contact";
import Skills from "@/components/skills/Skills";
import Terminalcomp from "@/components/terminal/Terminalcomp";
import TypingAnimation from "@/components/TypingAnimation";
const page = () => {
    return (
        <section className="lg:max-w-[50%] mt-20 md:mt-36 md:max-w-[90%] relative md:m-auto p-4 flex flex-col min-h-screen">
            <div className=" flex gap-3 flex-col justify-center items-left min-h-[60vh] lg:min-h-screen">
                <span className=" text-sm lg:text-md flex items-center gap-2 opacity-70 font-medium tracking-widest uppercase">
                    <Terminal size={17} />
                    Hello World
                </span>
                <div className="flex items-center gap-3">
                    <h1 className="text-4xl flex gap-12 items-center flex-row md:text-7xl lg:text-8xl font-bold ">Hey, I&apos;m Clelia</h1>
                    {/* <Image src={clock} alt="coffeCup" className="w-12 rotate-12 h-12 lg:w-16 lg:h-16" /> */}
                </div>
                <h1 className=" font-bold lg:text-3xl">
                    I am a <TypingAnimation />
                </h1>
                <p className=" opacity-80 text-sm lg:text-xl lg:mb-2 font-medium">
                    I develop open-source <span className="  text-blue-500 uppercase font-bold">python</span> apps/tools and work as a <span className=" uppercase text-blue-500 font-bold tracking-wider">bioinformatician</span> and as <span className=" uppercase text-blue-500 font-bold tracking-wider">back-end</span> engineer for a startup.
                </p>
                <div className="flex items-center gap-3 lg:gap-6 flex-wrap">
                    <CopyCmd />
                    <a href="https://github.com/AstraBert" target="_blank" rel="noopener noreferrer">
                        <GitHubLogoIcon className=" h-6 lg:h-10 w-8 lg:w-8 duration-200 hover:-translate-y-2 cursor-pointer" />
                    </a>
                    <a href="https://bsky.app/profile/cle-does-things.bsky.social" target="_blank" rel="noopener noreferrer">
                        <RocketIcon className=" h-6 lg:h-10 w-8 lg:w-8 duration-200 hover:-translate-y-2 cursor-pointer" />
                    </a>
                    <a href="mailto:astraberte9@gmail.com?body=Hello" target="_blank" rel="noopener noreferrer">
                        <MailPlus className=" h-6 lg:h-10 w-8 lg:w-8 duration-200 hover:-translate-y-2 cursor-pointer" />
                    </a>
                    <a href="https://www.linkedin.com/in/astra-clelia-bertelli-583904297/" target="_blank" rel="noopener noreferrer">
                        <LinkedInLogoIcon className=" h-6 lg:h-10 w-8 lg:w-8 duration-200 hover:-translate-y-2 cursor-pointer" />
                    </a>
                </div>

                <div className=" opacity-70 mt-12 justify-center flex items-center flex-col">
                    <MouseIcon size={40} className=" animate-bounce" />
                    <span className="text-sm font-medium">Scroll Down</span>
                </div>

                <Skills />

                <div className="mt-12 lg:mt-28">
                    <div className="own</span>flex items-center gap-4 mb-3 text-3xl font-medium tracking-wide">
                        <span className=" w-14 h-[2px] bg-green-500"></span> Terminal
                    </div>
                    <Terminalcomp />
                </div>

                {/* projects */}
                <div className="mt-12 lg:mt-28">
                    <div className="flex items-center gap-4 mb-3 text-3xl font-medium tracking-wide">
                        <span className=" w-14 h-[2px] bg-green-500"></span> Projects
                    </div>

                    <div className="flex gap-8 w-full justify-center items-center pl-4 pr-4 flex-col pb-7 md:pb-0">
                        <div className="mt-6 relative place-items-center grid grid-cols-1 md:grid-cols-2 gap-8">
                            {projectArray
                                .filter((_, index) => index === 0 || index === 5)
                                .map((item, index) => (
                                    <Card item={item} index={index} key={index} />
                                ))}
                        </div>
                        <Link href={"/projects"} className="loadmorebtn text-center lg:mb-8">
                            Load More
                            <ChevronRight />
                        </Link>
                    </div>
                </div>
                <Contact />
            </div>
        </section>
    );
};

export default page;
