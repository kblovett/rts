// import { useState } from 'react';

// const UserSearch: React.FC = () => {
//   const [name, setName] = useState('');
//   const [user, setUser] = useState<{ name: string; age: number | undefined }>();

//   const users = [
//     { name: 'John', age: 26 },
//     { name: 'Jane', age: 73 },
//     { name: 'Jack', age: 43 },
//   ];

//   const onClick = () => {
//     const foundUser = users.find((u) => u.name === name);
//     setUser(foundUser);
//   };

//   return (
//     <div>
//       User Search
//       <input value={name} onChange={(e) => setName(e.target.value)} />
//       <button onClick={onClick}>Find User</button>
//       {user ? (
//         <div>
//           <h3>User Found</h3>
//           <ul>
//             <li>Name: {user.name}</li>
//             <li>Age: {user.age}</li>
//           </ul>
//         </div>
//       ) : user === undefined ? (
//         <h3>User Not Found</h3>
//       ) : (
//         ''
//       )}
//     </div>
//   );
// };

// export default UserSearch;

import { useState } from 'react';

const users = [
  { name: 'Sarah', age: 20 },
  { name: 'Alex', age: 20 },
  { name: 'Michael', age: 20 },
];

const UserSearch: React.FC = () => {
  const [name, setName] = useState('');
  const [user, setUser] = useState<{ name: string; age: number | undefined }>();

  const onClick = () => {
    const foundUser = users.find((u) => u.name === name);
    setUser(foundUser);
  };

  return (
    <div>
      User Search
      <input value={name} onChange={(e) => setName(e.target.value)} />
      <button onClick={onClick}>Find User</button>
      <div>
        {user?.name} {user?.age}
      </div>
    </div>
  );
};

export default UserSearch;
