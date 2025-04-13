import { useEffect, useState } from "react";

export default function useAvatar() {
    const [avatarDetails , setAvatarDeatisl] = useState(null)
    const [avatarUrl , setAvatarUrl] = useState('https://api.github.com/users')

    async function UserDetail_details() {
        try {
            const respons = await fetch(avatarUrl).then(d=>d.json())
            let data;

            if (Array.isArray(respons)) {
                data = respons.map(el => ({userName:el.login , avatarUrl:el.avatar_url}))
            }else{
                data = [{userName:respons.login , avatarUrl:respons.avatar_url}]
            }
            setAvatarDeatisl(data)
            
        } catch (error) {
            console.log(error);
            
        }
    }

    useEffect(()=>{
        UserDetail_details()
    },[avatarUrl])

    return [avatarDetails , setAvatarUrl]
}