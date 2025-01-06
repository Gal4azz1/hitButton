// 1. Definire un selettore ->  gli elementi con classe card -> .card
    // 2. Usare querySelectorAll con il selettore appena individuato
    let elements = document.querySelectorAll(".card")

    // 3. uso un ciclo for per assegnare un event handler ad ogni elemento della lista
    for (let i = 0; i < elements.length; i++) {
        elements[i].addEventListener("click", function (event) {
            // cerchiamo di usare sempre event.currentTarget al posto di elements[i]
            let el = event.currentTarget
            el.classList.add("open")

            setTimeout(function () {
                el.classList.remove("open")
            }, 4000)
        })
    }