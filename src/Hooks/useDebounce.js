

export default function useDebounce(cb ,delay=2000) {
    let timerid;

    return (argument)=>{
        
        clearTimeout(timerid)
        timerid = setTimeout(()=>{
            cb(argument)
        },delay)
    }
}