
window.onload = addElement;
function addElement() {
    var words = ["a", "b", "c", "d", "e", "f", "g", "h"];
    var figuresBlack = ["Ладья2.png", "Конь2.png", "Слон2.png", "Ферзь2.png", "Король2.png", "Пешка2.png"]

    var figuresWhite = ["Ладья.png", "Конь.png", "Слон.png", "Ферзь.png", "Король.png", "Пешка.png"]

    var Table = document.createElement("table");
    Table.className = "table"

    function arrangement(j, flag, figures) {
        var img = document.createElement("img");
        if (j <= 4) {
            img.src = 'img/' + figures[j]
        } else {
            img.src = 'img/' + figures[7 - j]
        }
        if (flag) {
            img.src = 'img/' + figures[5]
        }
        img.width = 50
        img.height = 50
        return img
    }

    var figureCounter = 0
    for (var i = 1; i < 11; i++) {
        if (i == 9) {
            figureCounter = 0;
        }
        var newTr = document.createElement('tr');
        for (var j = 1; j < 11; j++) {
            var newTd = document.createElement('td');

            if ((i == 1 && j == 1) || (i == 1 && j == 10) || (i == 10 && j == 1 || (i == 10 && j == 10))) {
                newTd.className = "cornerСell"
                newTr.appendChild(newTd);
            } else if (i == 1) {
                newTd.className = "up"
                newTd.textContent = words[j - 2]
                newTr.appendChild(newTd);
            } else if (j == 1) {
                newTd.className = "right"
                newTd.textContent = 10 - i
                newTr.appendChild(newTd);
            } else if (j == 10) {
                newTd.className = "left"
                newTd.textContent = 10 - i
                newTr.appendChild(newTd);
            } else if (i == 10) {
                newTd.className = "down"
                newTd.textContent = words[j - 2]
                newTr.appendChild(newTd);
            } else {

                if (i % 2) {
                    if (j % 2) {
                        newTd.className = "white"
                        if (i == 3) {
                            newTd.appendChild(arrangement(1, true, figuresBlack))
                        }
                        if (i == 9) {
                            newTd.appendChild(arrangement(figureCounter, false, figuresWhite))
                        }

                    } else {
                        newTd.className = "black"
                        if (i == 3) {
                            newTd.appendChild(arrangement(1, true, figuresBlack))
                        }
                        if (i == 9) {
                            newTd.appendChild(arrangement(figureCounter, false, figuresWhite))
                        }
                    }
                    newTr.appendChild(newTd);
                } else {
                    if (j % 2) {
                        newTd.className = "black"
                        if (i == 2) {
                            newTd.appendChild(arrangement(figureCounter, false, figuresBlack))
                        }
                        if (i == 8) {
                            newTd.appendChild(arrangement(1, true, figuresWhite))
                        }

                    } else {
                        newTd.className = "white"
                        if (i == 2) {
                            newTd.appendChild(arrangement(figureCounter, false, figuresBlack))
                        }
                        if (i == 8) {
                            newTd.appendChild(arrangement(1, true, figuresWhite))
                        }
                    }
                    newTr.appendChild(newTd);
                }
                figureCounter++
            }
        }
        Table.appendChild(newTr);
    }
    document.body.appendChild(Table);
}
