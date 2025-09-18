import createMDX from '@next/mdx';


/** @type {import('next').NextConfig} */
const nextConfig = {
    output: "export",
    images: {
        unoptimized: true,
    },
    pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'md', 'mdx'],
};

const withMDX = createMDX({
    // Add Markdown plugins here, as desired
})

export default withMDX(nextConfig);
