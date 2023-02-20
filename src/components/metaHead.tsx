import Head from "next/head";
import { FC } from "react";
interface IProps{
    title:string;
}
const MetaHead:FC<IProps> = ({title}) => {
    return (
        <Head>
            <title>{title}</title>
            <meta name="description" content="just a simple test"/>
            <link rel="icon" href="/favicon.ico"/>
        </Head>
    )
}

export default MetaHead
