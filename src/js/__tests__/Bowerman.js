import Bowerman from '../Bowerman';

test('boweman test', () => {
    const expected = {"name": "Bowman", "type": "Bowman", "attack": 25, "defence": 25, "health": 100, "level": 1, "weapon": 'bow', "concentration": 100};
    const testChapter = new Bowerman("Bowman");
    expect(testChapter).toEqual(expected);
});