import React from "react";
import heroImg from "../../assets/images/hero.png";
import CountUp from "react-countup";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="pt-0" id="about">
      <div className="container pt-14">
        <div className="md:flex items-center justify-between sm:flex-col md:flex-row">
          {/*==============hero left content ==========*/}
          <div className="w-full md:basis-1/2">
            <h5
              data-aos="fade-right"
              data-aos-duration="1500"
              className="text-headingColor font-[600] text-[16px]"
            >
              Hello Welcome
            </h5>
            <h1
              data-aos="fade-up"
              data-aos-duration="1500"
              className="text-headingColor font-[800] text-[1.8rem] sm:text-[40px] leading-[35px] sm:leading-[46px] mt-5"
            >
              I'm Sachin Chauhan, <br />
              Software Developer
            </h1>
            <div
              data-aos="fade-up"
              data-aos-duration="1800"
              data-aos-delay="200"
              className="flex items-center gap-6 mt-7"
            >
              <a href="#contact">
                <button className="bg-primaryColor text-white font-[500] flex items-center gap-2 hover:bg-smallTextColor ease-in duration-300 py-2 px-4 rounded-[8px]">
                  <i class="ri-mail-line"></i>Hire Me
                </button>
              </a>
              <a
                href="#portfolio"
                className="text-smallTextColor font-[600] text-[16px] border-b border-solid border-smallTextColor"
              >
                See Portfolio
              </a>
            </div>
            <p
              data-aos="fade-left"
              data-aos-duration="1500"
              className="flex gap-2 text-headingColor mt-12 font-[500] text-[15px] leading-7 sm:pl-14 sm:pr-10"
            >
              <span>
                <i class="ri-apps-2-line"></i>
              </span>
              "Though I am a fresher, I possess a strong foundation in
              programming languages such as ReactJs, NodeJs, Express, MongoDB
              and Javascript. My portfolio exhibits my enthusiasm for learning
              and my dedication to continuously improving my skills in software
              development."
            </p>
            <div className="flex items-center gap-9 mt-14">
              <span className="text-smallTextColor text-[15px] font-[600]">
                Connect Me
              </span>
              <span>
                <a
                  href="https://github.com/chinuu1311"
                  className="text-smallTextColor text-[18px] font-[600]"
                >
                  <i class="ri-github-line"></i>
                </a>
              </span>

              <span>
                <a
                  href="https://www.facebook.com/"
                  className="text-smallTextColor text-[18px] font-[600]"
                >
                  <i class="ri-facebook-line"></i>
                </a>
              </span>
              <span>
                <a
                  href="https://www.instagram.com/accounts/login/"
                  className="text-smallTextColor text-[18px] font-[600]"
                >
                  <i class="ri-instagram-line"></i>
                </a>
              </span>
            </div>
          </div>
          {/*=================hero left end */}
          {/*====================hero image ===============*/}
          <div className="basis-1/3 mt-10 sm:mt-0">
            <figure className="flex items-center justify-center">
              <img
                className="bg-gray-300 rounded-[100px]"
                src={heroImg}
                alt=""
              />
            </figure>
          </div>
          {/*=================== hero image end ===============*/}
          {/*=================== hero content right ===============*/}
          <div className="md:basis-1/5 flex justify-between text-center mt-10 flex-wrap gap-3 md:mt-0 md:flex-col md:justify-end md:text-end">
            <div className="mb-10">
              <h2 className="text-headingColor font-[700] text-[32px]">
                B.Tech
              </h2>
              <h4 className="text-headingColor font-[600] text-[18px]">
                Name of Degree
              </h4>
            </div>
            <div className="mb-10">
              <h2 className="text-headingColor font-[700] text-[32px]">
                <CountUp start={0} end={1} duration={2} suffix="+"></CountUp>
              </h2>
              <h4 className="text-headingColor font-[600] text-[18px]">
                Internship Experience
              </h4>
            </div>
            <div className="mb-10">
              <h2 className="text-headingColor font-[700] text-[32px]">
                <CountUp start={0} end={3} duration={2} suffix="+"></CountUp>
              </h2>
              <h4 className="text-headingColor font-[600] text-[18px]">
                Certifications
              </h4>
            </div>
            <div className="mb-10">
              <h2 className="text-headingColor font-[700] text-[32px]">
                <CountUp start={0} end={10} duration={2} suffix="+"></CountUp>
              </h2>
              <h4 className="text-headingColor font-[600] text-[18px]">
                Projects Completed
              </h4>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
