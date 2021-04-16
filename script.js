async function Compra(){
    const InputPartida = document.querySelector(".partida")
    const InputDestino = document.querySelector(".destino")
    const InputCpf = document.querySelector(".cpf")

    var data = {
        cpf: InputCpf.value,
        destino: InputDestino.value,
        partida: InputPartida.value,
    }

    await fetch("http://localhost:3333/teste4", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    }).then(resposta => {
        console.log(resposta.json())
    }).catch()
}
