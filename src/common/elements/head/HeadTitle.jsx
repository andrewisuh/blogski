import Head from "next/head";

const HeadTitle = ({pageTitle}) => {
    return ( 
        <Head>
            <meta charSet="utf-8" />
            <meta httpEquiv="x-ua-compatible" content="ie=edge" />
            <title>{`${pageTitle} by Drew I. Suh`}</title>
            <meta name="robots" content="noindex, follow" />
            <meta name="description" content="Personal Blog" />
            <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
            <link rel="icon" type="image/x-icon" href={`${process.env.NODE_ENV === 'production' ? process.env.NEXT_PUBLIC_BASEPATH ?? '' : ''}/favicon.ico`} />
        </Head>
     );
}
 
export default HeadTitle;