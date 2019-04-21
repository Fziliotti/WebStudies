const $root = document.querySelector("#root")


function h1(styles, ...values){

  
    const $h1 = document.createElement("h1")
    $h1.style = styles.toString().replace(/,/g, "").trim()
    $h1.innerHTML = values.toString().replace(/,/g, "<br>")

    console.log(styles)
    console.log(values)
    console.log(...values)
    console.log($h1)
    return $h1
}

const content = "Fabricio Ziliotti"

const Title = h1`
    ${"Programador"}
    ${"Collab code"}
    ${"FelipePM"}
    ${"Xgivi"}
    font-size: 40px;
    font-family: "Comfortaa";
    font-weight: bold;
    color: #ef3d26;
    text-align: center;
`

$root.insertBefore(Title, null)