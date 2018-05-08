var mysql      = require('mysql');

var inquirer = require('inquirer');



var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
  
    // Your username
    user: "root",
  
    // Your password
    password: "Lalaleo1",
    database: "bamazonDB"
  });
 
  
  connection.connect(function(err) {
    if (err) throw err;
    console.log("connected as id " + connection.threadId);
    start();
 
    
   
  });

  var item = ''

  var quantity = ''
  // List of all products that are in the database

  function start() {
    connection.query("SELECT * FROM products", function(err, res) {
        if (err) throw err;

    inquirer
      .prompt({
        name: "choice",
        type: "rawlist",
        message: "Select an item to start your order",
        choices: function () {
            var choiceArray = [];
            
              for (var i = 0; i < res.length; i++) {
                choiceArray.push(res[i].product)
              }
             return choiceArray; 
          }
          
      }) 

      .then(function(answer) { 

        var chosenItem;
        for (var i = 0; i < res.length; i++) {
          if (results[i].item_name === answer.choice) {
            chosenItem = res[i];
            console.log(chosenItem)
   
          }
        }

     
    });  
     
    }) 
   
};

// function to enter the quantity that the customer wants to purchase

function quantity(){
    inquirer
    .prompt({
        name: "quantity",
        type: "input",
        message: "How many would you like to order?",
        validate: function(value) {
            if (isNaN(value) === false) {
              return true;
            }
            return false;
          }
          
    })
}
// gives 

  
  

  

  
  