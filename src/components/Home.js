import React from 'react';
import { useNavigate } from 'react-router-dom';
import './style.css';

function Home() {
  const navigate = useNavigate();

  function moveToDonations() {
    navigate('/donations');
  }

  return (
    <div className="Homepage">
      <header className="header">
        <h1>
          <em>Wood Land Organisation</em>
        </h1>
        <h4>Together we can.</h4>
      </header>
      <section className="section">
        <img
          src="https://scontent.fnbo17-1.fna.fbcdn.net/v/t39.30808-6/400126581_24140108235633916_4298415820636719644_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=efb6e6&_nc_ohc=p52v0ZUq9SAAX-btpNe&_nc_ht=scontent.fnbo17-1.fna&oh=00_AfDSL6AfR_NwxSOvixoLk8BA9pTQZf6Uuo8ObsgIa3oW6w&oe=65913121"
          alt="Try again"
        />
        <figcaption>
          <em>It all begins from a young stage.</em>
        </figcaption>
      </section>
      <main>
        <p>
          Welcome to our website dedicated to the noble cause of planting trees
          and nurturing our planet's green lifelines! At Woodland, we firmly
          believe in the profound impact trees have on our environment, from
          purifying the air we breathe to providing essential habitats for
          wildlife.
        </p>
        <p>
          Join us in our mission to sow the seeds of change by planting trees,
          fostering biodiversity, and combating climate change. Every sapling
          planted is a testament to our commitment to a sustainable future.
          Whether you're an environmental enthusiast, a community group, or a
          corporation looking to make a difference, our platform offers a range
          of opportunities to contribute, learn, and grow together.
        </p>
        <p>
          Together, let's cultivate a greener, healthier planet, one tree at a
          time. Join us in this enriching journey of nurturing nature and
          ensuring a thriving world for generations to come!
        </p>
        <p>
          You can also support our organization by{' '}
          <span onClick={moveToDonations} style={{ color: 'blue', cursor: 'pointer' }}>
            donating
          </span>
          .
        </p>
      </main>
    </div>
  );
}

export default Home;
