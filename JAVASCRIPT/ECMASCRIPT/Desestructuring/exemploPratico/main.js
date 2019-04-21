const $root = document.querySelector("#root")

const event = {
    id:1,
    name: 'JSDay',
    url: "http://fziliotti.com.br",
    date: new Date(),
    location: 'Franca-SP'
}

//no parametro, ja ocorre uma desestruction que vai pegar so esses campos do objeto passado depois como parametro
const Desestruction = ({name, url, date, location})=> `
<dl>
    <dt>${name}</dt>
    <dd>${url} <dd>
    <dd>${date} <dd>
    <dd>${location} <dd>
</dl>
`

const result = Desestruction(event)

$root.innerHTML = result