import Image from "next/image";
import Link from "next/link";

const Page = async ({ params }) => {
    const { id } = await params;
    const _id = Number(id);
    console.log(_id);
    const show = [
        {
            id: 1,
            coverPic: '/StrengthCover2.JPG',
            logo: '/StrengthLogo2.PNG',
            Title: 'Professional Social Media For Sports.',
            name: "Strength",
            about: "Strength emerges as a comprehensive solution to the challenges faced by the sports community. The platform offers a multifaceted approach, providing users with the tools needed to connect, organize, and engage. By facilitating the creation and management of sports profiles, teams, and tournaments, Strength empowers enthusiasts to actively participate in their chosen sports. Clubs can extend their reach by establishing an online presence, allowing members to interact virtually, thus strengthening the sense of belonging.",
            image: '/Strength_Product4.JPG',
            image2: '/Strength.png',
            github: 'https://github.com/strengthsports/Strength-Frontend',
            website: 'https://www.yourstrength.in/',
            AllTechStackImg: '/AllTechStackImg2.png',
            TechStackImg: '/TechStackImg4.png',
            features: [
                {
                    name: "Authentication & Security",
                    points: [
                        "OTP-based login system combined with JWT authentication for secure access",
                        "Strong password encryption and secure user data storage using MongoDB"
                    ]
                },
                {
                    name: "User Sports Profile",
                    points: [
                        "Users can add, edit, and manage their favourite sports preferences",
                        "Complete control over privacy settings and profile customization options"
                    ]
                },
                {
                    name: "User Interaction",
                    points: [
                        "Search for users and follow them to stay connected",
                        "Send and manage team invitations to collaborate with others"
                    ]
                },
                {
                    name: "Feed System",
                    points: [
                        "Share posts including text, images, and videos with followers",
                        "Engage with posts using likes, comments, and sharing features"
                    ]
                },
                {
                    name: "Explore Page",
                    points: [
                        "Discover the latest sports news and trending updates",
                        "View live match scores and real-time sports highlights"
                    ]
                },
                {
                    name: "Teams Feature",
                    points: [
                        "Create and manage sports teams within the application",
                        "Communicate with team members using group chat functionality"
                    ]
                },
                {
                    name: "Notifications System",
                    points: [
                        "Get real-time notifications for likes, comments, and new followers",
                        "Stay updated about team invites and important announcements"
                    ]
                },
                {
                    name: "Media Management",
                    points: [
                        "Upload and manage photos and videos easily",
                        "Optimize media files for better performance and storage"
                    ]
                }
            ],
            ppt: 'https://docs.google.com/presentation/d/e/2PACX-1vQqv2zmXklxZiebZ_3VIhycqqYwoP9UmCgEYTwgwuu_0OMX7nLhqyCzyKpK54G7UQ/pubembed?start=true&loop=true&delayms=3000',
            techStack: [
                {
                    name: "Frontend",
                    points: [
                        "React Native ensures smooth cross-platform performance",
                        "Redux Toolkit enables fast and optimized state updates",
                        "TypeScript improves code reliability and maintainability"
                    ]
                },
                {
                    name: "Backend",
                    points: [
                        "Node.js & Express provide high-performance API handling",
                        "MVC monolithic architecture ensures clean code structure",
                        "MongoDB, Redis & BullMQ optimize data access and background tasks",
                        "Docker with AWS ensures scalable and reliable deployment"
                    ]
                }
            ]
        },

        {
            id: 2,
            coverPic: '/StaminCover.PNG',
            logo: '/StaminLogo2.PNG',
            Title: 'Personal Health & Fit Coach.',
            image: '/Stamin1st.JPG',
            image2: '/Stamin2nd.PNG',
            name: 'Stamin',
            about: 'Stamin is an AI-powered personal health, fitness, and sports coach designed to help users build and maintain a complete fitness profile. It connects with smartwatches and health devices to track physical activity, monitor key health metrics, and analyze medical and performance data. Using these insights, Stamin delivers personalized training guidance, recovery recommendations, and wellness insights to improve performance, consistency, and overall well-being.',
            github: 'https://github.com/staminOfficial/Stamin_Frontend',
            website: '',
            features: [
                {
                    name: "Authentication & Security",
                    points: [
                        "Password hashing with bcrypt",
                        "Temporary user creation after OTP verification",
                        "JWT-based access control",
                        "Secure data storage in MongoDB"
                    ]
                },
                {
                    name: "User Profile",
                    points: [
                        "Standard profile with profile pic and cover pic",
                        "Connect smartwatches to track sports activity",
                        "Showcase favourite sports and associated metrics"
                    ]
                },
                {
                    name: "Records & Medical Data",
                    points: [
                        "Maintain recorded exercise and performance data",
                        "Upload medical reports (weight %, blood group, BP, diabetes, etc.)",
                        "Set public or private access for each report"
                    ]
                },
                {
                    name: "Stamin AI",
                    points: [
                        "Studies user profile and fitness data",
                        "Provides personalized guidance and answers for health & fitness",
                        "Tailored suggestions based on activity and medical reports"
                    ]
                },
                {
                    name: "User Interaction",
                    points: [
                        "Search and follow other users",
                        "Engage with other users’ content",
                        "Collaborate or communicate within privacy limits"
                    ]
                },
                {
                    name: "Media & Status Updates",
                    points: [
                        "Upload personal images or updates as timed statuses",
                        "Statuses visible to followers only",
                        "Manage media and control privacy settings easily"
                    ]
                }
            ],
            ppt: 'https://docs.google.com/presentation/d/e/2PACX-1vQWFlKEP21frn991haDRAsfNOn7DO4za--DaCCXDH0_w5CuqMkzVwn8RBunrt0grg/pubembed?start=true&loop=true&delayms=3000',
            AllTechStackImg: '/StaminAllTechStackImg.png',
            TechStackImg: '/StaminTechImg1.png',
            techStack: [
                {
                    name: "Frontend",
                    points: [
                        "React Native Bare ensures smooth cross-platform performance",
                        "Redux Toolkit enables fast and optimized state updates",
                        "TypeScript improves code reliability and maintainability"
                    ]
                },
                {
                    name: "Backend",
                    points: [
                        "Node.js & Express provide high-performance API handling",
                        "MVC monolithic architecture ensures clean code structure",
                        "MongoDB, Redis & BullMQ optimize data access and background tasks",
                        "Docker with AWS ensures scalable and reliable deployment"
                    ]
                }
            ]
        },
        {
            id: 3,
            coverPic: '',
            logo: '',
            title: '',
            image: '',
            image2: '',
            name: 'Qilin',
            about: '',
            github: '',
            website: '',
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
            ],
            ppt: '',
            AllTechStackImg: '',
            TechStackImg: '',
            techStack: [
                {
                    name: "Frontend",
                    points: [
                        "React Native Bare ensures smooth cross-platform performance",
                        "Redux Toolkit enables fast and optimized state updates",
                        "TypeScript improves code reliability and maintainability"
                    ]
                },
                {
                    name: "Backend",
                    points: [
                        "Node.js & Express provide high-performance API handling",
                        "MVC monolithic architecture ensures clean code structure",
                        "MongoDB, Redis & BullMQ optimize data access and background tasks",
                        "Docker with AWS ensures scalable and reliable deployment"
                    ]
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
            <div className="flex flex-col pt-7 gap-1 sm:gap-3">
                <a tabIndex={i} className="text-white text-sm font-semibold sm:text-2xl">{f.name}</a>
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
            <div key={i} className="flex flex-col pt-7 gap-1 sm:gap-3">
                <a tabIndex={i} className="text-white text-sm font-bold sm:text-2xl">{f.name}</a>
                {f.points.map((p, j) => {
                    return (
                        <a key={j} tabIndex={j} className="text-white text-xs sm:text-lg">● {p}</a>
                    )
                })}
            </div>
        )
    })

    const techstackdata = details?.techStack?.map((f, i) => (
        <div key={i} className="flex flex-col pt-8 gap-1 sm:gap-3">
            <span className="text-white text-sm font-bold sm:text-2xl">{f.name}</span>
            {f.points.map((p, j) => (
                <div key={j} className="flex border border-[#959595] rounded-full py-3 px-5">
                    <span className="text-white text-xs sm:text-lg">{p}</span>
                </div>
            ))}
        </div>
    ));

    return (
        <div className='w-full min-h-screen bg-black'>
            <div id="about" className="pt-10" />
            {/* Top Banner */}
            <div className='relative w-full h-50 sm:h-170'>
                <Image
                    src={details.coverPic}
                    alt=""
                    fill
                    className="object-cover"
                />
                <div className="w-full h-full flex flex-row justify-between">
                    <div className="inset-0 flex justify-center flex-col pb-5 sm:pb-19 px-15 sm:px-25 sm:px-35 w-[50%] sm:gap-8">
                        <p className="text-white z-10 sm:text-8xl">{details.Title}</p>
                    </div>
                    <div className="flex justify-center flex-col w-[35%] pb-3 px-4 sm:px-10 gap-3 sm:gap-8">
                        <p className="text-white z-10 sm:text-md w-[80%] hidden sm:block">{details.about}</p>
                        <div id="features" className="flex flex-row gap-2 z-10">
                            {details?.github && (
                                <Link
                                    href={details.github}
                                    target="_blank"
                                    className="rounded-full border border-white flex items-center gap-3 px-3 py-2.5 bg-black"
                                >
                                    <Image alt="" src="/Github.PNG" width={30} height={24} />
                                    <p className="text-white font-bold text-xs sm:text-xl pr-1">Github Link</p>
                                </Link>
                            )}
                            {details?.website && (
                                <Link href={details.website}
                                    target="_blank" className="rounded-full sm:px-4 sm:py-2 px-2 bg-black border-1 border-white justify-center items-center">
                                    <p className="text-white font-bold text-xs sm:text-lg">www.</p>
                                </Link>
                            )}
                        </div>
                    </div>
                </div>
            </div>

            {/* Service-Provided */}
            <div className="w-full pb-40 px-4 sm:px-35 justify-between flex flex-row">
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
            <div className=" w-full pb-20 px-4 sm:px-35 justify-between gap-6 sm:gap-24 flex flex-row">
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
            <section id="pptx" className="w-full py-20 min-h-screen flex items-center justify-center bg-black">
                <div className="w-[95%] h-[100vh] rounded-xl overflow-hidden shadow-2xl">
                    <iframe
                        src={details.ppt}
                        className="w-full h-full"
                        allowFullScreen
                    />
                </div>
            </section>
            <div id="techstack" className="py-20 mt-15 sm:px-30 sm:py-0 w-full flex flex-row justify-between">
                <div className="flex flex-col w-[47%]">
                    <a className="text-2xl sm:text-6xl font-bold text-white">Tech Stack</a>
                    {techstackdata}
                </div>
                <div className="gap-4">
                    <div className="relative mt-10 sm:w-200 sm:h-150 w-70 h-60">
                        <Image
                            src={details.TechStackImg}
                            alt="tech-stack"
                            fill
                            className="object-cover"
                        />
                    </div>
                </div>
            </div>
            <div className="justify-center flex flex-col items-center">
                <div className="relative sm:w-350 sm:h-210 w-70 h-50">
                    <Image
                        src={details.AllTechStackImg}
                        alt="tech-stack"
                        fill
                        className="object-cover"
                    />
                </div>
                <div className="mt-15 w-full py-10 px-30 flex-col items-center justify-center">
                    <div className="flex justify-center w-full items-end flex-row gap-3">
                        <Image
                            src={details.logo}
                            alt=""
                            width={56} height={25} />
                        <a className="text-2xl sm:text-5xl font-semibold text-white">{details.name}</a>
                    </div>
                    <div className="py-10 w-full- flex items-center justify-center gap-15">
                        <Link href={details.github}
                            target="_blank"
                            className="gap-2 flex flex-row items-center justify-center">
                            <Image
                                src='/Github.PNG'
                                alt=""
                                width={20} height={25} />
                            <p className="text-white text-xs sm:text-lg mt-0.5">Github</p>
                        </Link>
                        <Link href={details.website}
                            target="_blank"
                            className="gap-1 flex flex-row items-center justify-center">
                            <Image
                                src='/PlayStoreLogo.PNG'
                                alt=""
                                width={35} height={25} />
                            <p className="text-white text-xs sm:text-lg mt-0.5">PlayStore</p>
                        </Link>
                        <Link href={details.website}
                            target="_blank"
                            className="flex flex-row items-center justify-center">
                            <Image
                                src='/AppStoreLogo.PNG'
                                alt=""
                                width={38} height={25} />
                            <p className="text-white text-xs sm:text-lg mt-0.5">AppStore</p>
                        </Link>
                    </div>
                    <div className="w-full h-1 border-b border-white" />
                    <div className="py-15 w-full- flex items-center justify-center gap-30">
                        <Link href="#features"
                            className="gap-2 border-b-1 border-white flex flex-row items-center justify-center">
                            <p className="text-white text-xs sm:text-lg mt-0.5">Features</p>
                        </Link>
                        <Link href="#about"
                            className="gap-1 border-b-1 border-white flex flex-row items-center justify-center">
                            <p className="text-white text-xs sm:text-lg mt-0.5">About</p>
                        </Link>
                        <Link href="#pptx"
                            className="flex border-b-1 border-white flex-row items-center justify-center">
                            <p className="text-white text-xs sm:text-lg mt-0.5">pptx</p>
                        </Link>
                        <Link href="#techstack"
                            className="flex border-b-1 border-white flex-row items-center justify-center">
                            <p className="text-white text-xs sm:text-lg mt-0.5">Tech Stack</p>
                        </Link>
                        <Link href="/"
                            className="flex border-b-1 border-white flex-row items-center justify-center">
                            <p className="text-white text-xs sm:text-lg mt-0.5">Home</p>
                        </Link>
                    </div>
                    <div className="w-full- flex items-center justify-center gap-30">
                        <p className="text-white text-xs sm:text-lg mt-0.5">@2026 {details.name}. All Rights Reserved</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Page;