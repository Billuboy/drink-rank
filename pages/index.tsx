import React from 'react';

import type { NextPage } from 'next';

import StyleSections from '@components/styles';
import SEO from '@components/SEO';

const StylesPage: NextPage = function () {
  return (
    <>
      <SEO
        title="BEV RANK"
        description="Bev Rank helps you rank your beverages from best to worst"
      />
      <StyleSections />
    </>
  );
};

export default StylesPage;
