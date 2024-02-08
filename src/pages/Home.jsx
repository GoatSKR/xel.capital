import React, { useState } from "react";
export default function Home() {
    const [hoverMail, setHoverMail] = useState(false);
    const [hoverLinkedIn, setHoverLinkedIn] = useState(false);
    const handleMailClick = () => {
        window.location.href = "mailto:xelvc@usa.com";
    };

    const handleLinkedInClick = () => {
        window.location.href = "https://www.linkedin.com/company/xelcapital/";
    };
    return (
        <div className=" h-screen bg-[white]">
            <div className="mx-8 flex flex-col border-x h-full py-[50px]">
                <div className="flex pt-[140px] md:pt-[200px] text-2xl items-end md:text-5xl h-1/2 font-MANROPE text-black   border-y ">
                    We partner with founders who<br /> know something the rest of the<br /> world doesn’t know yet.
                </div>
                <div className=" flex pt-[220px] md:pt-[320px] items-end h-1/2 flex-row justify-between text-3xl text-black font-bold  border-b ">
                    <p className="font-MANROPE  text-xl md:text-3xl text-extrabold">
                        <img className="h-14 w-14" src="public/static/images/xclogo.jpg" alt="logo" />
                    </p>
                    <div className=" space-x-4">
                        <button
                            className={`transition-transform duration-300 ease-in-out transform ${hoverMail ? "-translate-y-3" : ""
                                } bg-gray-300 hover:bg-gray-400  p-3 focus:outline-none`}
                            onMouseEnter={() => setHoverMail(true)}
                            onMouseLeave={() => setHoverMail(false)}
                            onClick={handleMailClick}
                        >
                            <img className="h-8 w-8" src="https://assets-global.website-files.com/65af47735ebfa695dce4027b/65af51f797a420b7528e73b8_Email%20envelope%20icon%20(1).svg" alt="" />
                        </button>
                        <button
                            className={`transition-transform duration-300 ease-in-out transform ${hoverLinkedIn ? "-translate-y-3" : ""
                                } bg-gray-300 hover:bg-gray-400  p-3 focus:outline-none`}
                            onMouseEnter={() => setHoverLinkedIn(true)}
                            onMouseLeave={() => setHoverLinkedIn(false)}
                            onClick={handleLinkedInClick}
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-8 w-8 text-gray-800"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="white"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={0.3}
                                    d="M6.94043 5.00002C6.94016 5.53046 6.7292 6.03906 6.35394 6.41394C5.97868 6.78883 5.46986 6.99929 4.93943 6.99902C4.409 6.99876 3.90039 6.78779 3.52551 6.41253C3.15062 6.03727 2.94016 5.52846 2.94043 4.99802C2.9407 4.46759 3.15166 3.95899 3.52692 3.5841C3.90218 3.20922 4.411 2.99876 4.94143 2.99902C5.47186 2.99929 5.98047 3.21026 6.35535 3.58552C6.73024 3.96078 6.9407 4.46959 6.94043 5.00002V5.00002ZM7.00043 8.48002H3.00043V21H7.00043V8.48002ZM13.3204 8.48002H9.34043V21H13.2804V14.43C13.2804 10.77 18.0504 10.43 18.0504 14.43V21H22.0004V13.07C22.0004 6.90002 14.9404 7.13002 13.2804 10.16L13.3204 8.48002V8.48002Z"
                                    fill="white"
                                />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
            <div>
            </div>
        </div>
    )
}