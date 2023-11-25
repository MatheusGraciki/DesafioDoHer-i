const rankingLevel = {
    Iron: 10,
    Bronze: 11,
    Silver: 21,
    Gold: 51,
    Diamante: 81,
    Lendário: 91 ,
    Immortal: 101,
}

function displayHeroTable(numberOfHeroes) {
    const heroes = createHeroes(numberOfHeroes);
    setRanksForHeroes(heroes);
    
    const tableData = heroes.map(hero => ({
        HeroName: hero.name,
        VictoryPoints: hero.victoryPoints,
        WinningMargin: hero.victoryPoints - hero.defeatPoints ,
        HeroLevel: hero.rankingLevel
    }));    
    
    console.table(tableData);

    // Solução requisitada no desafio
    // for (let i = 0; i < heroes.length; i++) {
    //     console.log(`O Herói de nome: ${heroes[i].name}, está no rank: ${heroes[i].rankingLevel} e está com ${heroes[i].victoryPoints} vitórias`);
    // }
} 

function createHeroes(numberOfHeroes) {
    const heroes = [];
    
    for (let i = 0; i < numberOfHeroes; i++) {
        heroes.push({
            name: `hero${i}`,
            victoryPoints: 10 *i,
            defeatPoints: Math.floor(Math.random() * 10 * i),
            rankingLevel: 'Iron'
        });    
    }    
    
    return heroes;
}    

function setRanksForHeroes(heroes) {
    for (let i = 0; i < heroes.length; i++) {
        setHeroRank(heroes[i]);
    }
}

function setHeroRank(hero) {
    const levelKeys = Object.keys(rankingLevel);
    
    for (let j = 0; j < levelKeys.length; j++) {
        const currentLevelKey = levelKeys[j];
        const nextLevelKey = levelKeys[j + 1];
        const nextLevelXP = rankingLevel[nextLevelKey];

        if (!nextLevelKey || hero.victoryPoints < nextLevelXP) {
            hero.rankingLevel = currentLevelKey;
            break;
        }    
    }    
}    



displayHeroTable(12);
