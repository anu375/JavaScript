let obj = {

    name: "Deloitte",
    normal: function() {
        console.log(this.name);
    },

    arrow: () => {
        console.log(this.name);
    }
};


obj.normal();
obj.arrow();