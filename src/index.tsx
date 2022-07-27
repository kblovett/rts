import { createRoot } from 'react-dom/client';
import EventComponent from './events/EventComponent';
import UserSearch from './state/UserSearch';

const App = () => {
  return (
    <div>
      <UserSearch />
      <br />
      <EventComponent />
    </div>
  );
};

const container = document.getElementById('root')!;
const root = createRoot(container);

root.render(<App />);
