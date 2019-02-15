import Document, { Head, Main, NextScript} from 'next/document';

export default class MyDocument extends Document {
  render() {
    return (
      <html>
        <meta name="description" content="A site for programming portfolio"/> 
        <meta charSet="utf-8"/>
        <meta name="robots" contents="noindex, nofollow" />
        <meta name="viewport" contents="width=device-width" />
        <Head>
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/nprogress/0.2.0/nprogress.min.css"/>
          <link rel='stylesheet' href='https://stackpath.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css' integrity='sha384-WskhaSGFgHYWDcbwN70/dfYBj47jz9qbsMId/iRN3ewGhXQFZCSftd1LZCfmhktB' crossOrigin='anonymous'/>
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css"/>
          <link href="https://fonts.googleapis.com/css?family=Coiny" rel="stylesheet"/>


        </Head>
        <body>
          <Main/>
          <NextScript></NextScript>
        </body>
        <style jsx>{`
          body{
            font-family: 'Coiny', cursive;
          }
        `}</style>
        
      </html>
    )
  }
}
