import React from 'react';
import { Switch, Route } from 'react-router-dom';

import ClassDemoPage_78 from './pages/ClassDemoPage_78';
import W16_NavbarPage_78 from './pages/w16/W16_NavbarPage_78'
import W14_HooksT41Page_78 from './pages/w14/W14_HooksT41Page_78'
import W14_HooksT43Page_78 from './pages/w14/W14_HooksT43Page_78'

const App_xx = () => {
  return (
  <>
      <Switch>
        <Route exact path='/' component={ClassDemoPage_78} />
        <Route exact path='/w14' component={W14_HooksT41Page_78} />
        <Route exact path='/w14/T41' component={W14_HooksT41Page_78} />
        <Route exact path='/w14/T43' component={W14_HooksT43Page_78} />
      </Switch>
  </>
  );
};

export default App_xx;
