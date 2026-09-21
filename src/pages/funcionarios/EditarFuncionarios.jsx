import { useState } from 'react'
import { Link, useParams } from 'react-router'

function EditarFuncionario({ funcionarios, aoAlterar }) {
  const { id } = useParams()
  const funcionarioEncontrado = funcionarios.find(
    (funcionario) => funcionario.id === Number(id)
  )
  const [nome, setNome] = useState(funcionarioEncontrado?.nome ?? '')
  const [cpf, setCpf] = useState(funcionarioEncontrado?.cpf ?? '')
  const [telefone, setTelefone] = useState(
    funcionarioEncontrado?.telefone ?? ''
  )
  const [email, setEmail] = useState(funcionarioEncontrado?.email ??
    '')

  function alterarFuncionario(evento) {
    evento.preventDefault()
    const funcionarioAtualizado = {
      id: Number(id),
      nome,
      cpf,
      telefone,
      email,
    }
    aoAlterar(funcionarioAtualizado)
    alert('Funcionário alterado com sucesso!')
  }
  if (!funcionarioEncontrado) {
    return (
      <main className="pagina-clientes">
        <h1>Cliente não encontrado</h1>
        <Link to="/funcionarios/listar">
          Voltar para a lista de funcionários
        </Link>
      </main>
    )
  }
  return (
    <main className="pagina-clientes">
      <h1>Alterar Funcionário</h1>
      <form
        className="formulario-cliente"
        onSubmit={alterarFuncionario}
      >
        <label htmlFor="nome">Nome</label>
        <input
          id="nome"
          type="text"
          value={nome}
          onChange={(evento) => setNome(evento.target.value)}
          required
        />
        <label htmlFor="cpf">CPF</label>
        <input
          id="cpf"
          type="text"
          value={cpf}
          onChange={(evento) => setCpf(evento.target.value)}
          Profa Mestre Sirley Ambrosia Vitorio Addão
          maxLength="11"
          required
        />
        <label htmlFor="telefone">Telefone</label>
        <input
          id="telefone"
          type="text"
          value={telefone}
          onChange={(evento) => setTelefone(evento.target.value)}
        />
        <label htmlFor="email">E-mail</label>
        <input
          id="email"
          type="email"
          value={email}
          onChange={(evento) => setEmail(evento.target.value)}
        />
        <button type="submit">
          Salvar alterações
        </button>
      </form>
      <Link to="/funcionarios/listar">
        Voltar para a lista de funcionários
      </Link>
    </main>

  )
}
export default EditarFuncionario