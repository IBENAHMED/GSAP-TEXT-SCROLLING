"use client"
import React, { useState, useLayoutEffect, useRef } from 'react'
import './Projects.css';
import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const projects = [
    {
        title: "Salar de Atacama",
        src: "salar_de_atacama.jpg"
    },
    {
        title: "Valle de la luna",
        src: "valle_de_la_muerte.jpeg"
    },
    {
        title: "Miscanti Lake",
        src: "miscani_lake.jpeg"
    },
    {
        title: "Miniques Lagoons",
        src: "miniques_lagoon.jpg"
    },
]

export default function Projects() {

    const [selectedProject, setSelectedProject] = useState(0);
    const container = useRef(null);
    const imageContainer = useRef(null);

    useLayoutEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        const timeline = gsap.timeline({
            scrollTrigger: {
                trigger: imageContainer.current,
                scrub: true,
                start: "0px bottom",
                end: "bottom+=400px bottom"
            },
        })

        timeline
            .fromTo(imageContainer.current, {
                opacity: 0,
                top: "0px",
            }, {
                opacity: 1,
                top: "370px"
            })
    }, [])

    return (
        <div ref={container} className="projects">
            <div className="projectDescription">
                <div ref={imageContainer} className="imageContainer">
                    <Image
                        src={`/image/${projects[selectedProject].src}`}
                        fill={true}
                        alt="project image"
                        priority={true}
                    />
                </div>
                <div className="column">
                    <p>The flora is characterized by the presence of high elevation wetland, as well as yellow straw, broom sedge, tola de agua and tola amaia.</p>
                </div>
                <div className="column">
                    <p>Some, like the southern viscacha, vicuña and Darwins rhea, are classified as endangered species. Others, such as Andean goose, horned coot, Andean gull, puna tinamou and the three flamingo species inhabiting in Chile (Andean flamingo, Chilean flamingo, and Jamess flamingo) are considered vulnerable.</p>
                </div>
            </div>

            <div className="projectList">
                {
                    projects.map((project, index) => {
                        return <div key={index} onMouseOver={() => { setSelectedProject(index) }} className="projectEl">
                            <h2>{project.title}</h2>
                        </div>
                    })
                }
            </div>
        </div>
    )
}