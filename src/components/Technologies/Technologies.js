import React from 'react';
import { DiChrome, DiDatabase, DiFirebase, DiGit, DiMysql, DiPython, DiReact, DiWebplatform, DiZend } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section id="tech">
    <SectionDivider/><br/><br/>
      <SectionTitle>Technical skills</SectionTitle>
        <SectionText>
          I am familiar with the following technologies
        </SectionText>
        <List>
          <ListItem>
            <DiChrome size="3rem"/>
            <ListContainer>
              <ListTitle>Front-end</ListTitle>
              <ListParagraph>
                
                React Native<br/>
                HTML<br/>
                Bootstrap<br/>
                Javascript
              </ListParagraph>
            </ListContainer>
          </ListItem>          <ListItem>
            <DiDatabase size="3rem"/>
            <ListContainer>
              <ListTitle>Back-end</ListTitle>
              <ListParagraph>
                
                Python<br/>
                Java<br/>
                PHP<br/>
                Sqlite<br/>
                MySql
              </ListParagraph>
            </ListContainer>
          </ListItem>         
          <ListItem>
            <DiGit size="3rem"/>
            <ListContainer>
              <ListTitle>Tools</ListTitle>
              <ListParagraph>
                
                Git<br/>
                GitHub<br/>
                MS PowerPoint<br/>
                MS Word<br/>
                Canva<br/>
                
              </ListParagraph>
            </ListContainer>
          </ListItem>
        </List>
  </Section>
);

export default Technologies;
