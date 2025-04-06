import { createBrowserRouter } from 'react-router-dom';

import App from '../App';

//import pages
import Homepage from '../pages/HomePage';
import Blog from '../pages/Blog';
import Courses from '../pages/Courses';
import MeetMe from '../pages/MeetMe';
import Photography from '../pages/Photography';
import Projects from '../pages/Projects';
import PageNotFound from '../pages/PageNotFound';


export const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        errorElement: <PageNotFound />,
        children: [
            { path: "/", element: <Homepage /> },
            { path: "blog", element: <Blog /> },
            { path: "courses", element: <Courses /> },
            { path: "meetme", element: <MeetMe /> },
            { path: "photography", element: <Photography /> },
            { path: "projects", element: <Projects/> },
        ]
    }
])