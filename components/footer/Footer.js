import React from "react";
import {
  foterContainer,
  thirdSection,
  firstSection,
  icons,
  secondSection,
  forthSection,
  footerWraper,
  copyRightText
} from "./Footer.module.css";
import EmailImage from "../../public/img/Freelancing Website UI (Community)/email.png";
import FacebookImage from "../../public/img/Freelancing Website UI (Community)/facebook.png";
import PhoneImage from "../../public/img/Freelancing Website UI (Community)/phone.png";
import LocationImage from "../../public/img/Freelancing Website UI (Community)/location.png";
import InstagramImage from "../../public/img/Freelancing Website UI (Community)/instagram.png";
import TwitterImage from "../../public/img/Freelancing Website UI (Community)/twitter.png";
import Image from "next/image";

const Footer = () => {
  return (
    <div className={foterContainer}>
      <div className={footerWraper}>
        <div className={firstSection}>
          <h3>Logo</h3>
          <p>
            Powerful Freelance Marketplace System with ability to change the
            Users (Freelancers & Clients)
          </p>
          <div className={icons}>
            <Image
              src={InstagramImage}
              width={20}
              height={20}
              objectFit="cover"
              alt=""
            />
            <Image
              src={TwitterImage}
              width={20}
              height={20}
              objectFit="cover"
              alt=""
            />
            <Image
              src={FacebookImage}
              width={20}
              height={20}
              objectFit="cover"
              alt=""
            />
          </div>
        </div>
        <div className={secondSection}>
          <h3>For Clients</h3>
          <ul>
            <li>Find Freelancers</li>
            <li>Post Project</li>
            <li>Refund Policy</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
        <div className={thirdSection}>
          <h3>For Freelancers</h3>
          <ul>
            <li>Find Work</li>
            <li>Create Account</li>
          </ul>
        </div>
        <div className={forthSection}>
          <h3>Call Us</h3>
          <ul>
            <li>
              {" "}
              <Image
                src={LocationImage}
                width={15}
                height={15}
                objectFit="cover"
                alt=""
              />
              India
            </li>
            <li>
              {" "}
              <Image
                src={PhoneImage}
                width={15}
                height={15}
                objectFit="cover"
                alt=""
              />
              +91 8606113002
            </li>
            <li>
              {" "}
              <Image
                src={EmailImage}
                width={15}
                height={15}
                objectFit="cover"
                alt=""
              />
              help@findWorkers.in
            </li>
          </ul>
        </div>
      </div>
      <p className={copyRightText}>2022 Spacelance. All right reserved</p>
    </div>
  );
};

export default Footer;
