// tafel van 9
for (number = 1; number <= 10; number++) {
    let multiplication = number * 9;
    console.log(number + " x 9 = " + multiplication);
};

// tafels 1 t/m 10
for (num = 1; num <= 10; num++) {
    for (table = 1; table <= 10; table++) {
        let multi = num * table;
        console.log(num + " x " + table + " = " + multi);
    };
};
