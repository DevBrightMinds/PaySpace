// this logic seems only relevant here on the index page - no where else are we going to be needing this - so we will not be abstracting any of this
// we will keep everything here.
let Books = [];
let FilterBooks = [];

window.onload = () => {
    Books = [{
        title: "The Great Gatsby", author: "F. Scott Fitzgerald", year: 1995
    }, {
        title: "To Kill a Mockingbird", author: "Harper Lee", year: 1960
    }, {
        title: "The Pursuit of Purpose", author: "Treasure Mkhonto", year: 2015
    }, {
        title: "The Theory of Nations", author: "Treasure Mkhonto", year: 2023
    }];

    displayBooks();

    Array.from(document.querySelectorAll(".sorting")).forEach((header) => {
        header.addEventListener("click", sortBooks, false);
    });

    document.getElementById("filter-input").addEventListener("keyup", filterBooks, false);
    document.querySelector(".app-mobile-nav-btn").addEventListener("click", toggleNavMenu, false);

}

function runFilterBooks(params) {
    const filter = params.toLowerCase();

    FilterBooks = Books.filter((book) => {
        return (book.author.toLowerCase().match(filter) || book.title.toLowerCase().match(filter));
    });

    displayBooks(FilterBooks.length > 0 ? FilterBooks : Books);

}

function runSortBooks(type, direction) {
    let list = FilterBooks.length > 0 ? FilterBooks : Books;

    switch (type) {
        case "title":
            list = (direction == "desc") ? sortInDesc(list) : sortInAsc(list);
            break;

        default:
            list = (direction == "desc") ? sortInDesc(list) : sortInAsc(list);
            break;
    }

    displayBooks(list);

}

function sortInAsc(list) {
    list.sort((a, b) => {
        if (a.author < b.author) {
            return -1;
        }
        if (a.author > b.author) {
            return 1;
        }

        return 0;
    });

    return list;

}

function sortInDesc(list) {
    list.sort((a, b) => {
        if (a.author > b.author) {
            return -1;
        }
        if (a.author < b.author) {
            return 1;
        }

        return 0;
    });

    return list;
}

function displayBooks(list) {
    const element = document.querySelector(".books-display tbody");

    element.innerHTML = "";

    const books = list ? list : Books;

    books.forEach((book, index) => {
        element.innerHTML +=
            `
            <tr>
                <td>${index + 1}</td>
                <td>${book.title}</td>
                <td>${book.author}</td>
                <td>${book.year}</td>
            </tr>
            `
    });
}

function sortBooks() {
    const type = (this.getAttribute("id"));
    const direction = (this.getAttribute("data-sort"));

    runSortBooks(type, direction);

    this.setAttribute("data-sort", direction == "desc" ? "asc" : "desc");
    this.querySelector("i").setAttribute("class", direction == "desc" ? "bi bi-chevron-down" : "bi bi-chevron-up");
}

function filterBooks(event) {
    const filterValue = event.target.value;
    const annotation = document.querySelector(".books-content small");

    annotation.setAttribute("class", "annotation-in-display");

    if (filterValue !== "" && filterValue.length >= 3) {
        runFilterBooks(filterValue);
    } else if (filterValue == "") {
        runFilterBooks(filterValue);
        annotation.setAttribute("class", "annotation-off-display");
    }
}


