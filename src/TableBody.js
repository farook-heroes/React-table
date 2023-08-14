import React ,{Component} from 'react';

export default function TableBody  (props)  {
   console.log(props.characterData);
    const rows = props.characterData.map( (row, index) => {
      return (
        <tr key={index}>
          <td>{row.name}</td>
          <td>{row.job}</td>
          <td>
            <button className='btn btn-primary' onClick={() => props.removeCharacter(index)} >Delete</button>
          </td>
        </tr>
      )
    } )
  
    return <tbody>{rows}</tbody>
  }

