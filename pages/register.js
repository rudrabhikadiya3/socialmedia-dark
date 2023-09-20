import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

const register = () => {
    const router = useRouter()
    const toHome = () => {
        router.push('/')
    }
    return (
        <>
            <div className="fullpage">
                <div className="background-container">
                    <Image height={1180} width={1165} src="/assets/img/moon2.png" alt='moon' className="moon" />
                    <div className="stars" />
                    <div className="twinkling" />
                    <div className="clouds" />

                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-10 col-xl-9 mx-auto">
                            <div className="card flex-row my-5 border-0 shadow rounded-0 overflow-hidden brdr">
                                <div className="card-img-left d-none d-md-flex"></div>
                                <div className="card-body p-4 p-sm-5 bg-custom">
                                    <h4 className="card-title text-center mb-4 login-heading">नमस्ते!</h4>
                                    <p className="text-light text-center">Welcome To Media! It's just few details away to LAUNCH</p>
                                    <hr className="text-light" />
                                    <div>
                                        <div className="containerInput">
                                            <input placeholder="Username" type="text" />
                                        </div>
                                    </div>
                                    <div className="containerInput">
                                        <input placeholder="Email" type="text" />
                                    </div>
                                    <hr className="my-4 text-light" />
                                    <div className="containerInput">
                                        <input placeholder="Password" type="text" />
                                    </div>
                                    <div className="containerInput">
                                        <input placeholder="Confirn Password" type="text" />
                                    </div>

                                    <div className="d-grid mb-2">
                                        <button className="btn btn-google btn-login fw-bold text-uppercase" onClick={toHome}>
                                            Sign up
                                        </button>
                                    </div>
                                    <Link className="d-block text-center mt-2 small text-light" href="/login">Have an account? Sign In</Link>
                                    <hr className="my-4 text-light" />
                                    <div className="d-flex mb-2 col-12 justify-content-around flex-wrap">
                                        <button>
                                            <span className="text"><i className="bi bi-facebook"></i></span>
                                        </button>
                                        <button>
                                            <span className="text"><i className="bi bi-google"></i></span>
                                        </button>
                                        <button>
                                            <span className="text"><i className="bi bi-github"></i></span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
};

export default register;
