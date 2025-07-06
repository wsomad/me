import React from 'react';
import About from '../components/sections/about/AboutIndex';
import Project from '../components/sections/project/ProjectIndex';
import Stacks from '../components/sections/stack/StackIndex';
import Experience from '../components/sections/experience/ExperienceIndex';
import Section from '../app/section';

const HomePage: React.FC = () => {
  return (
    <main className="flex flex-col">
      <Section>
        <About />
      </Section>

      <Section className="mt-10">
        <Experience />
      </Section>

      <Section className="mt-10">
        <Project />
      </Section>

      <Section className="mt-10">
        <Stacks />
      </Section>
    </main>
  );
};

export default HomePage;
