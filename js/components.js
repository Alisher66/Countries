
class Countries {
    constructor(countries) {
        this.countries = countries;
        this._addContainer();
        this.arr = [];
    }

    _addContainer = function () {
        this.box = document.createElement("div");
        this.box.classList.add("box");
        document.querySelector(".input_box").insertAdjacentElement("afterend", this.box);
    }
    addCards = async function () {
        let tempArr = await this.countries;
        let arr = [];
        tempArr.forEach((el,index) => {
            if(index < 10)
            arr.push(this._cards({ ...el, ...el.media }))
        });
        this.arr = arr;
        this.box.innerHTML = arr.join("")
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
                            alt="img">
                    </p>

                </div>
            </article>
        `
    }

    filterItem() {
        const inputEl = document.querySelector(".country_input")
        inputEl.addEventListener("input", this.getItem)
    }
    getItem(e) {
        const cards = document.querySelectorAll(".card");

        // const titles = cards.querySelectorAll(".title");
        cards.forEach(card => {

            let title = card.querySelector(".title");

            let tempTitle = title.textContent.toLowerCase();
            let inputValue = e.srcElement.value.toLowerCase();

            if (tempTitle.includes(inputValue)) {
                
            } else {
                card.remove();
            }
        })
    }
}

export { Countries };