import { useState } from 'react';
import { Routes, Route } from 'react-router'
import './App.css'
import Cabecalho from './components/Cabecalho'
import CardModulo from './components/CardMordulo'
import Clientes from './pages/Clientes'
import ListaClientes from './pages/ListaClientes'
import CadastroCliente from './pages/CadastroClientes'
import Funcionarios from './pages/Funcionarios'
import ListaFuncionarios from './pages/ListaFuncionarios'
import CadastroFuncionario from './pages/CadastroFuncionario'
import clientesIniciais from './data/clientes'
import EditarCliente from './pages/EditarClientes';



function App() {
  const [clientes, setClientes] = useState(clientesIniciais)
  
  function adicionarCliente(novoCliente) {
    const clienteComId = {
      id: Date.now(),
      ...novoCliente,
    }
    setClientes((listaAtual) => [
      ...listaAtual,
      clienteComId,
    ])
  }

  function excluirCliente(id) {
    setClientes((listaAtual) =>
      listaAtual.filter((cliente) => cliente.id !== id)
    )
  }

  function alterarCliente(clienteAtualizado) {
    setClientes((listaAtual) =>
      listaAtual.map((cliente) =>
        cliente.id === clienteAtualizado.id
          ? clienteAtualizado
          : cliente
      )
    )
  }


  const [mostrarModulos, setMostrarModulos] = useState(true)

  const [modulos] = useState([
    {
      id: 1,
      titulo: 'Gerenciamento de Produtos',
      descricao: 'Cadastre e consulte os produtos disponíveis.',
    },
    {
      id: 2,
      titulo: 'Gerenciamento de Clientes',
      descricao: 'Cadastre e consulte os clientes da empresa.',
      rota: '/clientes',
    },
    {
      id: 3,
      titulo: 'Gerenciamento de Funcionários',
      descricao: 'Cadastre e consulte os funcionários da empresa.',
      rota: '/funcionarios',
    },
    {
      id: 4,
      titulo: 'Gerenciamento de Vendas',
      descricao: 'Registre e consulte as vendas realizadas.',
    }
  ])

  return (
    <Routes>
      <Route
        path="/"
        element = {
          <div className="aplicacao">
            <Cabecalho />
            <main className="conteudo-principal">
              <p className="introducao">
                Aplicação desenvolvida nas disciplinas de Desenvolvimento Web III e
                Tópicos de Programação II.
              </p>
              <button
                type="button"
                className="botao-alternar"
                onClick={() => setMostrarModulos(!mostrarModulos)}
              >
                {mostrarModulos ? 'Ocultar módulos' : 'Exibir módulos'}
              </button>
              {mostrarModulos && (
              <section className="modulos">
                {modulos.map((modulo) => (
                  <CardModulo
                    key={modulo.id}
                    titulo={modulo.titulo}
                    descricao={modulo.descricao}
                    rota = {modulo.rota}
                  />
                ))}
              </section>
            )}
            </main>
          </div>
        }
      />
      
      {/*Rotas de Cliente*/}

      <Route 
        path="/clientes" 
        element={<Clientes />} 
      />
        
      <Route
        path="/clientes/listar"
        element={<ListaClientes 
          clientes={clientes}
          aoExcluir={excluirCliente} />}
      />

      <Route
        path="/clientes/cadastrar"
        element={<CadastroCliente aoCadastrar={adicionarCliente} />}
      />

      <Route
        path="/clientes/editar/:id"
        element={
          <EditarCliente
            clientes={clientes}
            aoAlterar={alterarCliente}
          />
        }
      />

        {/*Rotas de Funcionário*/}

      <Route
        path = "/funcionarios"
        element={<Funcionarios />}
      />
      
      <Route
        path = "/funcionarios/listar"
        element={<ListaFuncionarios />}
      />

      <Route
        path = "/funcionarios/cadastrar"
        element={<CadastroFuncionario />}
      />


            
    </Routes>
  )
}
export default App