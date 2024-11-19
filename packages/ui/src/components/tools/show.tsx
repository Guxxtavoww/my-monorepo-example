export interface ShowProps extends WithChildren {
  condition: boolean;
  fallback: JSX.Element;
}

export function Show({ children, condition, fallback }: ShowProps) {
  if (condition) return children;

  return fallback;
}
