import Layout from '../components/layout'
import { getCookie } from 'cookies-next';
import Link from 'next/link'
import { useRouter } from 'next/router'

export default function HomePage( {username} ) {
    const router = useRouter()
    const { msg } = router.query
    return (
        <Layout pageTitle="Home">
            <Link href="/">Home</Link><br/>
            {msg ?
                <h3>{msg}</h3>
            :
                <></>
            }
            <h2>Sign up</h2>
            <form action='/api/signup' method='POST'>
                <input minLength="3" name="username" id="username" placeholder='username' required></input>
                <input minLength="5" name="password" id="password" type="password" placeholder='password' required></input>
                <input minLength="5" name="passwordagain" id="passwordagain" type="password" placeholder='password again' required></input>
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