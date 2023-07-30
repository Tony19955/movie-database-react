import { StyledHeaderWrapper } from './Header.styles';

import Icon from './reusable/Icon';

const Header = (): JSX.Element => {
    return (
        <StyledHeaderWrapper>
            <Icon id="popcorn-icon" />
        </StyledHeaderWrapper>
    );
};

export default Header;
