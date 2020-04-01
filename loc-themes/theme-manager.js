// This Script was written by John Felber [http://john-felber.net] or on GitHub [https://github.com/txchnoknd]

// SOME CONFIGURATION
var cfgTM	 = { 	"titleChsThm"	: "Choose a Theme",					// [Text] - Title for Theme-Choose-Dialog
					"htmlChngeThm"	: "<button>Change Theme</button>",	// [HTML or Text] - HTML-Element to toggle Theme-Chooser, e.g. a Button ; you can style this elements parent by attach the id "opnTChr"
					"trgBtnLocation": ".elfinder-statusbar",			// [jquery selector] - where should the HTML-Element (toggle Theme-Chooser (button)) apply
					"pathToThmMngr"	: "loc-themes/",					// [Local Path or Dir] - Path, where the Theme-Manager is installed with his themes
					"thmeFilename"	: "theme.min.css",					// [filename] - Filename of the theme CSS which loaded in
					"": ""
				};

// AVAILABLE THEMES
var int_thms = { 	"0"				:	"Standard", 
					"windows-10"	:	"Windows 10", 
					"moono"			:	"Moono", 
					"Material-Light":	"Material Light", 
					"Material-Grey"	:	"Material Grey", 
					"Material"		:	"Material Dark", 
					"dark-slim"		:	"Dark Slim" 
				};




function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    var expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function changeDynCss(slvalg) {
    var lnktg1 = $("head").find('link[href*="css/theme.css"]');
    var lnktg2 = $("head").find('link[href*="' + cfgTM['pathToThmMngr'] + '"]');
    if (lnktg1.length || lnktg2.length) {
        lnktg1.attr('href', cfgTM['pathToThmMngr'] + slvalg + '/css/' + cfgTM['thmeFilename']);
        lnktg2.attr('href', cfgTM['pathToThmMngr'] + slvalg + '/css/' + cfgTM['thmeFilename']);
    } else {
        window.location.reload();
    }
}


var fmg;

function injThemeMngr(fmrec) {
    fmg = fmrec;
    if ($("#opnTChr").length == 0) {
        $(cfgTM['trgBtnLocation']).append('<div onclick="dlgct();" id="opnTChr">' + cfgTM['htmlChngeThm'] + '</div>&emsp;');
    }
    changeDynCss(getCookie("cthm"));
}




function dlgct() {

    var sDialgCt;
    var crtlyThm = getCookie("cthm");

    $.each(int_thms, function(value, name) {
        sDialgCt += (crtlyThm == value) ? '<option selected value="' + value + '">' + name + '</option>' : '<option value="' + value + '">' + name + '</option>';
    });

    var sDialgCt = $('<div style="overflow:hidden;" class="elfinder-mklink-dialog-wrapper"/>').append('<div id="selTOpt"><select id="selThm" style="width:100%;">' + sDialgCt + '</select></div>');



    window.chOptDia = fmg.dialog(sDialgCt, {
        title: cfgTM['titleChsThm'],
        modal: true,
        resizable: false,
        destroyOnClose: true,
    });

    $("#selThm").on('change', function() {
        var slval = this.value;
        setCookie("cthm", slval, 9999);
        changeDynCss(slval);
        window.chOptDia.elfinderdialog('close');
        //reload
    });

}