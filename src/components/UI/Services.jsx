import React from "react";
import frontendImg from "../../assets/images/front-end.png";
import backendImg from "../../assets/images/backend.png";
import uiImg from "../../assets/images/design.png";
import appsImg from "../../assets/images/apps.png";

const Services = () => {
  return (
    <section id="services">
      <div className="container lg:pt-5">
        <div className="text-center">
          <h2 className="text-headingColor font-[800] text-[2.4rem] mb-5">
            Expertise Skills
          </h2>
          <p className="lg:max-w-[600px] lg:mx-auto text-headingColor font-[500] text-[16px] leading-7">
            In the context of a software developer, skills typically refer to
            the technical competencies and proficiencies related to software
            development and programming.
          </p>
        </div>
        <div className="flex flex-col justify-center sm:py-12">
          <div className="w-full py-3 px-2  sm:mx-auto sm:px-0">
            <div className="relative text-gray-700 antialiased text-sm font-semibold">
              {/*========================vertical line running through the middle ===============   */}
              <div className="hidden absolute w-1 sm:block bg-indigo-300 h-full left-1/2 transform-translate-x-1/2"></div>
              {/* ======================== left card ================ */}
              <div className="mt-6 sm:mt-0 sm:mb-12">
                <div className="flex items-center flex-col sm:flex-row">
                  <div className="flex justify-start w-full mx:auto items-center">
                    <div className="w-full sm:w-1/2 sm:pr-8">
                      <div
                        data-aos="fade-right"
                        data-aos-duration="1200"
                        className="bg-white p-4 rounded shadow group hover:bg-primaryColor cursor-pointer ease-in duration-150"
                      >
                        <h3 className="text-primaryColor font-[700] mb-3 group-hover:text-white group-hover:font-[600] text-2xl">
                          Frontend Development
                        </h3>
                        <ul className="text-[15px] list-disc text-smallTextColor group-hover:text-white group-hover:font-[500] leading-7">
                          <li>
                            Proficient in HTML Experience in creating
                            semantically structured HTML markup for web pages or
                            web applications.
                          </li>
                          <li>
                            {" "}
                            Strong understanding of CSS (Cascading Style Sheets)
                            to create visually appealing and responsive designs,
                            including layout, typography, and animations.{" "}
                          </li>{" "}
                          <li>
                            {" "}
                            Knowledge of JavaScript programming language to
                            enhance user interactions, handle events, manipulate
                            the DOM (Document Object Model), and work with APIs.{" "}
                          </li>{" "}
                          <li>
                            Familiarity with popular frontend framework such as
                            React.
                          </li>{" "}
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="rounded-full bg-primaryColor border-white border-4 w-10 absolute left-1/2 transform -translate-x-1/2 -translate-y-4 sm:translate-y-0 flex items-center justify-center">
                    <figure>
                      <img src={frontendImg} alt="" />
                    </figure>
                  </div>
                </div>
              </div>

              {/* ================== right card ================*/}
              <div className="mt-6 sm:mt-0 sm:mb-12">
                <div className="flex items-center flex-col sm:flex-row">
                  <div className="flex justify-end w-full mx:auto items-center">
                    <div className="w-full sm:w-1/2 sm:pl-8">
                      <div
                        data-aos="fade-left"
                        data-aos-duration="1300"
                        data-aos-delay="50"
                        className="bg-white p-4 rounded shadow group hover:bg-primaryColor cursor-pointer ease-in duration-150"
                      >
                        <h3 className="text-primaryColor font-[700] mb-3 group-hover:text-white group-hover:font-[600] text-2xl">
                          AWS
                        </h3>

                        <ul className="text-[15px] list-disc text-smallTextColor group-hover:text-white group-hover:font-[500] leading-7">
                          <li>
                            Proficient in leveraging the power of Amazon Web
                            Services (AWS) to design, build, deploy, and scale
                            cloud-based applications.
                          </li>{" "}
                          <li>
                            Experienced in utilizing AWS services such as Amazon
                            EC2, Amazon S3, and Amazon RDS to deploy and manage
                            applications in a scalable and cost-effective
                            manner.
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="rounded-full bg-primaryColor border-white border-4 w-10 absolute left-1/2 transform -translate-x-1/2 -translate-y-4 sm:translate-y-0 flex items-center justify-center">
                    <figure>
                      <img src={appsImg} alt="" />
                    </figure>
                  </div>
                </div>
              </div>
              <div className="mt-6 sm:mt-0 sm:mb-12">
                <div className="flex items-center flex-col sm:flex-row">
                  <div className="flex justify-start w-full mx:auto items-center">
                    <div className="w-full sm:w-1/2 sm:pr-8">
                      <div
                        data-aos="fade-right"
                        data-aos-duration="1200"
                        className="bg-white p-4 rounded shadow group hover:bg-primaryColor cursor-pointer ease-in duration-150"
                      >
                        <h3 className="text-primaryColor font-[700] mb-3 group-hover:text-white group-hover:font-[600] text-2xl">
                          Backend Development
                        </h3>
                        <ul className="text-[15px] list-disc text-smallTextColor group-hover:text-white group-hover:font-[500] leading-7">
                          <li>
                            {" "}
                            Proficiency in server-side programming language like
                            Node.js for developing the logic and functionality
                            of web applications.
                          </li>{" "}
                          <li>
                            Experience with backend web frameworks such as
                            Express.js (Node.js).
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="rounded-full bg-primaryColor border-white border-4 w-10 absolute left-1/2 transform -translate-x-1/2 -translate-y-4 sm:translate-y-0 flex items-center justify-center">
                    <figure>
                      <img src={backendImg} alt="" />
                    </figure>
                  </div>
                </div>
              </div>

              {/* ================== right card ================*/}
              <div className="mt-6 sm:mt-0 sm:mb-12">
                <div className="flex items-center flex-col sm:flex-row">
                  <div className="flex justify-end w-full mx:auto items-center">
                    <div className="w-full sm:w-1/2 sm:pl-8">
                      <div
                        data-aos="fade-left"
                        data-aos-duration="1200"
                        className="bg-white p-4 rounded shadow group hover:bg-primaryColor cursor-pointer ease-in duration-150"
                      >
                        <h3 className="text-primaryColor font-[700] mb-3 group-hover:text-white group-hover:font-[600] text-2xl">
                          Other Tools
                        </h3>
                        <ul className="text-[15px] list-disc text-smallTextColor group-hover:text-white group-hover:font-[500] leading-7">
                          <li>
                            Proficient in utilizing Netlify, a powerful platform
                            for web deployment and hosting.
                          </li>
                          <li>
                            {" "}
                            Proficient in deploying various types of
                            applications, including web apps, APIs, and
                            microservices, to the Heroku platform.
                          </li>
                          <li>
                            {" "}
                            Advanced proficiency in utilizing GitHub as a
                            version control and collaboration platform for
                            software development projects.
                          </li>{" "}
                          <li>
                            {" "}
                            Strong knowledge of MongoDB Atlas, a cloud-based
                            database service for MongoDB.
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="rounded-full bg-primaryColor border-white border-4 w-10 absolute left-1/2 transform -translate-x-1/2 -translate-y-4 sm:translate-y-0 flex items-center justify-center">
                    <figure>
                      <img src={uiImg} alt="" />
                    </figure>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
