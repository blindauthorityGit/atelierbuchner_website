import Head from "next/head";
import { useEffect, useState } from "react";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import MainContainer from "../components/layout/mainContainer";
import Hero from "../components/Hero/hero";
import { useNextSanityImage } from "next-sanity-image";
import client from "../client";
// SECTIONS
import Start from "../components/sections/start";
import Menu from "../components/menu";

export default function Home({ dataSettings, dataBild }) {
    useEffect(() => {}, []);

    return (
        <MainContainer width="max-w-[100%]">
            <Head>
                <title>Site title</title>
            </Head>
            <Menu data={dataSettings}></Menu>
            <Start data={dataBild}></Start>
        </MainContainer>
    );
}

export async function getStaticProps() {
    const resSettings = await client.fetch(`*[_type in ["settings"] ]`);
    const resImages = await client.fetch(`*[_type in ["Bild"] ]`);
    const dataSettings = await resSettings;
    const dataBild = await resImages;
    return {
        props: {
            dataSettings,
            dataBild,
        },
        revalidate: 1, // 10 seconds
    };
}
