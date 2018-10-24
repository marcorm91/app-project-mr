import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'transformDate' })

/**
 * Check if the hour & minute & second is < 10 to format it and put a 0 in front
 * of it.
 */
export class TransformDate implements PipeTransform{
    
    transform(value: number): any{
        return value < 10 ? ("0"+ value) : value;
    }

}