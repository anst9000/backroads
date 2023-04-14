import { pageLinks, socialLinks } from '../data'
import NavLogo from '../images/logo.svg'
import PageLink from './PageLink'
import SocialLink from './SocialLink'

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-center">
        <div className="nav-header">
          <img src={NavLogo} className="nav-logo" alt="backroads" />
          <button type="button" className="nav-toggle" id="nav-toggle">
            <i className="fas fa-bars"></i>
          </button>
        </div>
        <ul className="nav-links" id="nav-links">
          {pageLinks.map((pageLink) => (
            <PageLink
              key={pageLink.id}
              pageLink={pageLink}
              linkClass="nav-link"
            />
          ))}
        </ul>

        <ul className="nav-icons">
          {socialLinks.map((socialLink) => (
            <SocialLink
              key={socialLink.id}
              socialLink={socialLink}
              linkClass="social-link"
            />
          ))}
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
