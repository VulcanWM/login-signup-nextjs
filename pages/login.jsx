import Layout from '../components/layout'
import { setCookie, getCookie, deleteCookie } from 'cookies-next';
import Link from 'next/link'
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/router'

export default function HomePage( {username} ) {
    const router = useRouter()
    const {
        register,
        handleSubmit,
        formState: { errors }
      } = useForm();
    
      const onSubmit = (data) => {
        setCookie("username", data.username)
        router.push("/")
      };
    return (
        <Layout pageTitle="Home">
            <Link href="/">Home</Link><br/>
            <h2>Log in</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input type="text" name="username" {...register("username", {
    required: true
  })} />
                {errors.username && <p>The username is required</p>}
                <button type="submit">Login</button>
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