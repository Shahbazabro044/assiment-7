"use client"
import Head from 'next/head';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>My Portfolio</title>
        <meta name="description" content="My personal portfolio website" />
      </Head>

      <header>
        <nav>
          <ul>
            <li><Link href="#home">Home</Link></li>
            <li><Link href="#about">About</Link></li>
            <li><Link href="#skills">Skills</Link></li>
            <li><Link href="#contact">Contact</Link></li>
          </ul>
        </nav>
      </header>

      <main>
        <section id="home" className="section home">
          <h1>SHAHBAZ ABRO </h1>
          <p>Hi! I'm a Web Developer. Welcome to my personal website.</p>
        </section>

        <section id="about" className="section">
          <h2>About Me</h2>
          <p>I am passionate about building interactive and responsive websites.</p>
        </section>

        <section id="skills" className="section">
          <h2>My Skills</h2>
          <ul>
            <li>HTML & CSS</li>
            <li>JavaScript</li>
            <li>React.js</li>
            <li>Next.js</li>
            <li>Node.js</li>
          </ul>
        </section>

        <section id="contact" className="section">
          <h2>Contact Me</h2>
          <p>You can reach out to me via email: <a href="mailto:email@example.com">shahbazbaloch0449@gmail.com</a></p>
        </section>
      </main>

      <footer>
        <p>&copy; 2024 My Portfolio. All rights reserved.</p>
      </footer>

      <style jsx>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        body {
          font-family: 'Arial', sans-serif;
          background-color: #f4f4f9;
        }

        header {
          background-color: #333;
          color: white;
          padding: 10px;
          text-align: center;
        }

        nav ul {
          list-style-type: none;
        }

        nav ul li {
          display: inline;
          margin-right: 15px;
        }

        nav ul li a {
          color: white;
          text-decoration: none;
        }

        .container {
          padding: 20px;
        }

        .section {
          margin: 40px 0;
        }

        .home {
          text-align: center;
          padding: 60px 0;
          background-color: #282c34;
          color: white;
        }

        .home h1 {
          font-size: 3rem;
        }

        .home p {
          font-size: 1.2rem;
        }

        footer {
          text-align: center;
          background-color: #333;
          color: white;
          padding: 10px;
          margin-top: 40px;
        }

        a {
          color: #3498db;
        }
      `}</style>
    </div>
  );
}
