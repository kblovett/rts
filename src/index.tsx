import { createRoot } from 'react-dom/client';
import EventComponent from './events/EventComponent';
import UserSearch from './state/UserSearch';
import US1 from './classes/UserSearch';
import US2 from './refs/UserSearch';

const App = () => {
  return (
    <div>
      <UserSearch />
      <br />
      <EventComponent />
      <br />
      <US1 users={[{ name: 'Kolin', age: 48 }]} />
      <br />
      <US2 />
    </div>
  );
};

const container = document.getElementById('root')!;
const root = createRoot(container);

root.render(<App />);
