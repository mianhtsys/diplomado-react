// src/helpers/createUserInitialState.ts
import type { UserFormValues } from '../models';

export type ActionState<T> = {
  formData: T;
  errors: Partial<Record<keyof T, string>>;
};

export const createInitialState = <T extends UserFormValues>(): ActionState<T> => ({
  formData: {} as T,
  errors: {},
});
