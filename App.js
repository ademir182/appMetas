import React, { useState, useEffect } from 'react';
import './style.css';

function App() {
  const [exercicios, setExercicios] = useState([
   
  ]);

  const [nome, setNome] = useState('');
  const [descricao, setDescricao] = useState('');
  const [duracao, setDuracao] = useState('');
  const [intensidade, setIntensidade] = useState('');
  const [concluido, setConcluido] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newExercicio = { nome, descricao, duracao, intensidade, concluido };
    setExercicios([...exercicios, newExercicio]);
    setNome('');
    setDescricao('');
    setDuracao('');
    setIntensidade('');
    setConcluido(false);
  };

  const handleDelete = (index) => {
    const newExercicios = [...exercicios];
    newExercicios.splice(index, 1);
    setExercicios(newExercicios);
  };

  useEffect(() => {
    console.log('Exercicios atualizados:', exercicios);
  }, [exercicios]);

  return (
    <div className="container">
      <h1 className="my-4">Minha Lista de Exercícios</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="nome">Nome</label>
          <input
            type="text"
            className="form-control"
            id="nome"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="descricao">Descrição</label>
          <input
            type="text"
            className="form-control"
            id="descricao"
            value={descricao}
            onChange={(e) => setDescricao(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="duracao">Duração</label>
          <input
            type="text"
            className="form-control"
            id="duracao"
            value={duracao}
            onChange={(e) => setDuracao(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="intensidade">Intensidade</label>
          <select
            className="form-control"
            id="intensidade"
            value={intensidade}
            onChange={(e) => setIntensidade(e.target.value)}
          >
            <option value="Baixa">Baixa</option>
            <option value="Moderada">Moderada</option>
            <option value="Alta">Alta</option>
          </select>
        </div>
        <div className="form-check">
          <input
            type="checkbox"
            className="form-check-input"
            id="concluido"
            checked={concluido}
            onChange={(e) => setConcluido(e.target.checked)}
          />
          <label htmlFor="concluido" className="form-check-label">
            Concluído
          </label>
        </div>
        <button type="submit" className="btn btn-primary mt-3">
          Adicionar Exercício
        </button>
      </form>
      <hr />
      <h2>Lista de Exercícios</h2>
      <table className="table">
        <thead>
          <tr>
            <th>Nome</th>
            <th>Descrição</th>
            <th>Duração</th>
            <th>Intensidade</th>
            <th>Concluído</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {exercicios.map((exercicio, index) => (
            <tr key={index}>
              <td>{exercicio.nome}</td>
              <td>{exercicio.descricao}</td>
              <td>{exercicio.duracao}</td>
              <td>{exercicio.intensidade}</td>
              <td>{exercicio.concluido ? 'Sim' : 'Não'}</td>
              <td>
                <button
                  className="btn btn-sm btn-danger"
                  onClick={() => handleDelete(index)}
                >
                  Excluir
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
export default App;
