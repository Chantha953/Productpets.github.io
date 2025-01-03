import "../../styles/style.css"
import image_logo from "../../assets/image/image/logo.png";
import baseImg from "../../assets/image/image/detail/image 2.png"
import childImg1 from "../../assets/image/image/detail/image 3.png"
import childImg2 from "../../assets/image/image/detail/image 5.png"
import childImg3 from "../../assets/image/image/detail/image 6.png"
import childImg4 from "../../assets/image/image/detail/image 7.png"
import childImg5 from "../../assets/image/image/detail/image 8.png"
import customer1 from "../../assets/image/image/customer/image 22 (1).png"
import customer2 from "../../assets/image/image/customer/image 22 (2).png"
import customer3 from "../../assets/image/image/customer/image 22 (3).png"
import customer4 from "../../assets/image/image/customer/image 22.png"
import customer5 from "../../assets/image/image/customer/image 23.png"
import pets1 from "../../assets/image/image/pets/image 1.png"
import pets2 from "../../assets/image/image/pets/image 2.png"
import pets3 from "../../assets/image/image/pets/image 3.png"
import pets4 from "../../assets/image/image/pets/image 4.png"
import { Outlet, Link, useNavigate } from "react-router-dom"
const AboutPage = () => {
    const navigate = useNavigate();
    const CategoryPage = () => {
        navigate("/category");
    }
    return (
        <main>
            <div>
                <div className="container">
                    <div className="Card-Border">
                        <div className="row">
                            <div className="col-6">
                                <div className="ImageCard" data-aos="flip-left">
                                    <img src={baseImg} alt="Photo" />
                                </div>
                                <div className="hidden-image">
                                    <div className="flex-image" data-aos="fade-right">
                                        <img src={baseImg} alt="" />
                                        <img src={childImg1} alt="" />
                                        <img src={childImg2} alt="" />
                                        <img src={childImg3} alt="" />
                                        <img src={childImg4} alt="" />
                                        <img src={childImg5} alt="" />
                                    </div>
                                </div>
                                <div className="backgroundColor">
                                    <i class="fa-solid fa-heart-circle-check"></i>
                                    <p>100% health guarantee for pets</p>
                                    <i class="fa-solid fa-shield-dog" style={{ color: "#00095c" }}></i>
                                    <p>100% guarantee of pet identification</p>
                                </div>
                                <div className="flex-icon" data-aos="fade-up">
                                    <i class="fa-solid fa-share-nodes" style={{ color: "#00095c" }}></i>
                                    <p>Share:</p>
                                    <i class="fa-brands fa-facebook"></i>
                                    <i class="fa-brands fa-twitter"></i>
                                    <i class="fa-brands fa-instagram"></i>
                                    <i class="fa-brands fa-youtube"></i>
                                </div>
                            </div>
                            <div className="col-6" data-aos="fade-left">
                                <div className="text-and-arrow">
                                    <p>Home</p>
                                    <p><i class="fa-solid fa-chevron-right"></i></p>
                                    <p>Dog</p>
                                    <p><i class="fa-solid fa-chevron-right"></i></p>
                                    <p>Large Dog</p>
                                    <p><i class="fa-solid fa-chevron-right"></i></p>
                                    <p>Shiba Inu Sepia</p>
                                </div>
                                <div style={{ marginBottom: "20px" }}>
                                    <p style={{ marginTop: "20px", color: "gray" }}>SKU #1000078</p>
                                    <h1 style={{ marginTop: "6px", color: "#00095c" }}>Shiba Inu Sepia</h1>
                                    <h2 style={{ marginTop: "6px", color: "#00095c" }}>34.000.000 VND</h2>
                                </div>
                                <div className="button">
                                    <button className="Button-background-1">Contact us</button>
                                    <button className="Button-border"><i class="fa-regular fa-message"></i> Chat with Monito</button>
                                </div>
                                <div className="detail">
                                    <div className="textDetail">
                                        <p>SKU</p>
                                        <p>:#1000078</p>
                                    </div>
                                    <hr />
                                    <div className="textDetail">
                                        <p>Gender</p>
                                        <p>:Female</p>
                                    </div>
                                    <hr />
                                    <div className="textDetail">
                                        <p>Age</p>
                                        <p>:2 Month</p>
                                    </div>
                                    <hr />
                                    <div className="textDetail">
                                        <p>Size</p>
                                        <p>:Small</p>
                                    </div>
                                    <hr />
                                    <div className="textDetail">
                                        <p>Color</p>
                                        <p>:Appricot & Tan</p>
                                    </div>
                                    <hr />
                                    <div className="textDetail">
                                        <p>Vaccinated</p>
                                        <p>:Yes</p>
                                    </div>
                                    <hr />
                                    <div className="textDetail">
                                        <p>Dewormed</p>
                                        <p>:Yes</p>
                                    </div>
                                    <hr />
                                    <div className="textDetail">
                                        <p>Cert</p>
                                        <p>:Yes(MKA)</p>
                                    </div>
                                    <hr />
                                    <div className="textDetail">
                                        <p>Microchip</p>
                                        <p>:Yes</p>
                                    </div>
                                    <hr />
                                    <div className="textDetail">
                                        <p>Location</p>
                                        <p>:Cambodia</p>
                                    </div>
                                    <hr />
                                    <div className="textDetail">
                                        <p>Published Date</p>
                                        <p>:01/January/2025</p>
                                    </div>
                                    <hr />
                                    <div className="textDetail">
                                        <p>Additional Information</p>
                                        <p>:Pure breed Shih Tzu. <br /> Good body struture. <br />  with MKA cert and Microchip. <br /> Father from champion lineage.</p>
                                    </div>
                                    <hr />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="customer">
                        <h2>Our lovely customer</h2>
                        <div className="hidden-image1">
                            <div className="flex-image1" data-aos="fade-right">
                                <img src={customer1} alt="" />
                                <img src={customer2} alt="" />
                                <img src={customer3} alt="" />
                                <img src={customer4} alt="" />
                                <img src={customer5} alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="icon-dot">
                        <p></p>
                        <i class="fa-solid fa-circle"></i>
                        <i class="fa-solid fa-circle"></i>
                        <i class="fa-solid fa-circle"></i>
                        <i class="fa-solid fa-circle"></i>
                        <i class="fa-solid fa-circle"></i>
                    </div>
                    <div className="pets">
                        <div className="textPets">
                            <p>Whats new</p>
                            <h2>See More Puppies</h2>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-3">
                            <div className="card" onClick={CategoryPage}>
                                <div className="image-card">
                                    <img src={pets1} alt="" />
                                </div>
                                <div className="text-card">
                                    <h1>MO231 - Pomeranian White</h1>
                                    <div className="row">
                                        <span>Gene: Male</span>
                                        <span>•</span>
                                        <span>Age: 02 months</span>
                                    </div>
                                    <h1>1600000 KHR</h1>
                                </div>
                            </div>
                        </div>
                        <div className="col-3">
                            <div className="card" onClick={CategoryPage}>
                                <div className="image-card">
                                    <img src={pets2} alt="" />
                                </div>
                                <div className="text-card">
                                    <h1>MO501 - Poodle Tiny Yellow</h1>
                                    <div className="row">
                                        <span>Gene: Female</span>
                                        <span>•</span>
                                        <span>Age: 02 months</span>
                                    </div>
                                    <h1>170000 KHR</h1>
                                </div>
                            </div>
                        </div>
                        <div className="col-3">
                            <div className="card" onClick={CategoryPage}>
                                <div className="image-card">
                                    <img src={pets3} alt="" />
                                </div>
                                <div className="text-card">
                                    <h1>MO102 - Poodle Tiny Sepia</h1>
                                    <div className="row">
                                        <span>Gene: Male</span>
                                        <span>•</span>
                                        <span>Age: 02 months</span>
                                    </div>
                                    <h1>1500000 KHR</h1>
                                </div>
                            </div>
                        </div>
                        <div className="col-3">
                            <div className="card" onClick={CategoryPage}>
                                <div className="image-card">
                                    <img src={pets4} alt="" />
                                </div>
                                <div className="text-card">
                                    <h1>MO512 - Alaskon Malamute Grey</h1>
                                    <div className="row">
                                        <span>Gene: Male</span>
                                        <span>•</span>
                                        <span>Age: 02 months</span>
                                    </div>
                                    <h1>4000000 KHR</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <footer data-aos="fade-up">
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
            </div>
        </main>
    );
}
export default AboutPage;