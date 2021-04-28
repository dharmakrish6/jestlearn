describe('sample test suite', () => {
  test("Async test", async done => {
    expect(1).toBe(1);

done();
  });

  test("Async test3", async done => {
    console.log('test 3')
    done();
  });
})
