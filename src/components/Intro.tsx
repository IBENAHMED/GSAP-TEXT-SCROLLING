import Image from 'next/image';
import React, { useLayoutEffect, useRef } from 'react';
import './Intro.css';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';

const Intro = () => {

    const background = useRef(null);
    const introImage = useRef(null);


    useLayoutEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        const timeline = gsap.timeline({
            scrollTrigger: {
                trigger: document.documentElement,
                scrub: true,
                start: "top",
                end: "+=250px"
            },
        })

        timeline
            .fromTo(background.current, { clipPath: `inset(15%)` }, { clipPath: `inset(0%)` });

        timeline
            .fromTo(introImage.current, { height: "475px" }, { height: "200px" })
    }, [])

    return (
        <div className="homeHeader">
            <div className="backgroundImage" ref={background}>
                <Image
                    src={'/image/background.jpeg'}
                    fill={true}
                    alt="background image"
                    priority={true}
                />
            </div>
            <div className="intro">
                <div data-scroll data-scroll-speed="0.3" className="introImage" ref={introImage}>
                    <Image
                        src={'/image/intro.png'}
                        alt="intro image"
                        fill={true}
                        priority={true}
                    />
                </div>
                <h1 data-scroll data-scroll-speed="0.7">SMOOTH SCROLL</h1>
            </div>
        </div>
    )
}

export default Intro
