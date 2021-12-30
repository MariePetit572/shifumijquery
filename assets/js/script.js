
let playercount = 0;
let compcount = 0;
var playerresult = $('#user');
var compresult = $('#comp');
var result = $('#result');


$(function () {

    function partie() {
        
        if (playercount == 5) {
           

            result.html("Gagné ! score: "+ playercount+' / '+ compcount );
            
            playercount = 0;
            compcount = 0;
            playerresult.html(playercount);
            compresult.html(compcount);

        } else if (compcount == 5) {
            result.html("Perdu ! score: "+ playercount+' / '+ compcount );
            playercount = 0;
            compcount = 0;
            playerresult.html(playercount);
            compresult.html(compcount);
        }
    }


    //CLICK DU JOUEUR
    $("#elsaPlayer")
        .mouseenter(function () { $("#elsaPlayer").css("transform", "scale(1.4)") })
        .mouseleave(function () { $("#elsaPlayer").css("transform", "scale(1)") })
        .click(function () { $("#imgEarLeft").attr('src', 'assets/img/profil1.png') });


    $("#raiponcePlayer")
        .mouseenter(function () { $("#raiponcePlayer").css("transform", "scale(1.4)") })
        .mouseleave(function () { $("#raiponcePlayer").css("transform", "scale(1)") })
        .click(function () { $("#imgEarLeft").attr('src', 'assets/img/profil2.png') });


    $("#mulanPlayer")
        .mouseenter(function () { $("#mulanPlayer").css("transform", "scale(1.4)") })
        .mouseleave(function () { $("#mulanPlayer").css("transform", "scale(1)") })
        .click(function () { $("#imgEarLeft").attr('src', 'assets/img/profil3.png') });



    $("#elsaPlayer")
        .click(function () {
            var num = Math.floor(Math.random() * 3) + 1;
            var nomimage = 'assets/img/profil' + num + '.png';
            $("#imgEarRight").attr('src', nomimage);
            if (nomimage === 'assets/img/profil1.png') {
                $('#head').html('<img src="assets/img/egalite.png" width="250px">');
                result.html("°_°");
            }
            else if (nomimage === 'assets/img/profil2.png') {
                $('#head').html('<img src="assets/img/elsa_fight_dekstop.png" width="250px">');
                playercount++;
                playerresult.html(playercount);
                result.html("Bravo !");
            }
            else if (nomimage === 'assets/img/profil3.png') {
                $('#head').html('<img src="assets/img/elsa_sad.png" width="250px">');
                compcount++;
                compresult.html(compcount);
                result.html("Perdu !");
            }
            partie()
        });

    $("#raiponcePlayer")
        .click(function () {
            var num = Math.floor(Math.random() * 3) + 1;
            var nomimage = 'assets/img/profil' + num + '.png';
            $("#imgEarRight").attr('src', nomimage);
            if (nomimage === 'assets/img/profil2.png') {
                $('#head').html('<img src="assets/img/egalite.png" width="250px">');
                result.html("°_°");
            }
            else if (nomimage === 'assets/img/profil1.png') {
                $('#head').html('<img src="assets/img/raiponce_sad.png" width="250px">');
                compcount++;
                compresult.html(compcount);
                result.html("Perdu !");
            }
            else if (nomimage === 'assets/img/profil3.png') {
                $('#head').html('<img src="assets/img/raiponce_fight_dekstop.png" width="250px">');
                playercount++;
                playerresult.html(playercount);
                result.html("Bravo !");
            }
            partie()
        });

    $("#mulanPlayer")
        .click(function () {
            var num = Math.floor(Math.random() * 3) + 1;
            var nomimage = 'assets/img/profil' + num + '.png';
            $("#imgEarRight").attr('src', nomimage)
            if (nomimage === 'assets/img/profil3.png') {
                $('#head').html('<img src="assets/img/egalite.png" width="250px">');
                result.html("°_°");

            }
            else if (nomimage === 'assets/img/profil2.png') {
                $('#head').html('<img src="assets/img/mulan_sad.png" width="250px">');
                compcount++;
                compresult.html(compcount);
                result.html("Perdu !");
            }
            else if (nomimage === 'assets/img/profil1.png') {
                $('#head').html('<img src="assets/img/mulan_fight_dekstop.png" width="250px">');
                playercount++;
                playerresult.html(playercount);
                result.html("Bravo !");
            }
            partie()
        });

});
