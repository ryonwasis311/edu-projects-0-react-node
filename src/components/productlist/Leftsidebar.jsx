import React from "react";
import { Link } from "react-router-dom";

const Leftsidebar = () => {
  return (
    <div id="wrapper">
      <div className="overlay"></div>

      <nav
        className="navbar navbar-inverse fixed-top"
        id="sidebar-wrapper"
        role="navigation"
      >
        <ul className="nav sidebar-nav">
          <div className="sidebar-header">
            <div className="sidebar-brand">
              <Link to="/">Brand</Link>
            </div>
          </div>
          <li>
            <Link to="/home">Home</Link>
          </li>
          <li>
            <Link to="/Linkbout">About</Link>
          </li>
          <li>
            <Link to="/events">Events</Link>
          </li>
          <li>
            <Link to="/team">Team</Link>
          </li>
          <li className="dropdown">
            <Link
              to="/works"
              className="dropdown-toggle"
              data-toggle="dropdown"
            >
              Works <span className="caret"></span>
            </Link>
            <ul className="dropdown-menu animated fadeInLeft" role="menu">
              <div className="dropdown-header">Dropdown heading</div>
              <li>
                <Link to="/pictures">Pictures</Link>
              </li>
              <li>
                <Link to="/videos">Videeos</Link>
              </li>
              <li>
                <Link to="/books">Books</Link>
              </li>
              <li>
                <Link to="/Linkrt">Art</Link>
              </li>
              <li>
                <Link to="/Linkwards">Awards</Link>
              </li>
            </ul>
          </li>
          <li>
            <Link to="/services">Services</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/followme">Follow me</Link>
          </li>
        </ul>
      </nav>
      <div id="page-content-wrapper">
        <button
          type="button"
          className="hamburger animated fadeInLeft is-closed"
          data-toggle="offcanvas"
        >
          <span className="hamb-top"></span>
          <span className="hamb-middle"></span>
          <span className="hamb-bottom"></span>
        </button>
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-lg-offset-2">
              <h1>Fancy Toggle Sidebar Navigation</h1>
              <p>
                Bacon ipsum dolor sit amet tri-tip shoulder tenderloin shankle.
                Bresaola tail pancetta ball tip doner meatloaf corned beef.
                Kevin pastrami tri-tip prosciutto ham hock pork belly bacon pork
                loin salami pork chop shank corned beef tenderloin meatball cow.
                Pork bresaola meatloaf tongue, landjaeger tail andouille strip
                steak tenderloin sausage chicken tri-tip. Pastrami tri-tip
                kielbasa sausage porchetta pig sirloin boudin rump meatball
                andouille chuck tenderloin biltong shank{" "}
              </p>
              <p>
                Pig meatloaf bresaola, spare ribs venison short loin rump pork
                loin drumstick jowl meatball brisket. Landjaeger chicken fatback
                pork loin doner sirloin cow short ribs hamburger shoulder salami
                pastrami. Pork swine beef ribs t-bone flank filet mignon, ground
                round tongue. Tri-tip cow turducken shank beef shoulder bresaola
                tongue flank leberkas ball tip.
              </p>
              <p>
                Filet mignon brisket pancetta fatback short ribs short loin
                prosciutto jowl turducken biltong kevin pork chop pork beef ribs
                bresaola. Tongue beef ribs pastrami boudin. Chicken bresaola
                kielbasa strip steak biltong. Corned beef pork loin cow pig
                short ribs boudin bacon pork belly chicken andouille. Filet
                mignon flank turkey tongue. Turkey ball tip kielbasa pastrami
                flank tri-tip t-bone kevin landjaeger capicola tail fatback pork
                loin beef jerky.
              </p>
              <p>
                Chicken ham hock shankle, strip steak ground round meatball pork
                belly jowl pancetta sausage spare ribs. Pork loin cow salami
                pork belly. Tri-tip pork loin sausage jerky prosciutto t-bone
                bresaola frankfurter sirloin pork chop ribeye corned beef chuck.
                Short loin hamburger tenderloin, landjaeger venison porchetta
                strip steak turducken pancetta beef cow leberkas sausage beef
                ribs. Shoulder ham jerky kielbasa. Pig doner short loin pork
                chop. Short ribs frankfurter rump meatloaf.
              </p>
              <p>
                Filet mignon biltong chuck pork belly, corned beef ground round
                ribeye short loin rump swine. Hamburger drumstick turkey, shank
                rump biltong pork loin jowl sausage chicken. Rump pork belly
                fatback ball tip swine doner pig. Salami jerky cow, boudin pork
                chop sausage tongue andouille turkey.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    
  );
  
};

export default Leftsidebar;
