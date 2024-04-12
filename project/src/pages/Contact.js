import React from 'react'
import Layout from '../components/Layout/Layout'
import { Box, Table, TableCell, TableContainer, TableHead, TableRow, Typography, Paper, TableBody } from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import CallIcon from '@mui/icons-material/Call';
const Contact = () => {
  return (
    <Layout>
       <Box sx={{
        my: 10,
        ml: 10,
        '& h4':{
          fontWeight:'bold',
          mb: 2
        }

        }}>
        <Typography variant='h4'>Contact My Restaurant</Typography>
        <p>We are at your Service All day long</p>
       </Box>
       <Box sx={{
        m: 3, 
       width:'600px',
       ml: 10, 
      '@media(max-width:600px)':{
      width: '300px,'
      }
      }}>
        <TableContainer component={Paper}>
          <Table arial-label='contact table'>
            <TableHead>
              <TableRow>
                <TableCell sx={{bgcolor:'black',color:'white'}} align='center'>Contact Details</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell>
                <SupportAgentIcon sx={{color:'red', pt: 0.2,}}/> 123456789 (Tollfree)
                </TableCell>
              </TableRow>
              <TableRow>
              <TableCell>
                <EmailIcon sx={{color:'skyblue', pt: 1,}}/> Help@myrest.com
                </TableCell>
              </TableRow>
              <TableRow>
              <TableCell>
                <CallIcon sx={{color:'black', pt: 1,}}/> 004453423
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
       </Box>
    </Layout>
  );
};

export default Contact;