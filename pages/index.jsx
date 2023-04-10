import Layout from '../components/layout'
import { setCookie, getCookie, deleteCookie } from 'cookies-next';
import Router from "next/router";
import Link from 'next/link'

function logout(){
    deleteCookie("username");
    Router.reload()
}

export default function HomePage( {username} ) {
    return (
        <Layout pageTitle="Home">
        {username ?
        <>
            <h2>Hi {username}</h2>
            <button onClick={logout}>Logout</button>
        </>: 
        <>
            <h2>Log in</h2>
            <Link href="/login">Login</Link><br/>
            <Link href="/signup">Signup</Link>
        </>
        }
        </Layout>
    );
}

export const getServerSideProps = ({ req, res }) => {
    var username = getCookie('username', { req, res });
    if (username == undefined){
        username = false;
    }
    return { props: {username} };
};