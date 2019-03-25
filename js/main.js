//create resource
const resources = [
    {
        heading: "Energy Saving",
        path: "./img/power.png",
        body: "You already know that recycling keep tons of waste out of landfills. But did you know that recycling saves energy too?The products we recycle, like pop cans, newspapers, glass and cardboard, are used to make new products. Companies using recycled materials will use 30% less energy, because if they didn't use recycled materials, they'd use a lot of a trees - and a lot of energy to cut them down, transport them hundreds of miles and grind them into paper pulp. Recycling makes a difference! Making aluminum cans from recycled cans takes 95% less energy than making cans from raw aluminum ore.The energy saved from recycling one ton of paper saves enough energy to power an average household for up to six months, saves 7,000 gallons of water and keeps 600 pounds of pollutants out of the air."
    },
    {
        heading: "Energy Recycle",
        path: "./img/earth.png",
        body: "For every three units of fuel — like coal, natural gas or oil — that are burned to make electricity, two are lost in the process, most of it as waste heat that just drifts away, says Casten, who is chairman of Recycled Energy Development, a company that works with industrial clients to capture waste heat to produce clean electricity.Casten sees waste heat everywhere, not just in cartoon power plants, but at factories, mills and refineries all across the country.With rising fuel prices taking a bigger bite out of the profits of the nation's manufacturers, Casten says many of them could save a lot of money, and reduce greenhouse gas emissions, by capturing that waste heat and recycling it to produce power."
    },
    {
        heading: "Water Saving",
        path: "./img/water-1.png",
        body: "Water and energy are linked. It takes water to make energy (electricity and transportation fuels) and it takes energy to move, heat and treat water. When you save energy you also save water.Every day, you rely on water for a wide variety of uses around the house. There are lots of opportunities to cut back on water use in the kitchen, bathroom and laundry room and even by fixing leaks.It takes water – a lot of it – to grow, process and transport your food. When you eat lower on the food chain, eat more whole foods and waste less food, you also save water."
    },
];




/*GETTING REFERENCES TO ACTIVE ELEMENTS */
const btns = document.querySelectorAll(".controls button");
const currentContent = document.querySelector(".current-content");

/* Default Information */

currentContent.innerHTML = `<article>
                                    <h2>${resources[0].heading}</h2>
                                    <img src="${resources[0].path}">
                                    <p>${resources[0].body}</p>
                                    </article>`;

/*Creating eventhandler*/
function contentLoader(ev){

    let eventTarget = ev.target.getAttribute("src");
    
    
    if (eventTarget == 'img/power.png'){

        currentContent.innerHTML = `<article>
                                    <h2>${resources[0].heading}</h2>
                                    <img src="${resources[0].path}">
                                    <p>${resources[0].body}</p>
                                    </article>`;
    } else if(eventTarget === 'img/earth.png'){
        currentContent.innerHTML = `<article>
                                    <h2>${resources[1].heading}</h2>
                                    <img src="${resources[1].path}">
                                    <p>${resources[1].body}</p>
                                    </article>`;
    } else if(eventTarget === 'img/water-1.png') {
        currentContent.innerHTML = `<article>
                                    <h2>${resources[2].heading}</h2>
                                    <img src="${resources[2].path}">
                                    <p>${resources[2].body}</p>
                                    </article>`;
    }
    
}

/* Registering the content */
btns[0].addEventListener("click", contentLoader);
btns[1].addEventListener("click", contentLoader);
btns[2].addEventListener("click", contentLoader);