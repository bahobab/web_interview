# EstateSpace Frontend Development Challenge

This is my submission for the challenge.

I'd like to state here some comments that I already put in the code:

1. I was not able to make the 'Subscription' dropdown field required as the other required fields.
This has been the piece that has been challenging to implement. The solution that I found collides with the proptypes requirements.
So I just added a star for lack of better solution.
Maybe exploring the 'dangerouslySetInnerHTML' could be considered.

2. I added anotations (comments) where I think field validation could be carried out further, i.e., valid email and valid postal code format
3. I would suggest that the required fields message 'Required' does not show right from the start.
It's better to show the message to the user after the user has failed to fill the field (there are ample indications that the field is required with the star and the red border)
4. It would desireble to clear the fields after submission if the user is expected to staty on the same screen
5. Additional improvement would be to add accessibility where needed

Thank your for giving the opportunity to take this challenge.

# Running the Project

Open a terminal then run:

1. `npm install --legacy-peer-deps`
2. `npm run start`
3. open your browser to http://localhost:1234
4. fill out the form
5. click the submit button
6. open the browser's dev console to see the print out of the form fields/values as an object