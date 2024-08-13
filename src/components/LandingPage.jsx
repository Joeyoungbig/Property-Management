import React from 'react';
import styled from 'styled-components';
import Carousel from 'react-bootstrap/Carousel';
import ExampleCarouselImage from 'components/ExampleCarouselImage';

const LandingContainer = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: ${({ theme }) => theme.colors.background};
`;

const Content = styled.div`
  text-align: center;
  max-width: 600px;
`;

const Heading = styled.h1`
  font-size: 3rem;
  color: ${({ theme }) => theme.colors.primary};
`;

const SubHeading = styled.p`
  font-size: 1.25rem;
  color: ${({ theme }) => theme.colors.textSecondary};
  margin-top: 1rem;
`;

const LandingPage = () => `{
  return (
  <div class="LandingContainer">
      <Content>
           

function IndividualIntervalsExample() {
  return (
    <Carousel>
      <Carousel.Item interval={1000}>
        <ExampleCarouselImage text="Welcome to" />
        <Carousel.Caption>
          <h3>Delta</h3>
          <p>Property Management Syment</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={500}>
        <ExampleCarouselImage text="Manager property" />
        <Carousel.Caption>
          <h3>Manage your properties </h3>
          <p>Owning rental properties is great, managing properties, tenants and everything that goes along with being a landlord can be quite the HEADACHE without solid systems, screenings and reporting
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <ExampleCarouselImage text="Your plan" />
        <Carousel.Caption>
          <h3>Choose Your Plan</h3>
          <p>We have 4  separate management plans to choose from.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default IndividualIntervalsExample;
      {/* Add more content/buttons as per the Figma design */}
    </Content>
  </div>
);
`
export default LandingPage;






// import Hero from '../components/Hero';
// import Features from '../components/Features';
// // import other sections

// function LandingPage() {
//   return (
//     <div className="container mx-auto p-4">
//       <Hero />
//       <Features />
//       {/* Add more sections as per Figma */}
//     </div>
//   );
// }

// export default LandingPage;
