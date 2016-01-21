describe("countUpBy", function() {

  it("will count to total by multiple input, and if the remainder is not zero, it stops at the closest multiple under the total", function() {
    expect(countUpBy(30, 5)).to.eql([5, 10, 15, 20, 25, 30]);
  });

  it("will return false if either input is not a number", function() {
    expect(countUpBy("apple", 8)).to.equal(false);
  });

  it("will return false if either input is left blank", function() {
    expect(countUpBy("", 6)).to.equal(false);
  });

  it("will return false if either input is 0 or negative", function() {
    expect(countUpBy(-1, 6)).to.equal(false);
  });
});
