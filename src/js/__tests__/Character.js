import Character from '../Character';

test('Exception chapter name', () => {
    expect(() => new Character("J", "Magician")).toThrow("Сharacter name must be a string between 2 and 10 characters long");
});

test('Exception chapter type1', () => {
    expect(() => new Character("Jonn", 1)).toThrow("Сharacter type incorrect");
});

test('Exception chapter type2', () => {
    expect(() => new Character("Jonn", "fsdf")).toThrow("Сharacter type incorrect");
});

test.each([
    ["chapter", {"name": "chapter", "type": "Daemon", "attack": 10, "defence": 40, "health": 100, "level": 1}]
])(`Test chapter class in %n%`, (name, expected) => {
    const testChapter = new Character(expected.name, expected.type);
    expect(testChapter).toEqual(expected);
});

test('Exception chapter levelUp', () => {
    const testChapter = new Character("Jonn", "Magician");

    testChapter.health = 0;
    expect(() => testChapter.levelUp()).toThrow("Сharacter is dead");
});

test('chapter levelUp', () => {
    const testChapter = new Character("Jonn", "Magician");
    testChapter.levelUp();
    expect(testChapter.level).toEqual(2);
    expect(testChapter.attack).toEqual(12);
    expect(testChapter.defence).toEqual(48);
});


test('Exception chapter damage', () => {
    const testChapter = new Character("Jonn", "Magician");

    testChapter.health = 0;
    expect(() => testChapter.damage(100)).toThrow("Сharacter is dead");
});

test('chapter damage', () => {
    const testChapter = new Character("Jonn", "Magician");
    testChapter.damage(43);
    expect(testChapter.health).toEqual(57);

    testChapter.damage(87);
    expect(testChapter.health).toEqual(0);
});