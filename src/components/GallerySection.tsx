"use client"; 
import React from 'react'
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { EffectFade, Navigation } from "swiper/modules";

const GallerySection = () => {

    const images = [
        "/StaminMeni9.png",
        "/QilinMeni.png",
        "/StrengthBanner.png",
        "/StaminMeni10.png",
    ];

    return (
        <div className='bg-black items-center'>
            <div className='w-full flex flex-row'>
                <div className='w-[30%] border border-[#181818]'></div>
                <div className='w-[70%] border border-[#181818] flex justify-center items-center p-15'>
                    <a className='text-white font-semi-bold pt-20 text-9xl pb-6'>Menifesto</a>
                </div>
            </div>
            <div className='w-full h-[450px] overflow-hidden'>
                <Swiper
                    modules={[Navigation, EffectFade]}
                    navigation={true}
                    effect="slide"
                    loop
                    className="w-full h-full"
                >
                    {images.map((src, index) => (
                        <SwiperSlide key={index}>
                            <Image
                                src={src}
                                alt={`Slide ${index}`}
                                width={5000}
                                height={450}
                                className="w-full h-full object-cover"
                            />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    )
}

export default GallerySection
