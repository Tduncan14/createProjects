import {useState,useEffect} from 'react';
import Character from "./Character"

function List(){

    const [loading,setLoading] = useState(true)
    const [characters,setCharacters] = useState([]);



    useEffect( () =>{


        fetchData()


    setLoading(false)
      
    },[characters.length])


    const fetchData = async () =>{
    try{  const data = await fetch(
            'https://rickandmortyapi.com/api/character'
        )

        const {results} = await data.json();
        setCharacters(results)
    }

    catch(err){
        console.log('an issue is going on')
    }

          console.log(characters,'characters')

        }

    console.log(characters)
  
    return (
        <div>
            <h2>Characters</h2>
    <div className="row">
           {loading ? (<div>...Loading </div>) :(
               characters.map((character) => (

                <Character 
                  key={character.id}
                  name={character.name}
                  origin={character.origin}
                  image={character.image}
                  />


               ))

           )}
           </div>
        </div>
    )


}


export default List