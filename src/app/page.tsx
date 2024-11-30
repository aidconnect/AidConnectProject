"use client";
import Image from "next/image";
import Link from "next/link";
import Statistics from "./stats";
import { FormEvent } from "react";

export default function Home() {
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const response = await fetch("/api/mail", {
      method: "POST",
      body: JSON.stringify({
        name: formData.get("name"),
        email: formData.get("email"),
        phone: formData.get("phone"),
        message: formData.get("message"),
      }),
    });
    if (response) {
      alert("Feedback submitted successfully!");
    }
  };

  return (
    <>
      <head>
        <title>AidConnect</title>
      </head>
      <body>
        <nav className="navbar">
          <Link href={"/"}>
            <Image
              className="title"
              priority={true}
              src={"/AidConnect Logo2.png"}
              width={600}
              height={300}
              alt="Aid Connect"
            />
          </Link>
          <Link href="#home">
            <button className="home">HOME</button>
          </Link>
          <Link href="#about">
            <button className="about">ABOUT</button>
          </Link>
          <Link href={"/campaigns"}>
            <button className="campaigns">CAMPAIGNS</button>
          </Link>
          <Link href={"/donations"}>
            <button className="volunteer">DONATIONS</button>
          </Link>
          <Link href="#contact">
            <button className="contact">CONTACT</button>
          </Link>
          <Link href={"/login"}>
            <button className="login">LOGIN</button>
          </Link>
        </nav>

        <div className="image">
          <div className="help1">
            <Image
              className="smile"
              src={"/helping.avif"}
              width={600}
              height={300}
              alt="Child"
            />
          </div>
          <div className="help2">
            <p>Spreading smiles, beyond borders!</p>
          </div>
          <div className="center_line"></div>
        </div>
        <div className="what" id="about">
          <div className="card">
            <div className="front">
              <p className="is">
                What <br />
                is <br />
                <b className="AidConnect">Aid Connect</b>?
              </p>
            </div>
            <div className="back">
              <p className="desc">
                AidConnect is a decentralized charity portal which aims at
                integrating security, transparency and tracking for your
                valuable donations to various NGOs.
              </p>
            </div>
          </div>
        </div>
        <div className="why">
          <div className="card">
            <div className="front">
              <p className="is">
                Why <br />
                use <br />
                <b className="AidConnect">Aid Connect</b>?
              </p>
            </div>
            <div className="back">
              <p className="desc">
                Use AidConnect to harness a secure, trustable and transparent
                environment where you get to track each and every donation you
                make.
              </p>
            </div>
          </div>
        </div>
        <div className="how">
          <div className="card">
            <div className="front">
              <p className="is">
                How <br />
                to use <br />
                <b className="AidConnect">Aid Connect</b>?
              </p>
            </div>
            <div className="back">
              <p className="desc">
                Register under the required role you seek. Access the
                corresponding dashboard. Use the available features to their
                fullest.
              </p>
            </div>
          </div>
        </div>
        <Statistics />
        <form className="feedback" id="contact" onSubmit={handleSubmit}>
          <div className="up">
            <div className="send">
              <p className="value">We value your precious feedback ...</p>
            </div>
            <div className="four">
              <div className="input">
                <textarea
                  name="message"
                  placeholder="Your Message"
                  required
                ></textarea>
              </div>
            </div>
            <div className="button">
              <input type="submit" value={"Send"}></input>
            </div>
          </div>
          <div className="down">
            <div className="one">
              <div className="input1">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  required
                ></input>
              </div>
            </div>
            <div className="two">
              <div className="input">
                <input
                  type="text"
                  name="email"
                  placeholder="Your Email"
                  required
                ></input>
              </div>
            </div>
            <div className="three">
              <div className="input3">
                <input
                  type="text"
                  name="phone"
                  placeholder="Your Phone No."
                ></input>
              </div>
            </div>
          </div>
        </form>
        <footer>
          <p>Designed with Love, developed with Passion</p>
        </footer>
      </body>
    </>
  );
}
