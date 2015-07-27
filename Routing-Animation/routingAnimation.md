
# Building Services

### Create an Angular application that will search stack overflow for questions and display them in 2 different views.

1. Start with the implementation of the [Building Services lab]().
2. When clicking on the questions instead of redirecting to stackOverflow redirect to anthoer route where you will display the question details
3. To this question details views you should pass the question id and create another $http request to stackOverFlow Api to the following endpoint:

The route should start changing only once the request to api is resolved (use route resolve)
4. the response is very similiar to the reponse returned from the search, so in this view you should display the title, owner name, and a list of related tags. 
5. Clicking on the title redirects the user the stackoverflow website and clicking on the tags redirects you back to the search view and performs the search on the requested tag

