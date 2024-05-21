import { Link, Outlet } from "react-router-dom";

function Cabecalho() {
    return (
        <>
            <h1>Meu primeiro projeto React</h1>
            <Link to={'/tarefas'}>Tarefas</Link><br />
            <Link to={'/rota2'}>Rota2</Link><br />
            <Link to={'/consulta-ram'}>Consulta Rick and Morty</Link>
            <Outlet /> 
        </>
    );
}
export default Cabecalho;

// outlet - mostra as páginas