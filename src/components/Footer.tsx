
export default function Footer() {
    return (
        <div className="border-t  border-1 border-[#252525] w-full py-20 bg-black">
            <div className="w-full flex flex-row px-10">
                <div className="w-full px-30 flex-col flex gap-4">
                    <a className="text-white text-4xl font-bold">@Ravi</a>
                    <a className="text-[#808080] text-sm w-40">Let's create something out of this world!</a>
                </div>
                <div className="flex flex-row gap-20 w-full">
                    <div className="flex flex-col gap-15">
                        <a className="text-white text-xl">MAIN</a>
                        <a href="/Ravi_Sharma_Resume.PDF" download className="text-[#808080] text-md">Resume</a>
                        <a href="#Projects" className="text-[#808080] text-md">Projects</a>
                        <a href="#Manifest" className="text-[#808080] text-md">Menifest</a>
                        <a className="text-[#808080] text-md"></a>
                    </div>
                    <div className="flex flex-col gap-15">
                        <a className="text-white text-xl">Connect</a>
                        <a href="https://www.linkedin.com/in/ravisharma2026/" className="text-[#808080] text-md">Linkedin</a>
                        <a href="https://github.com/Masterravi2000" className="text-[#808080] text-md">Github</a>
                        <a
                            href="https://mail.google.com/mail/?view=cm&fs=1&to=ravisharma8240931102@gmail.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-[#808080] text-md"
                        >
                            Gmail
                        </a>
                        <a className="text-[#808080] text-md"></a>
                    </div>
                </div>
                <div className="flex flex-col w-full">
                    <a className="text-2xl text-white font-bold">About</a>
                    <a className="text-md text-[#808080] pt-5 pr-40">Software Engineer skilled in Java, JavaScript, React Native, React.js, TypeScript, Redux Toolkit, Docker, and the MERN stack, with experience building scalable, high-performance applications and RESTful APIs. Focused on clean coding, reusability, security, system reliability, and delivering polished, production-ready user experiences.</a>
                </div>
            </div>
            <div className="flex flex-col w-full pt-10 items-center">
                <div className="border-b border-[#909090] border-1 w-[84%]" />
                <div className="w-[84%] pt-4">
                    <a className="text-white text-md">@2026 @Ravi. All Rights Reserved</a>
                </div>
            </div>
        </div>
    )
}