
class Countries {
    constructor(countries) {
        this.countries = countries;
        this._addSection();
    }

    _addSection() {
        let sectionEl = document.createElement("section");
        sectionEl.classList.add("countries");
        document.body.insertAdjacentElement("afterbegin", sectionEl);

        let inputBox = document.createElement("div");
        inputBox.classList.add("input_box");
        sectionEl.appendChild(inputBox);

        let inputEl = document.createElement("input");
        inputEl.classList.add("country_input");
        inputEl.type = "text";
        inputEl.name = "country-input";
        inputEl.placeholder = "name...";
        inputBox.appendChild(inputEl);

        this.box = document.createElement("div");
        this.box.classList.add("box");
        sectionEl.appendChild(this.box);
    }

    addCards = async function () {
        let tempArr = await this.countries;

        let resultArr = this._getCountryCards(tempArr);
        this.box.innerHTML = resultArr.join("");

        this._filterItems(tempArr);
    }

    _getCountryCards = function (arr) {
        let result = [];
        arr.forEach((el, index) => {
            // if (index < 10)
            result.push(this._cards({ ...el, ...el.media }));
        })
        return result;
    }

    _cards = function ({ name, capital, abbreviation, currency, phone, population, flag, emblem, orthographic }) {
        return `
            <article class="card">
                <div class="thumb">
                    <img src="${emblem}"
                        alt="">
                </div>
                <div class="infos">
                    <h2 class="title">${name}<span class="flag"><img
                                src="${flag}"
                                alt=""> </span></h2>
                    <h3 class="date">capital - ${capital}</h3>
                    <h3 class="seats">Abbreviation: "${abbreviation}"</h3>
                    <p class="txt">
                        Currency: "${currency}" <br>
                        Phone: ${phone} <br>
                        Population: ${population}
                        <img src="${orthographic}"
                            alt="">
                    </p>
                </div>
            </article>
        `;
    }

    _filterItems(countries) {
        const inputEl = document.querySelector(".country_input");
        inputEl.addEventListener("input", (e) => {
            let inputValue = e.target.value.toLowerCase();
            let resArr = countries.filter(country => country.name.toLowerCase().includes(inputValue));
            this.box.innerHTML = this._getCountryCards(resArr).join("");
        });
    }
    
}

export { Countries };