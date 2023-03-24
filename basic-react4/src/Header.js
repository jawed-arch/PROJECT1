import { Link } from "react-router-dom";

export default function(){
    return(
        <>
            {/* <!-- ======= Header ======= --> */}
  <header id="header" className="fixed-top d-flex align-items-center">
    <div className="container d-flex align-items-center">

      <h1 className="logo me-auto"><a href="index.html">Orchid-Sports</a></h1>
      {/* <!-- Uncomment below if you prefer to use an image logo --> */}
      {/* <!-- <a href="index.html" className="logo me-auto"><img src="assets/img/logo.png" alt="" className="img-fluid"></a>--> */}

      <nav id="navbar" className="navbar">
        <ul>
          <li>
            <Link to="/">
                <a href="index.html" className="active">Home</a>
            </Link>
            </li>

          <li className="dropdown">
            <Link to="/About">
            <a href="#"><span>About</span> <i className="bi bi-chevron-down"></i></a>
            <ul>
              <li><a href="about.html">About</a></li>
              <li><a href="team.html">Team</a></li>
              <li><a href="testimonials.html">Testimonials</a></li>

              <li className="dropdown"><a href="#"><span>Deep Drop Down</span> <i className="bi bi-chevron-right"></i></a>
                <ul>
                  <li><a href="#">Deep Drop Down 1</a></li>
                  <li><a href="#">Deep Drop Down 2</a></li>
                  <li><a href="#">Deep Drop Down 3</a></li>
                  <li><a href="#">Deep Drop Down 4</a></li>
                  <li><a href="#">Deep Drop Down 5</a></li>
                </ul>
              </li>
            </ul>
            </Link>
          </li>
          <li><a href="services.html">Services</a></li>
          <li><a href="portfolio.html">Portfolio</a></li>
          <li><a href="pricing.html">Pricing</a></li>
          <li><a href="blog.html">Blog</a></li>

          <li>
            <Link to="/Contact">
                <a href="contact.html">Contact</a>
            </Link>
            </li>
          <li><a href="index.html" className="getstarted">Get Started</a></li>
        </ul>
        <i className="bi bi-list mobile-nav-toggle"></i>
      </nav>{/* <!-- .navbar --> */}

    </div>
  </header>{/* <!-- End Header --> */}
        </>
    )
}