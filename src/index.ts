// calculator step guide
// 1. zorg ervoor dat de buttons die worden geklikt, dat daarvan de waarde wordt opgeslagen tot dat er op een operator (-. /, *, +) wordt
// geklikt.
//2. zorg ervoor dat de gebruiker zijn of haar waarde terug ziet op het scherm.
//3. sla deze waarde op wanneer er dus op die operator wordt geklikt en maak dan het schermpje blanco.
//4. wanneer de operator wordt geklikt moet deze worden opgeslagen
//5. de gebruiker vult dan zijn tweede waarde in die moet worden opgeslagen wanneer er op het = wordt geklikt
//6. wanneer er op het = teken is geklikt moet er worden gekeken welke operator is aangeklikt.
//7. wanneer we dit weten moeten de twee opgeslagen waardes met elkaaar worden berekend.
//8. toon de berekende waarde aan de gebruiker


class Calculator{
    nummer1 = document.getElementById("1");


    constructor(){
        this.numberClick(1);
    }

    numberClick(nummer: number){
        console.log(nummer);
    }
}

new Calculator();