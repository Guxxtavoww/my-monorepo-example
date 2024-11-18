'use client';

import { useId } from 'react';

/**
 * Custom hook to generate a unique ID for a form field.
 *
 * This hook combines a provided field name with a unique ID generated by React,
 * ensuring that each field has a distinct identifier.
 *
 * @param {string} field_name - The name of the form field.
 * @returns {string} - A unique string ID for the form field.
 */
export function useFieldId(field_name: string): string {
  const randomId = useId();

  return field_name.concat(randomId);
}