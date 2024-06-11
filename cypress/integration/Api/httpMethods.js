describe('HttpMethods suit', () => {
    // code here
    it('Get Method ', () => {
        cy.request('Get', 'https://jsonplaceholder.typicode.com/posts')
            .its('status')
            .should('equal', 200)
    });
    // it('Get Method ', () => {
    //     cy.request('Get', 'https://jsonplaceholder.typicode.com/users')
    //         .its('status')
    //         .should('equal', 200)
    // });
    it('Post Method ', () => {
        cy.request(
            {
                method: 'Post',
                url: 'https://jsonplaceholder.typicode.com/posts/',
                body:
                {
                    userId: 1,

                    title: "post call",
                    body: "this is post call"
                }
            }
        )
            .its('status')
            .should('equal', 201)
    });
    it('put Method ', () => {
        cy.request(
            {
                method: 'PUT',
                url: 'https://jsonplaceholder.typicode.com/posts/1',
                body:
                {
                    userId: 1,

                    title: "post call",
                    body: "this is post call"
                }
            }
        )
            .its('status')
            .should('equal', 200)
    });

    it('delete Method ', () => {
        cy.request(
            {
                method: 'DELETE',
                url: 'https://jsonplaceholder.typicode.com/posts/1',
                
               
            } )
            .its('status')
            .should('equal', 200)
    });





    // it('Post Method ', () => {
    //     cy.request(
    //         {
    //             method: 'Post',
    //             url: 'https://jsonplaceholder.typicode.com/users/',
    //             body:
    //             {
    //                 id: 2,
    //                 name: "dattatray",
    //                 username: "dattatray",
    //                 email: "dattafugare@info.com"
    //             }
    //         }
    //     )
    //         .its('status')
    //         .should('equal', 201)

    // });
  
})




