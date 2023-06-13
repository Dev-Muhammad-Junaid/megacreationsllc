import React, { useRef } from 'react';

import Container from '../components/Container';
import Hero from '../components/Hero';
import ThemeLink from '../components/ThemeLink';
import Layout from '../components/Layout/Layout';

import * as styles from './about.module.css';
const AboutPage = (props) => {
  let historyRef = useRef();
  let valuesRef = useRef();
  let sustainabilityRef = useRef();

  const handleScroll = (elementReference) => {
    if (elementReference) {
      window.scrollTo({
        behavior: 'smooth',
        top: elementReference.current.offsetTop - 280,
      });
    }
  };

  return (
    <Layout disablePaddingBottom>
      <div className={styles.root}>
        {/* Hero Container */}
        <Hero
          maxWidth={'900px'}
          image={'/about.png'}
          title={`Megacreations \n A American brand since 2018`}
        />

        <div className={styles.navContainer}>
          <ThemeLink onClick={() => handleScroll(historyRef)} to={'#history'}>
            History
          </ThemeLink>
          <ThemeLink onClick={() => handleScroll(valuesRef)} to={'#values'}>
            Values
          </ThemeLink>
          <ThemeLink
            onClick={() => handleScroll(sustainabilityRef)}
            to={'#sustainability'}
          >
            Sustainability
          </ThemeLink>
        </div>

        <Container size={'large'} spacing={'min'}>
          <div className={styles.detailContainer} ref={historyRef}>
            <p>
            Welcome to Megacreations! We are an innovative and dynamic LLC that specializes 
            in social media promotion on Facebook and offers exceptional content creation services. 
            Our goal is to empower individuals, businesses, and organizations to harness the power 
            of social media to connect, engage,and grow their online presence.
            </p>
            <br />
            <br />
            <p>
            At Megacreations, we understand the immense impact that a well-crafted social media strategy
             can have on your brand's success. With over [insert number] years of experience in the industry,
             our team of dedicated professionals is committed to helping you navigate the ever-changing 
             landscape of social media marketing.

            </p>
          </div>
        </Container>

        <div className={styles.imageContainer}>
          <img alt={'shirt brand'} src={'/about1.png'}></img>
        </div>

        <Container size={'large'} spacing={'min'}>
          <div className={styles.content}>
            <h3>Our Values</h3>
            <div ref={valuesRef}>
              <p>
              Our talented team of content creators is passionate about bringing your brand's story to life. Whether it's eye-catching visuals, engaging videos, or captivating written content, we craft compelling assets that resonate with your target audience and leave a lasting impression.
              </p>
              <ol>
                <li>Be an ecowear</li>
                <li>Sophisticated and not mass-produced</li>
                <li>Only natural materials</li>
              </ol>
              <img alt={'founder'} src={'/about2.png'}></img>
            </div>
            <h3>Sustainability</h3>
            <div id={'#sustainability'} ref={sustainabilityRef}>
              <p>
              We believe that a successful social media presence requires a solid strategy. Our experienced strategists provide expert guidance and consultation, helping you identify your goals, target the right audience, and develop an effective roadmap to achieve long-term success.
              </p>
              <p>
              We understand the importance of data-driven decision-making. Through in-depth analytics and insightful reporting, we provide you with valuable insights into the performance of your social media campaigns. This allows you to continuously optimize your strategy and maximize your return on investment..{' '}
              </p>
              <p>
              Client-Centric Approach: At Megacreations, we prioritize our clients and their unique needs. We take the time to understand your brand, goals, and target audience, enabling us to provide personalized solutions that align with your vision and objectives.
              </p>
            </div>
          </div>
        </Container>

        <div className={styles.imageContainer}>
          <img alt={'shirt backwards'} src={'/about3.png'}></img>
        </div>
      </div>
    </Layout>
  );
};

export default AboutPage;
