describe('Create Token use in next', () => {
   // code here
     let mytoken=null;
   before('Create Token for user', () => {
      // code here
      cy.request({
          method: 'POST',
          url: 'https://restful-booker.herokuapp.com/auth',
          Headers:{'Content-Type': 'application/json'},
          body: {
           username : "admin",
            password : "password123"
          }
        }).then((resp) => {
            expect(resp.status).to.eq(200)
            mytoken=   resp.body.accessToken;
          console.log(mytoken)
     
        });
   });
})