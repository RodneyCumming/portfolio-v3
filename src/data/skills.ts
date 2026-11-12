export type Category = 'Frontend' | 'Backend' | 'Tools';

export const categories: Category[] = ['Frontend', 'Backend', 'Tools'];

// Same list and icons as the 2020 site
export const skills: { label: string; icon: string; category: Category }[] = [
  { label: 'HTML5', icon: 'html5', category: 'Frontend' },
  { label: 'CSS3', icon: 'css3', category: 'Frontend' },
  { label: 'JavaScript', icon: 'js', category: 'Frontend' },
  { label: 'React', icon: 'react', category: 'Frontend' },
  { label: 'Node.js', icon: 'nodejs', category: 'Backend' },
  { label: 'MongoDB', icon: 'mongodb', category: 'Backend' },
  { label: 'Express', icon: 'express', category: 'Backend' },
  { label: 'Git', icon: 'git', category: 'Tools' },
  { label: 'VS Code', icon: 'vscode', category: 'Tools' },
  { label: 'Gatsby', icon: 'gatsby', category: 'Frontend' },
  { label: 'Next.js', icon: 'nextjs', category: 'Frontend' },
  { label: 'DigitalOcean', icon: 'digital-ocean', category: 'Backend' },
  { label: 'Storyblok', icon: 'storyblok', category: 'Frontend' },
  { label: 'Heroku', icon: 'heroku', category: 'Backend' },
  { label: 'GraphQL', icon: 'graphql', category: 'Backend' },
  { label: 'Sketch', icon: 'sketch', category: 'Tools' },
  { label: 'Figma', icon: 'figma', category: 'Tools' },
  { label: 'Buildkite', icon: 'buildkite', category: 'Backend' },
  { label: 'Jest', icon: 'jest', category: 'Tools' },
  { label: 'Styled Components', icon: 'styled-components', category: 'Frontend' },
  { label: 'Contentful', icon: 'contentful', category: 'Frontend' },
  { label: 'Prettier', icon: 'prettier', category: 'Tools' },
  { label: 'AWS', icon: 'aws', category: 'Backend' },
  { label: 'Lambda', icon: 'lambda', category: 'Backend' },
  { label: 'DynamoDB', icon: 'dynamodb', category: 'Backend' },
];
