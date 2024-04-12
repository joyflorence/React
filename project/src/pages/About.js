import React from 'react'
import Layout from '../components/Layout/Layout'
import { Box, Typography } from '@mui/material';

const About = () => {
  return (
   <Layout>
    <Box sx={{
      my: 15,
      textAlign:'center',
      '& h4':{
        fontWeight:'bold',
        my: 2,
        fontSize:'3rem'
      },
      '& p':{
        textAlign:'justify'
      },
      '@media (max-width:600px)':{
        mt:0,
        '& h4':{
          fontSize:'1.5rem'
        }
      }
    }}>
      <Typography variant='h4'>
        WELCOME TO MY RESTAURANT
      </Typography>
      <p>
      Where every flavor tells a story.
      For the love of delicious food.
      Sensory indulgence unlocked.
      Your culinary adventure awaits.
      Low cost. High quality.
      We are always here to serve you.
      Life is short, make it sweet.
      A taste you'll remember.
      Your interest is our priority, 
      just make you order and we'll serve you
      </p>
      <br/>
    </Box>
   </Layout>
  );
};

export default About;