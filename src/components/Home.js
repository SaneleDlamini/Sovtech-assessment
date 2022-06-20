import React from 'react';
import Card from './UI/Card';

const Home = () => {
    return (
        <div className='container'>
          <div className='home'>
            <Card title='INTRODUCTION' 
                  content='I Sanele Dlamini, 26 years of age, I am an outgoing, dedicated, and open minded, I am also good with 
                     computer skills and they have improved with my tertiary experience. I am very energetic, 
                     ambitious with an optimistic outlook on all things in life. I get across to people and adjust to changes with ease. 
                     I pay attention to detail'
            />
            <div className='middle-card'>
               <Card title='EDUCATION' 
                     content='I am a rosebank graduate, i obtained higher certificate in Information Technology in support
                     services in 2016, i obtained my diploma in Information Technology in software development. There after i 
                     never stopped learning, i have various of Udemy certificate of completion.' 
               className='middle-card-background'
               />
            </div>
            <Card title='WHY GRADUATE PROGRAMME' 
                  content='The main purpose of joining the graduate programme is to learn, as a junior develeoper
                  i want to grow, i want to enhance my knowledge in software development space. Seeing myself as 
                  one of the great full stack developer is something that i am loking forward to, i strongly believe
                  this programme would be the great first step.' 
            />
          </div>
        </div>
    )
}

export default Home;
