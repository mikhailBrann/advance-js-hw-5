import Zombie from '../Zombie';

test('Zombie test', () => {
    const expected = {"name": "Zombie", "type": "Zombie", "attack": 40, "defence": 10, "health": 100, "level": 1, "speed": 0.5};
    const testChapter = new Zombie("Zombie");
    expect(testChapter).toEqual(expected);
});