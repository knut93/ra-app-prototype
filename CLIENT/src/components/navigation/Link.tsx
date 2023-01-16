import useNavigation from '../../hooks/use-navigation';
import classNames from 'classnames';

interface Props {
    to: string,
    children: React.ReactNode,
    className: string,
    activeClassName: string;
}

function Link({ to, children, className, activeClassName }: Props) {
    const { navigate, currentPath } = useNavigation();

    const classes = classNames('text-blue-500',
        'hover:underline',
        className,
        currentPath === to && activeClassName
    );

    const handleClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
        console.log("Clicked Link")
        if (event.metaKey || event.ctrlKey) {
            return;
        }
        event.preventDefault();

        navigate(to);
    };

    return (
            <a className={classes} href={to} onClick={handleClick} >{children}</a>

    );
}

export default Link;