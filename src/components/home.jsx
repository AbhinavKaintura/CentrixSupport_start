import React from 'react';
import { Link } from 'react-router-dom';
import LogoImg from "../assets/icon.png"; 
import "./home.css"

const HomePage = () => {
  return (

    <div>
  <link rel="preconnect" href="https://fonts.googleapis.com"/>
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
  <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600&family=Lora:wght@400&display=swap" rel="stylesheet"/>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"/>

      <header>
    <div class="logo">CentrixSupport</div>
    <nav>
      <a href="#home">Home</a>
      <a href="#about">About</a>
      <a href="#features">Features</a>
      <a href="#resources">Resources</a>
      <a href="#contact">Contact</a>
      <a href="#get-help" class="get-help">Get Help</a>
    </nav>
  </header>

  <section id="home" class="hero">
    <div class="hero-content">
      <h1>Find Peace and Support<br/> with CentrixSupport</h1>
      <p>A chatbot dedicated to guiding you through stress and anxiety with empathy and resources for better mental health.</p>
      <br/>
      <a href="/chat" class="cta-button">Start Chatting</a>
    </div>
    <img src={LogoImg} alt="Logo" class="hero-image"/>
  </section>

  <section class="description">
    <h2>What is CentrixSupport?</h2>
    <p>CentrixSupport is your personal AI companion offering compassionate mental health support through meaningful conversations and guidance.</p>
  </section>

  <section id="features" class="features">
    <h2>Features</h2>
    <div class="features-grid">
      <div class="feature-item">
        <i class="fas fa-heartbeat"></i>
        <h3>Empathetic Responses</h3>
        <p>Experience a safe space where you feel heard and valued.</p>
      </div>
      <div class="feature-item">
        <i class="fas fa-hand-holding-heart"></i>
        <h3>Coping Mechanisms</h3>
        <p>Get practical exercises and tips to manage daily stress.</p>
      </div>
      <div class="feature-item">
        <i class="fas fa-spa"></i>
        <h3>Guided Relaxation</h3>
        <p>Access breathing exercises, meditation, and calming techniques.</p>
      </div>
      <div class="feature-item">
        <i class="fas fa-book"></i>
        <h3>Resource Links</h3>
        <p>Explore a curated selection of mental health resources and tools.</p>
      </div>
      <div class="feature-item">
        <i class="fas fa-user-md"></i>
        <h3>Professional Help</h3>
        <p>We’ll guide you towards professional help if needed.</p>
      </div>
    </div>
  </section>

  <section class="testimonials">
    <h2>What Users Say</h2>
    <blockquote>
      <p>"CentrixSupport helped me manage my stress levels in ways I never imagined."</p>
      <cite>- A Grateful User</cite>
    </blockquote>
  </section>

  <section class="faqs">
    <h2>FAQs</h2>
    <h3>Is this chatbot confidential?</h3>
    <p>Yes, your privacy is our priority, and all interactions are secure and confidential.</p>
    <h3>What types of support does it offer?</h3>
    <p>Empathetic responses, coping strategies, relaxation techniques, and referrals to resources.</p>
  </section>

  <footer>
    <p>&copy; 2024 CentrixSupport - All Rights Reserved</p>
  </footer>
    </div>
  );
};

export default HomePage;