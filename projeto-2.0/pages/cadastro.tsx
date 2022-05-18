import Container from "../components/container"
import FormCadastro from "../components/form-cadastro"
import Aluno from "../types/aluno"

const Cadastro: React.FC = () => {

    function cadastrarAluno(aluno: Aluno){ 
        fetch('http://localhost:5000/alunos', {
            method: 'POST',
            headers: {
                'Content-type' : 'application/json',
            },
            body: JSON.stringify(aluno),
            }).then((resp) => resp.json())
            .then((data) => console.log(data))
    }

    return(
        <Container>
            <FormCadastro handleSubmit={cadastrarAluno}/>
        </Container>
    )
}

export default Cadastro