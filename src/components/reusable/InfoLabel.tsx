import { ReactNode } from 'react';
import { StyledInfoLabel } from './InfoLabel.styles';

interface InfoLabelProps {
    children: ReactNode;
}

const InfoLabel = ({ children }: InfoLabelProps): JSX.Element => {
    return <StyledInfoLabel>{children}</StyledInfoLabel>;
};

export default InfoLabel;
