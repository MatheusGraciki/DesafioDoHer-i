class Hero{
    constructor(name,age,type){
        this,name = name;
        this.age = age;
        this.type = type;
    }

    attack() {
        const typeOfcharacter = {
            mage: 'magic ',
            warrior: 'sword',
            monk: 'martial arts',
            ninja: 'shuriken',
    }
        return `the ${this.type} attack using ${typeOfcharacter[this.type]}`    
    }

}
const hero = new Hero('PEDRO',12,'warrior')
console.log(hero.attack())