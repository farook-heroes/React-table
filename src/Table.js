import React, { Component } from 'react';

import TableBody from './TableBody';
import TableHeader from './TableHeader';
import Form from './Form';
import 'bootstrap/dist/css/bootstrap.min.css';
class Table extends Component {
  render() {
    const {characterData, removeCharacter } = this.props;
   
    return (
     
      <table className='table'>
        
      <TableHeader  />
      <TableBody characterData={characterData} removeCharacter={removeCharacter}  />
      </table>
    )
  }
}

export default Table