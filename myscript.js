// document.getElementById('display').style.display = 'none'
// document.getElementById('display2').style.display = 'none'
// var point = 10
// var totalScores = 0
// var count = 0
// var buttonHint = document.getElementById('hint')
// var buttenCorrect = document.getElementById('benar')

// var bleep = new Audio
// bleep.src="sound/zapsplat_cartoon_pop_mouth_017_46680.mp3"
// var bleep2 = new Audio
// bleep2.src="sound/zapsplat_cartoon_musical_accent_xylophone_vibraphone_descending_riff_50540.mp3"


// buttonHint.addEventListener('click',function(){
//     count++
//     if (count === 1){
//         document.getElementById('display').style.display = 'block'
//         point -=3
//     }else if (count === 2){
//         document.getElementById('display2').style.display = 'block'
//         point -=3
//     }
// })

// buttenCorrect.addEventListener('click',function(){
//     totalScores += point
//     document.getElementById('totalScores').innerText = `Scores : ${totalScores}`
// })

document.getElementById('display').style.display = 'none'
document.getElementById('display2').style.display = 'none'
document.getElementById('2display').style.display = 'none'
document.getElementById('2display2').style.display = 'none'
document.getElementById('3display').style.display = 'none'
document.getElementById('3display2').style.display = 'none'
document.getElementById('position1').style.display = 'block'
document.getElementById('position2').style.display = 'none'
document.getElementById('position3').style.display = 'none'
document.getElementById('answer1').style.display = 'block'
document.getElementById('answer2').style.display = 'none'
document.getElementById('answer3').style.display = 'none'
// document.getElementById('2display2').style.display = 'none'
// document.getElementById('2display').style.display = 'none'
var point = 10
var totalScores = 0
var count = 0
var buttonHint = document.getElementById('hint')
var buttenCorrect = document.getElementById('benar')
var buttenCorrect2 = document.getElementById('benar2')
// var buttenCorrect3 = document.getElementById('benar3')

var bleep = new Audio
bleep.src="sound/zapsplat_cartoon_pop_mouth_017_46680.mp3"
var bleep2 = new Audio
bleep2.src="sound/zapsplat_cartoon_musical_accent_xylophone_vibraphone_descending_riff_50540.mp3"

buttonHint.addEventListener('click',function(){
    count++
    if (count === 1){
        if(document.getElementById('position1').style.display === 'block'){
            document.getElementById('display').style.display = 'block'
            point -=3
        }else if(document.getElementById('position2').style.display === 'block'){
            document.getElementById('2display').style.display = 'block'
            point -=3
        }else if(document.getElementById('position3').style.display === 'block'){
            document.getElementById('3display').style.display = 'block'
            point -=3
        }
    }else if (count === 2){
        if(document.getElementById('position1').style.display === 'block'){
            document.getElementById('display2').style.display = 'block'
            point -=3
        }else if(document.getElementById('position2').style.display === 'block'){
            document.getElementById('2display2').style.display = 'block'
            point -=3
        }else if(document.getElementById('position3').style.display === 'block'){
            document.getElementById('3display2').style.display = 'block'
            point -=3
        }
    }
    // totalScores = point
    // document.getElementById('totalScores').innerText = `Scores : ${totalScores}`
})

buttenCorrect.addEventListener('click',function(){
    totalScores += point
    document.getElementById('totalScores').innerText = `Scores : ${totalScores}`
    if(document.getElementById('position2').style.display === 'none'){
        document.getElementById('position1').style.display = 'none'
        document.getElementById('position2').style.display = 'block'
        document.getElementById('answer1').style.display = 'none'
        document.getElementById('answer2').style.display = 'block'
    }
    point = 10
    count = 0
})
buttenCorrect2.addEventListener('click',function(){
    totalScores += point
    document.getElementById('totalScores').innerText = `Scores : ${totalScores}`
    if(document.getElementById('position3').style.display === 'none'){
        document.getElementById('position2').style.display = 'none'
        document.getElementById('position3').style.display = 'block'
        document.getElementById('answer2').style.display = 'none'
        document.getElementById('answer3').style.display = 'block'
    }
    point = 10
    count = 0
})