import "../../styles/style.css";
import image_logo from "../../assets/image/image/logo.png";
import { Outlet, Link, useNavigate } from "react-router-dom";
const FootersPage=()=>{
    return (
        <footer>
            <div className="container">
                <div className="register">
                    <div className="text-register">
                        <h2>Register Now So You Don't Miss</h2>
                        <h2>Our Programs</h2>
                    </div>
                    <form>
                        <input type="email" required placeholder="Enter your Email" />
                        <button className="subscribe">Subcribe Now</button>
                    </form>
                </div>
                <div className="option-footer">
                    <div className="row">
                        <div className="menu-footer">
                            <a href="/home">Home</a>
                            <a href="/category">Category</a>
                            <a href="/about">About</a>
                            <a href="/contact">Contact</a>
                        </div>
                        <div className="icon-menu-footer">
                            <i class="fa-brands fa-facebook"></i>
                            <i class="fa-brands fa-twitter"></i>
                            <i class="fa-brands fa-instagram"></i>
                            <i class="fa-brands fa-youtube"></i>
                        </div>
                    </div>
                </div>
                <div className="logo-and-text-footer">
                    <span><i class="fa-solid fa-c"></i><p>2024 Monito. All rights reserved.</p></span>
                    <div className="logo">
                        <img src={image_logo} alt="Photo" />
                    </div>
                    <p>
                        <span>Terms of Service</span>
                        <span>Privacy Policy</span>
                    </p>
                </div>
            </div>
        </footer>
    );
};
export default FootersPage;
