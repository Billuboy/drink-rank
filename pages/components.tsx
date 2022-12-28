import React from 'react';

import type { NextPage } from 'next';

import ComponentSections from '@components/components';
import SEO from '@components/SEO';

const ComponentsPage: NextPage = function () {
  return (
    <>
      <SEO title="Components" description="Compoennts for BEV RANK" />
      <ComponentSections />
    </>
  );
};

export default ComponentsPage;
