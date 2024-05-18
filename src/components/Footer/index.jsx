import bottomFooterBg from "../../assets/bottom-footer-bg.svg";
import footerBg from "../../assets/footer-bg.svg";
import footerLogo from "../../assets/footer-logo.png";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
  HiMail,
  FaPhoneAlt,
  FaLocationDot,
} from "../../assets/icons/Icons";
import SectionHeading from "../ui/SectionHeading";

const Footers = () => {
  const handleMessage = (e) => {
    e.preventDefault();
    alert("Message send successfully");
  };
  return (
    <div className="">
      {/* footer */}
      <div
        style={{ backgroundImage: `url('${footerBg}')` }}
        className="pt-28 pb-20"
      >
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-20">
          {/* left */}
          <div className="w-full">
            <img src={footerLogo} alt="" />
            <SectionHeading className="font-rancho text-5xl mt-6 text-coffee">
              Espresso Emporium
            </SectionHeading>
            <p className="text-xl font-raleway font-normal text-black-1 mt-8">
              Always ready to be your friend. Come & Contact with us to share
              your memorable moments, to share with your best companion.
            </p>
            <div className="flex flex-row items-center mt-8 gap-5">
              <a
                href="http://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebook className="text-3xl text-coffee" />
              </a>
              <a
                href="http://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaTwitter className="text-3xl text-coffee" />
              </a>
              <a
                href="http://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram className="text-3xl text-coffee" />
              </a>
              <a
                href="http://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin className="text-3xl text-coffee" />
              </a>
            </div>
            <div className="mt-8">
              <SectionHeading>Get in Touch</SectionHeading>
              {/* contact container */}
              <div className="mt-8 flex flex-col gap-4">
                {/* item 1 */}
                <div className="flex flex-row items-center gap-6 ">
                  <FaPhoneAlt className="text-lg text-coffee" />
                  <span className="text-xl font-normal text-black-1">
                    +88 01533 333 333
                  </span>
                </div>
                {/* item 2 */}
                <div className="flex flex-row items-center gap-6 ">
                  <HiMail className="text-lg text-coffee" />
                  <span className="text-xl font-normal text-black-1">
                    info@gmail.com
                  </span>
                </div>
                {/* item 3 */}
                <div className="flex flex-row items-center gap-6 ">
                  <FaLocationDot className="text-lg text-coffee" />
                  <span className="text-xl font-normal text-black-1">
                    72, Wall street, King Road, Dhaka
                  </span>
                </div>
              </div>
            </div>
          </div>
          {/* right */}
          <div className="w-full">
            <SectionHeading>Connect with Us</SectionHeading>
            <form
              onSubmit={handleMessage}
              className="mt-8 text-base font-raleway flex flex-col w-full  gap-2 "
            >
              <input
                type="text"
                name="name"
                placeholder="Name"
                className="p-4  rounded-md bg-white"
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                className="p-4  rounded-md bg-white"
              />
              <textarea
                name="message"
                placeholder="Message"
                className="p-4 h-32  rounded-md bg-white"
              ></textarea>
              <input
                type="submit"
                className="py-3 px-6 rounded-full border-coffee border-2 w-max font-rancho mt-4 text-2xl font-normal text-coffee cursor-pointer"
                value="Send Message"
              />
            </form>
          </div>
        </div>
      </div>
      {/* bottom footer */}
      <div
        style={{ backgroundImage: `url('${bottomFooterBg}')` }}
        className="py-4"
      >
        <p className="text-white font-rancho text-lg text-center">
          Copyright Espresso Emporium ! All Rights Reserved
        </p>
      </div>
    </div>
  );
};

export default Footers;
