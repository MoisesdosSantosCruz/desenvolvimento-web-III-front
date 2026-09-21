import { Link } from 'react-router'

function ListaFuncionarios({funcionarios, aoExcluir}) {
  
	function confirmarExclusao(funcionario) {
		const confirmacao = window.confirm(
			`Deseja realmente excluir o funcionário ${funcionario.nome}?`
		)
		if (confirmacao) {
			aoExcluir(funcionario.id)
		}
	}

  return (
    <main className="pagina-clientes">
      <h1>Lista de Funcionarios</h1>
      <ul className="lista-clientes">
        {funcionarios.map((funcionario) => (
          <li key={funcionario.id}>
            <strong>{funcionario.nome}</strong>
            <span> CPF: {funcionario.cpf}</span>
            <span> Telefone: {funcionario.telefone}</span>
            <span> E-mail: {funcionario.email}</span>
            <div className="acoes-cliente">
							< Link
								to={`/funcionarios/editar/${funcionario.id}`}
								className="botao-alterar"
							>
								Alterar
							</Link>
							<button
								type="button"
								className="botao-excluir"
								onClick={() => confirmarExclusao(funcionario)}
							>
								Excluir

							</button>
						</div>
          </li>
        ))}
      </ul>
      <Link to="/funcionarios">Voltar para Gerenciamento de Funcionarios</Link>
    </main>
  )
}
export default ListaFuncionarios
