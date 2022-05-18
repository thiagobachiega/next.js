export const delAlunos = async (id) => {
  try {
      const alunoData = await fetch(`http://localhost:5000/alunos/${id}`,{
          method: "DELETE",
          headers: {
              'Content-Type': 'application/json',
          }, 
      }).then(resp => resp.json())
      .then(data => console.log(data))
    return console.log(`Aluno ${id} deletado com sucesso!`)
  } catch (error) {
    throw error
  }
}