import s from './Contact.module.css'
import { ImUser, ImPhone } from "react-icons/im";

export default function Contact({person, onDelete}) {
    return (
        
        <div className={s.wraperContact}>
            <div>
        <div className={s.wraperInfo}>
        <ImUser />
            <p>{person.name}</p>
        </div>
        <div className={s.wraperInfo}>
        <ImPhone />
            <p>{person.number}</p>
        </div>
        </div>
        <button className={s.btn} onClick={() => onDelete(person.id)}>
            delete
        </button>
        </div>
    )
}