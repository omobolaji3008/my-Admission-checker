let allInput = document.querySelectorAll('input')



function Examination() {
    // grab our DOM elements
    let name = document.querySelector('#name').value
    let sittings = document.querySelector('#sittings').value
    let jamb_score = document.querySelector('#jamb_score').value
    let post_utme = document.querySelector('#post-utme').value
    let grades = document.querySelectorAll(".grades")
    // let region_user = document.querySelector('#region_user').value

    let region_user = "Ogun"


    let feed_back = document.querySelector('#feed_back')


    // convert variables to number
    let pUtme = Number(post_utme); //over 20
    let jambScore = Number(jamb_score); //over 400
    let oneSittings = Number(sittings); //only one sit
    let jambScoreValue = jambScore / 8;
    let toggleRegion = false;
    let regions = ["Edo", "Ogun", "Oyo", "Niger", "Osun"];

    ////+++++========= OUR LOGICS -===========++++++++//
    
    // Create Array of Grades
    let array = []
    for (grade of grades){
        array.push(parseInt(grade.value))
    }

    // ==== get olevels total score of all subjects === //
    const oLevelScore = array.reduce((prev, current) => {
        return prev + current;
    });
    console.log({ oLevelScore })
    
    //===== calculate all scores from all exams ======//
    let meritScore = Math.round((oLevelScore / 50) * 30) + jambScoreValue + pUtme;

    console.log(meritScore)


    //==== checking region ====//
    if (regions.includes(region_user)) {
        toggleRegion = true;
    }

    //=== all the logic to calculate the user end result ====/
    this.verify = function () {

        if (oneSittings > 1) {
            return feed_back.innerHTML = "You have instantly failed";
        }
        if (meritScore >= 80 && meritScore <= 100) {
            return feed_back.innerHTML = "Merit"
        }
        if (meritScore >= 75 && meritScore < 80) {
            return feed_back.innerHTML = "CONCENSIONARY"
        }
        if (meritScore >= 65 && meritScore < 75 && toggleRegion === true) {
            return feed_back.innerHTML = "catchement"
        }
        if (meritScore >= 60 && meritScore < 75 ){
            return feed_back.innerHTML = "VC LIst"
        }
        else {
            return feed_back.innerHTML = "disqualified"
        }
    };
}

document.querySelector('#calculate').addEventListener('click', () => {
    const examination = new Examination();
    examination.verify()
    let overlay = document.querySelector('.overlay')
    overlay.classList.remove('hide')
})


document.getElementById('post-utme').addEventListener('change', () => {
    console.log(document.getElementById('post-utme').value)
})