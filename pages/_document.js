import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link href="/assets/css/bootstrap.min.css" rel="stylesheet" />
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.3/font/bootstrap-icons.css"></link>
        <link href="/assets/css/style.css" rel="stylesheet" type='text/css' />
      </Head>
      <body>
        <Main />
        <NextScript />
        <script src="/assets/js/bootstrap.bundle.min.js" />
      </body>
    </Html>
  )
}
