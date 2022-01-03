import { InMemoryDbService } from 'angular-in-memory-web-api';
export class TestData implements InMemoryDbService{
    createDb(){
        let bookdetails=[
            {
                id:100,name:'Risheik',project:'UI DEVELOPER',comments:'comments'
            }
        ];
        return {books:bookdetails};
    }
}