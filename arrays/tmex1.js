var ch = ['Volvo', 'Ferari', 'Audi', 'BMW'];
for (var i = 0; i < ch.length; i++) {
    console.log('My #' + (i + 1) + ' choice is ' + ch[i]);
}

for (var i = 0; i < ch.length; i++) {
    var choiceNum = i + 1;
    var choiceNumSuffix;
    if (choiceNum == 1) {
        choiceNumSuffix = 'st';
    } else if (choiceNum == 2) {
        choiceNumSuffix = 'nd';
    } else if (choiceNum == 3) {
        choiceNumSuffix = 'rd';
    } else {
        choiceNumSuffix = 'th';
    }
    console.log('My ' + choiceNum + choiceNumSuffix + ' choice is ' + ch[i]);
}
