describe('Parameter Header Cookies Berbar Token Auth suit', () => {
    // code here
    it('Query parameter test', () => {
        // code here
        const queryparam = { page: 2 }
        cy.request({
            method: 'GET',
            url: 'https://reqres.in/api/users',
            qs: queryparam
        }).then((response) => {
            expect(response.status).to.eq(200)
            //expect(response.body).to.have.property('parameters', 'value');
            expect(response.body.page).to.eq(2)
            expect(response.body.data).has.length(6)
            expect(response.body.data[0]).have.property("id", 7)
            expect(response.body.data[0]).has.property("first_name", 'Michael')
        });
    });

    it('passing header cookies token test', () => {
        // code here

        cy.request({
            method: 'POST',
            url: 'https://jsonplaceholder.typicode.com/posts/',
            headers: { 'Content-Type': 'application/json' },
            body:
            {
                userId: 1,

                title: "post call",
                body: "this is post call"
            }

        }).then((response) => {
            expect(response.status).to.eq(201)
            //expect(response.body).to.have.property('parameters', 'value');

        });
    });

 
    



})