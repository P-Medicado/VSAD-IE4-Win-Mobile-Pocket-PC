function start() {
    try {
        for (var i = 0; i < 64; i++) {
            el_new(i)
        }
    } catch (error) {
        alert(error.message)
    }
}

function el_new(num) {
    var id = "d_" + num
    var el = divt(id)

    el.innerHTML = "<a id='a_" + num + "' onclick='el_tap(" + num + ", this)' href='#'>&nbsp;</a>"
}

function el_tap(num, btn) {
    var x = num % 8 + 1
    var y = num / 8 + 1 >> 0

    var id = "d_" + num
    var el = divt(id)

    var pieces = [ "P", "B", "R", "K", "Q", "N" ]
    var piece = pieces[num % pieces.length]

    el.innerHTML = "<a id='a_" + num + "' onclick='el_tap(" + num + ", this)' href='#'>" + piece + "</a>"
}

// #region chess pieces
// // var pawn = {
// //     x: -1,
// //     y: -1,
// //     color: "black",
// //     direction: 1,
// //     start: function(x, y, color) {
// //         this.x = x
// //         this.y = y
// //         this.color = color
// //         this.direction = 1
// //     },
// //     move: function() {
// //         this.y = this.y + 1
// //     },
// // }

// // var knight = {
// //     x: -1,
// //     y: -1,
// //     color: "black",
// //     start: function(x, y, color) {
// //         this.x = x
// //         this.y = y
// //         this.color = color
// //     },
// //     move: function() {

// //     }
// // }
// #endregion