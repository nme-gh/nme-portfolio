$(document).ready(function () {

    // On the click/toggle event of the Bootstrap nav-tab, I need to change the text in <pre/> tag.
    // <pre id="jsfuncsyntax" class="brush: js text" title="Below is the code snippet, check it out!">
    //var test = $('.nav-tabs .active > a').attr('href');

    $('#js_demosTabs a[href="#numfun"]').click(function (e) {
        clearTabs();
        $('#preholder').html(" <pre class=\"brush: js\" title=\"Below is the code snippet, check it out!\"> " + getCode('numberfun') + "</pre>");
        SyntaxHighlighter.highlight();
    })

    $('#js_demosTabs a[href="#factorial"]').click(function (e) {
        clearTabs();
        $('#preholder').html(" <pre class=\"brush: js\" title=\"Below is the code snippet, check it out!\"> " + getCode('factorial') + "</pre>");
        SyntaxHighlighter.highlight();
    })

    $('#js_demosTabs a[href="#fizzbuzz"]').click(function (e) {
        clearTabs();
        $('#preholder').html(" <pre class=\"brush: js\" title=\"Below is the code snippet, check it out!\"> " + getCode('fizzbuzz') + "</pre>");
        SyntaxHighlighter.highlight();
    })

    $('#js_demosTabs a[href="#palindrome"]').click(function (e) {
        clearTabs();
        $('#preholder').html(" <pre class=\"brush: js\" title=\"Below is the code snippet, check it out!\"> " + getCode('checkPalindrome2') + "</pre>");
        SyntaxHighlighter.highlight();
    })

    function getCode(func){
        if (func === 'checkPalindrome2') {
            return checkPalindrome2;
        } else if (func === 'fizzbuzz') {
            return fizzbuzz;
        } else if (func === 'factorial') {
            return factorial;
        } else if (func === 'numberfun') {
            return numberfun;
        } else {
            return 'failed';    // [object HTMLDivElement]
        }
    }
    // JS Exercise: 5 Number Fun
    $('#5numberbtn').click(function () {
        numberfun();
    });

    function numberfun() {
        var num1 = parseInt($("input[name=integer1]").val());        var num2 = parseInt($("input[name=integer2]").val());        var num3 = parseInt($("input[name=integer3]").val());        var num4 = parseInt($("input[name=integer4]").val());        var num5 = parseInt($("input[name=integer5]").val());        var num1F = parseFloat($("input[name=integer1]").val());        var num2F = parseFloat($("input[name=integer2]").val());        var num3F = parseFloat($("input[name=integer3]").val());        var num4F = parseFloat($("input[name=integer4]").val());        var num5F = parseFloat($("input[name=integer5]").val());
        if ($.trim($("#min").text()) != ""
            || $.trim($("#max").text()) != ""
            || $.trim($("#sum").text()) != ""
            || $.trim($("#mean").text()) != ""
            || $.trim($("#product").text()) != "") {
            $("#min").empty();
            $("#max").empty();
            $("#sum").empty();
            $("#mean").empty();
            $("#product").empty();
        }

        var err = "";
        if (isNaN(num1) || isNaN(num2) || isNaN(num3) || isNaN(num4) || isNaN(num5)) {
            err = "You must submit 5 numbers!";
        } else if (num1 <= 0 || num2 <= 0 || num3 <= 0 || num4 <= 0 || num5 <= 0) {
            err = "You must enter positive numbers!";
        } else if (num1F % 1 != 0 || num2F % 1 != 0 || num3F % 1 != 0 || num4F % 1 != 0 || num5F % 1 != 0) {
            err = "You must enter whole numbers!";
        }

        if (err.trim() != "") {
            $("#5numbererror").html(err);
            return;
        } else {
            $("#5numbererror").empty();
        }

        var lowest = Math.min(num1, num2, num3, num4, num5);
        var highest = Math.max(num1, num2, num3, num4, num5);
        $("#min").html("<h3>The lowest of the numbers is " + lowest + "</h3>");
        $("#max").html("<h3>The highest of the numbers is " + highest + "</h3>");
        $("#sum").html("<h3>The sum of the numbers is " + (num1 + num2 + num3 + num4 + num5) + "</h3>");
        $("#mean").html("<h3>The mean of the numbers is " + ((num1 + num2 + num3 + num4 + num5) / 5) + "</h3>");
        $("#product").html("<h3>The product of the numbers is " + (num1 * num2 * num3 * num4 * num5) + "</h3>");
    };

    // JS Exercise: Factorial
    $('#factorbtn').click(function () {
        factorial();
    });
    
    function factorial() {
        var num = parseInt($("#factorinput").val());
        var numF = parseFloat($("#factorinput").val());

        if ($.trim($("#factorresult").text()) != "") {
            $("#factorresult").empty();
        }

        var err = "";
        if (isNaN(num)) {
            err = "You must submit a number!";
        } else if (num < 0) {
            err = "You must enter a positive number!";
        } else if (numF % 1 != 0) {
            err = "You must enter a whole number!";
        }

        if (err.trim() != "") {
            $("#factorerror").html(err);
            return;
        } else {
            $("#factorerror").empty();
        }

        if (num === 0) {
            $("#factorresult").text("Factorial of 0 is 1.");
            return;
        }
        if (num < 0) {
            $("#factorresult").text("Factorial of a negative number is undefined.");
            return;
        }
        if (num >= 171) {
            $("#factorresult").text("Factorial of the number is too big as in big integer range.");
            return;
        }

        var factorial = 1;
        for (var i=num; i>1; i--) {
            factorial *= i
        }
        $("#factorresult").text("Factorial of " + num + " is " + factorial);
    };

    // JS Exercise: FizzBuzz
    $('#fizzbtn').click(function () {
        fizzbuzz();
    });

    function fizzbuzz() {
        var val1 = parseInt($("#fizzinput1").val());
        var val2 = parseInt($("#fizzinput2").val());
        var val1F = parseFloat($("#fizzinput1").val());
        var val2F = parseFloat($("#fizzinput2").val());

        if ($.trim($("#fizzresult").text()) != "") {
            $("#fizzresult").empty();
        }

        var err = "";
        if (isNaN(val1) || isNaN(val2)) {
            err = "You must submit 2 numbers!";
        }
        else if (val1 < 1 || val1 > 100 || val2 < 1 || val2 > 100) {
            err = "You must enter numbers between 1 and 100!";
        }
        else if ((val1F % 1 != 0) || (val2F % 1) != 0) {
            err = "You must enter whole numbers!";
        }
        else if (val1 === val2) {
            err = "Please enter different valid numbers!";
        }

        if (err.trim() != "") {
            $("#fizzerror").html(err);
            return;
        } else {
            $("#fizzerror").empty();
        }

        var output = '';
        for (var i = 1; i <= 100; i++) {
            if (i % val1 === 0 && i % val2 === 0) {
                output = output + "FizzBuzz ";
            }
            else if (i % val1 === 0) {
                output = output + "Fizz ";
            }
            else if (i % val2 === 0) {
                output = output + "Buzz ";
            }
            else {
                output = output + i + " ";
            }
        }
        $("#fizzresult").text(output);
    };

    // JS Exercise: Palindrome
    $('#palbtntab').click(function () {
        checkPalindrome2();
    });

    /* 
    Below are equivalent:
    var strAlpha = str.replace(/[\W_]/g, '');
    var strAlpha = str.replace(/[^A-Za-z0-9]/g, '');
    */
    function checkPalindrome2() {
        var str = $('#palinputtab').val();

        if ($.trim($("#paltruetab").text()) != "") {
            $("#paltruetab").empty();
        }

        var err = "";
        if (!str) {
            err = "You must enter a string!";
        }

        if (err.trim() != "") {
            $("#palerrortab").html(err);
            return;
        } else {
            $("#palerrortab").empty();
        }

        var strAlpha = str.replace(/[^A-Za-z0-9]/g, '');
        strAlpha = strAlpha.toLowerCase();

        var reversedStr = strAlpha.split('').reverse().join('');
        $('#paltruetab').html((reversedStr === strAlpha) ? "Yes, the string is a palindrome!" : "No, the string is NOT a palindrome!");
    };

    $("#palclosebtntab").click(function () {
        clearTabs();
    });

    function clearTabs() {
        $("input[name=integer1]").val("");        $("input[name=integer2]").val("");        $("input[name=integer3]").val("");        $("input[name=integer4]").val("");        $("input[name=integer5]").val("");        $("#min").html("");
        $("#max").html("");
        $("#sum").html("");
        $("#mean").html("");
        $("#product").html("");
        $("#5numbererror").html("");

        $("#factorinput").val("");
        $("#factorresult").html("");
        $("#factorerror").html("");

        $("#fizzinput1").val("");
        $("#fizzinput2").val("");
        $("#fizzresult").html("");
        $("#fizzerror").html("");

        $("#palinputtab").val("");
        $("#paltruetab").html("");
        $("#palerrortab").html("");
    }

// Not Needed Anymore!! - Begin
    $('#palbtn').click(function checkPalindrome() {
        var str = $('#palinput').val();
        //var strAlpha = str.replace(/[\W_]/g, '');
        var strAlpha = str.replace(/[^A-Za-z0-9]/g, '');
        strAlpha = strAlpha.toLowerCase();

        var reversedStr = strAlpha.split('').reverse().join('');
        $('#paltrue').html((reversedStr === strAlpha) ? "The string is a palindrome!" : "The string is NOT a palindrome!");
    });

    $("#palclosebtn").click(function () {
        $("#paltrue").html("");
        $("#palinput").val("");
    });
    $("#palclosebtn2").click(function () {
        $("#paltrue").html("");
        $("#palinput").val("");
    });// Not Needed Anymore!! - End


});