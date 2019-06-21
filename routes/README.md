# Users Routes  

**USERS**

  - GET all users with endpoint users/ will return users usernames this maybe written out  as it is seen as a security issue to know what usernames exist but I used this to test if delete was successful and if updating a username was successful so I may leave it but comment it out or provide admin access to it only. 
  - delete    users/:id    id should be the users id  and the user logged in will be able to remove their account from the database 
  - POST   users/   registers the user  first checks if the user is already registerd if it is  it will return out. If not it will also create default favorites list and fav coin. Also sets the username using an algorithm i designed to add characters to the username if its already taken or subtract characters. Some flaws where I don't have a cap put on the username length  currently.  I will have to evaulate this. This has been added to the bug fixes and because I have no users not a primary concern at this time. 
  - PUT users/:id    will update the users username should take a username and then the id off the params will allow for updating the username.  The idea is that on account creation I will select the username from their Auth0 (google) account. I will adjust it if it is taken and then allow the user to figure something out later if they wish to update it. there is a check to make sure that the username is exists and is not less than 3 characters. So for this section I have taken account to the constraits of the username. 

**FAVORITES**

  - GET   favorites/    gets all list of favorites.  This data will be used to analyze  favorites at certain points in time and then later use to analyze  if the people had something in common if they were right about a coin  did it grow etc..   This part has not been implemented yet but I think there is  a level of insight that can be measured in this type of data that would make it very valuable. 
  - get    favorites/:id   gets favorites by id  so if a it is desired to get the favorites for a user which it will be on the frontend those favorites will be returned. 
  - put  favorites/:id   update the favorites for a user 
  
  **FAVS**
  - GET favs/   gets all fav coins again this can become valuable if enough users joined the site in which the plan is to display this data for all. The trend is your friend,  go with the herd or perhaps against it. 
  - PUT  favs/   update the favorite coin for a user. Mainly will be use on the frontend to make changes when neccessary and to save the users account where they left it. 

**COINS**

  - GET    coins/  will return all coins  not really used much on the backend since I am using another API to gather the coins for the users.  Currently the only purpose for having coins in the database is to make sure that the coins being added to favorites and as favs exist in the database likely will have to be updated from time to time so I may see about using the api  on the backend to perform the check of the existing coin so there will be less maintenance  created a card for this. 
