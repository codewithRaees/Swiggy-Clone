import playstore from "../../public/images/play_store.avif";
import appstore from "../../public/images/app_store.avif";

const Footer = () => {
  return (
    <>
      <footer className=" bg-[#f0f0f5]">
        <div className="main-wrapper px-1 max-w-screen-lg  mx-auto">
          <div className="footer-top py-5  flex justify-around ">
            <div className="left text-3xl font-bold text-wrap text-[#3d4046]">
              For better experience,download the Swiggy app now
            </div>
            <div className="right flex">
              <a href="#">
                <img
                  src={playstore}
                  className="w-52 h-16 pr-1"
                  alt="Play Store"
                />
              </a>
              <a href="#">
                <img src={appstore} alt="Play Store" className="w-52 h-16" />
              </a>
            </div>
          </div>
          <div className="bottom-footer-wrapper">
            <div className="left-logo"></div>
            <div className="right-links">
              <div className="footer-container ">
                <div className="footer-column">
                  <h3>Company</h3>
                  <ul>
                    <li>
                      <a href="#">About Us</a>
                    </li>
                    <li>
                      <a href="#">Swiggy Corporate</a>
                    </li>
                    <li>
                      <a href="#">Careers</a>
                    </li>
                    <li>
                      <a href="#">Team</a>
                    </li>
                    <li>
                      <a href="#">Swiggy One</a>
                    </li>
                    <li>
                      <a href="#">Swiggy Instamart</a>
                    </li>
                    <li>
                      <a href="#">Swiggy Dineout</a>
                    </li>
                    <li>
                      <a href="#">Swiggy Genie</a>
                    </li>
                  </ul>
                </div>
                <div className="footer-column">
                  <h3>Contact us</h3>
                  <ul>
                    <li>
                      <a href="#">Help & Support</a>
                    </li>
                    <li>
                      <a href="#">Partner with us</a>
                    </li>
                    <li>
                      <a href="#">Ride with us</a>
                    </li>
                  </ul>
                </div>
                <div className="footer-column">
                  <h3>Available in:</h3>
                  <ul>
                    <li>
                      <a href="#">Bangalore</a>
                    </li>
                    <li>
                      <a href="#">Gurgaon</a>
                    </li>
                    <li>
                      <a href="#">Hyderabad</a>
                    </li>
                    <li>
                      <a href="#">Delhi</a>
                    </li>
                    <li>
                      <a href="#">Mumbai</a>
                    </li>
                    <li>
                      <a href="#">Pune</a>
                    </li>
                  </ul>
                  <select>
                    <option>589 cities</option>
                  </select>
                </div>
                <div className="footer-column">
                  <h3>Legal</h3>
                  <ul>
                    <li>
                      <a href="#">Terms & Conditions</a>
                    </li>
                    <li>
                      <a href="#">Cookie Policy</a>
                    </li>
                  </ul>
                </div>
                <div className="footer-column">
                  <h3>Life at Swiggy</h3>
                  <ul>
                    <li>
                      <a href="#">Explore with Swiggy</a>
                    </li>
                    <li>
                      <a href="#">Swiggy News</a>
                    </li>
                    <li>
                      <a href="#">Snackables</a>
                    </li>
                  </ul>
                </div>
                <div className="footer-column">
                  <h3>Social Links</h3>
                  <div className="social-icons">
                    <a href="#">
                      <i className="fa fa-linkedin"></i>
                    </a>
                    <a href="#">
                      <i className="fa fa-instagram"></i>
                    </a>
                    <a href="#">
                      <i className="fa fa-facebook"></i>
                    </a>
                    <a href="#">
                      <i className="fa fa-pinterest"></i>
                    </a>
                    <a href="#">
                      <i className="fa fa-twitter"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
