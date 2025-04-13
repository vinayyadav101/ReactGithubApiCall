import './avatar.css'

export default function Avatars({src , userName}) {
    return(
        <div className="avatar">
            <h3>{userName}</h3>
            <img src={src} alt={userName} />
        </div>
    )
}