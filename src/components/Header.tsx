import { StyledButton, StyledHeaderWrapper } from './Header.styles';

import { Link } from 'react-router-dom';

import Icon from './reusable/Icon';
import Button from './reusable/Button';
import { useTranslation } from 'react-i18next';

const Header = (): JSX.Element => {
    const { t } = useTranslation();

    return (
        <StyledHeaderWrapper>
            <Link to="/">
                <StyledButton>
                    <Icon id="popcorn-icon" className="popcorn-icon" />
                    MOVIE
                </StyledButton>
            </Link>
            <Link to="/favourite-movies">
                <Button rounded>
                    {t('label-favourites')}
                    <Icon id="star-icon" className="star-icon" />
                </Button>
            </Link>
        </StyledHeaderWrapper>
    );
};

export default Header;
