import Image from "next/image";
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';


export default function Home() {
  return (
    <div className="container">
      <div className="row mt-5 pt-0 pt-md-5">
        <div className="col-12 col-md-8 d-flex flex-wrap order-1 order-md-0 mt-0 mt-md-5">
          <div className="row mb-5">
            <div className="col-12 col-md-6 mt-4 mt-md-0">
              <h1 className="username text-center text-md-start">Rudra Bhikadiya</h1>
              <h2 className="userBio text-center text-md-start">I am a Lorem ipsum, dolor sit amet consectetur adipisicing elit. At dolor animi maxime. Adipisci commodi totam, voluptate doloremque alias hic ratione dolorum expedita aliquam perspiciatis ea</h2>
            </div>
            <div className="col-12 col-md-6 d-flex justify-content-center align-items-center mt-4 mt-md-0 px-5 px-md-0">
              <div className="contact-card col-12 col-md-9 col-lg-8 contact-card-overflow">
                {/* <div className="align">
                  <span className="red" />
                  <span className="yellow" />
                  <span className="green" />
                </div> */}
                <h3 className="mt-2">Rudra's Contacts</h3>
                <div>
                  <ul className="user-links">
                    <li className="text-nowrap">
                      <i className="bi bi-envelope git-color"></i>
                      <a href="#">rudra@gmail.com</a>
                    </li>
                    <li className="text-nowrap">
                      <i className="bi bi-youtube yt-color"></i>
                      <a href="#">Rudra ke Videos</a>
                    </li>
                    <li className="text-nowrap">
                      <i className="bi bi-github git-color"></i>
                      <a href="#">Rudra Bhikadiya</a>
                    </li>
                    <li className="text-nowrap">
                      <i className="bi bi-twitter twitter-color"></i>
                      <a href="#">Rudra's twitts</a>
                    </li>
                    <li className="text-nowrap">
                      <i className="bi bi-globe2 globe-color"></i>
                      <a href="#">rudrabhikadiya.com</a>
                    </li>

                  </ul>
                </div>
              </div>

            </div>
          </div>
          {/* <div className="row w-100"> */}
          <div className="col-12 col-md-10 ">
            <div className="follow-card mb-5">
              <div className="img text-light ">
                <div className="social-info">
                  <div className="col-4">
                    <p className="socialNum">30</p>
                    <p className="opacity-75 mb-0">Posts</p>
                  </div>
                  <div className="col-4">
                    <p className="socialNum">332</p>
                    <p className="opacity-75 mb-0">Followers</p>
                  </div>
                  <div className="col-4">
                    <p className="socialNum">456</p>
                    <p className="opacity-75 mb-0">Followings</p>
                  </div>
                </div>
                <hr className="my-4 text-light" />
                <div className="d-flex col-12 justify-content-around">
                  <button><span className="text"><i className="bi bi-person-fill-slash"></i></span></button>
                  <button className="btn btn-google btn-login fw-bold text-uppercase col-6">
                    Follow
                  </button>
                  <button><span className="text"><i className="bi bi-send-fill"></i></span></button>
                </div>
              </div>
            </div>
          </div>
          {/* </div> */}
        </div>
        <div className="col-12 col-md-4 profileSection order-0 order-md-1 mt-5">
          <div className="profile-bg-elemnt">
          </div>
          <div className="profile-img-box">
            <Image height={385} width={295} src="/assets/img/profile.png" alt="profile" className="img-fluid" />
          </div>
        </div>
      </div>
      <div className="row post-links">
        <div className="col-12">
          <Tabs
            defaultActiveKey="tab1"
            className="mb-3 tabs"
            justify
          >
            <Tab eventKey="tab1" title="Posts">
              <p className="text-light">Post</p>
            </Tab>
            <Tab eventKey="tab2" title="Videos">
              <p className="text-light">Videos</p>
            </Tab>
            <Tab eventKey="tab3" title="Mentioned">
              <p className="text-light">Mentions</p>
            </Tab>
          </Tabs>
        </div>
      </div>
    </div>
  )
}
