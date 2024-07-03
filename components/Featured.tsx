import React from 'react'
import Image from 'next/image';
import Link from 'next/link';

const Featured = () => {

    const features = [
        {
            text: "Parkar Digital",
            description: "Intern",
            image: "/assets/icons/cloud.svg",
            link: "https://www.linkedin.com/posts/janav-dua-jd07_a-new-journey-activity-7208884283829022720-62he?utm_source=share&utm_medium=member_desktop"
        },
        {
            text: "VCMDWA",
            description: "Intern",
            image: "/assets/icons/react.svg",
            link: "https://www.linkedin.com/posts/janav-dua-jd07_digitalsolutions-webdevelopment-graphicdesigning-activity-7177266387512438784-npvO?utm_source=share&utm_medium=member_desktop"
        },
        {
            text: "Persistent Systems",
            description: "Mentee",
            image: "/assets/icons/team.svg",
            link: ""
        },
        {
            text: "Demand Nexus",
            description: "Intern",
            image: "/assets/icons/figma.svg",
            link: "https://www.linkedin.com/posts/janav-dua-jd07_im-happy-to-share-that-im-starting-a-new-activity-7201439402428964865-eyRP?utm_source=share&utm_medium=member_desktop"
        },
        {
            text: "PL Mini Project",
            description: "Data Analysis",
            image: "/assets/icons/python.svg",
            link: "https://www.linkedin.com/posts/janav-dua-jd07_premier-league-22-23-team-performance-analysis-activity-7138090717746253824-ZTze?utm_source=share&utm_medium=member_desktop"
        },
        {
            text: "DELMUN 5.0",
            description: "Chair",
            image: "/assets/icons/comm.svg",
            link: "https://www.linkedin.com/posts/janav-dua-jd07_delmun-50-the-journey-activity-7145318335814021120-M3Uk?utm_source=share&utm_medium=member_desktop"
        },
        {
            text: "AmazDeals!",
            description: "Price Tracker",
            image: "/assets/icons/next.svg",
            link: "https://github.com/janav-cloud/amaz-deals"
        },
        {
            text: "Note It!",
            description: "Notes on Cloud",
            image: "/assets/icons/firebase.svg",
            link: "https://github.com/janav-07/note-it"
        },
    ];

    return (
        <>
            <div className='grid justify-center mt-6 rotate-[5deg]'>
                <h1 className='text-2xl font-bold md:text-3xl'>Progress 🌟</h1>
                <div className="w-full h-1 bg-violet-600"></div>
                <div className="w-full h-1 bg-amber-400 translate-x-1"></div>
            </div>
            <div className='scale-90 md:scale-100 md:mx-2 grid grid-cols-2 max-w-5xl mt-8 gap-7'>
                {features.map((feature, index) => {
                    return(
                        <Link href={feature.link} key={index} aria-label={feature.text} target="_blank" className='flex p-5 bg-gray-900 hover:ring-2 ring-emerald-400 rounded-full gap-2 transition-all duration-300'>
                            <Image 
                                src={feature.image}
                                alt={feature.text}
                                width={40}
                                height={40}
                                className="object-contain hover:scale-110 transition-all"
                            />
                            <div className='flex flex-col justify-center'>
                                <p className='text-sm md:text-xl font-semibold'>{feature.text}</p>
                                <p className='text-[12px] font-medium text-gray-500 md:text-sm'>{feature.description}</p>
                            </div>
                        </Link>
                    )
                })}
            </div>
        </>
    )
}

export default Featured