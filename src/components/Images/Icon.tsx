import React, { useLayoutEffect } from 'react';

type NavIconProps = {
    src: string;
    subFolder?: string;
    classes?: string;
    href?: string;
};

const NavIcon = ({ src, subFolder = '', classes, href }: NavIconProps) => {
    const ImportedIconRef = React.useRef<React.FC<React.SVGProps<SVGSVGElement>>>();
    const [loading, setLoading] = React.useState(false);

    useLayoutEffect((): void => {
        setLoading(true);

        const iconImport = async (): Promise<void> => {
            try {
                ImportedIconRef.current = (await import('icons/' + subFolder + src)).default;
            } catch (err) {
                throw err;
            } finally {
                setLoading(false);
            }
        };
        iconImport();
    }, [src]);

    const handleClick = (link: string | undefined) => {
        if (link) window.open(link);
    };

    if (!loading && ImportedIconRef.current) {
        const { current: ImportedIcon } = ImportedIconRef;
        return <ImportedIcon className={classes} onClick={() => handleClick(href)} />;
    }

    return null;
};

export default NavIcon;
