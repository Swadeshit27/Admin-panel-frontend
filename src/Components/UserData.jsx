import React from 'react';

function UserData({ users }) {
  const tableCellStyle = {
    fontSize: '20px', // Adjust the font size as needed
    padding: '15px',
    textAlign: 'center',
    border: '1px solid #ddd',
  };

  return (
    <>
      {users.map((curUser, index) => {
        const { id, name, email, gender, phone } = curUser;
        const serialNumber = index + 1;
        return (
          <tr key={id.value}>
            <td style={tableCellStyle}>{serialNumber}</td>
            <td style={tableCellStyle}>{id.value} {id.name}</td>
            <td style={tableCellStyle}>{name.first} {name.last}</td>
            <td style={tableCellStyle}>{email}</td>
            <td style={tableCellStyle}>{gender}</td>
            <td style={tableCellStyle}>{phone}</td>
            
          </tr>
        );
      })}
    </>
  );
}

export default UserData;
