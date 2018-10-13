import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'alternatecase'
})
export class AlternatecasePipe implements PipeTransform {
  transform(value: string): string {  
    if (!value) return value;  
    return value.split(/\b/g).map(word => alternatecaseWord(word)).join('');  
}  
}
function alternatecaseWord(word: string) {  
  
  if (!word) return word;  
  let altString = '';  

  for (var i = 0; i < word.length; i++) {  

      if (i % 2 == 0) {  
          altString += word[i].toUpperCase();  
      }  
      else {  
          altString += word[i].toLowerCase();  
      }  
  }  

  return altString;  
}  
