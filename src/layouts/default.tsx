import Head from "next/head"

export type LayoutProps = {
  children?: React.ReactNode,
  meta?: {
    title?: string,
    url?: string,
    description?: string,
    image?: string,
    domain?: string,
    favicon?: string
  }
}

export default function Layout(props: LayoutProps) {
  return (
    <div className="min-h-screen">
      <Head>
        {props.meta && <meta property="og:type" key="og:type" content="website"/>}

        {props.meta?.title && <title key="title">{props.meta.title as string}</title>}
        {props.meta?.description && <meta name="description" key="description" content={props.meta.description}/>}
        {props.meta?.favicon && <link rel="icon" key="favicon" href={props.meta.favicon} sizes="any" />}

        {props.meta?.url && <meta property="og:url" key="og:url" content={props.meta.url}/>}
        {props.meta?.title && <meta property="og:title" key="og:title" content={props.meta.title}/>}
        {props.meta?.description && <meta property="og:description" key="og:description" content={props.meta.description}/>}
        {props.meta?.image && <meta property="og:image" key="og:image" content={props.meta.image}/>}

        {props.meta && <meta name="twitter:card" key="twitter:card" content="summary_large_image"/>}
        {props.meta?.domain && <meta property="twitter:domain" key="twitter:domain" content={props.meta.domain}/>}
        {props.meta?.url && <meta property="twitter:url" key="twitter:url" content={props.meta.url}/>}
        {props.meta?.title && <meta name="twitter:title" key="twitter:title" content={props.meta.title}/>}
        {props.meta?.description && <meta name="twitter:description" key="twitter:description" content={props.meta.description}/>}
        {props.meta?.image && <meta name="twitter:image" key="twitter:image" content={props.meta.image}/>}
      </Head>

      {props.children}
    </div>
  )
}