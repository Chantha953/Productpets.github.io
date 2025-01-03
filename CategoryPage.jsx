
import image_logo from "../../assets/image/image/logo.png";
import pets1 from "../../assets/image/image/pets/image 1.png"
import pets2 from "../../assets/image/image/pets/image 2.png"
import pets3 from "../../assets/image/image/pets/image 3.png"
import pets4 from "../../assets/image/image/pets/image 4.png"
import pets5 from "../../assets/image/image/pets/image 5.png"
import pets6 from "../../assets/image/image/pets/image 6.png"
import pets7 from "../../assets/image/image/pets/image 7.png"
import pets8 from "../../assets/image/image/pets/image 8.png"
import dog1 from "../../assets/image/image/blog/image 3.png"
import dog2 from "../../assets/image/image/blog/image 3 (1).png"
import dog3 from "../../assets/image/image/blog/image 3 (2).png"
// import bg from"../../assets/image/image/Herro Banner-1-2.png"
import image_dog1 from "../../assets/image/image/Herro-2.png"
const CategoryPage = () => {
    return (
        <body>
            <main>
                <div className="container">
                    <div className="text-header-about">
                        <p>Home</p>
                        <p><i class="fa-solid fa-chevron-right"></i></p>
                        <p>Dog</p>
                        <p><i class="fa-solid fa-chevron-right"></i></p>
                        <p>Small Dog</p>
                    </div>
                </div>
                <section>
                    <div className="container">
                        <div className="position-bg-3" data-aos="fade-up">
                            <div className="contentPosition">
                                <div className="row">
                                    <div className="col-7">
                                        <div className="ImageContent-3">
                                            <img src={image_dog1} alt="Photo" />
                                        </div>
                                    </div>
                                    <div className="col-5">
                                        <div className="content3">
                                            <div className="text-content">
                                                <h1>One More Friend</h1>
                                                <h3>Thousands More Fun!</h3>
                                                <p>Having a pet means you have more joy,a new friend, a happy person who will always be with you to have fun. We have 200+ different pets that can meet your needs</p>
                                            </div>
                                            <div className="button">
                                                <button className="Button-border">View intro<i class="fa-regular fa-circle-play"></i></button>
                                                <button className="Button-background">Explore Now</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section>
                    <div className="container">
                        <div className="card-info">
                            <div className="row">
                                <div className="col-3">
                                    <div className="styleCard" data-aos="flip-down">
                                        <h1>Filter</h1>
                                        <div className="gender">
                                            <h2>Gender</h2>
                                            <input type="checkbox" /> <span>Male</span> <br />
                                            <input type="checkbox" /> <span>Female</span>
                                        </div>
                                        <div className="Color">
                                            <h1>Color</h1>
                                            <input type="checkbox" /> <i class="fa-solid fa-circle" style={{ color: "red" }}></i> <span>Red</span> <br />
                                            <input type="checkbox" /> <i class="fa-solid fa-circle" style={{ color: "gold" }}></i> <span>Apricot</span> <br />
                                            <input type="checkbox" /> <i class="fa-solid fa-circle"></i> <span>Black</span> <br />
                                            <input type="checkbox" /> <i class="fa-solid fa-circle-half-stroke"></i> <span>Black & White</span><br />
                                            <input type="checkbox" /> <i class="fa-solid fa-circle" style={{ color: "silver" }}></i> <span>Silver</span><br />
                                            <input type="checkbox" /> <i class="fa-solid fa-circle" style={{ color: "yellow" }}></i> <span>Tan</span>
                                        </div>

                                        <div className="price">
                                            <h1>Price</h1>
                                        </div>
                                        <div className="max-min">
                                            <span>Min<i class="fa-solid fa-up-down"></i></span>
                                            <span>Max<i class="fa-solid fa-up-down"></i></span>
                                        </div>
                                        <div className="Breed">
                                            <h1>Breed</h1>
                                            <input type="checkbox" /> <span>Small</span> <br />
                                            <input type="checkbox" /> <span>Medium</span> <br />
                                            <input type="checkbox" /> <span>Large</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-9">
                                    <div className="pets-2">
                                        <div className="textPets" data-aos="fade-right">
                                            <h2>Small Dog <span>52 poppies</span></h2>
                                        </div>
                                        <div className="button" data-aos="fade-left">
                                            <button className="Button-border">View more<i class="fa-solid fa-chevron-right"></i></button>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-4">
                                            <div className="card" >
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
                                        <div className="col-4">
                                            <div className="card">
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
                                        <div className="col-4">
                                            <div className="card">

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
                                    <div className="row">
                                        <div className="col-4">
                                            <div className="card">
                                                <div className="image-card">
                                                    <img src={pets5} alt="" />
                                                </div>
                                                <div className="text-card">
                                                    <h1>MO231 - Pembroke Corgi Cream</h1>
                                                    <div className="row">
                                                        <span>Gene: Male</span>
                                                        <span>•</span>
                                                        <span>Age: 02 months</span>
                                                    </div>
                                                    <h1>1200000 KHR</h1>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-4">
                                            <div className="card">
                                                <div className="image-card">
                                                    <img src={pets6} alt="" />
                                                </div>
                                                <div className="text-card">
                                                    <h1>MO502 - Pembroke Corgi Tricolor</h1>
                                                    <div className="row">
                                                        <span>Gene: Female</span>
                                                        <span>•</span>
                                                        <span>Age: 02 months</span>
                                                    </div>
                                                    <h1>1250000 KHR</h1>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-4">
                                            <div className="card">
                                                <div className="image-card">
                                                    <img src={pets7} alt="" />
                                                </div>
                                                <div className="text-card">
                                                    <h1>MO231 - Pomeranian White</h1>
                                                    <div className="row">
                                                        <span>Gene: Female</span>
                                                        <span>•</span>

                                                        <span>Age: 02 months</span>
                                                    </div>
                                                    <h1>20000000 KHR</h1>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-4">
                                            <div className="card">
                                                <div className="image-card">
                                                    <img src={pets8} alt="" />
                                                </div>
                                                <div className="text-card">
                                                    <h1>MO512 - Poodle Tiny Dairy Cow</h1>
                                                    <div className="row">
                                                        <span>Gene: Male</span>
                                                        <span>•</span>
                                                        <span>Age: 02 months</span>
                                                    </div>
                                                    <h1>1900000 KHR</h1>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-4">
                                            <div className="card">
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
                                        <div className="col-4">
                                            <div className="card">
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
                                    </div>
                                    <div className="row">
                                        <div className="col-4">
                                            <div className="card" >
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
                                        <div className="col-4">
                                            <div className="card">
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
                                        <div className="col-4">
                                            <div className="card">
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
                                    <div className="row">
                                        <div className="col-4">
                                            <div className="card">
                                                <div className="image-card">
                                                    <img src={pets5} alt="" />
                                                </div>
                                                <div className="text-card">
                                                    <h1>MO231 - Pembroke Corgi Cream</h1>
                                                    <div className="row">
                                                        <span>Gene: Male</span>
                                                        <span>•</span>
                                                        <span>Age: 02 months</span>
                                                    </div>

                                                    <h1>1200000 KHR</h1>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-4">
                                            <div className="card">
                                                <div className="image-card">
                                                    <img src={pets6} alt="" />
                                                </div>
                                                <div className="text-card">
                                                    <h1>MO502 - Pembroke Corgi Tricolor</h1>
                                                    <div className="row">
                                                        <span>Gene: Female</span>
                                                        <span>•</span>
                                                        <span>Age: 02 months</span>
                                                    </div>
                                                    <h1>1250000 KHR</h1>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-4">
                                            <div className="card">
                                                <div className="image-card">
                                                    <img src={pets7} alt="" />
                                                </div>
                                                <div className="text-card">
                                                    <h1>MO231 - Pomeranian White</h1>
                                                    <div className="row">
                                                        <span>Gene: Female</span>
                                                        <span>•</span>
                                                        <span>Age: 02 months</span>
                                                    </div>
                                                    <h1>20000000 KHR</h1>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="op-number" data-aos="fade-down">
                                        <p><i class="fa-solid fa-arrow-left"></i></p>
                                        <p>1</p>
                                        <p>2</p>
                                        <p>3</p>
                                        <p>4</p>
                                        <p>•••</p>
                                        <p>28</p>
                                        <p><i class="fa-solid fa-arrow-right"></i></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
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
            </main>
        </body>

    );
}
export default CategoryPage;