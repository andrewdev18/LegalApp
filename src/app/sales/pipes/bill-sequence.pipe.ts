import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'billSequence'
})
export class BillSequencePipe implements PipeTransform {

  transform(value: number, digits: 3|9): unknown {
    let sequence: string = value.toString();
    for(let i = sequence.length; i < digits; i++) {
      sequence = '0' + sequence;
    }
    return sequence;
  }

}
