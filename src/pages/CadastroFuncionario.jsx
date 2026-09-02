import { useState } from 'react'
import { Link } from 'react-router'

function CadastroFuncionario() {
    const [nome, setNome] = useState('')
    const [cpf, setCpf] = useState('')
    const [telefone, setTelefone] = useState('')
    const [email, setEmail] = useState('')
    function cadastrarFuncionario(evento) {
        evento.preventDefault()
        const novoFuncionario = {
            nome,
            cpf,
            telefone,
            email,
        }
        console.log(novoFuncionario)
        alert('Funcionario cadastrado com sucesso!')
    }
    return (
        <main className="pagina-clientes">
            <h1>Cadastrar novo Funcionário</h1>
            <form className="formulario-cliente"
                onSubmit={cadastrarFuncionario}>
                <label htmlFor="nome">Nome</label>
                <input
                    id="nome"
                    type="text"
                    value={nome}
                    onChange={(evento) =>
                        setNome(evento.target.value)}
                    required
                />
                <label htmlFor="cpf">CPF</label>
                <input
                    id="cpf"
                    type="text"
                    value={cpf}
                    onChange={(evento) =>
                        setCpf(evento.target.value)}
                    maxLength="11"
                    required
                />
                <label htmlFor="telefone">Telefone</label>
                <input
                    id="telefone"
                    type="text"
                    value={telefone}
                    onChange={(evento) =>
                        setTelefone(evento.target.value)}
                />
                <label htmlFor="email">E-mail</label>
                <input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(evento) =>
                        setEmail(evento.target.value)}
                />
                <button type="submit">Cadastrar Funcionário</button>
            </form>
            <Link to="/funcionarios">Voltar para Gerenciamento de Funcionários</Link>
        </main>
    )
}
export default CadastroFuncionario