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
            image: '/Strength_Product4.JPG',
            image2: '/Strength.png',
            name: "Strength",
            about: "this is strength about",
            features: [
                {
                    name: "Authentication & Security",
                    points: ["Password hashing with bcrypt", "Temporary user creation after OTP verification to avoid repeat verification", "JWT-based access control", "Secure data storage in MongoDB"]
                },
                {
                    name: "User Sports Profile",
                    points: [" Add and manage favourite sports", "Include detailed, sport-specific information", "Update or modify profile settings anytime", "Privacy and safety tools: user report, block/unblock, post report"]
                },
                {
                    name: "User Interaction",
                    points: ["Users can search and follow each other", "Send team invitations to add users to their team", "Search history is maintained for quick access to recent searches"]
                },
                {
                    name: "Feed System",
                    points: ["Share thoughts, news, and videos as posts", "Engage through likes, comments, and shares"]
                },
                {
                    name: "Explore Page",
                    points: ["Latest sports news", "Live match scores"]
                },
                {
                    name: "Teams Feature",
                    points: ["Create and manage teams", "Team-based group chat for communication"]
                }
            ]
        },
        {
            id: 2,
            coverPic: '',
            logo: '',
            image: '',
            name: 'Stamin',
            about: '',
            features: [
                {
                    name: "Authentication & Security",
                    points: ["Password hashing with bcrypt", "Temporary user creation after OTP verification to avoid repeat verification", "JWT-based access control", "Secure data storage in MongoDB"]
                },
                {
                    name: "User Sports Profile",
                    points: [" Add and manage favourite sports", "Include detailed, sport-specific information", "Update or modify profile settings anytime", "Privacy and safety tools: user report, block/unblock, post report"]
                },
                {
                    name: "User Interaction",
                    points: ["Users can search and follow each other", "Send team invitations to add users to their team", "Search history is maintained for quick access to recent searches"]
                },
                {
                    name: "Feed System",
                    points: ["Share thoughts, news, and videos as posts", "Engage through likes, comments, and shares"]
                },
                {
                    name: "Explore Page",
                    points: ["Latest sports news", "Live match scores"]
                },
                {
                    name: "Teams Feature",
                    points: ["Create and manage teams", "Team-based group chat for communication"]
                }
            ]
        },
        {
            id: 3,
            coverPic: '',
            logo: '',
            image: '',
            name: 'Qilin',
            about: '',
            features: [
                {
                    name: "Authentication & Security",
                    points: ["Password hashing with bcrypt", "Temporary user creation after OTP verification to avoid repeat verification", "JWT-based access control", "Secure data storage in MongoDB"]
                },
                {
                    name: "User Sports Profile",
                    points: [" Add and manage favourite sports", "Include detailed, sport-specific information", "Update or modify profile settings anytime", "Privacy and safety tools: user report, block/unblock, post report"]
                },
                {
                    name: "User Interaction",
                    points: ["Users can search and follow each other", "Send team invitations to add users to their team", "Search history is maintained for quick access to recent searches"]
                },
                {
                    name: "Feed System",
                    points: ["Share thoughts, news, and videos as posts", "Engage through likes, comments, and shares"]
                },
                {
                    name: "Explore Page",
                    points: ["Latest sports news", "Live match scores"]
                },
                {
                    name: "Teams Feature",
                    points: ["Create and manage teams", "Team-based group chat for communication"]
                }
            ]
        }
    ]

    const details = show.find((element, index) => {
        return element.id === _id;
    })

    const mid = Math.floor(details.features.length / 2);

    const feature1 = details.features.slice(0, mid);
    const feature2 = details.features.slice(mid);

    const featurefirsthalf = feature1?.map((f, i) => {
        return (
            <div className="flex flex-col pt-10 gap-1 sm:gap-3">
                <a tabIndex={i} className="text-white text-sm font-bold sm:text-2xl">{f.name}</a>
                {f?.points.map((p, i) => {
                    return (
                        <a tabIndex={i} className="text-white text-xs sm:text-lg">● {p}</a>
                    )
                })}
            </div>
        )
    })

    const feature2ndhalf = feature2.map((f, i) => {
        return (
            <div className="flex flex-col pt-10 gap-1 sm:gap-3">
                <a tabIndex={i} className="text-white text-sm font-bold sm:text-2xl">{f.name}</a>
                {f.points.map((p, j) => {
                    return (
                        <a key={j} tabIndex={j} className="text-white text-xs sm:text-lg">● {p}</a>
                    )
                })}
            </div>
        )
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
            <div className=" w-full pb-40 px-4 sm:px-35 justify-between flex flex-row">
                <div className="flex flex-col w-[47%]">
                    <a className="text-2xl sm:text-6xl font-bold text-white">Features</a>
                    {featurefirsthalf}
                </div>
                <div className="relative w-60 sm:w-100 h-50 sm:w-200 sm:h-150">
                    <Image
                        src={details.image}
                        alt="Product sc"
                        fill
                        className="object-cover rounded-xl"
                    />
                </div>
            </div>
            <div className=" w-full pb-40 px-4 sm:px-35 justify-between gap-6 sm:gap-24 flex flex-row">
                <div className="relative w-160 h-50 sm:w-300 sm:h-150">
                    <Image
                        src={details.image2}
                        alt="Product sc"
                        fill
                        className="object-cover rounded-4xl"
                    />
                </div>
                <div className="flex flex-col w-[47%]">
                    {feature2ndhalf}
                </div>
            </div>
        </div>
    );
}

export default Page;