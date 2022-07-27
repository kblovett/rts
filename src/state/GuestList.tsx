import React, { useState } from 'react';

const GuestList: React.FC = () => {
  const [name, setName] = useState('');
  const [age, setAge] = useState(0);
  const [guests, setGuests] = useState<Guest[]>([]);
  const [findName, setFindName] = useState('');
  const [foundGuest, setFoundGuest] = useState<Guest>();

  interface Guest {
    name: string;
    age: number;
  }

  const setNameHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };
  const setAgeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAge(Number(e.target.value));
  };
  const setGuestHandler = () => {
    setGuests([...guests, { name: name, age: age }]);
    setName('');
    setAge(0);
  };
  const setFindNameHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFindName(e.target.value);
  };
  const findGuestHandler = (e: React.MouseEvent) => {
    const guest = guests.find((g) => g.name === findName);
    setFoundGuest(guest);
  };

  return (
    <div>
      <h3>Guest List</h3>
      <ul>
        {guests.map((g, i) => (
          <li key={i}>
            {g.name} {g.age}
          </li>
        ))}
      </ul>
      Name: <input value={name} onChange={(e) => setNameHandler(e)} /> Age:{' '}
      <input value={age} onChange={(e) => setAgeHandler(e)} />{' '}
      <button onClick={setGuestHandler}>Add Guest</button>
      <br />
      <br />
      <input value={findName} onChange={(e) => setFindNameHandler(e)} />{' '}
      <button onClick={(e) => findGuestHandler(e)}>Find Guest</button>
      {foundGuest && (
        <ul>
          <li>Guest: {foundGuest?.name}</li>
          <li>Age: {foundGuest?.age}</li>
        </ul>
      )}
    </div>
  );
};

export default GuestList;
