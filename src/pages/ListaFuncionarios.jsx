import { Link } from 'react-router'

function ListaFuncionarios() {
    const funcionarios = [
    {
        id: 1,
        nome: 'Ana Souza',
        cpf: '12345678901',
        email: 'ana@email.com',
    },
    {
        id: 2,
        nome: 'Bruno Lima',
        cpf: '23456789012',
        email: 'bruno@email.com',
    },
    {   
    id: 3,
    nome: 'Carla Mendes',
    cpf: '34567890123',
    email: 'carla@email.com',
        },
    ]
    return (
        <main className="pagina-clientes">
            <h1>Lista de Funcionarios</h1>
            <ul className="lista-clientes">
                {funcionarios.map((funcionarios) => (
                    <li key={funcionarios.id}>
                        <strong>{funcionarios.nome}</strong>
                        <span> CPF: {funcionarios.cpf}</span>
                        <span> E-mail: {funcionarios.email}</span>
                    </li>
                ))}
            </ul>
            <Link to="/funcionarios">Voltar para Gerenciamento de Funcionarios</Link>
        </main>
    )
}

export default ListaFuncionarios
