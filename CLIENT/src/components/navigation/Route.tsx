import useNavigation from "../../hooks/use-navigation";

interface Props {
    path: string,
    children: React.ReactNode
}

function Route({ path, children }: Props) {
    console.log("routing")
    const { currentPath } = useNavigation();

    if (path === currentPath) {
        return (
            <div>
                {children}
            </div>
        );
    } else {
        return null;
    }
}

export default Route;