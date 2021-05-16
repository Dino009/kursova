import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'testingPipe'
})
export class TestingPipePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
