import React from 'react'
import {MenuList} from '../data/data'
import Layout from '../components/Layout/Layout'
import {Box, Card, CardActionArea, CardContent, CardMedia, Typography,IconButton} from '@mui/material'
import { useState } from 'react'



import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
const Menu = () => {
  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    setCart([...cart, item]);
  };
  return (
    <Layout>
      <h3 style={{fontFamily:'bookman',
      textAlign:'center',
      fontSize:'40px',
      padding:'40px',
      color:'black'
      
      }}>OUR MENU</h3>
     
       <Box sx={{display:'flex', flexWrap:'wrap',justifyContent:'center'}}>
        {
               MenuList.map(menu =>(
                <Card sx={{maxWidth:'200px', display:'flex',m: 3}}>
                <CardActionArea>
                  <CardMedia sx={
                  {minHeight:'100px'}} 
                  component={'img'} 
                  src={menu.image}
                  alt={menu.Name}/>
                  <CardContent>
                    <Typography variant='h5' gutterBottom component={'div'}>
                      {menu.Name}
                    </Typography>
                    <Typography variant='body2' gutterBottom component={'div'}>
                      {menu.description}
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <IconButton
              sx={{ position: 'absolute', top: 10, right: 10 }}
              color="primary"
              onClick={() => addToCart(menu)}
              aria-label="add to cart"
            >
              <AddShoppingCartIcon />
            </IconButton>
              </Card>
             ))
        }
       </Box>
       <h3 style={{ fontFamily: 'bookman', textAlign: 'center', fontSize: '40px', padding: '40px', color: 'black' }}>
        CART
      </h3>
      <Box sx={{ display: 'flex', flexWrap: 'wrap', marginBottom: 20 }}>
        {cart.map((item) => (
          <Card key={item.id} sx={{ maxWidth: 200 }}>
            <CardActionArea>
              <CardMedia sx={{ minHeight: '100px' }} component={'img'} src={item.image} alt={item.Name} />
              <CardContent>
                <Typography variant="h5" gutterBottom component={'div'}>
                  {item.Name}
                </Typography>
                <Typography variant="body2" gutterBottom component={'div'}>
                  {item.description}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        ))}
      </Box>
    </Layout>
  );
};


export default Menu;