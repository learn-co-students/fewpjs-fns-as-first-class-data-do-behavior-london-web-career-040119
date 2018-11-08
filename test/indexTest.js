describe("index.js", () => {
  it("Returns Good Morning before 12pm", () => {
    expect(greet(8)).to.equal('Good Morning')
  })
  it("Returns Good Afternoon between 12pm and 5pm ", () => {
    expect(greet(14)).to.equal('Good Afternoon')
  })
  it("Returns Good Evening after 5pm", () => {
    expect(greet(19)).to.equal('Good Evening')
  })
  it("Returns Hello with other input", () => {
    expect(greet("Random Input")).to.equal('Hello')
  })
})
