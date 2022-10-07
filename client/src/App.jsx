import './App.scss'
import UITitle from './components/UITitle'
import UIUserList from './components/UIUserList'
import UIUser from './components/UIUser'
import { useState, useEffect } from 'react'
import axios from "axios";
import UIButton from './components/UIButtons'
import { useNavigate } from "react-router-dom";
import UIModal from './components/UIModal'

function App() {

  const [data, setData] = useState('');
  const [loaded, setLoaded] = useState(false);
  const [modal, setModal] = useState(false);
  const [itemId, setItemId] = useState('');
  const navigate = useNavigate();

  const getData = async ()=> {
    const req = await axios.get('http://localhost:5000/api/v1/userslist').then((res)=> {
      setData(res.data.data);
      setLoaded(true);
    })
  }

  const openPopup = (value)=> {
    setItemId(value);
    setModal(true)
  }

  useEffect(()=> {
    getData();
  }, [])

  return (
    <main className='main_'>
      <div className="container">

        <UITitle maintitle="Registered Users">
          <UIButton title="Create New User" clicked={()=> navigate('/register')}/>
        </UITitle>

        {
          loaded &&

          <UIUserList>

            {
              data.length > 0 ? 
              data.map((item, index)=> <UIUser key={index} data={item} clicked={()=> openPopup(item._id)}/>) : 
              <div className="alert_">No Data</div>
            } 

          </UIUserList>
        }

       {
        modal && 
        <UIModal id={itemId} close={()=> setModal(false)}/>
       }

      </div>
    </main>
  )
}

export default App
