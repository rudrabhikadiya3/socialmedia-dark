import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/router"
import { useEffect, useState } from "react";
import $ from 'jquery';

const users = [
  { id: 1, name: 'fass fghf', profileImg: 'https://media.istockphoto.com/id/1338134336/photo/headshot-portrait-african-30s-man-smile-look-at-camera.jpg?b=1&s=170667a&w=0&k=20&c=j-oMdWCMLx5rIx-_W33o3q3aW9CiAWEvv9XrJQ3fTMU=' },
  { id: 2, name: 'rwer qawe', profileImg: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MXw3NjA4Mjc3NHx8ZW58MHx8fHw%3D&w=1000&q=80' },
  { id: 3, name: 'dfsd yugth', profileImg: 'https://dummyimage.com/300x300/000/fff' },
  { id: 4, name: 'dasa da', profileImg: 'https://cdn.pixabay.com/photo/2018/08/28/12/41/avatar-3637425__340.png' },
  { id: 5, name: 'qawa lem', profileImg: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MXw3NjA4Mjc3NHx8ZW58MHx8fHw%3D&w=1000&q=80' },
  { id: 6, name: 'dena lee', profileImg: 'https://as1.ftcdn.net/v2/jpg/01/87/17/50/1000_F_187175039_TROEKv1SlO8DJ9MqiCNwaYijqQDVZTos.jpg' },
  { id: 7, name: 'adsa nala', profileImg: 'https://dummyimage.com/300x300/000/fff' },
  { id: 8, name: 'deni asha', profileImg: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MXw3NjA4Mjc3NHx8ZW58MHx8fHw%3D&w=1000&q=80' },
  { id: 9, name: 'gr gaa', profileImg: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsHetqZafQmIA0NkMNSKtYxMpM67OUWzLbIDMApEFak2h0sz79MTMtrwTnvlDKu_UE0pn-KPNukxI&usqp=CAU&ec=48665701' },
  { id: 10, name: 'kada ma', profileImg: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsHetqZafQmIA0NkMNSKtYxMpM67OUWzLbIDMApEFak2h0sz79MTMtrwTnvlDKu_UE0pn-KPNukxI&usqp=CAU&ec=48665701' },
]

const Header = () => {
  const [showSearch, setShowSearch] = useState(false);
  const [userSearchResults, setUserSearchResults] = useState([]);


  const router = useRouter()
  const { pathname } = router


  useEffect(() => {
    $(window).on('click', function (e) {
      if (e.target.classList[0] != "searchbar" && e.target.classList[0] != "stillOpen") {
        setShowSearch(false)
      }
    });
  }, []);

  console.log('userSearchResults', userSearchResults);

  const searchUser = (v) => {
    if (v.length > 0) {

      setShowSearch(true)
    } else {
      setShowSearch(false)

    }
    const filterData = users.filter(d => {
      if (v) {
        return d.name.toLowerCase().includes(v.toLowerCase())
      } else {
        return d
      }
    })
    setUserSearchResults(filterData);
  }
  console.log('userSearchResults', userSearchResults);

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary header-bg navbar-fixed-top">
      <div className="container">
        <a className="navbar-brand" href="/">
          <Image src="/assets/img/logo.png" height={50} width={50} alt="logo" />
        </a>
        <button className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <i className="bi bi-list"></i>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className={pathname === '/' ? ' nav-link active' : 'nav-link'} href="#">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="#">Explore</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link " href="#">Account</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="#">Notifications</Link>
            </li>
          </ul>
          <div className="d-flex position-relative justify-content-center" role="search">
            <input
              type="text" autoComplete="off"
              className="searchbar"
              placeholder="Search..."
              onChange={(e) => searchUser(e.target.value)}
            />
            {
              showSearch && <ul className=" text-small searchResult p-0">
                {
                  userSearchResults.length > 0 ?
                    userSearchResults?.map((d, i) => {
                      return (
                        <li key={i}>
                          <Link className="dropdown-item d-flex align-items-center justify-content-between p-2 px-4" href="#">
                            <div className="d-flex align-items-center">

                              <div className="list-profileImg rounded-circle">
                                <img src={d.profileImg} alt="profile" className=" img-fluid" />
                              </div>
                              <p className="mb-0 ms-4">{d.name}</p>
                            </div>
                            <button className="btn-color-blue"><i class="bi bi-person-fill-add"></i></button>
                          </Link>
                        </li>
                      )
                    }) : <li >
                      <Link className="dropdown-item d-flex align-items-center justify-content-between p-2 px-4" href="#">
                        No result Found
                      </Link>
                    </li>

                }
              </ul>
            }
            <div className="dropdown text-center">
              <a href="#" className="d-block text-decoration-none dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                <img src="/assets/img/profile.png" alt="mdo" width={29.5} height={38.5} className="rounded-circle" />
              </a>

              <ul className="dropdown-menu text-small">
                <li><Link className="dropdown-item" href="#">Edit Profile</Link></li>
                <li><Link className="dropdown-item" href="#">Bookmarks</Link></li>
                <li><Link className="dropdown-item" href="#">Security</Link></li>
                <li><hr className="dropdown-divider divider-light" /></li>
                <li><Link className="dropdown-item" href="/login">Sign out</Link></li>
              </ul>
            </div>
          </div>

        </div>
      </div>
    </nav>
  )
}
export default Header
