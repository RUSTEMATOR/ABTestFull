var randomEmail = require('random-email');

export default class RandomEmail {

    constructor(){}

    async generateRandomEmail(length: number): Promise<string> {
        const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890"
        let result  = ''
    
        for (let i = 0; i < length; i++){
            const randdomIndex = Math.floor(Math.random() * characters.length)
            result += characters[randdomIndex]
        }
    
        return `automaton_${result}@kingbilly.xyz`
    }

}


