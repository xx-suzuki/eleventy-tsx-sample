export function About({ className }: { className?: string }): JSX.Element {
  return (
    <div className={className}>
      <p>Eleventy is a flexible static site generator that simplifies the creation of fast, modern websites. By integrating TypeScript, you can ensure type safety and better code management. TSX allows you to write JSX syntax within TypeScript files, enabling a React-like development experience. This setup provides a powerful and efficient workflow for building static sites with modern JavaScript features and a robust, maintainable codebase.</p>
    </div>
  );
}
