describe("countUpBy", function() {
  it("will count to total by multiple input", function() {
    expect(countUpBy(30, 5)).to.eql([5, 10, 15, 20, 25, 30]);
  });
});
