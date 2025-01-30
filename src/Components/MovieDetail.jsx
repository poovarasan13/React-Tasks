
const MovieDetails=(props)=>{
    return(
        <>
        <div className="col">
            <div className="card" style={{width:"18rem"}}>
                <div className="card-body">
                    <div className="text">
                        Movie: {props.title}
                    </div>
                    <div className="text"> Year : {props.year}</div>
                    <div className="text">Rating: {props.rating}</div>
                </div>
            </div>
        </div>
        </>
    )
}
export default MovieDetails;