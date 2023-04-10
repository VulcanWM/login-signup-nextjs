import Layout from '../components/layout'
import { setCookie, getCookie, deleteCookie } from 'cookies-next';
import Router from "next/router";

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
            <form action='/api/logged-in' method='POST'>
            <input name="username" id="username" placeholder='username' required></input>
            <button type="submit">Send</button>
            </form>
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