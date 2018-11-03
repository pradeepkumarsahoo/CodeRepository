import { InMemoryDbService } from 'angular-in-memory-web-api';

export class TestData implements InMemoryDbService {
  createDb() {
    let bookDetails = [
      { id: '101', name: 'Angular 1 by Pradeep ', category: 'Angular', year: '2011' },
      { id: '102', name: 'AngularJS  by Pradeep', category: 'Angular', year: '2012' },

      { id: '103', name: 'Angular 4 by Pradeep', category: 'Angular', year: '2015' },
      { id: '104', name: 'Ahngular6 by Pradeep', category: 'Angular', year: '2017' },
    
    ];
    return { books: bookDetails };
  }
} 