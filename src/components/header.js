import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { HiMenu } from "react-icons/hi"
import { GrClose } from "react-icons/gr"
import { useState } from "react"

const Header = ({ siteTitle }) => {
  // boolean to track if menu is open or closed
  const [menuClosed, setMenuClosed] = React.useState(true)
  console.log(menuClosed)
  return (
    <header className="items-center justify-between md:flex">
      {/* avatar and hamburger button */}
      <div className="flex items-center justify-between md:shadow-none md:inline">
        <Link to="/">
          <img
            src="https://pbs.twimg.com/profile_images/1276969680519852032/K5uoIf4h_400x400.jpg"
            className="w-20 h-20 rounded-full md:inline"
          ></img>
        </Link>
        {/* buttons */}

        {menuClosed && (
          <h1 onClick={() => setMenuClosed(!menuClosed)}>
            <HiMenu className="text-2xl md:hidden" />
          </h1>
        )}
        {!menuClosed && (
          <h1 onClick={() => setMenuClosed(!menuClosed)}>
            <GrClose className="z-10 text-2xl md:hidden" />
          </h1>
        )}
      </div>
      {/* menu items */}
      <div
        className={
          " h-screen font-bold md:h-full space-x-8 md:inline flex md:flex-row md:h-full justify-center items-center text-4xl md:text-lg" +
          (menuClosed ? " hidden" : " block")
        }
      >
        <div className="flex flex-col items-center justify-center h-full space-y-8 text-gray-800 transform -translate-y-8 md:flex-row md:space-y-0 md:translate-y-0 md:space-x-12 md:pr-10 md:flex md:justify-center md:items-center">
          <div className="md:inline-block hover:text-blue-500">
            <Link to="/work">Work</Link>
          </div>
          <div className="md:inline-block hover:text-blue-500">
            <Link to="/services">Services</Link>
          </div>
          <div className="transition duration-300 transform md:inline-block hover:text-blue-500 md:hover:scale-105">
            <Link
              to="/contact"
              class="md:border md:py-3 md:px-6 md:rounded-lg md:shadow-lg md:bg-gray-800 md:text-gray-100 md:hover:text-white md:hover:shadow-2xl transform transition scale-150"
            >
              Let's Talk
            </Link>
          </div>
        </div>
      </div>
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
