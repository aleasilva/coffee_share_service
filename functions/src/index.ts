import * as functions from 'firebase-functions';

// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
//
export const helloWorld = functions.https.onRequest((request, response) => {
   functions.logger.info("Hello logs!", {structuredData: true});
   response.send(
       { data: {
            name : 'Lara'
            }
        }
       );
 });


 export const randomNumber = functions.https.onRequest((request, response) => {
    const number = Math.round(Math.random() * 100);
    response.send(number.toString());
 });

 export const registerCoffee = functions.https.onRequest((request, response)=> {
    response.send("Register");
 });




