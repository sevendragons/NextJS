import Link from 'next/link';
import Layout from '../components/Layout';

const index = () => {
    return (
      <Layout title="Welcome to Next JS">
        <h3>Home Page</h3>
      </Layout>
    )
}

export default index

/**
|--------------------------------------------------
| Next JS just accept this kind of syntax const.
| export class are not Accepted.
|--------------------------------------------------
*/