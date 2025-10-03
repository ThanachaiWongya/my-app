/**
 * Breadcrumb Configuration
 * Centralized configuration for breadcrumb behavior across business units
 */

export type BreadcrumbConfig = {
  /** Segments to skip when building breadcrumb items */
  skipSegments: string[];
  /** Custom labels for specific segments (optional) */
  customLabels?: Record<string, string>;
  /** Maximum breadcrumb depth (optional) */
  maxDepth?: number;
};

/**
 * Business unit specific breadcrumb configurations
 */
export const breadcrumbConfig: Record<string, BreadcrumbConfig> = {
  corporate: {
    skipSegments: ['corporate', 'information'],
    maxDepth: 4,
  },
  npa: {
    skipSegments: ['npa'],
    maxDepth: 4,
  },
  npl: {
    skipSegments: ['npl'],
    maxDepth: 4,
  },
  ir: {
    skipSegments: ['ir'],
    maxDepth: 4,
  },
  default: {
    skipSegments: [],
    maxDepth: 5,
  },
};

/**
 * Get breadcrumb configuration for a specific business unit
 * @param businessUnit - The business unit identifier
 * @returns Breadcrumb configuration object
 */
export function getBreadcrumbConfig(businessUnit?: string): BreadcrumbConfig {
  return breadcrumbConfig[businessUnit || 'default'] || breadcrumbConfig.default;
}

/**
 * Get skip segments for a specific business unit
 * @param businessUnit - The business unit identifier
 * @returns Array of segments to skip
 */
export function getSkipSegments(businessUnit?: string): string[] {
  const config = getBreadcrumbConfig(businessUnit);
  return config.skipSegments;
}
