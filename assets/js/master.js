$(document).ready(function () {
    setTimeout(showJob, 2000);

    $(document).on("click", ".btn-menu", showProfil);
    $(document).on("click", ".btn-close", closeProfil);
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
    $(".principale div.row").css({
        transform : "translateX(-368px)"
    });

    if (profilShown) {
        $(".btn-close").hide();
        $(".btn-menu").show();
    }

    profilShown = false;
}