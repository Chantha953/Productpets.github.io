import "../../styles/style.css";
import { Outlet, Link, useNavigate } from "react-router-dom";
import image_logo from "../../assets/image/image/logo.png";
import image_cbd from "../../assets/image/image/cambodia.png"
const Header = () => {
    const navigate = useNavigate();
    const onClickHome = () => {
        navigate("/home");
    }
    const onClickCategory =()=>{
        navigate("/category")
    }
    const onClickProduct = () => {
        navigate("/product");
    }
    const onClickAbout = () => {
        navigate("/about");
    }
    const onClickContact = () => {
        navigate("/contact");
    }
    return (
        <div>
            <header>
                <div className="container">
                    <div className="header">
                        <div className="logo">
                            <img src={image_logo} alt="Photo" />
                        </div>
                        <div className="menu">
                            <div className="Button">
                                <button onClick={onClickHome}>Home</button>
                                <button onClick={onClickCategory}>Category</button>
                                <button onClick={onClickAbout}>About</button>
                                <button onClick={onClickContact}>Contact</button>
                            </div>
                            <div className="search">
                                <input type="search" placeholder="Search something here!" />
                                <i class="fa-solid fa-magnifying-glass"></i>
                            </div>
                                <button className="Button-background">Join the community</button>
                            <div className="payment">
                                <img src={image_cbd} alt="" />
                                <p>KHR <i class="fa-solid fa-chevron-down"></i></p>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            <div>
                <Outlet />
            </div>
        </div>
    )
};
export default Header;