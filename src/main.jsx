import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App.jsx'
import Cabecalho from './componente-cabecalho/cabecalho.jsx'
import ConsultaRAM from './consulta-ram/Consulta-ram.jsx'
import './index.css'
import Tarefas from './tarefas/tarefas-componente.jsx'

const routes = createBrowserRouter([ // []lista
  { // {} objeto
    
    //Rotas
    path: '/',
    element: <Cabecalho />, //Página principal
    children: [ //Filha
      { 
        path: '/tarefas',
        element: <Tarefas />
      },
      {
        path: '/rota2',
        element: <h1>Minha rota 2</h1>
      },
      {
        path: '/consulta-ram',
        element: <ConsultaRAM />
      }
    ]

  }
]);

ReactDOM.createRoot(document.getElementById('root'))
  .render(
    <React.StrictMode>
      <RouterProvider router={routes} />
    </React.StrictMode>,
  )
