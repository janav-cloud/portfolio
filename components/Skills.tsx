import React from 'react'
import { HoverEffect } from './card-hover-effect'

const Skills = () => {

  const skills = [
    {
      title: "React",
      icon: "/assets/icons/react.svg"
    },
    {
      title: "NextJS",
      icon: "/assets/icons/next.svg"
    },
    {
      title: "Tailwind",
      icon: "/assets/icons/tailwind.svg"
    },
    {
      title: "Python",
      icon: "/assets/icons/python.svg"
    },
    {
      title: "Cloud",
      icon: "/assets/icons/cloud.svg"
    },
    {
      title: "Firebase",
      icon: "/assets/icons/firebase.svg"
    },
    {
      title: "MySQL",
      icon: "/assets/icons/sql.svg"
    },
    {
      title: "Management",
      icon: "/assets/icons/team.svg"
    },
    {
      title: "Communication",
      icon: "/assets/icons/comm.svg"
    },
    {
      title: "Figma",
      icon: "/assets/icons/figma.svg"
    },
    {
      title: "Adobe CC",
      icon: "/assets/icons/adobe.svg"
    },
    {
      title: "Excel",
      icon: "/assets/icons/excel.svg"
    },
  ];
  return (
    <>
    <div className='grid justify-center mt-12 -rotate-[5deg]'>
        <h1 className='text-2xl font-bold md:text-3xl'>Skills 🧑‍💻</h1>
        <div className="w-full h-1 bg-violet-600"></div>
        <div className="w-full h-1 bg-amber-400 translate-x-1"></div>
    </div>
    <div className='md:max-w-5xl mx-auto'>
      <HoverEffect items={skills} className='grid-cols-3'/>
    </div>
    </>
  )
}

export default Skills