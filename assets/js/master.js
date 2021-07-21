$(document).ready(function () {
    setTimeout(showJob, 2000);

    $(document).on("click", ".btn-menu", showProfil);
    $(document).on("click", ".btn-close", closeProfil);

    $("#profil_img").on('load', function() {
        $(this).css("display", "inline-block");
    }).each(function() {
        if(this.complete) $(this).trigger("load");
    });

    $(document).on('load', "img", function() {
        $(this).css("display", "inline-block");
    });
});

function showJob() {
    let b = $(".job-post");
    let job = "Developpeur Full-Stack";
    let showedString = "";
    let i = 0;
    let handleGreeting;
    handleGreeting = setInterval(() => {
        showedString = showedString + job[i];
        b.text(showedString);
        i++;
        if (i >= job.length) clearInterval(handleGreeting);
    }, 70);
}

var profilShown = false

function showProfil() {
    $(".principale div.row").css({
        transform : "translateX(0px)"
    });

    if (!profilShown) {
        $(".btn-menu").hide();
        $(".btn-close").show();
    }

    profilShown = true;
}

function closeProfil() {
    const x = window.matchMedia("(max-width: 368px)");
    if (x.matches) {
        $(".principale div.row").css({
            transform : "translateX(-100vw)"
        });
    } else {
        $(".principale div.row").css({
            transform : "translateX(-368px)"
        });
    }

    if (profilShown) {
        $(".btn-close").hide();
        $(".btn-menu").show();
    }

    profilShown = false;
}

function toDataURL(url, callback) {
    var xhr = new XMLHttpRequest();
    xhr.onload = function() {
      var reader = new FileReader();
      reader.onloadend = function() {
        callback(reader.result);
      }
      reader.readAsDataURL(xhr.response);
    };
    xhr.open('GET', url);
    xhr.responseType = 'blob';
    xhr.send();
}