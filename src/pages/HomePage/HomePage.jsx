import React from "react";
import { TypeAnimation } from "react-type-animation";

export default function HomePage() {
  return (
    <div>
      <div className="rounded-lg bg-neutral-400 bg-opacity-50 mx-6 mt-3 p-6">
        <h1 className="font-display flex justify-center font-extrabold text-white text-4xl">
          JobTrackr
        </h1>
      </div>
      <div className="flex justify-center flex-col">
        <div className="rounded-lg my-10 mx-16 p-5 bg-neutral-500 bg-opacity-50 lg:mx-72">
          <p className="text-white">
            Introducing <span className="font-display">JobTrackr</span> - the
            ultimate job tracking platform for job seekers! With our Full-Stack
            Web Application, users can easily keep track of their job
            applications, view their pending and declined jobs, and see upcoming
            interviews all in one place. Our website offers a clean and
            intuitive user interface that allows you to stay organized and
            informed throughout your job search.
            <br />
            <br />
            But that's not all! <span className="font-display">
              JobTrackr
            </span>{" "}
            also offers a comprehensive library of videos that cover a range of
            topics related to job interviews. With our seamless integration of
            YouTube API, users can access these videos at any time to learn how
            to ace their job interviews and land their dream job.
            <br />
            <br />
            Don't miss out on this amazing opportunity to stay on top of your
            job search and improve your interview skills. Sign up now for
            JobTrackr and take your job search to the next level!
          </p>
        </div>
        {/* <div className="flex justify-center">
          <img
            src="https://res.cloudinary.com/diw7vmgum/image/upload/v1683835732/apply-apply-apply-apply_nzxfpz.gif"
            className="rounded-lg mb-6"
          />
        </div> */}
        <div className="rounded-lg bg-neutral-500 bg-opacity-50 mx-16 mt-3 mb-12 p-6 lg:mx-72">
          <div className="lg:flex">
            <div className="flex flex-col  lg:m-16">
              <h2 className="text-white text-xl mb-4">
                Keep track of your{" "}
                <span className="font-display">
                  <TypeAnimation
                    sequence={[
                      "opportunities.",
                      2000,
                      "career prospects.",
                      2000,
                    ]}
                    speed={50}
                    repeat={Infinity}
                  />
                </span>
              </h2>
              <p className="text-white">
                By featuring statistical analytics, JobTrackr can provide users
                with valuable insights into their job search progress and offer
                personalized recommendations for improving their chances of
                landing their dream job, all while maintaining a high level of
                data privacy and security.
              </p>
            </div>
            <img
              src="https://res.cloudinary.com/diw7vmgum/image/upload/v1683836616/curious-piyuesh-piyueshmodi_utgg8o.gif"
              className="rounded-lg mb-6"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
