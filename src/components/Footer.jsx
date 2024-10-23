import playstore from "../../public/images/play_store.avif";
import appstore from "../../public/images/app_store.avif";
import FooterLogo from "../../public/icons/FooterLogo";
import { FaFacebookF,FaInstagram , FaLinkedin ,FaPinterest , FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <footer className=" bg-[#f0f0f5] pb-5">
        <div className="main-wrapper px-1 max-w-screen-lg  mx-auto">
          <div className="footer-top py-5 flex-col md:flex-row justify-center items-center  flex md:justify-around ">
            <div className="left  text-[18px] md:text-3xl  font-bold text-wrap text-[#3d4046]">
              For better experience,download the Swiggy app now
            </div>
            <div className="right flex justify-center pt-2 ">
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
          <div className="bottom-footer-wrapper pt-3 md:pt-14 px-2 flex justify-around gap-3 flex-col md:flex-row">
            <div className="left-logo"><FooterLogo/></div>
            <div className="right-links">
              <div className="footer-container flex justify-around  gap-10 leading-5">
                <div className="footer-column space-y-4">
                  <h3 className="font-bold">Company</h3>
                  <ul className="space-y-4">
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
                              <div className="div space-y-20">
                                  <div className="footer-column space-y-4">
                  <h3 className="font-bold">Contact us</h3>
                  <ul className="space-y-4">
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
                                 <div className="footer-column space-y-4">
                  <h3 className="font-bold">Legal</h3>
                  <ul className="space-y-4">
                    <li>
                      <a href="#">Terms & Conditions</a>
                    </li>
                    <li>
                      <a href="#">Cookie Policy</a>
                    </li>
                  </ul>
                </div>
                </div>
                <div className="footer-column space-y-4">
                  <h3 className="font-bold">Available in:</h3>
                  <ul className="space-y-4">
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
                  </ul >
                  <select className="rounded-md bg-transparent border border-gray-500" >
                    <option>589 cities</option>
                  </select>
                </div>
                <div className="div space-y-28">
                  <div className="footer-column space-y-4">
                  <h3 className="font-bold">Life at Swiggy</h3>
                  <ul className=" space-y-4">
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
                <div className="footer-column hidden md:block  space-y-4">
                  <h3 className="font-bold">Social Links</h3>
                  <div className="social-icons flex gap-3 ">
                    <a href="#">
                      <FaLinkedin />
                    </a>
                    <a href="#">
                      <FaInstagram />
                    </a>
                    <a href="#">
                      <FaFacebookF />
                    </a>
                    <a href="#">
                      <FaPinterest />
                    </a>
                    <a href="#">
                      <FaTwitter />
                    </a>
                  </div>
                </div></div>
                
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
