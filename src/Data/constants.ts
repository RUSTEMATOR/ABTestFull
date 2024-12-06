interface ILocation {
    Canada: string,
    Germany: string
    Australia: string
    NewZealand: string
}

interface IExpectedQuery {
    expectedQueryDE: string,
    expectedQuerryDENDB: string
    expectedQueryCA: string, 
    expectedQueryCANDB: string,  
    expectedQueryAU: string,  
    expectedQueryAUNDB: string,
    expectedQueryNZ: string,
    expectedQueryNZNDB: string

}


export const LOCATIONS: ILocation = {
    Canada: 'Canada - Montreal',
    Germany: 'Germany - Frankfurt - 1',
    Australia: 'Australia - Melbourne',
    NewZealand: 'New Zealand'
}


export const EXPECTED_QUERY: IExpectedQuery = {
    expectedQueryDE: "utm_source=Welcome&utm_medium=DE&utm_campaign=w_christmas&utm_content=05_12_24&utm_term=christmas_welcome",
    expectedQuerryDENDB: "utm_source=NDB&utm_medium=DE&utm_campaign=n2&utm_content=07_11_24&utm_term=Content2",
    expectedQueryCA: "utm_source=Welcome&utm_medium=CA&utm_campaign=w_christmas&utm_content=05_12_24&utm_term=christmas_welcome",
    expectedQueryCANDB: 'utm_source=NDB&utm_medium=CA&utm_campaign=n2&utm_content=13_11_24&utm_term=Content2',
    expectedQueryAU: "utm_source=Welcome&utm_medium=AU&utm_campaign=w_christmas&utm_content=05_12_24&utm_term=christmas_welcome",
    expectedQueryAUNDB: 'utm_source=NDB&utm_medium=AU&utm_campaign=n2&utm_content=13_11_24&utm_term=Content2',
    expectedQueryNZ: "utm_source=Welcome&utm_medium=NZ&utm_campaign=w_christmas&utm_content=05_12_24&utm_term=christmas_welcome", 
    expectedQueryNZNDB: '&utm_source=NDB&utm_medium=NZ&utm_campaign=n2&utm_content=06_12_24&utm_term=Content2',
}


export const PHONE_NUMBERS = {
    Canada: '769 346 7295',
    Germany: '21 691530',
    Australia: '3210 16186',
    NewZealand: '4 738 5913',
}


export const ERROR_TEXT = {
    EN: 'has already been taken',
    DE: 'ist bereits vergeben',
    FR: "n'est pas disponible",
    NO: "has already been taken"
}
