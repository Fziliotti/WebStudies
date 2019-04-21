const axios = require('axios');
class Api {
    // metodo static para ser chamado sem necessidade de instanciar a classe
    static async getUserName(username) {
        // ao inves de usar o .catch das promises, deve-se usar o try catch
        try {
            const response = await axios.get(`https://api.github.com/users/${username}`)
            console.log(response.data)
        } catch (err) {
            console.warn('Sua tentativa caiu no Catch!')
            // console.log(err)
        }
    }

    static async getRepositories(repo) {
        try {
            const response = await axios.get(`https://api.github.com/repos/${repo}`);

            console.log(response.data);
        } catch (err) {
            console.log("Repositório não existe");
        }
    }


    static getUserFromGithub(user) {
        axios.get(`https://api.github.com/users/${user}`)
            .then(response => {
                console.log(response.data);
            })
            .catch(err => {
                console.log('Usuário não existe');
            })
    }
}

// METODO ESTATICO COM ASYNC AWAIT
// Api.getUserName('fziliotti')
Api.getRepositories('fziliotti/BlogFziliotti')


// METODO ESTATICO COM PROMISSE NORMAL

// Api.getUserFromGithub('fziliotti')