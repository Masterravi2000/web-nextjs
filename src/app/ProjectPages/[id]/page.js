import Image from "next/image";
import Link from "next/link";

const Page = async ({ params }) => {
  const { id } = await params;
  const _id = Number(id);

  const show = [
    {
      id: 1,
      coverPic: "/StrengthCover2.jpg",
      logo: "/StrengthLogo2.png",
      Title: "Professional Social Media For Sports.",
      name: "Strength",
      about:
        "Strength emerges as a comprehensive solution to the challenges faced by the sports community. The platform offers a multifaceted approach, providing users with the tools needed to connect, organize, and engage. By facilitating the creation and management of sports profiles, teams, and tournaments, Strength empowers enthusiasts to actively participate in their chosen sports. Clubs can extend their reach by establishing an online presence, allowing members to interact virtually, thus strengthening the sense of belonging.",
      image: "/Strength_Product4.jpg",
      image2: "/Strength.png",
      github: "https://github.com/strengthsports/Strength-Frontend",
      website: "https://www.yourstrength.in/",
      productType: "app",
      product:
        "https://github.com/strengthsports/Strength-Frontend/releases/download/V1.0.0/Strength.apk",
      AllTechStackImg: "/AllTechStackImg2.png",
      TechStackImg: "/TechStackImg4.png",
      features: [
        {
          name: "Authentication & Security",
          points: [
            "OTP-based login system combined with JWT authentication for secure access",
            "Strong password encryption and secure user data storage using MongoDB",
          ],
        },
        {
          name: "User Sports Profile",
          points: [
            "Users can add, edit, and manage their favourite sports preferences",
            "Complete control over privacy settings and profile customization options",
          ],
        },
        {
          name: "User Interaction",
          points: [
            "Search for users and follow them to stay connected",
            "Send and manage team invitations to collaborate with others",
          ],
        },
        {
          name: "Feed System",
          points: [
            "Share posts including text, images, and videos with followers",
            "Engage with posts using likes, comments, and sharing features",
          ],
        },
        {
          name: "Explore Page",
          points: [
            "Discover the latest sports news and trending updates",
            "View live match scores and real-time sports highlights",
          ],
        },
        {
          name: "Teams Feature",
          points: [
            "Create and manage sports teams within the application",
            "Communicate with team members using group chat functionality",
          ],
        },
        {
          name: "Notifications System",
          points: [
            "Get real-time notifications for likes, comments, and new followers",
            "Stay updated about team invites and important announcements",
          ],
        },
        {
          name: "Media Management",
          points: [
            "Upload and manage photos and videos easily",
            "Optimize media files for better performance and storage",
          ],
        },
      ],
      ppt: "https://docs.google.com/presentation/d/e/2PACX-1vQqv2zmXklxZiebZ_3VIhycqqYwoP9UmCgEYTwgwuu_0OMX7nLhqyCzyKpK54G7UQ/pubembed?start=true&loop=true&delayms=3000",
      techStack: [
        {
          name: "Frontend",
          points: [
            "React Native ensures smooth cross-platform performance",
            "Redux Toolkit enables fast and optimized state updates",
            "TypeScript improves code reliability and maintainability",
          ],
        },
        {
          name: "Backend",
          points: [
            "Node.js & Express provide high-performance API handling",
            "MVC monolithic architecture ensures clean code structure",
            "MongoDB, Redis & BullMQ optimize data access and background tasks",
            "Docker with AWS ensures scalable and reliable deployment",
          ],
        },
      ],
    },

    {
      id: 2,
      coverPic: "/StaminCover.png",
      logo: "/StaminLogo2.png",
      Title: "Personal Health & Fit Coach.",
      image: "/Stamin1st.jpg",
      image2: "/Stamin2nd.png",
      name: "Stamin",
      about:
        "Stamin is an AI-powered personal health, fitness, and sports coach designed to help users build and maintain a complete fitness profile. It connects with smartwatches and health devices to track physical activity, monitor key health metrics, and analyze medical and performance data. Using these insights, Stamin delivers personalized training guidance, recovery recommendations, and wellness insights to improve performance, consistency, and overall well-being.",
      github: "https://github.com/staminOfficial/Stamin_Frontend",
      productType: "",
      product: "",
      website: "",
      features: [
        {
          name: "Authentication & Security",
          points: [
            "Password hashing with bcrypt",
            "Temporary user creation after OTP verification",
            "JWT-based access control",
            "Secure data storage in MongoDB",
          ],
        },
        {
          name: "User Profile",
          points: [
            "Standard profile with profile pic and cover pic",
            "Connect smartwatches to track sports activity",
            "Showcase favourite sports and associated metrics",
          ],
        },
        {
          name: "Records & Medical Data",
          points: [
            "Maintain recorded exercise and performance data",
            "Upload medical reports (weight %, blood group, BP, diabetes, etc.)",
            "Set public or private access for each report",
          ],
        },
        {
          name: "Stamin AI",
          points: [
            "Studies user profile and fitness data",
            "Provides personalized guidance and answers for health & fitness",
            "Tailored suggestions based on activity and medical reports",
          ],
        },
        {
          name: "User Interaction",
          points: [
            "Search and follow other users",
            "Engage with other users’ content",
            "Collaborate or communicate within privacy limits",
          ],
        },
        {
          name: "Media & Status Updates",
          points: [
            "Upload personal images or updates as timed statuses",
            "Statuses visible to followers only",
            "Manage media and control privacy settings easily",
          ],
        },
      ],
      ppt: "https://docs.google.com/presentation/d/e/2PACX-1vQWFlKEP21frn991haDRAsfNOn7DO4za--DaCCXDH0_w5CuqMkzVwn8RBunrt0grg/pubembed?start=true&loop=true&delayms=3000",
      AllTechStackImg: "/StaminAllTechStackImg.png",
      TechStackImg: "/StaminTechImg1.png",
      techStack: [
        {
          name: "Frontend",
          points: [
            "React Native Bare ensures smooth cross-platform performance",
            "Redux Toolkit enables fast and optimized state updates",
            "TypeScript improves code reliability and maintainability",
          ],
        },
        {
          name: "Backend",
          points: [
            "Node.js & Express provide high-performance API handling",
            "MVC monolithic architecture ensures clean code structure",
            "MongoDB, Redis & BullMQ optimize data access and background tasks",
            "Docker with AWS ensures scalable and reliable deployment",
          ],
        },
      ],
    },

    {
      id: 3,
      coverPic: "/QilinCoverPic.png",
      logo: "/QilinLogo.png",
      Title: "Pre-loved Gn-z women Fashion",
      image: "/QilinImg.jpg",
      image2: "/QilinImg2.jpg",
      name: "Qilin",
      about:
        "Qilin is a mobile marketplace for modern second-hand women fashion, connecting buyers and sellers around pre-loved clothing from thousands of brands. It features an AI-powered selling flow that automatically generates complete product listings from uploaded clothing images, eliminating manual form entry. Built for speed and usability, Qilin simplifies how pre-owned fashion is listed, discovered, and shared within a community-driven resale platform.",
      github: "https://github.com/Masterravi2000/Qilin_Frontend",
      productType: "app",
      product:
        "https://github.com/Masterravi2000/Qilin_Frontend/releases/download/v1.0.0/Qilin.apk",
      website: "",
      features: [
        {
          name: "Payment Processing & Verification",
          points: [
            "Merchants can create Razorpay orders through simple REST APIs",
            "Payment signatures are verified on the backend before confirmation",
            "Verified payments are persisted securely in PostgreSQL",
          ],
        },
        {
          name: "Async Invoice Generation",
          points: [
            "Invoice PDFs are auto-generated after every successful payment",
            "PDF creation and upload run as a background task after response",
            "Reduces payment confirmation latency from ~3s to under 750ms",
          ],
        },
        {
          name: "Invoice Storage",
          points: [
            "Generated invoice PDFs are uploaded and stored on Cloudinary",
            "Invoice URLs are saved against each payment record in PostgreSQL",
            "Invoices remain available for download anytime after generation",
          ],
        },
        {
          name: "Refund Management",
          points: [
            "Merchants can raise refunds directly through the refund API",
            "Refund status is synced with Razorpay in real time",
            "Complete refund history is available for every transaction",
          ],
        },
        {
          name: "Transaction History & Analytics",
          points: [
            "Paginated APIs expose payment, invoice, and refund history",
            "Surface-level statistics like totals and trends are available",
            "Gives merchants visibility into their payment operations",
          ],
        },
        {
          name: "Webhook Reconciliation",
          points: [
            "Razorpay webhooks are used to independently verify payment events",
            "Backend reconciles payment state even if the client disconnects",
            "Ensures consistency between Razorpay and FishPay's database",
          ],
        },
      ],
      ppt: "https://docs.google.com/presentation/d/e/2PACX-1vR4mIZwEJcDkDC6eFjYSvk2TiXBtNY2h62mLB8fVpO5m1Go0O0RMkpxrZRcguNpWg/pubembed?start=true&loop=true&delayms=3000",
      AllTechStackImg: "/QilinAllTechStackImg.png",
      TechStackImg: "/QilinTechStackImg.png",
      techStack: [
        {
          name: "Frontend",
          points: [
            "React Native Bare ensures smooth cross-platform performance",
            "Redux Toolkit enables fast and optimized state updates",
            "TypeScript improves code reliability and maintainability",
          ],
        },
        {
          name: "Backend",
          points: [
            "Node.js & Express provide high-performance API handling",
            "MVC monolithic architecture ensures clean code structure",
            "MongoDB, Redis & BullMQ optimize data access and background tasks",
            "Docker with AWS ensures scalable and reliable deployment",
          ],
        },
      ],
    },

    {
      id: 4,
      coverPic: "/FishPay/FishPayCoverPic.png",
      logo: "/FishPay/FishPayLogo.png",
      Title: "Payment Management System",
      image: "/FishPay/fishpay-img-1.png",
      image2: "/FishPay/fishpay-img-2.png",
      name: "FishPay",
      about:
        "FishPay is a production-oriented payment management infrastructure built using Java, Spring Boot, PostgreSQL, Razorpay, and Docker that enables businesses to integrate a complete payment management system without investing significant development time or dealing with the complexities involved in building one from scratch. The system manages the complete payment lifecycle, including payment processing, payment verification, webhook reconciliation, invoice generation, refund management, transaction history, and analytics through reusable REST APIs.",
      github: "https://github.com/Masterravi2000/FishPay_Backend",
      productType: "Backend as a service (Baas)",
      product:
        "https://github.com/Masterravi2000/FishPay_Frontend/releases/download/payment-system-demo/FishPayDemo.apk",
      website: "",
      features: [
        {
          name: "Payment Processing & Verification",
          points: [
            "Merchants can create Razorpay orders through simple REST APIs",
            "Payment signatures are verified on the backend before confirmation",
            "Verified payments are persisted securely in PostgreSQL",
          ],
        },
        {
          name: "Async Invoice Generation",
          points: [
            "Invoice PDFs are auto-generated after every successful payment",
            "PDF creation and upload run as a background task after response",
            "Reduces payment confirmation latency from ~3s to under 750ms",
          ],
        },
        {
          name: "Invoice History",
          points: [
            "Generated invoice PDFs are uploaded and stored on Cloudinary",
            "Invoice URLs are saved against each payment record in PostgreSQL",
            "Paginated invoice history lets merchants retrieve past invoices anytime",
          ],
        },
        {
          name: "Refund Management",
          points: [
            "Merchants can raise refunds directly through the refund API",
            "Refund status is synced with Razorpay in real time",
            "Complete refund history is available for every transaction",
          ],
        },
        {
          name: "Transaction History & Analytics",
          points: [
            "Paginated APIs expose payment, invoice, and refund history",
            "Surface-level statistics like totals and trends are available",
            "Gives merchants visibility into their payment operations",
          ],
        },
        {
          name: "Webhook Reconciliation",
          points: [
            "Razorpay webhooks are used to independently verify payment events",
            "Backend reconciles payment state even if the client disconnects",
            "Ensures consistency between Razorpay and FishPay's database",
          ],
        },
      ],
      ppt: "https://docs.google.com/presentation/d/e/2PACX-1vQtRFyo2prnlZpW90wj1AVXo0lhhdlgD-lnWLejU3iBzJ5VAsYsHQRdVYGxctYyEQ/pubembed?start=true&loop=true&delayms=3000",
      AllTechStackImg: "/SkywardAllTechImg.png",
      TechStackImg: "/SkywardTechStackImg.png",
      // FishPay example
      techStack: [
        {
          name: "Core Backend",
          points: [
            "Java 24",
            "Spring Boot 3.5.x",
            "Spring Security",
            "Spring Data JPA / Hibernate",
          ],
        },
        {
          name: "Database & Payments",
          points: ["PostgreSQL", "Razorpay SDK"],
        },
        {
          name: "Infra & Services",
          points: ["Docker", "Cloudinary", "REST APIs"],
        },
      ],
      systemDesignFullView: "/FishPay/FishPay-System-Design.jpg",
      coreSystemImg: "/FishPay/fishpay-img-2.png",
      coreSystemDescription:
        "When a merchant creates an order, the backend calls Razorpay and returns an order ID to the client. On payment completion, the client sends the payment ID and signature to the verify endpoint, which validates the cryptographic signature and persists the payment in PostgreSQL before responding immediately. Invoice PDF generation and Cloudinary upload run asynchronously in a background thread afterward, cutting confirmation latency from ~3s to under 750ms. Razorpay webhooks independently reconcile payment and refund events in case the client disconnects, with retry logic handling cases where the webhook arrives before the database write completes.",
      deploymentDescription:
          "FishPay follows a layered Controller → Service → Repository architecture on Spring Boot, containerized using a multi-stage Docker build. The first stage uses Maven with a full JDK to resolve dependencies and compile the project into a jar; the second stage discards Maven and the build toolchain entirely, copying over only the compiled jar into a fresh runtime image, keeping the final image free of build-time dependencies. The backend is deployed on Render, PostgreSQL is hosted separately on Neon, and generated invoice PDFs are stored on Cloudinary."
      // testingResults omitted — not done yet, so section stays hidden
    },
  ];

  const details = show.find((element, index) => {
    console.log(index);
    return element.id === _id;
  });

  const mid = Math.floor(details.features.length / 2);

  const feature1 = details.features.slice(0, mid);
  const feature2 = details.features.slice(mid);

  const featurefirsthalf = feature1?.map((f, i) => {
    return (
      <div key={i} className="flex flex-col sm:pt-7 pt-1 gap-1 sm:gap-3">
        <a className="text-white text-[12px] font-semibold sm:text-2xl">
          {f.name}
        </a>
        {f?.points.map((p, j) => {
          return (
            <a key={j} className="text-white text-[10px] sm:text-lg">
              ● {p}
            </a>
          );
        })}
      </div>
    );
  });

  const feature2ndhalf = feature2.map((f, i) => {
    return (
      <div key={i} className="flex flex-col sm:pt-7 pt-1 gap-1 sm:gap-3">
        <a key={i} className="text-white text-[12px] font-bold sm:text-2xl">
          {f.name}
        </a>
        {f.points.map((p, j) => {
          return (
            <a key={j} className="text-white text-[10px] sm:text-lg">
              ● {p}
            </a>
          );
        })}
      </div>
    );
  });

  const techstackdata = details?.techStack?.map((f, i) => (
    <div key={i} className="flex flex-col pt-8 gap-1 sm:gap-3">
      <span className="text-white text-sm font-bold sm:text-2xl">{f.name}</span>
      {f.points.map((p, j) => (
        <div
          key={j}
          className="flex border border-[#959595] rounded-full py-3 px-5"
        >
          <span className="text-white text-xs sm:text-lg">{p}</span>
        </div>
      ))}
    </div>
  ));

  return (
    <div className="w-full min-h-screen bg-black">
      <div id="about" className="pt-10" />

      <div className="relative w-full h-50 sm:h-170">
        <Image src={details.coverPic} alt="" fill className="object-cover" />
        <div className="w-full h-full flex flex-row justify-between">
          <div className="inset-0 flex justify-center flex-col pb-5 sm:pb-19 px-15 sm:px-25 sm:px-35 w-[45%] sm:gap-8">
            <p className="text-white z-10 sm:text-8xl">{details.Title}</p>
          </div>
          <div className="flex justify-center flex-col w-[35%] pb-3 px-4 sm:px-10 gap-3 sm:gap-8">
            <p className="text-white z-10 sm:text-md sm:w-[80%] hidden sm:block">
              {details.about}
            </p>
            <div
              id="features"
              className="flex flex-col sm:flex-row gap-2 pr-5 sm:gap-4 z-10"
            >
              {details?.github && (
                <Link
                  href={details.github}
                  target="_blank"
                  className="rounded-full border border-white flex items-center justify-center sm:gap-3 gap-1.5 px-2 py-1 sm:px-3 sm:py-2.5 bg-black"
                >
                  <Image
                    alt=""
                    src="/Github.png"
                    width={30}
                    height={24}
                    className="w-[13px] sm:w-[30px]"
                  />
                  <p className="text-white font-bold text-[7px] sm:text-xl sm:pr-1">
                    Github Link
                  </p>
                </Link>
              )}
              {details?.website && (
                <Link
                  href={details.website}
                  target="_blank"
                  className="rounded-full sm:px-4 sm:py-2 sm:px-2 bg-black border-1 border-white flex justify-center items-center"
                >
                  <p className="text-white font-bold text-[7px] px-2 py-1 sm:text-lg">
                    www.
                  </p>
                </Link>
              )}
              {details?.product &&
                (details.productType === "app" ? (
                  <a
                    href={details.product}
                    download
                    className="border-1 border-white rounded-full justify-center items-center flex px-2 py-1 sm:px-6 sm:py-3"
                  >
                    <p className="font-bold text-white text-[7px] sm:text-lg">
                      {details.productType === "app"
                        ? "Install Apk"
                        : `Try ${details.name}`}
                    </p>
                  </a>
                ) : (
                  <a
                    href={details.product}
                    className="border-1 border-white rounded-full justify-center items-center flex px-2 py-1 sm:px-6 sm:py-3"
                  >
                    <p className="font-bold text-white text-[7px] sm:text-lg">
                      {details.productType === "app"
                        ? "Install Apk"
                        : `Try ${details.name}`}
                    </p>
                  </a>
                ))}
            </div>
          </div>
        </div>
      </div>

      {/* Service-Provided */}
      <div className="w-full pb-10 sm:pb-40 px-4 sm:px-35 justify-between flex flex-row">
        <div className="flex flex-col w-[47%]">
          <a className="sm:text-2xl sm:text-6xl font-bold text-white">
            Features
          </a>
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
      <div className=" w-full sm:pb-20 px-4 sm:px-35 justify-between gap-6 sm:gap-24 flex flex-row">
        <div className="relative w-80 h-40 sm:w-300 sm:h-150">
          <Image
            src={details.image2}
            alt="Product sc"
            fill
            className="object-cover rounded-4xl"
          />
        </div>
        <div className="flex flex-col w-[47%]">{feature2ndhalf}</div>
      </div>
      <section
        id="pptx"
        className="w-full sm:py-20 min-h-screen flex items-center justify-center bg-black"
      >
        <div className="w-[95%] h-[100vh] rounded-xl overflow-hidden shadow-2xl">
          <iframe src={details.ppt} className="w-full h-full" allowFullScreen />
        </div>
      </section>

      {/* Tech Stack part starts from here*/}
      {/* Tech Stack part starts from here */}

      {details.techStack &&
      details.systemDesignFullView &&
      details.coreSystemImg &&
      details.coreSystemDescription ? (
        <div
          id="techstack"
          className="py-2 sm:px-30 w-full flex flex-col gap-35"
        >
          {/* 1. Tech stack pills */}
          <div className="flex flex-col gap-5 px-4 sm:px-0">
            <a className="text-2xl sm:text-7xl py-10 font-bold text-white">
              Tech Stack
            </a>
            {details.techStack.map((f, i) => (
              <div key={i} className="flex flex-col gap-4">
                <span className="text-white text-sm sm:text-2xl">
                  {f.name}
                </span>
                <div className="flex flex-wrap gap-2">
                  {f.points.map((p, j) => (
                    <span
                      key={j}
                      className="border border-[#959595] rounded-full px-8 py-3 text-white text-xs sm:text-lg"
                    >
                      {p}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* 2. Full-width system design banner */}
          <div className="w-full px-4 sm:px-0">
            <div className="relative w-full h-60 sm:h-100 rounded-2xl border border-white">
              <Image
                src={details.systemDesignFullView}
                alt="System design"
                fill
                className="object-cover rounded-2xl"
              />
            </div>
          </div>

          {/* 3. Core system design — image left, one paragraph right */}
          <div className="w-full px-4 sm:px-0 flex flex-col sm:flex-row gap-8 sm:gap-16">
            <div className="relative w-full sm:w-[45%] h-60 sm:h-100">
              <Image
                src={details.coreSystemImg}
                alt="Core system design"
                fill
                className="object-cover rounded-xl"
              />
            </div>
            <div className="flex flex-col sm:w-[55%] justify-center gap-3">
              <span className="text-white text-lg sm:text-2xl font-semibold">
                Core System Design
              </span>
              <p className="text-white text-xs sm:text-xl leading-relaxed">
                {details.coreSystemDescription}
              </p>
            </div>
          </div>

          {/* 4. Deployment description (only if provided) */}
          {details.deploymentDescription && (
            <div className="w-full px-4 sm:px-0">
              <span className="text-white text-lg sm:text-2xl font-semibold">
                Deployment
              </span>
              <p className="text-white text-xs sm:text-xl leading-relaxed mt-3">
                {details.deploymentDescription}
              </p>
            </div>
          )}

          {/* Testing results (only if provided) */}
          {details.testingResults && (
            <div className="w-full px-4 sm:px-0">
              <span className="text-white text-lg sm:text-2xl font-semibold">
                Testing Results
              </span>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-4">
                {Object.entries(details.testingResults).map(
                  ([label, value], i) => (
                    <div
                      key={i}
                      className="border border-[#959595] rounded-xl p-4"
                    >
                      <p className="text-[#999] text-xs">{label}</p>
                      <p className="text-white text-lg sm:text-xl font-semibold mt-1">
                        {value}
                      </p>
                    </div>
                  ),
                )}
              </div>
            </div>
          )}
        </div>
      ) : (
        <div
          id="techstack"
          className="py-20 mt-15 sm:px-30 sm:py-0 w-full flex flex-row justify-between"
        >
          <div className="flex flex-col w-[47%]">
            <a className="text-2xl sm:text-6xl font-bold text-white">
              Tech Stack
            </a>
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
      )}

      <div className="justify-center flex flex-col items-center">
        {details.techStack===null ? (
                    <div className="relative sm:w-350 sm:h-210 w-70 h-50">
          <Image
            src={details.AllTechStackImg}
            alt="tech-stack"
            fill
            className="object-cover"
          />
        </div>
        ) : null}

        {/* Footer */}
        <div className="mt-15 w-full py-10 px-30 flex-col items-center justify-center">
          <div className="flex justify-center w-full items-end flex-row gap-3">
            <Image src={details.logo} alt="" width={56} height={25} />
            <a className="text-2xl sm:text-5xl font-semibold text-white">
              {details.name}
            </a>
          </div>
          <div className="py-10 w-full- flex items-center justify-center gap-15">
            <Link
              href={details.github}
              target="_blank"
              className="gap-2 flex flex-row items-center justify-center"
            >
              <Image src="/Github.png" alt="" width={20} height={25} />
              <p className="text-white text-xs sm:text-lg mt-0.5">Github</p>
            </Link>
            <Link
              href={details.website}
              target="_blank"
              className="gap-1 flex flex-row items-center justify-center"
            >
              <Image src="/PlayStoreLogo.png" alt="" width={35} height={25} />
              <p className="text-white text-xs sm:text-lg mt-0.5">PlayStore</p>
            </Link>
            <Link
              href={details.website}
              target="_blank"
              className="flex flex-row items-center justify-center"
            >
              <Image src="/AppStoreLogo.png" alt="" width={38} height={25} />
              <p className="text-white text-xs sm:text-lg mt-0.5">AppStore</p>
            </Link>
          </div>
          <div className="w-full h-1 border-b border-white" />
          <div className="py-15 w-full- flex items-center justify-center gap-30">
            <Link
              href="#features"
              className="gap-2 border-b-1 border-white flex flex-row items-center justify-center"
            >
              <p className="text-white text-xs sm:text-lg mt-0.5">Features</p>
            </Link>
            <Link
              href="#about"
              className="gap-1 border-b-1 border-white flex flex-row items-center justify-center"
            >
              <p className="text-white text-xs sm:text-lg mt-0.5">About</p>
            </Link>
            <Link
              href="#pptx"
              className="flex border-b-1 border-white flex-row items-center justify-center"
            >
              <p className="text-white text-xs sm:text-lg mt-0.5">pptx</p>
            </Link>
            <Link
              href="#techstack"
              className="flex border-b-1 border-white flex-row items-center justify-center"
            >
              <p className="text-white text-xs sm:text-lg mt-0.5">Tech Stack</p>
            </Link>
            <Link
              href="/"
              className="flex border-b-1 border-white flex-row items-center justify-center"
            >
              <p className="text-white text-xs sm:text-lg mt-0.5">Home</p>
            </Link>
          </div>
          <div className="w-full- flex items-center justify-center gap-30">
            <p className="text-white text-xs sm:text-lg mt-0.5">
              @2026 {details.name}. All Rights Reserved
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
