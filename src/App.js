import Button from 'react-bootstrap/Button';
import { Nav } from './layout/header/nav';

function App() {
  return (
    <div>
      <Nav />
      <Button variant="primary" className="mr-2 d-block">
        a
      </Button>
    </div>
  );
}

export default App;