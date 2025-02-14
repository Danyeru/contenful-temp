import heroImage from './assets/hero.svg';

const Hero = () => {
  return (
    <section className='hero'>
      <div className='hero-center'>
        <div className='hero-title'>
          <h1>Contentful Cms</h1>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorem
            quae praesentium doloribus aspernatur, saepe delectus quas ipsam at
            fugit magnam dolorum consectetur sit deleniti, a velit magni, atque
            aperiam natus.
          </p>
        </div>
        <div className='img-container'>
          <img src={heroImage} alt='woman and the browser' className='img' />
        </div>
      </div>
    </section>
  );
};
export default Hero;
