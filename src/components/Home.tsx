import React, { useEffect, useState } from 'react'
import axios from 'axios'
import '../App.css'
import spotify_logo from '../image/spotify_logo.svg'
import {Icon} from "@iconify/react"
import { useNavigate } from 'react-router-dom'


interface Song {
  id: number;
  thumbnail: string;
  // Add other properties as needed
}
interface User {
  token: string;
  // Other properties if any
}
const Home = () => {
  const [mySongs, setMySongs] = useState<Song[]>([]); 
  const [user, setUser] = useState<User | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const userInfoString = localStorage.getItem("userInfo");
    if (userInfoString) {
      const userInfo = JSON.parse(userInfoString);
      setUser(userInfo);
      if (!userInfo) navigate("/");
    } else {
      // Handle case when userInfo is null
    }
  }, [navigate]);
  
  const getData = async () => {
    try {
      if (!user) {
        console.error("User information is not available.");
        return;
      }
  
      const response = await axios('http://localhost:5002/api/songs/getAll', {
        method: 'GET',
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${user.token}`
        }
      });
      console.log(response)
      setMySongs(response.data); // Set mySongs state with response data
    } catch (error) {
      console.error("Error fetching data:", error);
      // Handle error
    }
  };
  useEffect(()=>{
    getData()
  },[])
  return (
    <div className='main5'>
        <div className='side'>
            <div className='sidebar '>
                <div className='sidebar1'>
                    <img src={spotify_logo} alt='spotify' className='image'/>
                    <div className='home-icon'>
                        <Icon icon="material-symbols-light:home-outline"className='icon' />
                        <h4 className='text1'>Home</h4>
                    </div>

                    <div className='home-icon'>
                        <Icon icon="material-symbols:search"className='icon' />
                        <h4 className='text1'>Search</h4>
                    </div>
                </div>
                <div className='gap'></div>

            </div>
            <div className='sidebar2'>
                <div className='sidebar3'>
                    <div className='home-icon'>
                            <Icon icon="icomoon-free:books"className='icon' />
                            <h4 className='text1'>Your Library</h4>
                        </div>
                        <div className='create'>
                            <button className='btn'>Create Your fist playlist</button>

                        </div>
                        <div className='safety'>
                            <span>Legal</span> 
                            <span>Safety and privacy center</span>
                        </div>
                        <div className='safety'>
                            <span>Privacy Policy</span> 
                            <span>Cookies</span>
                            <span>About Ads</span>
                        </div>
                        <div className='cookies'>
                            <p>Accessibility</p>
                            <p>Cookies</p>
                        </div>
                    </div>
            </div>

        </div>
        <div className='main6'>
            <div className='auth'>
                <button className='btn3'>SignUp</button>
                <div className='hover'>
                  <button className='btn2'>Login</button>
                </div>
            </div>
            <div className='playlist'>
                    <h3 className='text'>Popular Songs</h3>
                <div className='popular'>
                    <div className='all'>
                    {
                        mySongs.map((item:any) => {
                          return (
                            <div key={item.id} className="images">
                              <img className='image1' src={item.thumbnail}  />
                            </div>
                        );
                      })
                    }
                        
                    </div>
                </div>
                
            </div>
        </div>
    </div>
  )
}

export default Home