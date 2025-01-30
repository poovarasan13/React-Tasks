import MovieDetails from "./MovieDetail";


const Task21=()=>{
    const list=[{
        title:"the goat",
        year:2024,
        rating:5
    },
{
    title:"marco",
        year:2025,
        rating:4
}
,
{
    
    title:"kalki",
        year:2024,
        rating:3
}]
    return(
        <>
             {list.map((l,i)=>(
                <MovieDetails key={i} {...l}/>
             ))}
        </>
    )
}

export default Task21;