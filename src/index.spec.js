var expect = require("chai").expect;
var getUrlParams = require("./index");
var test_url = "http://www.google.com/helloworld?name=google";

describe("Get url params: " + test_url, function() {
  it("should be an object", function() {
    expect(getUrlParams(test_url)).to.be.an("object")
  })
  it("name = google", function() {
    expect(getUrlParams(test_url).name).to.equal("google")
  })
})
