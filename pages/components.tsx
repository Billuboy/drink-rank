import React from 'react';

import type { NextPage } from 'next';

<<<<<<< HEAD
const ComponentsPage: NextPage = function () {
  return (
    <div>
      <p>Components working</p>
    </div>
  );
=======
import ComponentSections from '@components/components';

const ComponentsPage: NextPage = function () {
  return <ComponentSections />;
>>>>>>> da311d1 (Reverted styles)
};

export default ComponentsPage;
