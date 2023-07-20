import React from 'react';
import { Sidebar } from 'widgets/Sidebar';

const CatalogPage = () => {
  return (
    <div>
      <div className="container">
        <div style={{ display: 'flex' }}>
          <Sidebar />
          <div style={{ flexGrow: '1', padding: '20px' }}>CATALOG PAGE</div>
        </div>
      </div>
    </div>
  );
};

export default CatalogPage;
