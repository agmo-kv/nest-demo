import { CallHandler, ExecutionContext, NestInterceptor, UseInterceptors } from '@nestjs/common';
import { ClassConstructor, plainToInstance } from 'class-transformer';
import { Observable, map } from 'rxjs';

export class SerializeInterceptor<T> implements NestInterceptor {
  constructor(private dto: ClassConstructor<T>) {}

  intercept(
    context: ExecutionContext,
    next: CallHandler<T>,
  ): Observable<T> {
    return next.handle().pipe(
      map((data) => {
        return plainToInstance(this.dto, data, { excludeExtraneousValues: true });
      }),
    );
  }
}

export function Serialize<T>(dto: ClassConstructor<T>) {
    return UseInterceptors(new SerializeInterceptor(dto))
}
