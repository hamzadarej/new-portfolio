import { Link, useLocation, useParams } from 'react-router-dom';
import cn from 'classnames';
const Navbar = () => {
  const headerLinks = ['AboutMe', 'Home', 'Contact'];
  const location = useLocation();

  return (
    <div className="flex w-full items-start justify-center flex-col space-y-4 m-5">
      <h2 className="font-bold text-2xl m-1 text-zinc-950">{location.pathname.replace('/', '')}</h2>
      <ul className="max-w-[10rem] flex items-center justify-around gap-2 w-full">
        {headerLinks.map((link) => (
          <Link
            to={link}
            className={cn(
              `decoration-0 flex max-w-[5rem] items-center justify-center w-full space-x-1  rounded-2xl p-1 border border-solid bg-text-sky-600`,
              {
                'bg-sky-500': location.pathname.includes(link),
              },
            )}
            key={link}
          ></Link>
        ))}
      </ul>
    </div>
  );
};

export default Navbar;
