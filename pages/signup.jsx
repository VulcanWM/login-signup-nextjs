import Layout from '../components/layout'
import { setCookie, getCookie, deleteCookie } from 'cookies-next';
import Link from 'next/link'

export default function HomePage( {username} ) {
    return (
        <Layout pageTitle="Home">
            <Link href="/">Home</Link><br/>
            <h2>Sign up</h2>
            <form action='/api/logged-in' method='POST'>
            <input name="username" id="username" placeholder='username' required></input>
            <button type="submit">Send</button>
            </form>
        </Layout>
    );
}

export const getServerSideProps = ({ req, res }) => {
    var username = getCookie('username', { req, res });
    if (username != undefined){
        return {
            redirect: {
                permanent: false,
                destination: "/"
            }
        }
    }
    return { props: {username:false} };
};