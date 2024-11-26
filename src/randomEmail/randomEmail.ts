var randomEmail = require('random-email');

export default class RandomEmail {

    constructor(){}

    async generateRandomEmail(domain?: string): Promise<string> {
        const randEmail = `automaton_${randomEmail({domain: domain || 'kingbilly.xyz', length: 23})}`
        return randEmail;
    }
}