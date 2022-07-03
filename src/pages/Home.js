import './Home.css';
import { useEffect } from 'react';
import Navbar from './component/Navbar';
import Footer from './component/Footer';
// import AOS from 'aos';
// import "aos/dist/aos.css";

function Home() {
    // useEffect(() => {
    //     AOS.init();
    //     AOS.refresh();
    // }, []);
    return (<>
        <Navbar />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css"></link>
        <div class="container mt-5">
            <div class="row mx-3">
                <div class="col-lg-4 col-md-12 text-center">
                    <img src="../../../img/profile.JPG" class="profile rounded-circle align-center mt-5" data-aos="fade-up"/>
                </div>
                <div class="col col-lg-8 col-md-12">
                    <div class="row">
                        <div class="col-lg-12 col-md-12">
                            <p data-aos="fade-left" class="desc my-5">Hi, My name is Yudhistira Aremaputra Wardhana! I'm an IT college Student based in South Tangerang, Indonesia. Who is looking for opportunities and work experience on Frontend Website development.</p>
                        </div>
                        <div class="col-lg-12 col-md-12 social-icons" data-aos="fade-left">
                            <a class="instagram" href="https://www.instagram.com/ydhstraw/" target="_blank">
                                <i class="fa-brands fa-instagram"></i>
                            </a>
                            <a class="facebook" href="https://www.facebook.com/ydhstraw" target="_blank">
                                <i class="fa-brands fa-facebook"></i>
                            </a>
                            <a class="twitter" href="https://www.twitter.com/ydhstraw/" target="_blank">
                                <i class="fa-brands fa-twitter"></i>
                            </a>
                            <a class="github" href="https://www.github.com/ydhstraw/" target="_blank">
                                <i class="fa-brands fa-github"></i>
                            </a>
                            <a class="linkedin" href="https://www.linkedin.com/in/ydhstraw/" target="_blank">
                                <i class="fa-brands fa-linkedin"></i>
                            </a>
                        </div>
                    </div>
                </div>
                
                
            </div>
        </div>
        <div class="container" id="projects">
            <h1 class="my-5 text-center" data-aos="fade-up">Projects & Works</h1>
            <div class="row row-cols-1 row-cols-sm-1 row-cols-md-2 row-cols-lg-3 m-1">
                <div class="col">
                    <div class="card bg-dark mb-4" data-aos="fade-up">
                        <img src="../../../img/projects/Foodle.png" class="card-img-top thumbnail" alt="..."/>
                        <div class="card-details">
                            <h5 class="card-title">Foodle</h5>
                            <p class="card-text">Foodle is a Food recipe search website that uses Edamam API. you can search based on certain criteria, such as sugar content, protein, and so on.</p>
                            <p class="card-text">Created with ReactJS framework</p>
                            <a href="https://foodle.vercel.app" target="_blank" class="btn btn-primary m-2" role="button" aria-pressed="true">Visit</a>
                            <a href="https://github.com/ydhstraw/Foodle-app" target="_blank" class="btn btn-light" role="button" aria-pressed="true">Source code</a>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card bg-light mb-4" data-aos="fade-up">
                        <img src="../../../img/projects/Booking Hotel.png" class="card-img-top thumbnail" alt="..."/>
                        <div class="card-details">
                            <h5 class="card-title text-dark">Booking Hotel</h5>
                            <p class="card-text text-dark">Booking Hotel is a website to do a Hotel reservation.</p>
                            <p class="card-text text-dark">Created with Laravel framework</p>
                            <a href="http://bookinghotel.epizy.com/" target="_blank" class="btn btn-primary m-2" role="button" aria-pressed="true">Visit</a>
                            <a href="https://github.com/ydhstraw/booking-hotel" target="_blank" class="btn btn-dark" role="button" aria-pressed="true">Source code</a>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card bg-warning mb-4" data-aos="fade-up">
                        <img src="../../../img/projects/SeiYou.png" class="card-img-top thumbnail" alt="..."/>
                        <div class="card-details text-black">
                            <h5 class="card-title">SeiYou</h5>
                            <p class="card-text">SeiYou is a voice-over application and it is hoped that everyone will get passion and work from this application for those who need it.</p>
                            <p class="card-text">Created with Ionic React framework</p>
                            <a href="https://sei-you.vercel.app" target="_blank" class="btn btn-light m-2" role="button" aria-pressed="true">Visit</a>
                            <a href="https://github.com/IArnFredo/WeHearYouAll-SeiYou" target="_blank" class="btn btn-dark" role="button" aria-pressed="true">Source code</a>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card bg-dark mb-4" data-aos="fade-up">
                        <img src="../../../img/projects/github.png" class="card-img-top thumbnail" alt="..."/>
                        <div class="card-details">
                            <h5 class="card-title">Other Projects</h5>
                            <p class="card-text">View my Github page for more projects and source code!</p>
                            
                            <a href="https://github.com/ydhstraw" class="btn btn-light" target="_blank" role="button" aria-pressed="true">Visit</a>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <Footer />
    </>);
}

export default Home;

