import Document, { Head, Main, NextScript} from 'next/document';
import { getServerSideToken, getUserScript } from '../lib/auth';

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const props = await Document.getInitialProps(ctx);
    const userData = await  getServerSideToken (ctx.req);


    return { ...props, ...userData }
  }

  render() {
    const { user = {} } = this.props;


    return (
      <html>
        <Head>
          <meta name="description" content="A site for programming port-folio - hacker next"/> 
          <meta charSet="utf-8"/>
          <meta name="robots" contents="noindex, nofollow" />
          <meta name="mobile-web-app-capable" content="yes"/>
          <meta name="apple-mobile-web-app-capable" content="yes"/>
          <meta name="application-name" content="Portfolio-HNext"/>
          <meta name="apple-mobile-web-app-title" content="Portfolio-HNext"/>
          <meta name="theme-color" content="#f60"/>
          <meta name="msapplication-navbutton-color" content="#f60"/>
          <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent"/>
          <meta name="msapplication-starturl" content="/" />
          <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"/>

          <link rel="icon" type="image/png" sizes="512x512" href="/static/icons/icon-512x512.png"/>
          <link rel="apple-touch-icon" type="image/png" sizes="512x512" href="/static/icons/icon-512x512.png"/>
          <link rel="icon" type="image/png" sizes="192x192" href="/static/icons/icon-192x192.png"/>
          <link rel="apple-touch-icon" type="image/png" sizes="192x192" href="/static/icons/icon-192x192.png"/>

          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/nprogress/0.2.0/nprogress.min.css"/>
          <link rel='stylesheet' href='https://stackpath.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css' integrity='sha384-WskhaSGFgHYWDcbwN70/dfYBj47jz9qbsMId/iRN3ewGhXQFZCSftd1LZCfmhktB' crossOrigin='anonymous'/>
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css"/>
          <link href="https://fonts.googleapis.com/css?family=Coiny" rel="stylesheet"/>
          <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.7.2/css/all.css" integrity="sha384-fnmOCqbTlWIlj8LyTjo7mOUStjsKC4pOpQbqyi7RrhN7udi9RwhKkMHpvLbHG9Sr" crossOrigin="anonymous"/>

          <link rel="manifest" href="manifest.json"/>

        </Head>
        <body>
          <Main/>

          <script dangerouslySetInnerHTML={{ __html: getUserScript(user) }} />
          <NextScript></NextScript>
        </body>
        <style jsx>{`
          body{
            font-family: 'Coiny';
          }
        `}</style>
        
      </html>
    )
  }
}

