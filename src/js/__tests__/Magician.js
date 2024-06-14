import Magician from '../Magician';

test('Magician test', () => {
    const expected = {"name": "Magician", "type": "Magician", "attack": 10, "defence": 40, "health": 100, "level": 1, "weapon": 'magic', "manna": 100};
    const testChapter = new Magician("Magician");
    expect(testChapter).toEqual(expected);
});