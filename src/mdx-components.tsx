import type { MDXComponents } from "mdx/types";
import Figure from "./app/blog/_components/Figure";

export function useMDXComponents (components: MDXComponents): MDXComponents {
    return {
        // h2: ({ children, ...props }) => (
        //     <h2 className="text-lg font-semibold" {...props}>{children}</h2>
        // ),
        Figure: (props) => <Figure {...props} />,
        ...components,
    };
}