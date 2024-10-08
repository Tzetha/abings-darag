'use client'

import Image from 'next/image';
import { FC } from 'react';
import { isMobile } from 'react-device-detect';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import './globals.css';

const HomePage: FC = () => {
  return (
    <>
      {/* Hero Section */}
      <section
        className="relative flex-grow -mt-10 py-16 md:py-32 lg:py-52"
        style={{
          backgroundImage: 'url("/images/store.jpg")',
          backgroundSize: 'cover',
          backgroundPosition: 'top',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <div className="absolute inset-0 bg-black opacity-80"></div>
        <div className="container mx-auto text-center text-white relative z-10 px-4">
          <h1 className="text-3xl md:text-6xl lg:text-8xl font-bold leading-tight mb-4 lg:-mt-10">
            Discover the Pride of West Visayas
          </h1>
          <p className="mt-7 text-sm md:text-lg lg:text-3xl">
            Abing&apos;s Darag Chicken - Bringing the best of local flavors
          </p>
          <a
            href="#what-is-darag"
            className="mt-12 inline-block bg-red-700 text-white font-semibold py-2 px-4 rounded-md shadow-lg hover:bg-red-600 transition-transform transform hover:scale-105"
          >
            Learn More About Darag
          </a>
        </div>
      </section>

      {/* What is Darag Chicken? */}
      <section id="what-is-darag" className="p-4 md:p-8 text-black mt-8 md:mt-16">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-8 md:mb-12 text-center">What is Darag Chicken?</h2>
        
        <div className="flex flex-col md:flex-row items-start gap-4">
          <div className="flex-1">
            <p className="text-base md:text-lg text-justify">
              This chicken breed originates from Panay Island in the Western Visayas, near the world-famous beaches of Boracay.
              It is rapidly rising in popularity for very good reason. The typical plumage for roosters, locally called Labuyo or Alimbuyog,
              is a deep red hackle and wings, plus ebony feathers and a matching black tail, though other color morphs are seen.
              Hens have sandy or yellowish-brown plumage. Cocks weigh an average of 1.3 kilogrammes while hens reach about 1.1 kilogrammes.
              Known for their economical feeding habits, Darag chickens are ready for harvest after around 10 weeks.
              Traditionally used for the region’s famed Inasal or barbecued chicken or the more ubiquitous Filipino Tinola or chicken soup, the breed offers distinctively-lean,
              smokey and flavourful meat.
            </p>
          </div>
          
        </div>

        <div className="mt-4">
          <p className="text-base md:text-lg text-justify">
            Darag refers to Philippine native chicken that predominates primarily in Western Visayas most especially in the island of Panay. 
            These chickens descended from the indigenous Red Jungle Fowl (Gallus bankiva). They are known as having the same color and they forage 
            in the wild and look for their own food. They can reproduce and survive with minimal care and management.
          </p>
        </div>
        <div className="flex justify-center items-center mt-12">
            <iframe
              width="100%"
              height="auto"
              src="https://www.youtube.com/embed/okVNNoqwRHA"
              title="Darag Chicken Video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="rounded-lg shadow-lg w-full h-[250px] sm:w-[590px] sm:h-[315px]"
            />
          </div>
      </section>

      {/* Why Darag Chicken? */}
      <section id="why-darag" className="bg-gray-100 p-4 md:p-8 text-black mt-8">
        <h2 className="text-2xl md:text-3xl font-semibold mb-8">Why Darag Chicken?</h2>
        
        <div className="grid gap-6 md:gap-8 md:grid-cols-2 lg:grid-cols-3 mb-8">
          <div className="bg-white p-4 md:p-6 rounded-lg shadow-lg transform transition-transform hover:scale-105 hover:shadow-xl hover:bg-red-50">
            <div className="flex items-center mb-4">
              <svg
                className="w-6 h-6 md:w-8 md:h-8 text-red-500 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4"></path>
              </svg>
              <h3 className="text-lg md:text-xl font-semibold">Superior Taste</h3>
            </div>
            <p className="text-sm md:text-base">
              Darag chicken offers a rich and unique flavor profile that stands
              out from other breeds...
            </p>
            {/* Image for Superior Taste */}
            <div className="mt-4">
              <Image
                src="/images/Taste.jpg"
                alt="Delicious Darag Chicken Dish"
                layout="responsive"
                width={600}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
          <div className="bg-white p-4 md:p-6 rounded-lg shadow-lg transform transition-transform hover:scale-105 hover:shadow-xl hover:bg-red-50">
            <div className="flex items-center mb-4">
              <svg
                className="w-6 h-6 md:w-8 md:h-8 text-red-500 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4"></path>
              </svg>
              <h3 className="text-lg md:text-xl font-semibold">Health Benefits</h3>
            </div>
            <p className="text-sm md:text-base">
              Packed with essential nutrients and lower in fat, Darag chicken is
              a healthier choice...
            </p>
            {/* Image for Health Benefits */}
            <div className="mt-4">
              <Image
                src="/images/Health.jpg"
                alt="Healthy Meal with Darag Chicken"
                layout="responsive"
                width={600}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
          <div className="bg-white p-4 md:p-6 rounded-lg shadow-lg transform transition-transform hover:scale-105 hover:shadow-xl hover:bg-red-50">
            <div className="flex items-center mb-4">
              <svg
                className="w-6 h-6 md:w-8 md:h-8 text-red-500 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4"></path>
              </svg>
              <h3 className="text-lg md:text-xl font-semibold">Sustainable Farming</h3>
            </div>
            <p className="text-sm md:text-base">
              Darag chicken farming has a lower environmental impact, making it
              a sustainable choice...
            </p>
            {/* Image for Sustainable Farming */}
            <div className="mt-4">
              <Image
                src="/images/sustainable2.jpg"
                alt="Sustainable Chicken Farming"
                layout="responsive"
                width={600}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>

        <div className="flex justify-center">
          <iframe
            width="100%"
            height="auto"
            src="https://www.youtube.com/embed/x3JsMkvMFPg?si=yfMLs9KFlykSMPp3"
            title="Darag Chicken Benefits Video"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="rounded-lg shadow-lg w-full h-[250px] sm:w-[590px] sm:h-[315px]"
          />
        </div>
      </section>

      {/* Success Story with Carousel */}
      <section id="success-story" className="p-4 md:p-8 text-black mt-10">
        <h2 className="text-2xl md:text-5xl font-bold mb-24 text-center">
          Who is Abing&apos;s Darag?
        </h2>
        <div className="flex flex-col md:flex-row items-start md:space-x-8">
          {/* Story Text */}
          <div className="md:flex-1 text-justify">
            <p className="text-base md:text-lg">
              Starting as a small karinderia, Abing&apos;s Darag has grown into a leading business, known for Darag chicken breeding
              baeufgfb ueghfbqfjqf9 hefpighq39[fqefh qpeiurghfpiqwbndpiqwhr ugwefuobweourg08qer]...
            </p>
            <br></br>
            <p className="text-base md:text-lg">
              The brand stands as a symbol of dedication to quality and local tradition.ebfuogqwfd qwgrougwjdebquowdf quowdfouqwvfdofuqwf
              qwfghqouwb yhffoqghwfo qw oiwgouqwgdoiqhw  dq iwghdouqwgdohqwfg ouqgfougqwfo qw Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
              Quas quod enim autem exercitationem quibusdam praesentium et corporis earum officia ut, voluptate voluptas quo officiis omnis maiores consequatur 
              dolorem, consectetur velit?
            </p>
          </div>

          {/* Image Carousel */}
          <div className="md:flex-1 mt-4">
            <Carousel
              showThumbs={false}
              infiniteLoop
              useKeyboardArrows={false}
              autoPlay
              dynamicHeight={false} // Prevent dynamic height adjustments
              showStatus={false}
              showIndicators
              showArrows
              swipeable={!isMobile}
            >
              <div>
                <Image
                  src="/images/store.jpg"
                  alt="Darag Chicken Breeding"
                  layout="responsive"
                  width={800}
                  height={400}
                  className="rounded-lg shadow-lg object-cover"
                />
              </div>
              <div>
                <Image
                  src="/images/store2.jpg"
                  alt="Darag Chicken Preparation"
                  layout="responsive"
                  width={800}
                  height={400}
                  className="rounded-lg shadow-lg object-cover"
                />
              </div>
              <div>
                <Image
                  src="/images/darag2.jpg"
                  alt="Abing's Darag Farm"
                  layout="responsive"
                  width={800}
                  height={400}
                  className="rounded-lg shadow-lg object-cover"
                />
              </div>
            </Carousel>
          </div>
        </div>
      </section>

      <section id="suppliers" className="p-4 md:p-8 text-black">
        <h2 className="text-2xl md:text-3xl font-semibold mb-4">Our Suppliers</h2>
        <p className="text-base md:text-lg">Diri namon gina kuha ang amon nga mga manok</p>
        <div className="mt-4">
          <Image
            src="/images/success.jpg"
            alt="Success Story"
            layout="responsive"
            width={600}
            height={400}
            className="rounded-lg shadow-lg"
          />
        </div>
      </section>
    </>
  );
};

export default HomePage;
