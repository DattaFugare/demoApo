describe('validate response', () => {
    // code here
    it('approch 1- hard  codedn json object ', () => {

        // code here
        const reqBody = {
            userId: 1,

            title: "post call / validate response",
            body: "this is post call /validate response"
        }
        cy.request({
            method: "POST",
            url: 'https://jsonplaceholder.typicode.com/posts/',
            body: reqBody
        }).then((Response) => {
            expect(Response.status).to.equal(201)
            expect(Response.body.title).to.eq("post call / validate response")
            expect(Response.body.userId).to.eq(1)
        })
    });


    it('approch 2- dynamically json object ', () => {

        // code here
        const reqBody = {
            userId: 1,

            title: Math.random().toString(7).substring(7) + "validate response",
            body: Math.random().toString(7).substring(7)
        }
        cy.request({
            method: "POST",
            url: 'https://jsonplaceholder.typicode.com/posts/',
            body: reqBody
        }).then((Response) => {
            expect(Response.status).to.equal(201)
            expect(Response.body.title).to.eq(reqBody.title)
            expect(Response.body.userId).to.eq(1)
            expect(Response.body.body).to.eq(reqBody.body)
        })
    });


    it('approch 3- using fixture json object ', () => {

        cy.fixture("example").then((mydata)=>{
            const reqBody=mydata;
      
       
        cy.request({
            method: "POST",
            url: 'https://jsonplaceholder.typicode.com/posts/',
            body: reqBody
        }).then((Response) => {
            expect(Response.status).to.equal(201)
            expect(Response.body.title).to.eq(reqBody.title)
            expect(Response.body.body).to.eq(reqBody.body)
        })
    })  
    });


})