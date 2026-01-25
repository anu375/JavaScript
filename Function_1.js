const obj = {

    name: "Anushka",

    normal() {
        console.log(this.name);
    },

    arrow: () => {
        console.log(this.name);
    }

};

obj.normal(); //Anushka
obj.arrow(); //undefined