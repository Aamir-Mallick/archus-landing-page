import Image from "next/image";
import {
  AiOutlineTwitter,
  AiFillLinkedin,
  AiFillFacebook,
} from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";
import { BiLeftArrowCircle } from "react-icons/bi";
import { BiRightArrowCircle } from "react-icons/bi";

import { SvgOne } from "../svg/MultiModalShip";
import { SvgTwo } from "../svg/TrackSvg";
import { SvgThree } from "../svg/Alert";
import { Apl } from "../svg/AplLogo";
import { Evergreen } from "../svg/EverGreenLogo";
import { Archus } from "../svg/ArchusLogo";

import {
  CMA_LOGO,
  BG_IMAGE_URL,
  MAERKASR,
  CISCO,
  MSC_LOGO,
} from "../constants/Image";

export default function Home() {
  return (
    <>
      <div className='ml-16'>
        <Archus />
      </div>
      <div
        style={{
          backgroundImage: `url(${BG_IMAGE_URL})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className='h-[500px] w-full border-solid border-2'
      >
        <div className='gap-4 mt-20 flex items-center justify-center'>
          <div className='w-8 h-[1px]  bg-yellow-400'></div>
          <div className='text-yellow-400'>ARCHUS TRACKER</div>
          <div className='w-8 h-[1px] bg-yellow-400 text-yellow-400'></div>
        </div>
        <div className='mt-3 flex justify-center'>
          <div className='font-semibold text-white text-2xl md:text-3xl'>
            Single dashboard to
          </div>
        </div>
        <div className='mt-3 flex justify-center'>
          <div className='font-semibold text-white text-2xl md:text-3xl'>
            track shipments & containers
          </div>
        </div>
        <div className='mt-3 flex justify-center'>
          <div className='text-white text-center md:text-1xl'>
            Streamline shipments & container tracking to identify containers
            that
          </div>
        </div>
        <div className='mt-3 flex justify-center'>
          <div className='text-white text-1xl'>needs your attention.</div>
        </div>
        <div className='mt-10 flex justify-center'>
          <button className='w-36 h-10 bg-white text-blue-900 font-bold tesxt-1xl p-0 rounded'>
            Sign Up Now
          </button>
        </div>
      </div>
      <div className='bg-[url(../svg/logo.svg)]'>
        <div className='mt-14'>
          <p className='ml-14 text-2xl text-black'>Why Choose</p>
          <p className='ml-14 mt-2 text-2xl text-black font-semibold'>
            Archus Tracking Dashboard
          </p>
        </div>
        <div className='my-20'>
          <div className='flex flex-col md:flex-row md:flex md:justify-around'>
            <div className='md:w-60 md:mt-0 mt-5'>
              <div className='w-56 m-auto'>
                <SvgOne />
              </div>
              <p className='w-40 text-center m-auto'>
                Multimodal shipment tracking with real time status
              </p>
            </div>
            <div className='md:w-60 md:mt-0 mt-5'>
              <div className='w-56 m-auto'>
                <SvgTwo />
              </div>
              <p className='w-40 text-center m-auto'>
                Track shipments from multiple carrier
              </p>
            </div>
            <div className='md:w-60 md:mt-0 mt-5'>
              <div className='w-56 m-auto'>
                <SvgThree />
              </div>
              <p className='w-40 text-center m-auto'>
                Exception alerts via whatsapp & email
              </p>
            </div>
          </div>
        </div>
        <div className='md: p-2 mt-10 flex flex-col md:flex md:flex-row'>
          <div className='bg-[url(../svg/logo.svg)] md:w-1/3 md:h-[530px]'>
            <div className='md:py-0 py-4 md:mt-20'>
              <p className='md:ml-10 md:text-left text-center md:mt-10 md:text-3xl text-black'>
                How
              </p>
              <p className='md:ml-10 md:text-left text-center md:text-3xl text-black font-semibold'>
                How it Works?
              </p>
              <p className='md:ml-10 text-center md:w-32 md:mt-16 text-sm text-black'>
                We make shipment tracking magical.
              </p>
            </div>
          </div>
          <div className='md:w-2/3 h-96 md:h-[530px]'>
            <div
              style={{
                position: "relative",
              }}
            >
              <iframe
                width='100%'
                className='md:h-[530px] h-96'
                // className='w-full h-full'
                src='https://www.loom.com/embed/2634ec6cce63474fa01345040a30b56c'
                // frameBorder='0'
                allowFullScreen
                // mozallowfullscreen
                // allowfullscreen
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  // width: "100%",
                  // height: "100%",
                }}
              ></iframe>
            </div>
          </div>
        </div>
      </div>
      <div className='md:mt-16'>
        <p className='md:ml-10 md:text-left text-center md:mt-10 md:text-3xl text-black'>
          You can track
        </p>
        <p className='md:ml-10 md:mt-4 md:text-left text-center md:text-3xl text-black font-semibold'>
          Shipping Lines
        </p>
      </div>
      <div>
        <div className='flex justify-end'>
          <BiLeftArrowCircle
            style={{ color: "#1027E4", width: "30px", height: "30px" }}
          />
          <BiRightArrowCircle
            style={{
              color: "#1027E4",
              width: "30px",
              height: "30px",
              marginRight: "4rem",
            }}
          />
        </div>
      </div>
      <div className='mt-10 flex-wrap flex flex-row justify-around'>
        <div>
          <Image src={CMA_LOGO} alt={CMA_LOGO} width={120} height={73} />
        </div>
        <div>
          <Image src={MAERKASR} alt={MAERKASR} width={120} height={73} />
        </div>
        <div>
          <Apl />
        </div>
        <div>
          <Image src={CISCO} alt={CISCO} width={120} height={73} />
        </div>
        <div>
          <Image src={MSC_LOGO} alt={MSC_LOGO} width={120} height={33} />
        </div>
        <div>
          <Evergreen />
        </div>
      </div>
      <div className='mt-10 py-16 px-14 bg-[#F9FDFD]'>
        <div className='flex flex-col items-center gap-y-6 md:gap-y-0 md:flex md:flex-row md:justify-evenly'>
          <div className='w-56'>
            <h3 className='text-[#1027E4] font-semibold mb-4'>Archus</h3>
            <p>
              Lorem Ipsum is simply dummy textof the printing and typesetting
              industry.
            </p>
            <div className='mt-2 flex gap-x-2.5'>
              <AiOutlineTwitter style={{ color: "#1DA1F2" }} />
              <AiFillLinkedin style={{ color: "#1DA1F2" }} />
              <AiFillFacebook style={{ color: "#475993" }} />
              <FcGoogle />
            </div>
          </div>
          <div className='w-56'>
            <p className='font-semibold mb-4'>Lorem ipsum</p>
            <p>Track shipments and containers</p>
            <p>Track  Bill of lading</p>
            <p>Track MSC Container</p>
            <p>Track Maersk Container</p>
          </div>
          <div className='w-56'>
            <p className='font-semibold mb-4'>Top Companies</p>
            <p>Maersk Container Tracking</p>
            <p>MSC Container Tracking</p>
            <p>COSCO Container Tracking</p>
            <p>APL Container Tracking</p>
          </div>
        </div>
      </div>
      <div className='bg-[#F9FDFD] border-solid border-t-2'>
        <span className='ml-14'>Terms & Conditions</span>
        <span className='ml-14'>Privacy Policy</span>
      </div>
    </>
  );
}
