import { Metadata } from "next";
import Image from 'next/image';
import logo_img from '/public/logo_lpec.png';

export const metadata: Metadata = {
  title: "Landing Page - Les potes En ciel",
  description: "Landing Page - Les Potes En Ciel",
};

import React from 'react';
import { Button } from 'react-bootstrap';

function App() {
  return (
    <div className="landing">
      <div className="banner">
        <Image src={logo_img} alt="LPEC logo" className="bannerLogo" />
      </div>
      
      <section id="header">
        <h1>Les Potes En Ciel</h1>
        <p>Reinforcing online presence and community involvement for the well-being of children and families.</p>
        <nav>
          <Button variant="primary" href="#intro">Intro</Button>
          <Button variant="primary" href="#features">Features</Button>
          <Button variant="primary" href="#about">About me</Button>
        </nav>
        <Button variant="primary" href="/">Access &quot;Les Potes En Ciel&quot; web application</Button>
      </section>

      <section id="features">
        <h2>Key features</h2>
        <h3>Library</h3>
        <p>Access a collection of books available in the association&apos;s library, with the option to borrow or cancel reservations online. Our library offers books for children and families, ensuring that everyone can find something of interest. With easy-to-use online tools, you can search the catalog, reserve books and manage your borrowing history. Whether you&apos;re looking for educational material, story books or recreational reading, our library has something for everyone.</p>
        <img src="/landing_page/screenshot_library.png" alt="Library" />
        <h3>Authentification</h3>
        <p>Log in using our authentication system, which allows you not only to change your password, but also to register new users. New users can easily create an account, and existing users can manage their profile and credentials with ease. The authentication process is designed to be user-friendly, so that even people with minimal technical skills can navigate it effortlessly. With features such as password recovery, multi-factor authentication.</p>
        <img src="/landing_page/screenshot_authentification.png" alt="Authentification" />
        <h3>Newsletter subscription</h3>
        <p>Keep up to date with the latest news and events from our association by subscribing to our newsletter. Our newsletter regularly informs you of upcoming activities, special events and important announcements. By subscribing, you&apos;ll receive exclusive content, member testimonials and information on the impact of our community. Whether it&apos;s a new initiative, a success story or opportunities to get involved, our newsletter ensures you don&apos;t miss a thing. Stay in touch with our dynamic community with our informative and attractive newsletter.</p>
        <img src="/landing_page/screenshot_newsletter_subscription.png" alt="Newsletter subscription" />
      </section>

      <section id="about">
        <h2>About me</h2>
        <p>
        As a volunteer mom for three years with Les Potes en Ciel, I saw the need to modernize the association&apos;s communication tools and make our library more accessible. This project was inspired by this need to improve member engagement, facilitate interaction with the community and enable simplified access to our library resources. Thanks to our online platform, you can easily browse our catalog, reserve books or cancel reservations. This system simplifies the lending process and enables our community to take full advantage of the resources available. It&apos;s also a portfolio project for Holberton School, aimed at demonstrating my skills in web development and project management.
        </p>
        <div className="team-links">
          <Button variant="primary" href="https://www.holbertonschool.fr/">Holberton</Button>
          <Button variant="primary" href="https://github.com/amandinekemp?tab=repositories">GitHub</Button>
          <Button variant="primary" href="https://www.linkedin.com/in/amandinekemp/">Linkedin</Button>
        </div>
        <Button variant="primary" href="https://github.com/amandinekemp/Les_Potes_En_Ciel">GitHub repository</Button>
      </section>

    </div>
  );
}

export default App;
