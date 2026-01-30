import PagesHero from '@/app/components/PagesHero'
import React from 'react'
import Image from 'next/image';
import Link from 'next/link';


function page() {
  return (
    <>
      <PagesHero />
      <main className="myCont">
        <section className="bg-accent dark:bg-accent contPadd py-11">
          <h2 className="bodyH2 mb-5">About Bits</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
            <div className="[&_p]:font-sans [&_p]:text-base text-base [&_p]:mb-4 xl:col-span-2">
              <p>
                NairoBits Trust is a Kenyan non-profit that leverages ICT to
                empower disadvantaged youth from the informal settlements of
                Nairobi. We offer alternative higher education programs that
                unlock careers in tech through digital skills training and
                professional integration with the labor market.
              </p>
              <p>
                Our programming is based on a two pronged strategic approach
                i.e. Enhancing the capacity of underserved youth to increase
                their readiness for them to make gainful advantage of the
                digital age and; Promoting the creation of opportunities and
                utilization of available ones in the ICT sub-sector.
              </p>
              <p>
                These strategic approaches are the backbone of our programs
                ranging across technical skills on digital literacy, acumen
                building and creating wholesome subsector change through
                advocacy on the digital divide across marginalized groups.
              </p>
            </div>
            <figure className="relative min-h-[260px]">
              <Image
                src="/images/about.jpg"
                fill
                priority
                className="rounded object-cover dark:grayscale-100"
                alt="NairoBits Trust class learning setup"
              />
            </figure>
          </div>
        </section>
        <section className="contPadd py-11 bg-blue flex flex-col md:flex-row md:[&_div]:first:border-r-2 max-md:[&_div]:last:border-t-2 [&_div]:border-white">
          <div className="first:pb-10 last:pt-10 md:p-5 flex flex-col items-center justify-center grow">
            <h2 className="font-sans font-semibold text-lg text-white dark:text-white">
              Mission
            </h2>
            <figure className="w-10 h-10 my-5 relative">
              <Image
                src="/images/mission.svg"
                alt="NairoBits Trust Mission Icon"
                priority
                fill
                className="object-fit dark:brightness-0"
              />
            </figure>
            <Image
              src="/images/corebg.png"
              width={240}
              height={16}
              alt="NairoBits Trust Core statement devider"
              className="dark:brightness-0"
            />
            <p className="text-center text-base font-sans text-white dark:text-white max-w-[400px] mt-5">
              Empowered and transformed youth who positively impact the
              societies.
            </p>
          </div>
          <div className="first:pb-10 last:pt-10 md:p-5 flex flex-col items-center justify-center grow">
            <h2 className="font-sans font-semibold text-lg text-white dark:text-white">
              Vision
            </h2>
            <figure className="w-10 h-10 my-5 relative">
              <Image
                src="/images/vision.svg"
                alt="NairoBits Trust Vision Icon"
                priority
                fill
                className="object-fit dark:brightness-0"
              />
            </figure>
            <Image
              src="/images/corebg.png"
              width={240}
              height={16}
              alt="NairoBits Trust Core statement devider"
              className="dark:brightness-0"
            />
            <p className="text-center text-base font-sans text-white dark:text-white max-w-[400px] mt-5">
              Harnessing ICT to place youth at the center of societal
              engagements and solutions
            </p>
          </div>
        </section>
        <section className="contPadd bg-white py-11 dark:bg-white">
          <h2 className="bodyH2">Our Core Values</h2>
          <figure className="w-full relative h-[200px] md:h-[400px]">
            <Image
              src="/images/values.svg"
              priority
              fill
              alt="NairoBits Trust Core values illustartion"
              className="object-fit dark:grayscale-100"
            />
          </figure>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="[&_h3]:text-blue [&_h3]:text-lg [&_h3]:mb-3 [&_h3]:font-semibold [&_h3]:font-sans [&_p]:text-base [&_p]:text-black [&_p]:font-sans dark:[&_p]:text-black dark:[&_h3]:text-blue bg-white dark:bg-white shadow p-4 ring rounded ring-gray dark:ring-blue dark:shadow-white">
              <h3>Benevolent</h3>
              <p>
                We place emphasis and great concern for others' welfare (i.e.
                helpful, forgiving. responsible, loyal, true friendship, mature
                love) to promote cooperative and supportive social relations.
              </p>
            </div>
            <div className="[&_h3]:text-blue [&_h3]:text-lg [&_h3]:mb-3 [&_h3]:font-semibold [&_h3]:font-sans [&_p]:text-base [&_p]:text-black [&_p]:font-sans dark:[&_p]:text-black dark:[&_h3]:text-blue bg-white dark:bg-white shadow p-4 ring rounded ring-gray dark:ring-blue dark:shadow-white">
              <h3>Intergrity</h3>
              <p>
                We are honest, impartial and trustworthy at all times with our
                colleagues, students and all stakeholders, delivering services
                fairly and objectively free of discrimination or preferential
                treatment.
              </p>
            </div>
            <div className="[&_h3]:text-blue [&_h3]:text-lg [&_h3]:mb-3 [&_h3]:font-semibold [&_h3]:font-sans [&_p]:text-base [&_p]:text-black [&_p]:font-sans dark:[&_p]:text-black dark:[&_h3]:text-blue bg-white dark:bg-white shadow p-4 ring rounded ring-gray dark:ring-blue dark:shadow-white">
              <h3>Transformative</h3>
              <p>
                We commit to undertaking an overarching cultural and purpose-led
                transformation within and without NairoBits.
              </p>
            </div>
            <div className="[&_h3]:text-blue [&_h3]:text-lg [&_h3]:mb-3 [&_h3]:font-semibold [&_h3]:font-sans [&_p]:text-base [&_p]:text-black [&_p]:font-sans dark:[&_p]:text-black dark:[&_h3]:text-blue bg-white dark:bg-white shadow p-4 ring rounded ring-gray dark:ring-blue dark:shadow-white">
              <h3>Solidarity</h3>
              <p>
                We strive to willingly give ourselves for the good of our
                community, especially the disadvantaged youth.
              </p>
            </div>
          </div>
        </section>
        <section className="contPadd py-11 bg-accent dark:bg-accent">
          <h2 className="bodyH2 mb-5">Our History</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
            <figure className="relative min-h-[356px]">
              <Image
                src="/images/history.jpg"
                fill
                priority
                className="rounded object-cover dark:grayscale-100"
                alt="NairoBits Trust class learning setup"
              />
            </figure>
            <div className="[&_p]:font-sans [&_p]:text-base text-base [&_p]:mb-4 xl:col-span-2">
              <p>
                NairoBits started in 1999, when Emer Beamer, Ineke Aquarius and
                Hester Ezra discussed their aspirations to start up a web design
                institute in Nairobi for disadvantaged young people, motivated
                to share their skills as multimedia designers and offer chances
                to the youth in a time where the ICT space in Africa was
                evolving and largely untapped on the education front. Their
                mission was to change the lives of the youth by building their
                skills and changing their mindset, from vulnerable to empowered
                people who could earn a living and uplift their communities as a
                result.
              </p>
              <p>
                Our first graduating class consisted of 20 students, who by the
                end of two months had made their own websites with self made
                photos of their city,stories, self portraits and had taken part
                in an online exchange with Dutch students. The works made were
                exhibited in the National Museum of Kenya, the first digital
                exhibition to ever take place at the museum. This resulted in a
                number of media articles and appearances.
              </p>
              <p>
                To ground and launch the project, we institutionalized a new
                organizational approach and educational method based on
                creativity leading to employability and success in the ICT
                sector, supported by our mandate to unlock the potential of the
                targeted youth to improve their socio-economic well-being by
                building and enhancing relevant inter-personal and professional
                skills through entrepreneurship, life-skills and sexual and
                reproductive health rights (SRHR), by effectively educating and
                empowering them.
              </p>
            </div>
          </div>
        </section>
        <section className="contPadd py-11 bg-white dark:bg-white">
          <h2 className="bodyH2 mb-5">In their Words</h2>
          <div className="flex flex-col md:flex-row gap-6">
            <div className="bg-white max-sm:max-w-[487px] max-sm:mx-auto md:max-max-w-[350px] md:mx-auto dark:bg-white ring rounded ring-gray dark:ring-blue shadow dark:shadow-blue p-5 flex flex-col sm:flex-row  md:flex-col  xl:flex-row xl:min-w-[487px] justify-between gap-4">
              <div className="relative min-w-[250px] min-h-[250px]">
                <Image
                  src="/images/emer.webp"
                  alt="NairoBits Co-Trust Founder Emer Beamer"
                  fill
                  className="object-cover aspect-square rounded dark:grayscale-100"
                />
              </div>

              <div className="grow text-black dark:text-black font-sans text-base flex flex-col justify-between">
                <p>
                  As a co-founder of Nairobits, I wanted to share my abilities
                  in order to give others a chance to make a better life for
                  themselves. To date I am so proud of all that has been
                  achieved, the thousands of lives touched, the opportunities
                  created and the spirit of giving back I see in the alumni
                  community.
                </p>
                <footer className="flex justify-between gap-3 mt-4">
                  <div className="grow">
                    <h3 className="font-sans font-bold text-base text-blue dark:text-blue">
                      Emer Beamer
                    </h3>
                    <h4 className="font-sans text-base text-blue dark:text-blue">
                      Co-founder NairoBits Trust.
                    </h4>
                  </div>
                  <Link
                    href="https://linkedin.com"
                    title="linkend founder link"
                    className="relative inline-block w-8 h-8 self-end"
                    target="_blank"
                  >
                    <Image
                      src="/images/flin.png"
                      alt="Co-founder linkedin link icon"
                      fill
                      className="object-fit dark:contrast-0"
                    />
                  </Link>
                </footer>
              </div>
            </div>
            <div className="bg-white max-sm:max-w-[487px] max-sm:mx-auto md:max-max-w-[350px] md:mx-auto dark:bg-white ring rounded ring-gray shadow dark:shadow-blue dark:ring-blue p-5 flex flex-col sm:flex-row  md:flex-col  xl:flex-row xl:min-w-[487px] justify-between gap-4">
              <div className="relative min-w-[250px] min-h-[250px]">
                <Image
                  src="/images/ineke.webp"
                  alt="NairoBits Co-Trust Founder Ineke Aquarius"
                  fill
                  className="object-cover aspect-square rounded dark:grayscale-100"
                />
              </div>
              <div className="grow text-black dark:text-black font-sans text-base flex flex-col justify-between">
                <p>
                  When we started it was never the plan to develop it into a
                  school, but was more of a project. But because of their
                  enthusiasm and creativity it developed into a permanent
                  school. There is something about NairoBits that works. That
                  survives every storm and changes with the tides.
                </p>
                <footer className="flex justify-between gap-3 mt-4">
                  <div className="grow">
                    <h3 className="font-sans font-bold text-base text-blue dark:text-blue">
                      Ineke Aquarius
                    </h3>
                    <h4 className="font-sans text-base text-blue dark:text-blue">
                      Co-founder NairoBits Trust.
                    </h4>
                  </div>
                  <Link
                    href="https://linkedin.com"
                    title="linkend founder link"
                    target="_blank"
                    className="relative inline-block w-8 h-8 self-end"
                  >
                    <Image
                      src="/images/flin.png"
                      alt="Co-founder linkedin link icon"
                      fill
                      className="object-fit dark:contrast-0"
                    />
                  </Link>
                </footer>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default page