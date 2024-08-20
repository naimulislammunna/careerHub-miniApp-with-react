import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Root from './Components/Root/Root.jsx'
import Home from './Components/Home/Home.jsx'
import JobDetails from './Components/Applied-jobs/JobDetails.jsx'
import AppliedJobs from './Components/Applied-jobs/AppliedJobs.jsx'


const router = createBrowserRouter([
    {
      path: "/",
      element: <Root/>,
      children: [
        {
          path: "/",
          element: <Home/>
        },
        {
          path:"/job/:jobID",
          loader: () => fetch(`../public/data/jobs.json`),
          element: <JobDetails/>
        },
        {
          path: '/appliedJob',
          element: <AppliedJobs></AppliedJobs>,
          loader: () => fetch(`../public/data/jobs.json`)
        }
      ] 
    }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
