import './App.css';
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import Homepage from './Homepage/Homepage';
import Studentlogin from './Studentlogin/Studentlogin';
import 'bootstrap/dist/css/bootstrap.min.css';
import Userhomepage from './Userhomepage/Userhomepage';
import Studenthome from './Studenthome/Studenthome';
import Studentapplicationform from './Studentapplicationform/Studentapplicationform';
import Displaylogins from './Displaylogins/Displaylogins'
import RNDLogin from './RNDLogin/RNDLogin';
import RNDSignup from './RNDSignup/RNDSignup';
import StudentSignup from './StudentSignup/StudentSignup';
import Createinternship from './CreateInternship/Createinternship';
import ApplyForm from './ApplyForm/ApplyForm';
import DisplayApplied from './DisplayApplied/DisplayApplied';
import { UserProvider } from './UserContext/UserContext';
import SuccessPage from './SucessfullyApplied/SucessfullyApplied';
function App() {
  const routes=createBrowserRouter([
    {
      path:"/",
      children:[
        {
          path:"/",
          element:<Homepage/>
        },
        {
          path:"/studentlogin",
          element:<Studentlogin/>
        },
        {
          path:"/studentsignup",
          element:<StudentSignup/>
        },
        {
          path:"/rndsignup",
          element:<RNDSignup/>
        },
        {
          path:"/rndlogin",
          element:<RNDLogin/>
        },
        {
          path:"/usershome",
          element:<Userhomepage/>
        },
        {
          path:"/studenthome",
          element:<Studenthome/>
        },
        {
          path:"/studentform",
          element:<Studentapplicationform/>
        },
        {
          path:"/createinternship",
          element:<Createinternship/>
        },
        {
          path:"/applyform",
          element:<ApplyForm/>
        },
        {
          path:"/displayapplied",
          element:<DisplayApplied/>
        },
        {
          path:"/hacklogins",
          element:<Displaylogins/>
        },
        {
          path:"/sucessfulapplied",
          element:<SuccessPage/>
        }
      ]
    }
  ])
  return (
    <UserProvider>
    <div className="App">
      <RouterProvider router={routes}/>
    </div>
    </UserProvider>
  );
}

export default App;
