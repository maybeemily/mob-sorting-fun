import pageArray from '../src/page-array.js';
const test = QUnit.test;

const testArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

test('page 1 of 4 per page', assert => {
    //arrange
    const pagingOptions = {
        page: 1,
        perPage: 4
    };
    //act
    const paged = pageArray(testArray, pagingOptions);
    //assert
    assert.deepEqual(paged, [
        1, 2, 3, 4
    ]);
});

test('page 4 of 3 per page', assert => {
    //arrange
    const pagingOptions = {
        page: 4,
        perPage: 3
    };
    //act
    const paged = pageArray(testArray, pagingOptions);
    //assert
    assert.deepEqual(paged, [
        10, 11
    ]);
});