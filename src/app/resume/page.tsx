import React from "react";
import Image from "next/image";
import Link from "next/link";
import workscribble from "@/assets/projects/work-scribble.svg";
import reactmemoji from "@/assets/resume/memoji.png";


export function generateMetadata() {
    return {
        title: "Resume - Clelia",
        description: "My resume.",
        openGraph: {
            images: "https://cdn.discordapp.com/attachments/1079039236302446705/1207210027333718096/SHIVA_1.png?ex=65ded0f3&is=65cc5bf3&hm=c511a0d118dae42adfc43114877d0689863f328da2dcc78c02826d271a5cd27f&",
        },
    };
}

const Resume = () => {
    return (
        <div className="lg:max-w-[50%] lg:m-auto min-h-max overflow-hidden">
            <center>
                <h1 className=" text-3xl lg:text-5xl font-bold tracking-wide mt-7">
                My{" "}
                <a href="./Resume.pdf" download="CV_Bertelli_Winter_2024.pdf" rel="noopener noreferrer" target="_blank" className=" text-balance text-blue-500">
                Resume{" "}
                </a>
                ✨
                </h1>
            </center>
            <br />
            <br />
            <div className="flex pl-4 pr-4 flex-col pb-7 md:pb-0">
                <center>
                    <br />
                    <div style={{ width: '100%', height: '600px', overflow: 'hidden' }}> {/* Adjust height as needed */}
                        <iframe
                            src="./Resume.pdf"
                            width="100%"
                            height="100%"
                            title="Resume Preview"
                            style={{ border: "none" }}
                        />
                    </div>
                </center>
            </div>
            <div className="flex mt-7 justify-center items-center pb-8">
                <Link href="/about" className="loadmorebtn flex justify-center items-center">
                    About Me
                </Link>
            </div>
        </div>
    );
};

export default Resume;