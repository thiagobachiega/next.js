export const getCursos = async () => {
    try {
        const cursoData = await fetch("http://localhost:5000/cursos",{
            method: "GET",
            headers: {
                'Content-Type': 'application/json',
            }, 
        })
      return cursoData.json()
    } catch (error) {
      throw error
    }
  }