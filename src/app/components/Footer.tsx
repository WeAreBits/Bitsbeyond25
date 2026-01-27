import React from 'react'
import Link from 'next/link';

function Footer() {
  const year = new Date();
  return (
    <footer className="bg-[url(/images/newsbg.png)] bg-no-repeat bg-top bg-cover">
      <section className="bg-blue/75 dark:bg-blue/75 py-11">
        <div className="myCont">
          <div className="text-center contPadd">
            <h3 className="text-orange font-sans font-bold text-4xl">
              NEWSLETTER
            </h3>
            <p className="text-lg/9 font-sans font-normal text-white">
              Subscribe to our newsletter for the latest update
            </p>
            <form action="" className="max-w-[380px] mx-auto mt-2 flex">
              <input
                type="email"
                name="email"
                id="email"
                className="bg-orange h-10 rounded-l grow dark:bg-black text-black dark:text-orange px-2 font-sans font-semibold text-base focus:outline-0"
              />
              <input
                type="button"
                value="Subscribe"
                className="bg-white h-10 px-3 font-bold font-sans text-black text-base rounded-r border-2 border-white"
              />
            </form>
          </div>
        </div>
      </section>
      <section className="bg-linear-to-r from-blue-light to-blue-dark from-56% dark:from-blue-light dark:to-blue-dark py-11">
        <div className="myCont">
          <div className="font-sans font-semibold text-white dark:text-white grid grid-cols-1 sm:grid-cols-6 lg:grid-cols-11 gap-y-8 [&_h6]:font-bold [&_h6]:text-lg [&_h6]:font-sans [&_h6]:mb-2 contPadd">
            <div className="sm:col-span-4 lg:col-span-3">
              <h6>NairoBits Trust</h6>
              <p className="text-base/9 font-semibold font-sans text-white dark:text-white">
                Covenant House Gate No. 20 <br />
                Covenant Road, off Ngong Rd <br />
                P.O Box 2778-00200,
                <br />
                Nairobi, Kenya
              </p>
            </div>
            <div className="sm:col-span-2 lg:col-span-3">
              <h6>Bits Eco-System</h6>
              <ul className="text-base/9 font-semibold font-sans text-white dark:text-white max-w-[170px]">
                <li>
                  <Link
                    href="/"
                    className="text-white dark:text-white hover:text-orange dark:hover:text-[#0000A9] cursor-pointer"
                  >
                    Bits S-Bize
                  </Link>
                </li>
                <li>
                  <Link
                    href="/"
                    className="text-white dark:text-white hover:text-orange dark:hover:text-[#0000A9] cursor-pointer"
                  >
                    Bits iAccess
                  </Link>
                </li>
                <li>
                  <Link
                    href="/"
                    className="text-white dark:text-white hover:text-orange dark:hover:text-[#0000A9] cursor-pointer"
                  >
                    Bits Shop
                  </Link>
                </li>
                <li>
                  <Link
                    href="/"
                    className="text-white dark:text-white hover:text-orange dark:hover:text-[#0000A9] cursor-pointer"
                  >
                    Bits E-Learning
                  </Link>
                </li>
              </ul>
            </div>
            <div className="sm:col-span-4 lg:col-span-4">
              <h6>Goals We Address</h6>
              <div className="grid grid-cols-3 gap-x-6 gap-y-8 pt-3 max-w-[200px]">
                <img
                  src="/images/nopoverty.svg"
                  alt="SDG Goal No. 1 No Poverty"
                  className="w-[50px] h-[50px] inline-block dark:grayscale-100"
                />
                <img
                  src="/images/education.svg"
                  alt="SDG Goal No. 4 Quality Education"
                  className="w-[50px] h-[50px] inline-block dark:grayscale-100"
                />
                <img
                  src="/images/gender.svg"
                  alt="SDG Goal No. 5 Gender Equality"
                  className="w-[50px] h-[50px] inline-block dark:grayscale-100"
                />
                <img
                  src="/images/work.svg"
                  alt="SDG Goal No. 8 Decent Work and Economic Growth"
                  className="w-[50px] h-[50px] inline-block dark:grayscale-100"
                />
                <img
                  src="/images/inequality.svg"
                  alt="SDG Goal No. 10 Reduced Inequality"
                  className="w-[50px] h-[50px] inline-block dark:grayscale-100"
                />
                <img
                  src="/images/partnership.svg"
                  alt="SDG Goal No. 17 Partnerships to achieve Goals"
                  className="w-[50px] h-[50px] inline-block dark:grayscale-100"
                />
              </div>
            </div>
            <div className="sm:col-span-2 lg:col-span-1">
              <h6>Follow Us</h6>
              <ul className="[&_li]:mb-2 mt-3 font-semibold max-w-[170px]">
                <li>
                  <Link
                    href="/"
                    title="NairoBits Trust Facebook social link"
                    target="_blank"
                    className="flex gap-3 items-center text-white hover:text-orange dark:text-white dark:hover:text-[#0000A9] cursor-pointer"
                  >
                    <img
                      src="/images/fb.svg"
                      alt="NairoBits Trust Facebook social link"
                      className="w-[30px] h-[29.3px] inline-block"
                    />
                    <span className="inline-block">Facebook</span>
                  </Link>
                </li>
                <li>
                  <Link
                    href="/"
                    title="NairoBits Trust Instagram social link"
                    target="_blank"
                    className="flex gap-3 items-center text-white hover:text-orange dark:text-white dark:hover:text-[#0000A9] cursor-pointer"
                  >
                    <img
                      src="/images/ig.svg"
                      alt="NairoBits Trust Instagram social link"
                      className="w-[30px] h-[29.3px] inline-block"
                    />
                    <span className="inline-block">Instagram</span>
                  </Link>
                </li>
                <li>
                  <Link
                    href="/"
                    title="NairoBits Trust TikTok social link"
                    target="_blank"
                    className="flex gap-3 items-center text-white hover:text-orange dark:text-white dark:hover:text-[#0000A9] cursor-pointer"
                  >
                    <img
                      src="/images/tiktok.svg"
                      alt="NairoBits Trust TikTok social link"
                      className="w-[30px] h-[29.3px] inline-block"
                    />
                    <span className="inline-block">TikTok</span>
                  </Link>
                </li>
                <li>
                  <Link
                    href="/"
                    title="NairoBits Trust LinkedIn social link"
                    target="_blank"
                    className="flex gap-3 items-center text-white hover:text-orange dark:text-white dark:hover:text-[#0000A9] cursor-pointer"
                  >
                    <img
                      src="/images/linkedin.svg"
                      alt="NairoBits Trust LinkedIn social link"
                      className="w-[30px] h-[29.3px] inline-block"
                    />
                    <span className="inline-block">LinkedIn</span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-black dark:bg-black text-white dark:text-accent">
        <div className="myCont">
          <div className="flex flex-col text-center md:text-left md:flex-row gap-3 items-center justify-between font-sans font-semibold text-sm py-6 contPadd">
            <ul className="flex justify-start gap-3">
              <li>
                <Link
                  href="/privacy"
                  className="hover:text-orange cursor-pointer dark:hover:text-[#0000A9] hover:underline transition-all ease-in duration-100"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/terms"
                  className="hover:text-orange cursor-pointer dark:hover:text-[#0000A9] hover:underline transition-all ease-in duration-100"
                >
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link
                  href="/sitemap"
                  className="hover:text-orange cursor-pointer dark:hover:text-[#0000A9] hover:underline transition-all ease-in duration-100"
                >
                  Sitemap
                </Link>
              </li>
            </ul>
            <p>
              Copyright &copy; {year.getFullYear()} NairoBits Trust | All Rights
              Reserved.
            </p>
          </div>
        </div>
      </section>
    </footer>
  );
}

export default Footer