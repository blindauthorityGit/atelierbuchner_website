import React, { useState, useEffect, useRef } from "react";
import { Container } from "../images";
import client from "../../client";
import imageUrlBuilder from "@sanity/image-url";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Mousewheel, Pagination } from "swiper";
import "swiper/css/pagination";
import ReactFullpage from "@fullpage/react-fullpage";
import { BsChevronDown } from "react-icons/bs";
import { useInViewport } from "react-in-viewport";

const builder = imageUrlBuilder(client);

function urlFor(source) {
    return builder.image(source);
}

const Start = (props) => {
    const [data, setData] = useState(props.data);
    const containerRef = useRef();
    const myRefs = useRef([]);

    const [currentID, setCurrentID] = useState(0);
    const [scrolling, setScrolling] = useState(false);

    useEffect(() => {
        console.log(props.data);
        console.log(myRefs);
    }, []);

    function scrollIntoViewDown(i) {
        myRefs.current[i].scrollIntoView({ behavior: "smooth" });
        // console.log(myRefs.current[i]);
        scrolling ? null : setCurrentID(currentID + 1);
    }
    function scrollIntoViewUp(i) {
        myRefs.current[i].scrollIntoView({ behavior: "smooth" });
        // console.log(myRefs.current[i]);
        scrolling ? null : setCurrentID(currentID - 1);
    }

    useEffect(() => {
        // console.log(props.image);

        function MouseWheelHandler(e) {
            // cross-browser wheel delta
            var e = window.event || e; // old IE support
            console.log(e, e.wheelDelta);
            var delta = Math.max(-1, Math.min(1, e.wheelDelta || -e.detail));
            // console.log(delta);
            if (delta == 1) {
                // if mouse scrolls up
                // alert("up");
                !scrolling ? scrollIntoViewUp(currentID - 1) : null;
                e.preventDefault();
                e.stopPropagation();
            }
            if (delta == -1) {
                // if mouse scrolls down, we disable scrolling.
                if (currentID == 0) {
                    !scrolling ? scrollIntoViewDown(1) : null;
                } else {
                    !scrolling ? scrollIntoViewDown(currentID + 1) : null;
                }
                e.preventDefault();
                e.stopPropagation();
                return false;
            }
            return false;
        }

        // function handleScroll() {
        //     console.log("scrooool");
        // }

        // containerRef.current.addEventListener("scroll", handleScroll);
        var scrollTimeout;
        containerRef.current.addEventListener("scroll", function (e) {
            setScrolling(true);
            // console.log(scrolling, currentID);
            clearTimeout(scrollTimeout);
            scrollTimeout = setTimeout(function () {
                setScrolling(false);
                // console.log(scrolling, currentID);
            }, 100);
        });
        // window.addEventListener("wheel", MouseWheelHandler, false);
        window.addEventListener("wheel", MouseWheelHandler, { passive: false });
        // window.addEventListener("wheel", (e) => {
        //     console.log(e);
        // });

        return () => {
            // window.removeEventListener("scroll", handleScroll);
            window.removeEventListener("wheel", MouseWheelHandler, { passive: false });
        };
    }, [myRefs.current, containerRef.current, scrolling]);

    return (
        <div ref={containerRef} className="col-span-12 snapCont relative overlay-y-auto ">
            {data.map((e, i) => {
                return (
                    <Container
                        key={`cont${i}`}
                        ref={(ref) => (myRefs.current[i] = ref)}
                        myRef={myRefs}
                        id={i}
                        image={e.image}
                    >
                        <div className="absolute top-64 left-64 text-white text-5xl z-50">
                            {scrolling ? "SCROOLING" : "STOIPING"}
                        </div>
                        <div
                            className="absolute bottom-12 left-64 text-5xl text-white z-50"
                            onClick={() => scrollIntoView(i + 1)}
                        >
                            <BsChevronDown></BsChevronDown>
                        </div>
                    </Container>
                );
            })}
            ;
        </div>
    );
};

export default Start;
