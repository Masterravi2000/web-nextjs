import Image from "next/image";

const Page = async ({ params }) => {
    const { id } = await params;
    const _id = Number(id);
    console.log(_id);
    const show = [
        {
            id: 1,
            coverPic: '/StrengthCover2.JPG',
            logo: '',
            image: '/Strength_Product.JPG',
            name: "Strength",
            about: "this is strength about"
        },
        {
            id: 2,
            coverPic: '',
            logo: '',
            image: '',
            name: 'Stamin',
            about: '',
        },
        {
            id: 3,
            coverPic: '',
            logo: '',
            image: '',
            name: 'Qilin',
            about: '',
        }
    ]

    const details = show.find((element, index) => {
        return element.id === _id;
    })

    return (
        <div className='w-full min-h-screen bg-black'>
            <div className="pt-10" />
            {/* Top Banner */}
            <div className='relative w-full h-50 sm:h-170'>
                <Image
                    src={details.coverPic}
                    alt="Project logo"
                    fill
                    className="object-cover"
                />
                <div className="w-full h-full flex flex-row justify-between">
                    <div className="inset-0 flex justify-center flex-col pb-5 sm:pb-19 px-15 sm:px-25 sm:px-35 w-[65%] sm:gap-8">
                        <p className="text-white z-10 sm:text-8xl">Professional</p>
                        <p className="text-white z-10 sm:text-8xl">Social Media</p>
                        <p className="text-white z-10 sm:text-8xl">For Sports.</p>
                    </div>
                    <div className="flex justify-center flex-col w-[35%] pb-3 px-4 sm:px-10 gap-3 sm:gap-8">
                        <p className="text-white z-10 sm:text-md w-[80%] hidden sm:block">"Strength" emerges as a comprehensive solution to the challenges faced by the sports community. The platform offers a multifaceted approach, providing users with the tools needed to connect, organize, and engage. By facilitating the creation and management of sports profiles, teams, and tournaments, "Strength" empowers enthusiasts to actively participate in their chosen sports. Clubs can extend their reach by establishing an online presence, allowing members to interact virtually, thus strengthening the sense of belonging.</p>
                        <p className="text-white z-10 text-xs w-[95%] block sm:hidden">"Strength" emerges as a comprehensive solution to the challenges faced by the.</p>
                        <div className="flex flex-row gap-2 z-10">
                            <button className="rounded-full px-4 sm:px-8 bg-white">
                                <p className="text-black z-10 font-bold text-xs sm:text-xl">For Sports.</p>
                            </button>
                            <button className="rounded-full sm:px-3 sm:py-2 p-0 px-2 bg-white justify-center items-center">
                                <a className="text-black font-bold text-xs sm:text-lg">ok</a>
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Service-Provided */}
            <div className=" w-full px-14 sm:px-35 justify-between flex flex-row">
                <div className="flex flex-col w-[50%] gap-3">
                    <a className="text-6xl font-bold pb-6 text-white">Features</a>
                    <a className="text-white text-xs sm:text-lg">@ Authentication System - Otp Verify, Jwt token, Password Hasing</a>
                    <a className="text-white text-xs sm:text-lg">@ sokso sojso sjso sjos s </a>
                    <a className="text-white text-xs sm:text-lg">@ sokso sojso sjso sjos s </a>
                    <a className="text-white text-xs sm:text-lg">@ sokso sojso sjso sjos s </a>
                    <a className="text-white text-xs sm:text-lg">@ sokso sojso sjso sjos s </a>
                </div>
                <div className="relative w-30 h-20 sm:w-200 sm:h-120">
                    <Image
                        src={details.image}
                        alt="Product sc"
                        fill
                        className="object-cover"
                    />
                </div>
            </div>
        </div>
    );
}

export default Page;