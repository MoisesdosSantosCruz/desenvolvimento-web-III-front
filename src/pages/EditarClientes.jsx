import { useState } from 'react'
import { Link, useParams } from 'react-router'

function EditarCliente({ clientes, aoAlterar }) {
  const { id } = useParams()
  const clienteEncontrado = clientes.find(
    (cliente) => cliente.id === Number(id)
  )
  const [nome, setNome] = useState(clienteEncontrado?.nome ?? '')
  const [cpf, setCpf] = useState(clienteEncontrado?.cpf ?? '')
  const [telefone, setTelefone] = useState(
    clienteEncontrado?.telefone ?? ''
  )
  const [email, setEmail] = useState(clienteEncontrado?.email ??
    '')
  function alterarCliente(evento) {
    evento.preventDefault()
    const clienteAtualizado = {
      id: Number(id),
      nome,
      cpf,
      telefone,
      email,
    }
    aoAlterar(clienteAtualizado)
    alert('Cliente alterado com sucesso!')
  }
  if (!clienteEncontrado) {
    return (
      <main className="pagina-clientes">
        <h1>Cliente não encontrado</h1>
        <Link to="/clientes/listar">
          Voltar para a lista de clientes
        </Link>
      </main>
    )
  }
  return (
    <main className="pagina-clientes">
      <h1>Alterar cliente</h1>
      <form
        className="formulario-cliente"
        onSubmit={alterarCliente}
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
      <Link to="/clientes/listar">
        Voltar para a lista de clientes
      </Link>
    </main>

  )
}
export default EditarCliente