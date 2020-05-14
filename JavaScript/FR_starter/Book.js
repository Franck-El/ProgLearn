export class Book {
	constructor(title,author,description,pages,currentPage){
		this.title = title; // le titre du livre
		this.author = author; // l'auteur du livre
		this.description = description; // une description du livre
		this.pages = pages; // le nombre total de pages
		this.currentPage = currentPage; // la page où se trouve l'utilisateur actuellement (entre 1 et  pages  )
		this.read = false; // lu ou non ? 
	}
	readBook(page){
		if (page < 1 || page > this.pages){ 
			return 0;
		} else if (page >= 1 && page < this.pages) {
			this.currentPage = page;
			return 1;
		} else if (page === this.pages) {
			this.currentPage = page;
			this.read = true;
			return 1;
		}
	}

}

const firstBook = new Book('La Cognition','Thérèse Collins', 'Dresse un histique de la cognition et le défini', 672, 37);
const secondBook = new Book('deux','moi','Rien',4,3); 
const thirdBook = new Book('TROIS','moi','Tout',400,340);


export const books = [firstBook, secondBook, thirdBook];
