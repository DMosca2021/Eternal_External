# Eternal External v1.0

## Initial idea behind the app 

We wanted to create an app that allows a user to share information such as advice about themselves with a second user. The second user will have access to the first users advice as well as other well being information. 

- Create a quiz to get advice from user2
- Store quiz answers of user2 for user1 
- Based on answers true/false certain outputs will store
- Store user information for later use
- Can we create a username and password to store the users information? 
- Figure out how to link the user taking the quiz/giving the advice and user receiving advice 
- User1 getting advice via the user2 quiz questions 
- share info between users on local storage
- link the quiz to the API responses 
- group advice into different categories 
- put advice chosen from quiz into one array 
- User1 gets advice based on category of advice question 

## Description

Welcome to Eternal External, an app that allows users to share comforting thoughts and crucial advice with their loved ones even when they are no longer here. User1 will be able to create a unique profile that allows them to store information they would like to share with their loved ones. We achieve this by presenting a quiz to the user, User2, that will put them in scenarios their loved ones may experience day to day. The choices they make will be stored as advice and comforting thoughts for their loved ones, User1, to access when needed. User1 will also be able to make a unique profile to link with User2. In User1's profile they will be able to access the advice stored from User2. Also they will be able to input a short summary of how they are feeling and the app will reveal the emotions within their text. They will then be able to click on that emotion to bring them to a breakdown of how much of each emotion is in their text via a bar graph. Eternal External's goal is to help ease the feelings of grief and sorrow associated with the loss of a loved one by continuing the connection you had and the comfort they brought you in life. 

## How to use 

Home page:
- Use links at top of screen to navigate to difference sections of the app.
![Screenshot]() -- home screen img

Take the quiz:
- Click in text area to type your name. Save your name with the submit button. This will be User2
![Screenshot]() -- show name typed, quiz not displayed
- Click the start quiz button to begin and display the quiz. Choose a suitable answer, only 1 choice allowed at a time but a choice must be made. 
![Screenshot]() -- show quiz started, 1 box checked
![Screenshot]() -- show alert choice must be made
- Click save button to save your choice and move to the next question. At the end of the quiz you will be alerted that the quiz has ended and your choices are stored. 
![Screenshot]() -- Show end of quiz alert

Get answers:
- Click in text area to type your name. Save your name with the submit button.
![Screenshot]() -- show name typed
- To retrieve the stored answers from the quiz, click on the icon under "Do you need advice? I may have the answer...". A drop down menu will appear and you'll be able to choose a category to view the stored answers in. Stored answers will appear in a modal on screen.
![Screenshot]() -- Show dropdown menu
![Screenshot]() -- show modal
- To have a string of text analyzed for emotions, click in the lower text area and type a short sentence of how you are feeling. Click the submit button below the text for the analyzer to begin, when finished 
![Screenshot]() -- show typed text with emotion icons underneath.
- Click on the displayed emotion icon to access the bar graph breakdown of your emotional response score.
![Screenshot]() -- show graph

## How to access
In order to access Eternal External. Follow the provided links to either the deployed application or the application repo on Github.

- [Deployed Link](https://dmosca2021.github.io/adj_project1/)
- [Repo Link](https://github.com/DMosca2021/adj_project1)

## Future developement

We are constantly evolving to fit your needs and provide a better product. In the future we hope to offer some of the following features with more to come.

- User name displays on page after submitting.
- Create ability for unique user profiles.
- User2 response to User1 emotional feedback.
- Create a custom API to create custom tailored responses.
- Add more advice categories.
- Keep track of mental wellbeing day to day
- Add favicon to tab.

## Developers

- Alejandra Feuereisen [Github Profile](https://github.com/afeuerei14)
    - CSS and API manager, JavaScript for emotion graph
- Devin Mosca [Github Profile](https://github.com/DMosca2021)
    - Github manager, JavaScript for advice quiz and localstorage of advice
- Jillian FitzMaurice [Github Profile](https://github.com/jilliankayworks)
    - Team Leader, HTML, JavaScript for forms, emotional response, quality control

## Source links 

- [Advice Slip API](https://api.adviceslip.com/#endpoint-search)
- [Rapidapi Homepage](https://rapidapi.com/)
- [Materialize CSS Framework](https://materializecss.com/)
- [Twinword Sentiment Analyis API](https://www.twinword.com/)
- [Interpreting Score of Sentiment Analysis](https://www.twinword.com/blog/interpreting-the-score-and-ratio-of-sentiment/)
