import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from "react-router-dom";
import Navigator from "./layout/Navigator";
import TeamComponent from "./components/TeamComponent";
import {useEffect, useState} from "react";
import { DataTeams } from '../models/models.ts'
import axios from "axios";
import EmptyPage from "./components/EmptyPage";


function App() {

   const [data, setData] = useState<DataTeams[] | null>([])

   async function fetchData() {
        try {
            const response = await Promise.all([
                axios.get('/data/team1.json'),
                axios.get('/data/team2.json'),
                axios.get('/data/team3.json')
            ])
            return await Promise.all(response.map(item => item.data.response))
        } catch (err) {
            console.error('Error fetching', err);
            return null;
        }
    }

    useEffect(() => {
        fetchData().then(data => setData(data));
    }, []);

  const router = createBrowserRouter(
      createRoutesFromElements(
          <Route path="*" element={<Navigator data={data}/>}>
              <Route index element={<EmptyPage />}/>
              {data!.map((item, i) => (
                  <Route  key={i} path={`team${i + 1}`} element={<TeamComponent dataTeam={item} />}/>
              ))}
          </Route>
      )
  )
    
  return (
      <div className='app'>
        <main>
            <RouterProvider router={router}></RouterProvider>
        </main>
      </div>
  )
}

export default App
