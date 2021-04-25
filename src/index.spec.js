var expect = require("chai").expect;
var getUrlParams = require("./index");
var test_url = "http://www.google.com/helloworld?name=google";

describe("Get url params: " + test_url, function() {
  it("should throw an error if url is not a string", function() {
    expect(function() {
      getUrlParams(null)
    }).to.throw("Parameter `url` must be a string.")
  })
  it("should be an object", function() {
    expect(getUrlParams(test_url)).to.be.an("object")
  })
  it("name = google", function() {
    expect(getUrlParams(test_url).name).to.equal("google")
  })
})




var test_url_no_query = "http://www.google.com/helloworld"
describe("Get url params: " + test_url_no_query, function() {
  it("should return an empty object: {}", function() {
    expect(getUrlParams(test_url_no_query)).to.be.an("object").that.is.empty
  })
})
