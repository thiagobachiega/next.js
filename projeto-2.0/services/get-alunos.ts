export const getAlunos = async () => {
  try {
    const alunoData = await fetch(`http://localhost:5000/alunos`,{
        method: "GET",
        headers: {
            'Content-Type': 'application/json',
        }, 
    })
  return alunoData.json()
} catch (error) {
  throw error
}
}