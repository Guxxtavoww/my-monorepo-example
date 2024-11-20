import { z } from 'zod';
import { createZodDto } from 'nestjs-zod';
import { ApiPropertyOptional } from '@nestjs/swagger';

import {
  createPaginationSchema,
  optionalEmailStringSchema,
  optionalStringSchemaToLowerCase,
} from '@repo/shared';

export const paginateUsersSchema = createPaginationSchema({
  user_name: optionalStringSchemaToLowerCase,
  user_email: optionalEmailStringSchema,
});

export type PaginateUsersPayload = z.infer<typeof paginateUsersSchema>;

export class PaginateUsersDTO extends createZodDto(paginateUsersSchema) {
  @ApiPropertyOptional({ type: String, description: 'Optional user name' })
  user_name?: string;

  @ApiPropertyOptional({ type: String, description: 'Optional user email' })
  user_email?: string;
}
