const user = {
	name: "João pedro",
	email: "joao.pedro@gmail.com",
	birth_date: new Date("10/05/2004"),
	occupation: "Full-stack developer",
	is_active: true,
	
	show_infos: function(){
        console.log(`Name: ${this.name}`);
        console.log(`Email: ${this.email}`);
        console.log(`Birth date: ${this.birth_date}`);
        console.log(`Occupation: ${this.occupation}`);
        console.log(`Is active: ${this.is_active}`);
	}
}