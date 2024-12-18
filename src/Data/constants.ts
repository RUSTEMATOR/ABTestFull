interface ILocation {
    Canada: string,
    Germany: string
    Australia: string
    NewZealand: string
    Austria: string
    Switzerland: string
    Norway: string
    Ireland: string
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
    expectedQueryAT: string,
    expectedQueryATNDB: string,
    expectedQueryCH: string,
    expectedQueryCHNDB: string
    expectedQueryNO: string, 
    expectedQueryNONDB: string,
    expectedQueryIE: string,
    expectedQueryIENDB: string

}


export const LOCATIONS: ILocation = {
    Canada: 'Canada - Toronto',
    Germany: 'Germany - Frankfurt - 1',
    Australia: 'Australia - Melbourne',
    NewZealand: 'New Zealand',
    Austria: 'Austria',
    Switzerland: 'Switzerland - 2',
    Norway: 'Norway', 
    Ireland: 'Ireland',
}


export const EXPECTED_QUERY: IExpectedQuery = {
    expectedQueryDE: "utm_source=Welcome&utm_medium=DE&utm_campaign=w_christmas&utm_content=05_12_24&utm_term=christmas_welcome",
    expectedQuerryDENDB: "utm_source=NDB&utm_medium=DE&utm_campaign=n2&utm_content=07_11_24&utm_term=Content2",
    expectedQueryCA: "utm_source=Welcome&utm_medium=CA&utm_campaign=w_christmas&utm_content=05_12_24&utm_term=christmas_welcome",
    expectedQueryCANDB: 'utm_source=NDB&utm_medium=CA&utm_campaign=n3&utm_content=18_12_24&utm_term=Content3',
    expectedQueryAU: "utm_source=Welcome&utm_medium=AU&utm_campaign=w_christmas&utm_content=05_12_24&utm_term=christmas_welcome",
    expectedQueryAUNDB: 'utm_source=NDB&utm_medium=AU&utm_campaign=n3&utm_content=11_12_24&utm_term=Content3',
    expectedQueryNZ: "utm_source=Welcome&utm_medium=NZ&utm_campaign=w_christmas&utm_content=05_12_24&utm_term=christmas_welcome", 
    expectedQueryNZNDB: 'utm_source=NDB&utm_medium=NZ&utm_campaign=n2&utm_content=09_12_24&utm_term=Content2',
    expectedQueryAT: 'utm_source=Welcome&utm_medium=AT&utm_campaign=w_christmas&utm_content=05_12_24&utm_term=christmas_welcome',
    expectedQueryATNDB: 'utm_source=NDB&utm_medium=AT&utm_campaign=n2&utm_content=22_11_24&utm_term=Content2',
    expectedQueryCH: 'utm_source=Welcome&utm_medium=CH&utm_campaign=w1&utm_content=18_10_24&utm_term=Original',
    expectedQueryCHNDB: 'utm_source=NDB&utm_medium=CH&utm_campaign=n2&utm_content=22_11_24&utm_term=Content2',
    expectedQueryNO: 'utm_source=Welcome&utm_medium=NO&utm_campaign=w_christmas&utm_content=05_12_24&utm_term=christmas_welcome', 
    expectedQueryNONDB: 'utm_source=NDB&utm_medium=NO&utm_campaign=n1&utm_content=18_10_24&utm_term=Original',
    expectedQueryIE: 'utm_source=Welcome&utm_medium=IE&utm_campaign=w_christmas&utm_content=05_12_24&utm_term=christmas_welcome',
    expectedQueryIENDB: 'utm_source=NDB&utm_medium=IE&utm_campaign=n1&utm_content=18_10_24&utm_term=Original'

}


export const PHONE_NUMBERS = {
    Canada: '250-722-0726 ',
    Germany: '21 691530',
    Australia: '3210 16186',
    NewZealand: '4 738 5913',
    Austria: '0699 446 74 19',
    Switzerland: '056 378 95 70',
    Norway: '468 69 900',
    Ireland: '086 608 6991'
}


export const ERROR_TEXT = {
    EN: 'has already been taken',
    DE: 'ist bereits vergeben',
    FR: "n'est pas disponible",
    NO: "has already been taken"
}


