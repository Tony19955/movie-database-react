interface IconProps {
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
