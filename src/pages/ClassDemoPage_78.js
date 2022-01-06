import React from 'react';
import Grocery_78 from '../demo/grocery/Grocery_78';
import Navbar_78 from '../demo/navbar/Navbar_78'

import {links, social} from './nav_data';

const ClassDemoPage_78 = () => {
  return (
  <>
  <Navbar_78 links={links} social={[]} />
  <Grocery_78 />
      
  </>
  );
};

export default ClassDemoPage_78 ;