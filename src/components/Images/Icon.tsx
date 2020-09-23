import React, { useLayoutEffect} from 'react'

type NavIconProps = {
    src: string,
    subFolder?: string,
}

const NavIcon = ({src, subFolder = ""}: NavIconProps) => {
    const ImportedIconRef = React.useRef<React.FC<React.SVGProps<SVGSVGElement>>>();
    const [loading, setLoading] = React.useState(false);

    useLayoutEffect((): void => {
        setLoading(true);

        const iconImport = async (): Promise<void> => {
            try {
            ImportedIconRef.current = (await import("images/icons/" + subFolder + src)).default;
            } catch(err) {
                throw err;
            } finally {
                setLoading(false);
            }
        }
        iconImport()
    }, [src])

    if (!loading && ImportedIconRef.current) {
        const { current: ImportedIcon } = ImportedIconRef;
        return <ImportedIcon />
    } 

    return null;
    
}

export default NavIcon