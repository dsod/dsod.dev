import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

type ImageProps = {
    src: string;
    alt?: string;
    styles?: {};
};

const Image: React.FC<ImageProps> = ({ src, alt, styles }) => (
    <StaticQuery
        query={graphql`
            query {
                images: allFile {
                    edges {
                        node {
                            relativePath
                            name
                            childImageSharp {
                                fluid(maxWidth: 600) {
                                    ...GatsbyImageSharpFluid_withWebp
                                }
                            }
                        }
                    }
                }
            }
        `}
        render={(data) => {
            const image = data.images.edges.find((n) => {
                return n.node.relativePath.includes(src);
            });
            if (!image) {
                return null;
            }

            return <Img alt={alt} fluid={image.node.childImageSharp.fluid} style={styles} />;
        }}
    />
);

export default Image;
