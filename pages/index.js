import Link from 'next/link';
import Layout from '../components/Layout';
import { authInitialProps } from '../lib/auth';


const index = (props) => {
    return (
      <Layout title="Welcome to Next JS" {...props}>
        <h3>Home Page</h3>
        {/* <Link href="/login"><a>Login</a></Link>
        <Link href="/register"><a>Register</a></Link> */}

      </Layout>
    )
}

export default index


index.getInitialProps = authInitialProps();


/**
|--------------------------------------------------
| Next JS just accept this kind of syntax const.
| export class are not Accepted.
|--------------------------------------------------
*/