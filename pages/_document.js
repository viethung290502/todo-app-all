import Document, { Html, Head, Main, NextScript } from 'next/document'

class myDocument extends Document {
    render() {
        return (
            <Html lang='en'>
                <Head>
                    <meta name='description' content='IceTea Ecommerce website with Next.js' />
                    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossOrigin="anonymous" />
                    <script src="https://kit.fontawesome.com/a076d05399.js" crossOrigin="anonymous"></script>
                    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossOrigin="anonymous"></script>
                </Head>
                <body style={{'background-image': 'url("https://lovelytab.com/wp-content/uploads/2018/11/1_vo8bfvr4k9iNktDWxd1F2g.jpeg")'}}>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}

export default myDocument