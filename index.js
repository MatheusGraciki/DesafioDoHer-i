const level = {
    Iron: 1000,
    Bronze: 1001,
    Silver: 2001,
    Gold: 6001,
    Platinum: 7001,
    Ascendant: 8001,
    Immortal: 9001,
    Radiant: 10001
}

function displayHeroTable(numberOfHeroes) {
    const heroes = createHeroes(numberOfHeroes);
    setLevelsForHeroes(heroes);

    const tableData = heroes.map(hero => ({
        HeroName: hero.name,
        HeroXp: hero.xp,
        HeroLevel: hero.level
    }));    
    
    console.table(tableData);
}    

function createHeroes(numberOfHeroes) {
    const heroes = [];
    
    for (let i = 0; i < numberOfHeroes; i++) {
        heroes.push({
            name: `hero${i}`,
            xp: 1000 * i + 1,
            level: null
        });    
    }    
    
    return heroes;
}    
function setLevelsForHeroes(heroes) {
    for (let i = 0; i < heroes.length; i++) {
        setHeroLevel(heroes[i]);
    }
}

function setHeroLevel(hero) {

    const levelKeys = Object.keys(level);
    
    for (let j = 0; j < levelKeys.length; j++) {
        const currentLevelKey = levelKeys[j];
        const nextLevelKey = levelKeys[j + 1];
        const nextLevelXP = level[nextLevelKey];

        if (!nextLevelKey || hero.xp < nextLevelXP) {
            hero.level = currentLevelKey;
            break;
        }    
    }    
}    



displayHeroTable(10);
