import s from "./Options.module.css"

export default function Options({callback, hasFeedback, reset}) {
    return (
        <>
        <button  className={s.btn} onClick={()=>{callback('good')}}>good</button>
        <button  className={s.btn} onClick={()=>{callback('neutral')}}>neutral</button>
        <button  className={s.btn} onClick={()=>{callback('bad')}}>bad</button>
        {hasFeedback && (
                <button className={s.btn} onClick={reset}>reset</button>
        )}
        </>
    )
}