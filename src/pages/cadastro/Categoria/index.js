import React, { useState } from 'react';
import PageDefault from '../../../components/PageDefault'
import { Link } from 'react-router-dom';
import FormField from '../../../components/FormField';

function CadastroCategoria() {
  const ValoresIniciais = {
    nome: '',
    descricao: '',
    cor: '',
  }
  const [categorias, setCategorias] = useState([]);
  const [values, setValues] = useState(ValoresIniciais);


  function setValue(chave, valor) {
    setValues({
      ...values,
      [chave]: valor,
    })
  }

  function handleChange(infosDoEvento) {
    setValue(
      infosDoEvento.target.getAttribute('name'),
      infosDoEvento.target.value
    );
  }
  
  return(
    <PageDefault>
      <h1>Casdastro de Categoria: {values.nome}</h1>

    <form onSubmit={function handleSubmit(infosDoEvento){
      infosDoEvento.preventDefault();
      setCategorias([
        ...categorias,
        values
      ]);
      setValues(ValoresIniciais)
    }}>

<FormField
        lable="Nome da Categoria"
        type="text"
        value={values.nome}
        name="nome"
        onChange={handleChange}
      />

<FormField
        lable="Descrição"
        type="text"
        value={values.descricao}
        name="descricao"
        onChange={handleChange}
      />

      <FormField
        lable="Cor"
        type="color"
        value={values.cor}
        name="cor"
        onChange={handleChange}
      />


      <button>
        Cadastrar
      </button>
    </form>

    <ul>
      {categorias.map((categoria, indice) =>{
        return(
          <li key={`${categoria}+${indice}`}>
            {categoria.nome} - {categoria.descricao} - {categoria.cor}
          </li>
        )
      })}
    </ul>

      <Link to="/">
        Voltar para a Home
      </Link>
    </PageDefault>
  )
}
  
  export default CadastroCategoria;