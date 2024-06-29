import React, { useEffect } from "react";

import FoundingStory from "../assets/Images/FoundingStory.png";
import BannerImage1 from "../assets/Images/aboutus1.jpg";
import BannerImage2 from "../assets/Images/aboutus2.jpg";
import BannerImage3 from "../assets/Images/aboutus3.jpg";
import BannerImage4 from "../assets/Images/aboutus4.jpg";
import BannerImage5 from "../assets/Images/aboutus5.jpg";
import BannerImage6 from "../assets/Images/aboutus6.jpg";
// import Footer from "../components/common/Footer";
import ContactFormSection from "../components/core/AboutPage/ContactFormSection";
import LearningGrid from "../components/core/AboutPage/LearningGrid";
import Quote from "../components/core/AboutPage/Quote";
import StatsComponenet from "../components/core/AboutPage/Stats";
import HighlightText from "../components/core/HomePage/HighlightText";
import ReviewSlider from "../components/common/ReviewSlider";
import Footer from "../components/common/Footer";

const About = () => {
  useEffect(() => {
    let index = 0;
    const slides = document.querySelectorAll('.slide');
    const totalSlides = slides.length;

    const showSlide = (i) => {
      slides.forEach((slide, idx) => {
        slide.classList.toggle('hidden', idx !== i);
      });
    };

    const nextSlide = () => {
      index = (index + 1) % totalSlides;
      showSlide(index);
    };

    const interval = setInterval(nextSlide, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <section className="">
        <div className="relative mx-auto flex w-11/12 max-w-maxContent flex-col justify-between gap-10 text-center text-white">
          <header className="mx-auto py-20 text-4xl font-semibold lg:w-[70%]">
            Enhancing online education through innovative solutions for a
            <HighlightText text={"Brighter Future"} />
            <p className="mx-auto mt-3 text-center text-base font-medium  text-blue-25  lg:w-[95%]">
              Smart Education leads the charge in revolutionizing online learning. Our commitment lies in forging a brighter future through pioneering courses, harnessing breakthrough technologies, and cultivating a dynamic learning ecosystem. We're dedicated to empowering learners with innovative educational experiences, ensuring they thrive in an ever-evolving world.
            </p>
          </header>
          <div className="sm:h-[70px] lg:h-[150px]"></div>
          <div className="absolute bottom-0 left-[50%]  translate-x-[-50%] translate-y-[30%]">
            <div className="relative overflow-hidden h-80 rounded-lg">
              <div className="slide w-full hidden ">
                <img src={BannerImage1} alt="Banner 1" className="w-full h-full object-contain" />
              </div>
              <div className="slide w-full hidden">
                <img src={BannerImage2} alt="Banner 2" className="w-full h-full object-contain" />
              </div>
              <div className="slide w-full hidden">
                <img src={BannerImage3} alt="Banner 3" className="w-full h-full object-contain" />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* 
      <section className="border-b border-richblack-700">
        <div className="mx-auto flex w-11/12 max-w-maxContent flex-col justify-between gap-10 text-richblack-500">
          <div className="h-[100px] "></div>
          <Quote />
        </div>
      </section> */}

      <br />
      <br />
      <br />
      <br />

      <section>
        <div className="mx-auto flex w-11/12 max-w-maxContent flex-col justify-between gap-10 text-richblack-500">
          <div className="flex flex-col items-center gap-10 lg:flex-row justify-between">
            <div className="my-24 flex lg:w-[50%] flex-col gap-10">
              <h1 className="bg-gradient-to-br from-[#1FA2FF] via-[#12D8FA] to-[#A6FFCB] bg-clip-text text-4xl text-transparent  font-bold  lg:w-[70%] ">
                Our Founding Story
              </h1>
              <p className="text-base font-medium text-blue-25 lg:w-[95%]">
                Driven by a shared commitment to redefine education, our e-learning platform began with a collaboration of educators, technologists, and lifelong learners. Together, we recognized a growing demand for accessible, flexible, and high-caliber learning experiences in today's fast-paced digital landscape.
              </p>
              <p className="text-base font-medium text-blue-25 lg:w-[95%]">
                As educators with extensive experience, we witnessed firsthand the constraints and obstacles within traditional education systems. We firmly believed that education should transcend classroom walls and geographical barriers. Our vision was to create a platform that bridges these gaps, empowering individuals from diverse backgrounds to unleash their full potential.
              </p>
            </div>

            <div>
              <img
                src={FoundingStory}
                alt=""
                className="shadow-[0_0_20px_0] shadow-[#FC6767]"
              />
              
            </div>
          </div>
          <div className="flex flex-col items-center lg:gap-10 lg:flex-row justify-between">
            <div className="my-24 flex lg:w-[40%] flex-col gap-10">
              <h1 className="bg-gradient-to-b from-[#1FA2FF] via-[#12D8FA] to-[#A6FFCB] bg-clip-text text-4xl font-semibold text-transparent lg:w-[70%] ">
                Our Vision
              </h1>
              <p className="text-base font-medium text-blue-25 lg:w-[95%]">
                With this vision in mind, we set out on a journey to create an
                e-learning platform that would revolutionize the way people
                learn. Our team of dedicated experts worked tirelessly to
                develop a robust and intuitive platform that combines
                cutting-edge technology with engaging content, fostering a
                dynamic and interactive learning experience.
              </p>
            </div>
            <div className="my-24 flex lg:w-[40%] flex-col gap-10">
              <h1 className="bg-gradient-to-b from-[#1FA2FF] via-[#12D8FA] to-[#A6FFCB] text-transparent bg-clip-text text-4xl font-semibold lg:w-[70%] ">
                Our Mission
              </h1>
              <p className="text-base font-medium text-blue-25 lg:w-[95%]">
                Our mission goes beyond just delivering courses online. We wanted to create a vibrant community of learners, where individuals can connect, collaborate, and learn from one another. We believe that knowledge thrives in an environment of sharing and dialogue, and we foster this spirit of collaboration through forums, live sessions, and networking opportunities.
              </p>
            </div>
          </div>
        </div>
      </section>

      <StatsComponenet />
      <section className="mx-auto mt-20 flex w-11/12 max-w-maxContent flex-col justify-between gap-10 text-white">
        <LearningGrid />
        <ContactFormSection />
      </section>

      {/* <div className="relative mx-auto my-20 flex w-11/12 max-w-maxContent flex-col items-center justify-between gap-8 bg-richblack-900 text-white"> */}
        {/* Reviews from Other Learners */}
        {/* <h1 className="text-center text-4xl font-semibold mt-8">
          Reviews from other learners
        </h1> */}
        {/* <ReviewSlider /> */}
      {/* </div> */}


  <br />
  <br />

      <Footer />
    </div>
  );
};

export default About;
