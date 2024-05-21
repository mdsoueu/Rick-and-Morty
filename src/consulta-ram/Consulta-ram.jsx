import { useEffect } from "react";
import { useState } from "react";

function consultaRAM() {
    //[lista, função]
    const [personagens, setPersonagens] = useState([]);

    useEffect(() => {
        console.log("Consultar API");
        fetch('https://rickandmortyapi.com/api/character')
            .then((response) => response.json()) //pegar e transformar em JSON
            /*
            .then((response) => {
                return resposta.json();
            }) 
            */
            .then(resultadoConsulta => {
                setPersonagens(resultadoConsulta.results); //atualiza a varial(personagens)
            }); //terá o retorno do objeto do .then() anterior
    }, []);

    return <>
        {
            personagens.map(personagem => {
                return <div>
                    <h6>{personagem.name}, {personagem.gender}</h6>
                    <img src={personagem.image} alt={personagem.name} />
                </div>

                // nome, genêro e imagem
            })
        }
    </>
}

export default consultaRAM;