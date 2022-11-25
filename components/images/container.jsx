import React, { useRef, useEffect, useState, forwardRef } from "react";
import useScrollSnap from "react-use-scroll-snap";
import Image from "next/image";
import { useNextSanityImage } from "next-sanity-image";
import client from "../../client";
import { useInViewport } from "react-in-viewport";

const Container = (props, ref) => {
    const [show, setShow] = useState(0);

    const [currentImg, setCurrentImg] = useState(props.image);
    const scrollRef = useRef();
    // const scrollRef   = useRef(null);
    // useScrollSnap({ ref: scrollRef, duration: 50, delay: 50 });

    const imageProps = useNextSanityImage(client, currentImg);

    function isInViewport(element) {
        const rect = element.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    function vPFader(e) {
        inViewport ? "bg-red-500" : "";
    }

    return (
        <div
            ref={ref}
            className={`w-full h-screen bg-cover relative snap-proximity 	snap-x`}
            id={props.id}
            style={{ backgroundImage: `url(${props.image})` }}
        >
            {props.children}
            <div className="overlay top-0 z-20 absolute w-full h-full bg-black opacity-30"></div>
            <Image {...imageProps} layout="fill" loading="lazy" objectFit="cover" alt="hero" />
        </div>
    );
};

export default forwardRef(Container);
