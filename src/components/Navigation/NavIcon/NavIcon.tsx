import React, { useLayoutEffect} from 'react'

type NavIconProps = {
    href: string
}

const NavIcon = ({href}: NavIconProps) => {
    const ImportedIconRef = React.useRef<React.FC<React.SVGProps<SVGSVGElement>>>();
    const [loading, setLoading] = React.useState(false);

    useLayoutEffect((): void => {
        setLoading(true);

        const iconImport = async (): Promise<void> => {
            try {
            ImportedIconRef.current = (await import(`images/icons/${href}`)).default;
            } catch(err) {
                throw err;
            } finally {
                setLoading(false);
            }
        }
        iconImport()
    }, [href])

    if (!loading && ImportedIconRef.current) {
        const { current: ImportedIcon } = ImportedIconRef;
        return <ImportedIcon />
    } 

    return null;
    
}

export default NavIcon