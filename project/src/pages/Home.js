// import React from 'react'
// import Layout from '../components/Layout/Layout'
// import { Link } from 'react-router-dom';

// const Home = () => {
//   return (
//     <Layout>
//         <div className='home'>
//         <img src="/images/banner.jpeg" alt="B" />
//           <div className='headerContainer'>
//             <h1>FOOD WEBSITE</h1>
//            <p>UGANDA'S BEST FOOD</p>
//            <Link to='/menu'></Link>
//             <button>
//               ORDER NOW
//             </button>
//           </div>
//         </div>
//     </Layout>
//   );
// };

// export default Home;



import React from 'react';
import Layout from '../components/Layout/Layout';
import { Link } from 'react-router-dom';
import '../style/HomeStyle.css'
import Banner from '../images/banner.jpeg'

const Home = () => {
  return (
    <Layout>
      <div className='home' style={{backgroundImage:`url(${Banner})`}}>
        
        <div className='headerContainer'>
          <h1>FOOD WEBSITE</h1>
          <p>UGANDA'S BEST FOOD</p>
          <Link to='/menu'>
            <button>
              ORDER NOW
            </button>
          </Link>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
