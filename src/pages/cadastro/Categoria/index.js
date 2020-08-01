import React from 'react';
import PageDefault from '../../../components/PageDefault'
import { Link } from 'react-router-dom';

function CtegoriaVideo() {
    return(
      <PageDefault>
        <h1>Casdastro de Categoria</h1>

      <form>

        <label>
          Nome da Categoria:
          <input
            type="text"
          />
        </label>

        <button>
          Cadastrar
        </button>
      </form>

        <Link to="/">
          Voltar para a Home
        </Link>
      </PageDefault>
    )
  }
  
  export default CtegoriaVideo;