Welcome to the front end. Most everything you see on the webpage is generated here. We have our bootstrap, which keeps the website looking clean, and the HTML which gives us text and a place to display our data.

However, there is much more here. We have a game engine that generates the dice and calculates winners and losers. It isn't too complicated, but it works.

We also hace our CRUD actions for the userm, and the AJAZ request that posts games. The biggest issue I encountered while making this app was the games we're getting posted, even if the user or the computer had an invalid roll and had to go again. I fixed this with an if statement.
