import { useState } from 'react';
import { Routes, Route } from 'react-router'
import './App.css'

//Componentes
import Cabecalho from './components/Cabecalho'
import CardModulo from './components/CardMordulo'

//Clientes
import Clientes from './pages/clientes/Clientes'
import ListaClientes from './pages/clientes/ListaClientes'
import CadastroCliente from './pages/clientes/CadastroClientes'
import clientesIniciais from './data/clientes'
import EditarCliente from './pages/clientes/EditarClientes'

//Funcionarios
import Funcionarios from './pages/funcionarios/Funcionarios'
import ListaFuncionarios from './pages/funcionarios/ListaFuncionarios'
import CadastroFuncionario from './pages/funcionarios/CadastroFuncionarios'
import funcionariosIniciais from './data/funcionarios'
import EditarFuncionario from './pages/funcionarios/EditarFuncionarios'



function App() {
  //Dados pré-carregáveis
  const [clientes, setClientes] = useState(clientesIniciais)
  const [funcionarios, setFuncionarios] = useState(funcionariosIniciais)
  
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

  function adicionarFuncionario(novoFuncionario) {
    const funcionarioComId = {
      id: Date.now(),
      ...novoFuncionario,
    }
    setFuncionarios((listaAtual) => [
      ...listaAtual,
      funcionarioComId,
    ])
  }

  function excluirFuncionario(id) {
    setFuncionarios((listaAtual) =>
      listaAtual.filter((funcionario) => funcionario.id !== id)
    )
  }

  function alterarFuncionario(funcionarioAtualizado) {
    setFuncionarios((listaAtual) =>
      listaAtual.map((funcionario) =>
        funcionario.id === funcionarioAtualizado.id
          ? funcionarioAtualizado
          : funcionario
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
        element={<CadastroCliente 
          clientes={clientes}
          aoCadastrar={adicionarCliente} />}
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
        element={<ListaFuncionarios  
          funcionarios = {funcionarios}
          aoExcluir = {excluirFuncionario}
         />}
      />

      <Route
        path = "/funcionarios/cadastrar"
        element={<CadastroFuncionario 
          funcionarios = {funcionarios}
          aoCadastrar={ adicionarFuncionario} />}
      />
      
      <Route
        path="/funcionarios/editar/:id"
        element={
          <EditarFuncionario
            funcionarios={funcionarios}
            aoAlterar={alterarFuncionario}
          />
        }
      />

      
            
    </Routes>
  )
}
export default App