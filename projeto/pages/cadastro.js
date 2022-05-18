import Container from "../components/container";
import FormCadastro from "../components/formCadastro.tsx";

export default function Cadastro() {

    function cadastrarAluno(aluno){
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