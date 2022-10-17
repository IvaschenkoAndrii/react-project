function GenrieButtons ({genrie,searchByGenries,searchString}){
    return (
        <div>
            <button onClick={searchByGenries} ref={searchString}>{genrie}</button>
        </div>
    )
}

export {GenrieButtons}