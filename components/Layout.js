import { useRouter } from "next/router"
import Footer from "./Footer"
import Header from "./Header"


const Layout = (props) => {

    const router = useRouter()
    const blackRoutes = ['/_error', '/login', '/register']


    return (
        <>

            {
                !blackRoutes.includes(router.pathname) ? <>
                    <Header />
                    <main>{props.children}</main>
                    <Footer />
                </> :
                    <main>{props.children}</main>
            }
        </>
    )
}
export default Layout