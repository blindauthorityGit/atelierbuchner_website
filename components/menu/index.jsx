import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { useNextSanityImage } from "next-sanity-image";
import client from "../../client";
import imageUrlBuilder from "@sanity/image-url";

const builder = imageUrlBuilder(client);

function urlFor(source) {
    return builder.image(source);
}

const Menu = (props) => {
    const [data, setData] = useState(props.data);
    const imageProps = useNextSanityImage(client, props.data[0].Logo);

    useEffect(() => {
        console.log(data.Logo);
    }, []);

    return (
        <div className="w-full h-20 bg-white fixed z-40">
            <div className="container grid grid-cols-12 m-auto w-full h-full">
                <div className="col-span-4"></div>
                <div className="col-span-4 justify-center flex items-center p-6  h-full w-full">
                    <Link href="/">
                        <a className="flex justify-center p-4">
                            <img className="absolute top-2 h-[80%]" src={urlFor(data[0].Logo)} alt="" />
                        </a>
                    </Link>
                </div>
                <div className="col-span-4"></div>
            </div>
        </div>
    );
};

export default Menu;
