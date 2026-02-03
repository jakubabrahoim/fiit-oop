import defaultMdxComponents from 'fumadocs-ui/mdx';
import type { MDXComponents } from 'mdx/types';
import { ExternalLink } from 'lucide-react';
import { Steps, Step } from 'fumadocs-ui/components/steps';
import { UpdateCard } from '@/components/update-card';
import { UpdatesContainer } from '@/components/updates-container';

export function getMDXComponents(components?: MDXComponents): MDXComponents {
  return {
    ...defaultMdxComponents,
    ExternalLink,
    Steps,
    Step,
    UpdateCard,
    UpdatesContainer,
    ...components,
  };
}
