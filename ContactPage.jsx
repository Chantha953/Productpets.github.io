const ContactPage = () => {
    return (
        <div>
            <div className="background-contact">
                <div className="container">
                    <div className="header-contact" data-aos="fade-down">
                        <h1>Have Some Question ?</h1>
                        <p>Thank for your interest in our services.Please fill out the form below or e-mail use at <a href="">Example@email.com</a> and we will get back to you proptly regarding your request.</p>
                    </div>
                    <div className="row">
                        <div className="col-6"  data-aos="flip-down">
                            <form className="form">
                                <h1>Contact Us</h1>
                                <div className="input">
                                    <div className="row">
                                        <input type="text" placeholder="First Name *" required />
                                        <input type="text" placeholder="Last Name *" required />
                                    </div>
                                    <div className="row">
                                        <input type="number" placeholder="Phone *" required />
                                        <input type="email" placeholder="Email *" required />
                                    </div>
                                    <textarea name="" id="" placeholder="Message"></textarea><br />
                                    <button>Send Message</button>
                                </div>
                            </form>
                        </div>
                        <div className="col-6" data-aos="fade-up">
                            <div className="request">
                                <h1>Request a Call Back</h1>
                                <div className="contact">
                                    <i class="fa-solid fa-phone-volume"></i>
                                    <p>+885-012-345-6789</p>
                                </div>
                                <div className="contact">
                                    <i class="fa-solid fa-envelope"></i>
                                    <p style={{ textDecoration: "underline", color: "red", cursor: "pointer" }}>reychantha@email.com</p>
                                </div>
                                <div className="contact">
                                    <i class="fa-solid fa-location-dot"></i>
                                    <p style={{ color: "white", fontWeight: "bold" }}>Phnom Penh</p>
                                </div>
                            </div>
                            <div className="icon-contact">
                                <i class="fa-brands fa-facebook"></i>
                                <i class="fa-brands fa-twitter"></i>
                                <i>in</i>
                                <i class="fa-brands fa-instagram"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default ContactPage;