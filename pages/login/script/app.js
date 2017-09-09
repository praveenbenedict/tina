$(document).ready(function() {
    $('.login-form').show();
    $('.test-form').hide();

    $('#attempt-button').click(function(){
        $('.login-form').slideUp(500);
        $('.test-form').slideDown(1000);
        var selectedSubject = $('#subject-list option:selected').text();
        var regNo = $("#regNo").val();
        var questionList;
        console.log(selectedSubject);
        console.log(regNo);

        if(selectedSubject == "Programming and Data Structures"){
            questionList = [
                new Question("What kind of Programming Language is C++",["Modular","Prototypal","Functional","Object Oriented"],"Object Oriented"),
                new Question("A set STL contains",["Unique Elements Only","Unique and Non Unique Elements","Non Unique Elements","All of the Above"],"Unique Elements Only"),
                new Question("Which Data Structure Follows LIFO Principle?",["Queue","Stack","Vector","List"],"Stack"),
                new Question("Which of the following uses FIFO method?",["Queue","Stack","Hash Table","Binary Search tree"],"Queue"),
                new Question("Quick sort algorithm is an example of ",["Greedy Approach","Improved Binary Search","Dynamic Programming","Divide And Conquer"],"Divide And Conquer")
            ];
            createQuestionList(questionList, selectedSubject, regNo);
        }
        else if(selectedSubject == "Computer Architecture"){
            questionList = [
                new Question("PROM stands for", ["Programmable Read Only Memory","Pre-fed Read Only Memory","Pre-required Read Only Memory","Programmed Read Only Memory"], "Programmable Read Only Memory"),
                new Question("The PROM is more effective than ROM chips in regard to ", ["Cost","Memory Management", "Speed Of Operation","Both a & c"],"Both a & c"),
                new Question("The difference between EPROM and ROM circuitory is", ["Usage of MOSFET over transistor","Usage of JFET over transistors","Usage of Extra Transistor","None Of The Above"], "Usage of Extra Transistor"),
                new Question("The ROM chips are mainly used to store", ["System Files","Root Directories","Boot Files","Driver Files"], "Boot Files"),
                new Question("The contents of EPROM are erased by", ["Overcharging a chip","UV rays","IR rays","Discharging the chip"], "UV rays")
            ];
            createQuestionList(questionList, selectedSubject, regNo);
        }
        else if(selectedSubject == "Analog And Digital Communication"){
            questionList = [
                new Question("Find the resolution of 8 bit DAC/ADC", ["562","625","256","265"],"256"),
                new Question("A binary input 000 is fed to a 3 bit ADC. Resultant output is 101. Find the type of error", ["Settling Error","Gain Error","Offset error","Linearity error"],"Offset error"),
                new Question("How many equal intervals are present in a 14 bit D-A converter", ["16383","4095","65535","1023"],"16383"),
                new Question("A good converter exibhits a linearity error", ["Less than or equal to half LSB","Greater than equal to half LSB","Greater than or equal to half LSB","None of the above"],"None of the above"),
                new Question("All the commercially available DAC are ", ["Monotonic","Non-Monotonic","Either Monotonic or Non Monotonic","None of the Above"],"Monotonic")
            ];
            createQuestionList(questionList, selectedSubject, regNo);
        }
        else if(selectedSubject == "Database Management Systems"){
            questionList = [
                new Question("Which of the following is a Fundamental Operation is Relational Algebra?", ["Set Intersection","Natural Join","Assignment","None of the above"],"None of the above"),
                new Question("Which of the following is used to denote the selection operation in Relational Algebra?", ["Pi","Sigma","Lambda","Omega"],"Sigma"),
                new Question("Which is an Unary Operation?", ["Selection","Primitive","Projection","Generalization"],"Generalization"),
                new Question("Which of the following is not an outer join?", ["Left Outer Join","Right Outer Join","Full Outer Join","All of the above"],"All of the above"),
                new Question("Which is the join condition that contains an equality operator?", ["Equi Joins","Cartesian","Natural","Left"],"Equi Joins")
            ];
            createQuestionList(questionList, selectedSubject, regNo);
        }
    
    

    });
});

