import { Provider } from 'react-redux';
import './App.css';
import Body from './Components/Body';
import Header from './Components/Header';
import AppStore from './Utils/AppStore';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Watch from './Components/Watch';
import SearchPage from './Components/SearchPage';
import SecondaryContainer from './Components/SecondaryContainer';

const AppRouter=createBrowserRouter([
  {
    path:"/",
    element:<Body/>,
    children:[
      {
        path:"/watch",
        element:<Watch/>
      },
      {
        path:"/searchpage",
        element:<SearchPage/>
      },
      {
        path:"/",
        element:<SecondaryContainer/>
      }
    ]
  }
]);

function App() {
  return (
    <div className="App">
      <Provider store={AppStore}>
        <RouterProvider router={AppRouter}>
          <Header/>
        </RouterProvider>
      </Provider>
    </div>
  );
}

export default App;
