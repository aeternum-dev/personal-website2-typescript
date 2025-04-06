import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className="header flex flex-row bg-gray-800 text-white w-full h-16 items-center px-4">
      <div className="headerLeft">
        <Link to="/" className="text-lg font-bold">terjekszabolcs.hu</Link>
      </div>
      <div className="headerMenu flex flex-row space-x-4 ml-auto mr-auto">
        <Link to="/blog">Blog</Link>
        <Link to="/courses">Courses</Link>
        <Link to="/photography">Photography</Link>
        <Link to="/projects">Projects</Link>
      </div>
      <div className="headerRight ml-4">
        <Link to="/signup">Sign up</Link>
        <Link to="/meetme">Meet Me (in a button)</Link>
      </div>
    </header>
  );
}