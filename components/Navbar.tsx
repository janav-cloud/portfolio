import Link from "next/link"
import Image from "next/image"
import { cn } from "@/lib/utils"

const Navbar = ({className}:{className?: string}) => {
    
    const socials = [
        {
            link: 'https://in.linkedin.com/in/janav-dua-jd07',
            label: 'LinkedIn',
            src: "/assets/icons/linkedin.svg"
        },
        {
            link: 'https://twitter.com/janavdua7',
            label: 'Twitter',
            src: "/assets/icons/twitter.svg"
        },
        {
            link: 'https://www.instagram.com/jd___07/',
            label: 'Instagram',
            src: "/assets/icons/instagram.svg"
        },
    ]

    return (
        <nav className={cn("animate-move-out p-7 flex justify-between items-center", className)}>
            <h1 className="text-lg md:text-2xl font-bold underline underline-offset-8 decoration-amber-400 -rotate-3">Janav Dua ⚽</h1>
            <div className="p-3 flex items-center gap-3 rounded-full hover:bg-violet-600 transition-all">
                {socials.map((social, index) => {
                    return(
                        <Link href={social.link} key={index} aria-label={social.label} target="_blank">
                            <Image 
                                src={social.src}
                                alt={social.label}
                                width={24}
                                height={24}
                                className="object-contain hover:scale-110 transition-all"
                            />
                        </Link>
                    )
                })}
            </div>
        </nav>
    )
}

export default Navbar