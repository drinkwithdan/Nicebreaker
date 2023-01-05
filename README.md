# Nicebreaker

### An icebreaker facilitation selector
Nicebreaker is a mobile-first React app to search and display workshop icebreaker activities based on certain requirements. The goal of the app was to quickly and easily access content with the minimum amount of clicks possible.

This is a front-end app, with all of the data, routing and logic living in React - with the aim of keeping functionality as bare-bones and simple as possible.

#### Dependencies:
 - react
 - react-router-dom

### Home page

##### Search bar

The home page shows a search bar allowing the user to input criteria and filter based on:
 - Participants
 - Online / In person
 - Time to prepare.

On clicking the `Search` button a filtered list is displayed with the selected criteria.

Being mobile-first the emphasis is on legibility and simplicity, with a minimal amount of addiional CSS for wider-format displays.

##### Show All button

Adds the whole dataset to the displayed list.

##### Random button

Selects an icebreaker at random and displays it in the `/show` route.

#####

### Show page

A simple card is displayed showing the full details of the icebreaker, the card is filtered based on the icebreaker.id key.


Updated content coming very soon!