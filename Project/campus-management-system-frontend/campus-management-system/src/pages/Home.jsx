import React from 'react'
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div>
      <section className="flex relative bg-[#fff] items-center justify-center ">
        <div className="relative items-center w-full px-5 py-12 mx-auto lg:px-16 lg:py-32 max-w-7xl md:px-12">
          <div>
            <div className="text-center">
              <span className="w-auto">
                <span className="font-semibold text-[#4354ff] text-sm uppercase">
                  Campus management system
                </span>
              </span>
              <p className="mt-8 text-3xl font-extrabold tracking-tight text-black md:text-5xl">
                Welcome to Our
                <br />
                Campus Management System
              </p>
              <p className="max-w-2xl mx-auto mt-4 text-base lg:text-xl text-slate-500">
                Streamline administrative tasks, enhance communication, and
                empower campus stakeholders with our comprehensive Campus
                Management System. From attendance tracking to fee management,
                we provide a seamless platform for efficient campus operations.
              </p>
            </div>
          </div>

          <section className="">
            <div className="relative px-4 py-24 mx-auto sm:px-6 md:px-4 lg:max-w-6xl lg:px-20 lg:py-36">
              <dl className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-2">
                <Link to="/student">
                  <div className="h-full overflow-hidden bg-gray-100 rounded-3xl">
                    <div className="">
                      <img
                        src="https://cdn.dribbble.com/users/671617/screenshots/16792621/media/cad8f9120956f1b984d77effa5f55214.jpg?compress=1&resize=1600x1200&vertical=center"
                        alt=""
                      />
                    </div>
                    <div className="p-8">
                      <p className="mt-1 text-3xl font-semibold">
                        Students &#8599;
                      </p>
                      <p className="mt-2 text-gray-500">
                        Access attendance records, track fees, and stay updated
                        with subject assignments. Our student-focused features
                        ensure a seamless academic journey and foster engagement
                        for a thriving campus experience.
                      </p>
                    </div>
                  </div>
                </Link>
                <Link to="/faculty">
                  <div className="h-full overflow-hidden bg-gray-100 rounded-3xl">
                    <div className="">
                      <img
                        src="https://cdn.dribbble.com/users/671617/screenshots/16792608/media/d7495ead23b39e366801ac29481b4548.jpg?compress=1&resize=1600x1200&vertical=center"
                        alt=""
                      />
                    </div>
                    <div className="p-8">
                      <p className="mt-1 text-3xl font-semibold">
                        Faculty &#8599;
                      </p>
                      <p className="mt-2 text-gray-500">
                        Streamline attendance marking, subject and assignment
                        management, and collaborative communication with
                        students. Our intuitive tools empower faculty members to
                        deliver an effective learning environment
                      </p>
                    </div>
                  </div>
                </Link>
              </dl>
            </div>
          </section>
        </div>
      </section>
    </div>
  );
}

export default Home