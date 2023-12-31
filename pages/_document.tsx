import type { DocumentContext } from 'next/document'
import Document, { Html, Head, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          {/* Common meta */}
          <meta name="description" content="Tienda de joyería online" />
          <meta name="application-name" content="Faramilu" />
          <meta
            name="apple-mobile-web-app-status-bar-style"
            content="default"
          />
          <meta name="apple-mobile-web-app-title" content="Faramilu" />
          <meta name="format-detection" content="telephone=no" />
          <meta name="mobile-web-app-capable" content="yes" />
          <meta
            name="msapplication-config"
            content="/static/icons/browserconfig.xml"
          />
          <meta name="msapplication-TileColor" content="#5468ff" />
          <meta name="msapplication-tap-highlight" content="no" />
          <meta name="theme-color" content="#5468ff" />

          {/* Icons */}
          <link
            rel="apple-touch-icon"
            href="/static/icons/apple-touch-icon.png"
          />
          <link rel="shortcut icon" href="/favicon.ico" />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/static/icons/icon-16x16.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/static/icons/icon-32x32.png"
          />
          <link
            rel="mask-icon"
            href="/static/icons/safari-pinned-tab.svg"
            color="#5468ff"
          />
          <link rel="manifest" href="/static/icons/manifest.json" />

          {/* OG meta */}
          <meta property="og:type" content="website" />
          <meta property="og:title" content="Faramilu" />
          <meta
            property="og:description"
            content="Tienda de joyería y accesorios online"
          />
          <meta property="og:site_name" content="Faramilu" />
          <meta
            property="og:url"
            content="https://develop--cosmic-lamington-bef4bd.netlify.app"
          />
          <meta
            property="og:image"
            content="https://develop--cosmic-lamington-bef4bd.netlify.app/static/images/socials/logo_full_purple.png"
          />
          <meta property="og:image:width" content="1200" />
          <meta property="og:image:height" content="630" />

          {/* Twitter meta */}
          <meta name="twitter:card" content="summary_large_image" />
          <meta
            name="twitter:url"
            content="https://develop--cosmic-lamington-bef4bd.netlify.app/"
          />
          <meta name="twitter:title" content="Faramilu" />
          <meta
            name="twitter:description"
            content="Tienda de joyería y accesrios online"
          />
          <meta
            name="twitter:image"
            content="https://develop--cosmic-lamington-bef4bd.netlify.app/static/images/socials/logo_full_purple.png"
          />

          {/* Fonts */}
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap"
            rel="stylesheet"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
