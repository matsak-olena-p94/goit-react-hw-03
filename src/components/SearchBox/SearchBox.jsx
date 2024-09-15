import css from './SearchBox.module.css'

export default function SearchBox( {value, onSearch} ) {
    return (
    <div className={css.searchWraper}>
        <p>
            Find contacts by name
        </p>
        <input className={css.inputQuery} type="text" value={value} onChange={(event) =>{
            onSearch(event.target.value)
        }}/>
    </div>
    )
}