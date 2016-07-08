$(document).ready(function () {
    //Initialize the html text of the two dropdowns
    $('#PgrmButton').html('Program Type');
    $('#EduButton').html('Education Level');

    //When a dropdown option is clicked, the title is now replaced with the current filter
    //After the title has been changed, dataCheck function takes action
    $('.option').click(function () {
        var dataType = $(this).attr('data-type');
        if (dataType == 'pgrm') {
            Rename($(this), 'program');
        } else if (dataType == 'edu') {
            Rename($(this), 'level');
        }
        dataCheck();
    });

    //Properly renames dropdown title
    function Rename(div, dataType) {
        var dataHTML = $(div).attr('data-' + dataType);
        $(div).parent('.dropdown-menu').siblings('.btn').html(returnHTML(dataHTML));
    }

    //Takes a data-program or data and outputs the proper dropdown title
    function returnHTML(dataIn) {
        switch (dataIn) {
            case 'pgrm':
                var dataOut = 'Program Type';
                break;
            case 'schlr':
                var dataOut = 'Scholarship';
                break;
            case 'loan':
                var dataOut = 'Loan';
                break;
            case 'edu':
                var dataOut = 'Education Level';
                break;
            case 'kind':
                var dataOut = 'Kindergarten';
                break;
            case 'elem':
                var dataOut = 'Elementary';
                break;
            case 'mid':
                var dataOut = 'Middle School';
                break;
            case 'high':
                var dataOut = 'High School';
                break;
            default:
                var dataOut = '';
        }
        return dataOut;
    }
    
    //Gives the necessary dropdown title based on the data-program or data-level
    function returnData(dataIn) {
        switch (dataIn) {
            case 'Program Type':
                var dataOut = 'pgrm';
                break;
            case 'Scholarship':
                var dataOut = 'schlr';
                break;
            case 'Loan':
                var dataOut = 'loan';
                break;
            case 'Education Level':
                var dataOut = 'edu';
                break;
            case 'Kindergarten':
                var dataOut = 'kind';
                break;
            case 'Elementary':
                var dataOut = 'elem';
                break;
            case 'Middle School':
                var dataOut = 'mid';
                break;
            case 'High School':
                var dataOut = 'high';
                break;
            default:
                var dataOut = '';
        }
        return dataOut;
    }

    //The opacity of images is now determined based on data associated with the image and
    //  the data being presented in the dropdown menus
    function dataCheck() {
        var selectPgrm = returnData($('#PgrmButton').html());
        var selectLvl = returnData($('#EduButton').html());
        $('.pic').css('opacity', '.2');
        $('.pic').each(function (index) {
            var dataPgrm = $(this).parent().attr('data-program');
            var dataLvl = $(this).parent().attr('data-level');
            if (selectPgrm == 'pgrm' && selectLvl == 'edu') {
                $('.pic').css('opacity', '.2');
            } else if (selectPgrm == dataPgrm && selectLvl == dataLvl) {
                $(this).css('opacity', '1');
            } 
            else if (selectPgrm == dataPgrm && selectLvl == 'edu') {
                $(this).css('opacity', '1');
            } else if (selectPgrm == 'pgrm' && selectLvl == dataLvl) {
                $(this).css('opacity', '1');
            }
        });
    }
    //Initialize a data on page load so that all data parameters are accurate before user input can occur
    dataCheck();
});