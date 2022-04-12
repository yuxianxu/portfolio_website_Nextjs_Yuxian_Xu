import Accomplishments from '../components/Accomplishments/Accomplishments';
// import BgAnimation from '../components/BackgrooundAnimation/BackgroundAnimation';
import Hero from '../components/Hero/Hero';
import Projects from '../components/Projects/Projects';
import Technologies from '../components/Technologies/Technologies';
import Timeline from '../components/TimeLine/TimeLine';
import {Img} from '../components/Hero/HeroStyles';
import { Layout } from '../layout/Layout';
import { SectionHero } from '../styles/GlobalComponents';

const Home = () => {
  return (
    <Layout>
      <SectionHero>
        {/* <BgAnimation /> */}
        <Img src="/images/hero.png" alt="avatar" />
        <Hero />
      </SectionHero>
      <Technologies />
      <Projects />
      <Timeline />
      <Accomplishments />
    </Layout>
  );
};

export default Home;
