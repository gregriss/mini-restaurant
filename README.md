# mini-restaurant
Server Project

Homepage
	home.html
	Display Form
	style.css

Reservation Form 

	Name
	Time 
	Telephone Number
	# of people
	Email
	ID
	JavaScript: $.ajax "POST" method

Reservation View
	
	List of Cards (boostrap element)
	javascript $.ajax "GET" method


Server file (server.js)

    install express (require('express'))
    create the server 
        set up PORT #
            require express 

        set up listener for server
            server.listen

    add json middleware 

    create array called reservations that will be updated by POST method and read by GET method

    set up routes 
        homepage (/) for index.html
        reservations (/reservations) (for reservations.html)

        GET reservations API input (get from database)
        POST request (send to database)




