$(document).ready(function(){
  /*  $("select#beverage").change(function(event){
        event.preventDefault();
        var selectedBeverage = $(this).children("option:selected").val();
        alert(selectedBeverage);

    });*/
    //multiple select
   /* $("#submit").click(function(event){
        event.preventDefault();
        var selectedPets = []
        $.each($("#pets option:selected"),function(){
            selectedPets.push($(this).val());
        });
        alert(selectedPets)
    }); */
    //radio buttons
    /*
    console.log("name");
    $("#submit").click(function(){
        var flavor = $("input:radio[name='flavor']:checked").val();
        console.log(flavor);
        alert(flavor)
        
    });*/
    //date
    /*
    console.log("name");
    $("#submit").click(function(){
        var dateOfBirth = $("#born").val();
        alert(dateOfBirth)
    });
    //select box
   /* $("#submit").click(function(){
        var selectedBeverage = $("#beverage").val();
        alert(selectedBeverage)
    });*/
    //color
    $("#submit").click(function(){
        var favouriteColor = $("#color").val();
        alert(favouriteColor)
        $("body").css("background-color",""+favouriteColor);
    });

});

//thursday form inputs types
//select:
      //simple select- choose one item
      //multiple select - choose several items 
//radio buttons
//date
//color

//change() method
//The change() method triggers the change event, or attaches a function to run when a change event occurs.
// used in elements: input, textarea and select
//date: date input type provides an easier interface for users to browse, select, and input dates: