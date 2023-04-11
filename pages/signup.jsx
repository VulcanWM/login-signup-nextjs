import Layout from '../components/layout'
import { setCookie, getCookie, deleteCookie } from 'cookies-next';
import Link from 'next/link'

export default function HomePage( {username} ) {
    return (
        <Layout pageTitle="Home">
            <Link href="/">Home</Link><br/>
            <h2>Sign up</h2>
            <form action='/api/signup' method='POST'>
                <input minlength="3" name="username" id="username" placeholder='username' required></input>
                <input minlength="5" name="password" id="password" type="password" placeholder='password' required></input>
                <input minlength="5" name="passwordagain" id="passwordagain" type="password" placeholder='password again' required></input>
                <button type="submit">Signup</button>
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