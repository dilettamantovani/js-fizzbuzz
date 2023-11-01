let container = document.querySelector (".container");

for (let i = 1; i <= 105; i++) {

    const new_p = document.createElement("button");

    if (i%3 == 0 && i%5 == 0) {
        new_p.innerHTML = "fizzbuzz";
        new_p.classList.add("fizzbuzz");
        container.append(new_p);
        console.log(`fizzbuzz`);
    }

    else if (i%3 == 0) {
        new_p.innerHTML = "fizz";
        new_p.classList.add("fizz");
        container.append(new_p);
        console.log(`fizz`);
    }

    else if (i%5 == 0) {
        new_p.innerHTML = "buzz";
        new_p.classList.add("buzz");
        container.append(new_p);
        console.log(`buzz`);
    }

    else if (i%7 == 0) {
        new_p.innerHTML = "pluzz";
        new_p.classList.add("pluzz");
        container.append(new_p);
        console.log(`pluzz`);
    }

    else {
        new_p.innerHTML = i;
        new_p.classList.add("standard");
        container.append(new_p);
        console.log(i);
    }
}

cont