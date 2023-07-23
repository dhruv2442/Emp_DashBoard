import React from 'react';
import TableHeader from './TableHeader';
import TableFooter from './TableFooter';
import TableBody from './TableBody';

const Table = () => {
  return (
      <table className='mainContainer'>
        <TableHeader />
        <TableBody />
        <TableFooter />
      </table>
  );
};

export default Table;
