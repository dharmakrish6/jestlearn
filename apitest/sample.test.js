it("Async test", async done => {
    expect(1).toBe(1);
  
    done();
  });

  it("Async test2", async done => {
    expect(1).toBe(12);
  
    done();
  });


  it("Async test3", async done => {
    console.log('test 3')
    done();
  });