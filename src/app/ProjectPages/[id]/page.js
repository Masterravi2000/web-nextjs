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
            name: "Strength",
            about: "this is strength about"
        },
        {
            id: 2,
            coverPic: '',
            logo: '',
            name: 'Stamin',
            about: '',
        },
        {
            id: 3,
            coverPic: '',
            logo: '',
            name: 'Qilin',
            about: '',
        }
    ]

    const details = show.find((element, index) => {
        return element.id === _id;
    })

    return (
        <div className='w-full min-h-screen bg-black'>
            <div className="pt-10"/>
            <div className='relative w-full h-50 sm:h-170'>
                <Image
                    src={details.coverPic}
                    alt="Project Image"
                    fill
                    className="object-cover"
                />
                <div className="inset-0 flex h-full justify-center flex-col pb-17 px-25 w-full sm:gap-8">
                    <p className="text-white z-10 sm:text-8xl">Professional</p>
                    <p className="text-white z-10 sm:text-8xl">Social Media</p>
                    <p className="text-white z-10 sm:text-8xl">For Sports.</p>
                </div>
            </div>
            <text className='text-white font-bold text-2xl'>{details?.name}</text>
        </div>
    );
}

export default Page;