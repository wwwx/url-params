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

var test_url_2 = "http://www.google.com/helloworld"
describe("Get url params: " + test_url_2, function() {
  it("should return an empty object: {}", function() {
    expect(getUrlParams(test_url_2)).to.be.an("object").that.is.empty
  })
})

var test_url_3 = "http://www.google.com/helloworld?name"
describe("Get url params: " + test_url_3, function() {
  it("name = true", function() {
    expect(getUrlParams(test_url_3).name).to.be.true
  })
})
