import { SVGProps } from 'react';

interface IconProps extends SVGProps<SVGSVGElement> {
    id: string;
}

const Icon = ({ id, ...props }: IconProps) => {
    return (
        <svg {...props}>
            <use href={`/sprite.svg#${id}`} />
        </svg>
    );
};

export default Icon;
