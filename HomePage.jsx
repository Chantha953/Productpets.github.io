import "../../styles/style.css";
import AOS from 'aos';
import 'aos/dist/aos.css';
import image_logo from "../../assets/image/image/logo.png";
// import Footers from "../../component/layout/Footers";
import image_bg from "../../assets/image/image/Background.png"
import image_ct from "../../assets/image/image/image_ct.png"
import image_ct_2 from "../../assets/image/image/banner-1.png"
import image_ct_3 from "../../assets/image/image/banner-2.png"
import image_bg_1 from "../../assets/image/image/banner-bg-1.png"
// ----------------for pets image ---------------------------
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
// --------------------for product image ---------------------
import product1 from "../../assets/image/image/product/image 2 (1).png"
import product2 from "../../assets/image/image/product/image 2 (2).png"
import product3 from "../../assets/image/image/product/image 2.png"
import product4 from "../../assets/image/image/product/image 2 (3).png"
import product5 from "../../assets/image/image/product/image 2 (4).png"
import product6 from "../../assets/image/image/product/image 2 (5).png"
import product7 from "../../assets/image/image/product/image 2 (6).png"
import product8 from "../../assets/image/image/product/image 2 (7).png"
//----------------------for logo sellers----------------------
import logo1 from "../../assets/image/image/pest Seller/image 4.png"
import logo2 from "../../assets/image/image/pest Seller/image 6.png"
import logo3 from "../../assets/image/image/pest Seller/image 7.png"
import logo4 from "../../assets/image/image/pest Seller/image 8.png"
import logo5 from "../../assets/image/image/pest Seller/image 9.png"
import logo6 from "../../assets/image/image/pest Seller/image 10.png"
import logo7 from "../../assets/image/image/pest Seller/image 11.png"
import { Outlet, Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";
const HomePage = () => {
    const navigate = useNavigate();
    const CategoryPage = () => {
        navigate("/category");
    }
    useEffect(() => {
        AOS.init({ duration: 2000 });
    }, []);
    return (
        <body>
            <main>
                <section>
                    <div className="container">
                        <div className="row">
                            <div className="col-5">
                                <div className="content">
                                    <div className="text-content" data-aos="fade-right">
                                        <h1>One More Friend</h1>
                                        <h3>Thousands More Fun!</h3>
                                        <p>Having a pet means you have more joy,a new friend, a happy person who will always be with you to have fun. We have 200+ different pets that can meet your needs</p>
                                    </div>
                                    <div className="button" data-aos="fade-left">
                                        <button className="Button-border">View intro<i class="fa-regular fa-circle-play"></i></button>
                                        <button className="Button-background">Explore Now</button>
                                    </div>
                                </div>
                            </div>
                            <div className="col-7">
                                <div className="ImageContent" data-aos="fade-left">
                                    <img src={image_ct} alt="Photo" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="background-image">
                        <img src={image_bg} alt="" />
                    </div>
                </section>
                <section>
                    <div className="container">
                        <div className="pets">
                            <div className="textPets" data-aos="fade-right">
                                <p>Whats new</p>
                                <h2>Take A Look At Same Of Our Pets</h2>
                            </div>
                            <div className="button" data-aos="fade-left">
                                <button className="Button-border">View more<i class="fa-solid fa-chevron-right"></i></button>
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
                        <div className="row">
                            <div className="col-3">
                                <div className="card" onClick={CategoryPage}>
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
                            <div className="col-3">
                                <div className="card" onClick={CategoryPage}>
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
                            <div className="col-3">
                                <div className="card" onClick={CategoryPage}>
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
                            <div className="col-3">
                                <div className="card" onClick={CategoryPage}>
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
                        </div>
                    </div>
                </section>
                <section>
                    <div className="container">
                        <div className="position-bg" data-aos="fade-up">
                            <div className="contentPosition">
                                <div className="row">
                                    <div className="col-7">
                                        <div className="ImageContent-2">
                                            <img src={image_ct_2} alt="Photo" />
                                        </div>
                                    </div>
                                    <div className="col-5">
                                        <div className="content1">
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
                        <div className="pets" data-aos="fade-right">
                            <div className="textPets">
                                <p>Hard to choose right products for your pets?</p>
                                <h2>Our Products</h2>
                            </div>
                            <div className="button" data-aos="fade-left">
                                <button className="Button-border">View more<i class="fa-solid fa-chevron-right"></i></button>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-3">
                                <div className="card">
                                    <div className="image-card">
                                        <img src={product1} alt="" />
                                    </div>
                                    <div className="fix-btn">
                                        <div className="text-card">
                                            <h1>Reflex Plus Adult Cat Food Salmon</h1>
                                            <div className="row">
                                                <span>Product: Dog Food</span>
                                                <span>•</span>
                                                <span>Size: 385gm</span>
                                            </div>
                                            <h1>500000 KHR</h1>
                                        </div>
                                        <div className="btn-product">
                                            <button><i class="fa-solid fa-gift"></i><span>•</span><p>Free Toy & Free Shaker</p></button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-3">
                                <div className="card">
                                    <div className="image-card">
                                        <img src={product2} alt="" />
                                    </div>
                                    <div className="fix-btn">
                                        <div className="text-card">
                                            <h1>Reflex Plus Adult Cat Food Salmon</h1>
                                            <div className="row">
                                                <span>Product: Cat Food</span>
                                                <span>•</span>
                                                <span>Size: 1.5Kg</span>
                                            </div>
                                            <h1>100000 KHR</h1>
                                        </div>
                                        <div className="btn-product">
                                            <button><i class="fa-solid fa-gift"></i><span>•</span><p>Free Toy & Free Shaker</p></button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-3">
                                <div className="card">
                                    <div className="image-card">
                                        <img src={product3} alt="" />
                                    </div>
                                    <div className="fix-btn">
                                        <div className="text-card">
                                            <h1>Cat scratching ball toy kitten sisal rope ball</h1>
                                            <div className="row">
                                                <span>Product: Toy</span>
                                            </div>
                                            <h1>120000 KHR</h1>
                                        </div>
                                        <div className="btn-product">
                                            <button><i class="fa-solid fa-gift"></i><span>•</span><p>Free Cat Food</p></button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-3">
                                <div className="card">
                                    <div className="image-card">
                                        <img src={product4} alt="" />
                                    </div>
                                    <div className="fix-btn">
                                        <div className="text-card">
                                            <h1>Cute Pet Cat Warm Nest</h1>
                                            <div className="row">
                                                <span>Product: Toy</span>
                                            </div>
                                            <h1>200000 KHR</h1>
                                        </div>
                                        <div className="btn-product">
                                            <button><i class="fa-solid fa-gift"></i><span>•</span><p>Free Cat Food</p></button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-3">
                                <div className="card">
                                    <div className="image-card">
                                        <img src={product5} alt="" />
                                    </div>
                                    <div className="fix-btn">
                                        <div className="text-card">
                                            <h1>NaturVet Dogs-Omega-Gold Plus Salmon Oil</h1>
                                            <div className="row">
                                                <span>Produt: Dog Food</span>
                                                <span>•</span>
                                                <span>Size: 385gm</span>
                                            </div>
                                            <h1>800000 KHR</h1>
                                        </div>
                                        <div className="btn-product">
                                            <button><i class="fa-solid fa-gift"></i><span>•</span><p>Free Toy & Free Shaker</p></button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-3">
                                <div className="card">
                                    <div className="image-card">
                                        <img src={product6} alt="" />
                                    </div>
                                    <div className="fix-btn">
                                        <div className="text-card">
                                            <h1>Costumes Fashion Pet Clother Cowboy Rider</h1>
                                            <div className="row">
                                                <span>Product: Costume</span>
                                                <span>•</span>
                                                <span>Size: 1.5kg</span>
                                            </div>
                                            <h1>500000 KHR</h1>
                                        </div>
                                        <div className="btn-product">
                                            <button><i class="fa-solid fa-gift"></i><span>•</span><p>Free Toy & Free Shaker</p></button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-3">
                                <div className="card">
                                    <div className="image-card">
                                        <img src={product7} alt="" />
                                    </div>
                                    <div className="fix-btn">
                                        <div className="text-card">
                                            <h1>Costumes Chicken Drumsti ck Headband</h1>
                                            <div className="row">
                                                <span>Product: Costume</span>
                                            </div>
                                            <h1>2000000 KHR</h1>
                                        </div>
                                        <div className="btn-product">
                                            <button><i class="fa-solid fa-gift"></i><span>•</span><p>Free Cat Food</p></button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-3">
                                <div className="card">
                                    <div className="image-card">
                                        <img src={product8} alt="" />
                                    </div>
                                    <div className="fix-btn">
                                        <div className="text-card">
                                            <h1>Plush Pet Toy</h1>
                                            <div className="row">
                                                <span>Product: Toy</span>
                                            </div>
                                            <h1>250000 KHR</h1>
                                        </div>
                                        <div className="btn-product">
                                            <button><i class="fa-solid fa-gift"></i><span>•</span><p>Free Toy & Free Shaker</p></button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section>
                    <div className="container">
                        <div className="pets-1">
                            <div className="textPets" data-aos="fade-right">
                                <p>Proud to be part of <span>Pet Sellers</span></p>
                            </div>
                            <div className="button-1" data-aos="fade-left">
                                <button className="Button-border">View all our sellers<i class="fa-solid fa-chevron-right"></i></button>
                            </div>
                        </div>
                        <div className="row">
                            <div className="logo-sellers">
                                <img src={logo1} alt="" />
                                <img src={logo2} alt="" />
                                <img src={logo3} alt="" />
                                <img src={logo4} alt="" />
                                <img src={logo5} alt="" />
                                <img src={logo6} alt="" />
                                <img src={logo7} alt="" />
                            </div>
                        </div>
                    </div>
                </section>
                <section>
                    <div className="container">
                        <div className="position-bg-1" data-aos="fade-down">
                            <div className="contentPosition-1">
                                <div className="row">
                                    <div className="col-5">
                                        <div className="content2">
                                            <div className="text-content">
                                                <h1>Adoption <i class="fa-solid fa-paw"></i></h1>
                                                <h3>We Need Help. So Do They.</h3>
                                                <p>Adopt a pet and give it a home,<br />it will be love your back unconditionally.</p>
                                            </div>
                                            <div className="button">
                                                <button className="Button-background-1">Explore Now</button>
                                                <button className="Button-border">View intro<i class="fa-regular fa-circle-play"></i></button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-7">
                                        <div className="ImageContent-2">
                                            <img src={image_ct_3} alt="Photo" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section>
                    <div className="container">
                        <div className="pets-1">
                            <div className="textPets" data-aos="fade-right">
                                <p>You already know</p>
                                <span>Useful Pet Knowledge</span>
                            </div>
                            <div className="button-1" data-aos="fade-left">
                                <button className="Button-border">View all our sellers<i class="fa-solid fa-chevron-right"></i></button>
                            </div>
                        </div>
                    </div>
                </section>
                <section>
                    <div className="container">
                        <div className="row">
                            <div className="col-4"data-aos="fade-down"
                                    data-aos-duration="2000">
                                <div className="cardDog">
                                    <div className="image-cardDog">
                                        <img src={dog1} alt="" />
                                    </div>
                                    <div className="AboutDog">
                                        <h4>Pet knowledge</h4>
                                        <h1>What is a Pomeranian? How to Identify Pomeranian Dogs</h1>
                                        <p>The Pomeranian, also know as the Pomeranian (Pom dog), is always in the to of cutest pets, Not only that, the small, lovely, smart, friendly, and, skillful circu...</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-4" data-aos="fade-up"
                                    data-aos-duration="2000">
                                <div className="cardDog">
                                    <div className="image-cardDog">
                                        <img src={dog2} alt="" />
                                    </div>
                                    <div className="AboutDog">
                                        <h4>Pet knowledge</h4>
                                        <h1>Dog Diet You Need To Know</h1>
                                        <p>Dividing a dog's diet may seem simple as first, but there are some rules you should know so that your dog can easily absorb the nutrients in the diet, For those who are just starting to raise dogs, especailly...</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-4" data-aos="fade-down"
                                    data-aos-duration="2000">
                                <div className="cardDog">
                                    <div className="image-cardDog">
                                        <img src={dog3} alt="" />
                                    </div>
                                    <div className="AboutDog">
                                        <h4>Pet knowledge</h4>
                                        <h1>Why Dogs Bite and Destroy Furniture and How to Prevent It Effectively</h1>
                                        <p>Dog bites are common during development, However, no one wants to see their furniture or important items being bitten by a dog.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
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
        </body>
    );
}
export default HomePage;