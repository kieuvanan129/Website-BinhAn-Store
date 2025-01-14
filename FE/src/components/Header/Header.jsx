
import { Link } from 'react-router-dom'
import ThinBag from '../icons/ThinBag'
import Middlebar from './Middlebar'
import Navbar from './Navbar'

const Header = ({className, drawerAction}) => {
  return (
    <div>
    <header className={` ${className || ""} header-section-wrapper relative`}>
    <Middlebar className="quomodo-shop-middle-bar lg:block hidden" />
    <div className="quomodo-shop-drawer lg:hidden block w-full h-[60px] bg-white">
      <div className="w-full h-full flex justify-between items-center px-5">
        <div onClick={drawerAction}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h16M4 18h7"
            />
          </svg>
        </div>
        <div>
          <Link to={'/'}>
            <img
              width="152"
              height="36"
              src={`/assets/images/logo-4.svg`}
              alt="logo"
            />
          </Link>
        </div>
        <div className="cart relative cursor-pointer">
          <Link to="/cart">
            <span>
              <ThinBag />
            </span>
          </Link>
          <span className="w-[18px] h-[18px] text-qblack rounded-full bg-qh4-pink absolute -top-2.5 -right-2.5 flex justify-center items-center text-[9px]">
            
          </span>
        </div>
      </div>
    </div>
    <Navbar className="quomodo-shop-nav-bar lg:block hidden" />
  </header>
    </div>
  )
}

export default Header
