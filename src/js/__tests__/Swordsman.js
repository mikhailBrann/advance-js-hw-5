import Swordsman from '../Swordsman';

test('swordsman test', () => {
    const expected = {"name": "Swordsman", "type": "Swordsman", "attack": 40, "defence": 10, "health": 100, "level": 1, "weapon": 'sword', "rage": 100};
    const testChapter = new Swordsman("Swordsman");
    expect(testChapter).toEqual(expected);
});