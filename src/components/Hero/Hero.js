import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center> 
         Welcome to <br/>
         My Personal Portfolio
      </SectionTitle>
      <SectionText>
        Myself Bagio, <br/>
        who loves programming and have a passion for developing web and mobile applications  
      </SectionText>
      <Button onClick={() => window.open("https://github.com/bxgio/My-Personal-Profile", "_blank")}>Learn More</Button>
    </LeftSection>
  </Section>
);

export default Hero;
