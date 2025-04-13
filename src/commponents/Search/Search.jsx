import useDebounce from "../../Hooks/useDebounce"

export default function Search({onchange}) {   
    const debounce = useDebounce((e)=>onchange(e.target.value))
    return(
        <input type="text" alt='search' placeholder="Search Profile using User name" onChange={debounce}/>
    )
}