const isProd = process.env.NODE_ENV === 'production';

module.exports = {
  output: 'export', // Important for static HTML export
  trailingSlash: true, // Ensures routes become `/about/` instead of `/about`
  assetPrefix: isProd ? '/your-repo-name/' : '',
  basePath: isProd ? '/your-repo-name' : '',
  distDir: 'dist', // Output directory for static files
};