elements.sigma = {
    color: "#100D5E",
    behavior: behaviors.LIQUID,
    category: "sussy",
    state:  "liquid",
    density: 720,
};
elements.famuntax = {
    color: "#ff0000",
    tool: function(pixel) {
        if (pixel.element == "potato") {
            pixel.element = "explosion"
        }
        if (pixel.element =="sigma") { 
        pixel.element="gigachad";
        pixel.color="#00ff00"
}
    },
    category: "tools",
};
elements.gigachad = {
 color:"#00ff00",
 behavior: behaviors.WALL,
 category:"food",
 state: "solid",
 density:0,
};
elements.sigma.reactions.fanumtax={ "elem1":null, "elem2":"gigachad" }

