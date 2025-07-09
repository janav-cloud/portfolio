import React from 'react'
import Image from 'next/image';
import Link from 'next/link';

const Featured = () => {

    const features = [
        {
            text: "CUBE.ms",
            description: "SDE-I Intern",
            image: "/assets/icons/instance-fill.svg",
            link: "https://www.linkedin.com/posts/janav-dua-jd07_im-happy-to-share-that-i-will-be-starting-activity-7335929321821245440-hmBQ?utm_source=share&utm_medium=member_desktop&rcm=ACoAADyMsqIBSh4HqB-vgarDO2N5qLuDEFvHUcc"
        },
        {
            text: "Parkar Digital",
            description: "DevOps Intern",
            image: "/assets/icons/cloud.svg",
            link: "https://www.linkedin.com/posts/janav-dua-jd07_a-new-journey-activity-7208884283829022720-62he?utm_source=share&utm_medium=member_desktop"
        },
        {
            text: "VCMDWA",
            description: "Solutions Intern",
            image: "/assets/icons/react.svg",
            link: "https://www.linkedin.com/posts/janav-dua-jd07_digitalsolutions-webdevelopment-graphicdesigning-activity-7177266387512438784-npvO?utm_source=share&utm_medium=member_desktop"
        },
        {
            text: "Persistent Systems",
            description: "Apprentice",
            image: "/assets/icons/team.svg",
            link: "https://www.linkedin.com/posts/janav-dua-jd07_certificate-of-completion-persistent-systems-activity-7234236659003731969-Po58?utm_source=share&utm_medium=member_desktop&rcm=ACoAADyMsqIBSh4HqB-vgarDO2N5qLuDEFvHUcc"
        },
        {
            text: "RBU SRC",
            description: "Technical Incharge",
            image: "/assets/icons/src.svg",
            link: "https://www.linkedin.com/posts/janav-dua-jd07_was-inactive-for-a-long-time-guys-was-on-activity-7262947856288743427-s3WZ?utm_source=share&utm_medium=member_desktop&rcm=ACoAADyMsqIBSh4HqB-vgarDO2N5qLuDEFvHUcc"
        },
        {
            text: "PL Mini Project",
            description: "Data Analysis",
            image: "/assets/icons/python.svg",
            link: "https://www.linkedin.com/posts/janav-dua-jd07_premier-league-22-23-team-performance-analysis-activity-7138090717746253824-ZTze?utm_source=share&utm_medium=member_desktop"
        },
        {
            text: "MUN FIFA Analyser",
            description: "Chair",
            image: "/assets/icons/comm.svg",
            link: "https://www.linkedin.com/posts/janav-dua-jd07_mun-football-manager-ai-activity-7338083072803774464-blkd?utm_source=share&utm_medium=member_desktop&rcm=ACoAADyMsqIBSh4HqB-vgarDO2N5qLuDEFvHUcc"
        },
        {
            text: "Feed! Twitter MVP",
            description: "Chair",
            image: "/assets/icons/football-fill.svg",
            link: "https://mun-feed.vercel.app"
        },
        {
            text: "TradiX.AI!",
            description: "Stock Predictions!",
            image: "/assets/icons/funds-fill.svg",
            link: "https://tradix-ai.vercel.app/"
        },
        {
            text: "PrepAI!",
            description: "AI Interviews",
            image: "/assets/icons/prep.svg",
            link: "https://prep-ai-hazel.vercel.app/"
        },
        {
            text: "Note It!",
            description: "Notes on Cloud",
            image: "/assets/icons/firebase.svg",
            link: "https://github.com/janav-cloud/note-it"
        },
        {
            text: "Super Tic Tac Toe!",
            description: "The Ultimate XOXO",
            image: "/assets/icons/tic-tac-toe.svg",
            link: "https://github.com/janav-cloud/note-it"
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