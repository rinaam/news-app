import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'removeDuplicates',
})
export class RemoveDuplicatesPipe implements PipeTransform {
  transform(arr: string[]): unknown {
    const onlyUnique = (value, index, self) => {
      return self.indexOf(value) === index;
    };
    return arr.filter(onlyUnique);
  }
}
