import { Link } from 'react-router'

function Funcionarios() {
  return (
    <div className="pagina-clientes">
      <h1>Gerenciamento de Funcionarios</h1>
      <p>Escolha uma das opções:</p>
      <div className="opcoes-clientes">
        <Link to="/funcionarios/listar">
          Listar funcionarios
        </Link>
        <Link to="/funcionarios/cadastrar">
          Cadastrar novo funcionarios
        </Link>
      </div>
      <Link to="/">
        Voltar para a página inicial
      </Link>
    </div>
  )
}
export default Funcionarios