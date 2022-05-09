describe("mysuite",function(){
    beforeAll(function(){
        console.log("launcing app ............");
    })

    afterAll(function(){
        console.log("closing app ............");
    })

    beforeEach(function(){
        console.log("login");
    })
 
    afterEach(function(){
        console.log("logout");
    })

    it("searchtest",function(){
        console.log("this is searchtest...");
    })
    
    it("advanced search",function(){
        console.log("this is advanced search");
    })
})