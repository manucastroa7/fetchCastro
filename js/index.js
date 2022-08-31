const main = document.querySelector('.main')
let url = 'https://apis.datos.gob.ar/georef/api/departamentos'


fetch(url)
    .then((response) => {
        //console.log(response.json()) // esto es una promesa por eso necesito OTRO .then para obtener la informacion que estoy buscando
        return response.json()
    })


    .then((json) => {
        console.log(json)
        let deptos = json.departamentos
        console.log(deptos)

        deptos.forEach(depto => {
            const { nombre } = depto

            main.innerHTML += `<article>
                                <h2>${nombre}</h2>                                   
                                </article>`

        })

    })


    .catch(err => console.error(err))