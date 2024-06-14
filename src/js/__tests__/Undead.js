import Undead from '../Undead';

test('Undead test', () => {
    const expected = {"name": "Undead", "type": "Undead", "attack": 25, "defence": 25, "health": 100, "level": 1, "needBoold": true};
    const testChapter = new Undead("Undead");
    expect(testChapter).toEqual(expected);
});