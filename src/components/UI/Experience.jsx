import React from "react";

const Experience = () => {
  return (
    <div id="experience">
      <div className="container lg:pt-5">
        <div className="text-center">
          <h2 className="text-headingColor font-[800] text-[2.4rem] mb-3">
            Professional experience
          </h2>
        </div>
        <div className="flex flex-col justify-center  sm:py-2">
          <div className="w-full py-3 sm:mx-auto sm:px-0">
            <div className="relative text-gray-700 antialiased text-sm font-semibold">
              {/*========================vertical line running through the middle ===============   */}
              <div className="hidden absolute w-1 sm:block bg-indigo-300 h-full left-1/2 transform-translate-x-1/2"></div>
              {/* ======================== left card ================ */}
              <div className="mt-6 sm:mt-0 sm:mb-1">
                <div className="flex items-center flex-col sm:flex-row">
                  <div className="flex justify-start w-full mx:auto items-center">
                    <div className="w-full sm:w-1/2  sm:pr-8">
                      <div
                        data-aos="fade-right"
                        data-aos-duration="1200"
                        className="bg-white p-4 rounded  shadow group hover:bg-primaryColor cursor-pointer ease-in duration-150"
                      >
                        <p className="text-black"> 2017 Dec- 2021 Dec.</p>
                        <p className="text-black">
                          Hindustan Times l Sector 62, Noida
                        </p>
                        <h1 className="text-black">News Retainer</h1>
                        <ul className="list-disc ml-4">
                          <li className="mt-2 font-serif">
                            A News Retainer is responsible for overseeing the
                            content that goes into the publication. They review
                            and edit news articles, features, and other written
                            materials to ensure accuracy, clarity, and adherence
                            to the publication's style and guidelines.
                          </li>
                          <li className="font-serif">
                            Decision-Making: News Retainer's make critical
                            decisions about which stories to prioritize and how
                            to present them. They determine the placement of
                            articles, headlines, and images to create an
                            engaging and informative layout.
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="rounded-full bg-primaryColor border-white border-4 w-10 absolute left-1/2 transform -translate-x-1/2 -translate-y-4 sm:translate-y-0 flex items-center justify-center">
                    <figure>{/* <img src={frontendImg} alt="" /> */}</figure>
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
                        <p className="mt-12 text-black">2022 Feb - Present</p>
                        <p className="text-black">
                          Clover Infotech Private Limited l Sector 24, Gurgaon
                        </p>
                        <p className="text-black">
                          Engineer - Technical Support L1
                        </p>
                        <ul className="list-disc ml-4">
                          <li className="mt-2 font-serif">
                            Have been participating in deploying scripts and
                            codes to the servers.
                          </li>
                          <li className="font-serif">
                            Have knowledge about JIRA and using it for internal
                            use.
                          </li>
                          <li className="font-serif">
                            Using ticketing tools like SUMMIT and working on it
                            for completed our task.
                          </li>
                          <li className="font-serif">
                            Monitoring of servers by using different types of
                            tools like Zabbix and APM which is managed by TCS.
                          </li>
                          <li className="font-serif">
                            {" "}
                            Daily direct meetings with clients for the issues on
                            servers and responding on quickly resolving
                            production issues.{" "}
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="rounded-full bg-primaryColor border-white border-4 w-10 absolute left-1/2 transform -translate-x-1/2 -translate-y-4 sm:translate-y-0 flex items-center justify-center">
                    <figure>{/* <img src={appsImg} alt="" /> */}</figure>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
