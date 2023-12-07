import Cogs from './Cogs.jsx';
import { Link } from 'react-router-dom';

const NotFoundPage = () => {
  return (
    <div className="flex flex-col items-center justify-center space-y-5 h-full">
      <h1 className="text-red-700 font-bold">pageNotFound</h1>
      <Cogs />

      <Link className="hover:text-sky-600" to="/AboutMe">
        Go back to Home Page
      </Link>
    </div>
  );
};
export default NotFoundPage;
