const sum = (a, b) => {
    return a + b
}

describe('Тесты контактов', () => {
    it('Первый тест', () => {
        expect(sum(1, 2)).toEqual(3)
    })
})