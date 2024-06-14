import Daemon from '../Daemon';

test('Daemon test', () => {
    const expected = {"name": "Daemon", "type": "Daemon", "attack": 10, "defence": 40, "health": 100, "level": 1, "summoningFamiliars": true};
    const testChapter = new Daemon("Daemon");
    expect(testChapter).toEqual(expected);
});