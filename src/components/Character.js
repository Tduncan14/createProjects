




function Character(character){


      console.log(character, 'this is the contentt')
    return(
        <div className="col-3">
            <div className="card maxHeight">

                <img
                  src={character.image}
                  alt={character.name}
                  className="card-img-top "
                />

                <div className="card-body">
                    <h3 className='card-title'>{character.name}</h3>
                    <p>{`Origin: ${character.origin && character.origin.name}`}</p>
                </div>
            </div>

        </div>
    )



}





export default Character;