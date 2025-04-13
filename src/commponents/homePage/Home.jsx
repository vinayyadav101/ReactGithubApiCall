import { useEffect, useState } from "react";
import useAvatar from "../../Hooks/useAvatar";
import Avatars from "../Avatars/Avatars";
import Search from "../Search/Search";
import './home.css'

export default function Home() {
    // eslint-disable-next-line no-unused-vars
    const [userDeatils, setAvatarUrl] = useAvatar()
    const [userName , setUserName] = useState('')


    useEffect(()=>{
        
        userName ?
         setAvatarUrl(`https://api.github.com/users/${userName}`) :
         setAvatarUrl(`https://api.github.com/users`)
        
    },[userName])

    return(
        <div className="mainContainer">
            <div className="searchBar">
                {
                    <Search onchange={(el)=>setUserName(el)}
                />
                }
            </div>
            <div className="avatarContainer">
                {userDeatils ?
                    userDeatils.map((el , index)=> <Avatars key={index} src={el.avatarUrl} userName={el.userName} />):
                    <h1>Data is Downloading...</h1>
                }
            </div>
        </div>
    )
}