import Icon from './reusable/Icon';
import { StyledAuthorCredits, StyledCopyright, StyledFooterWrapper, StyledSingleLine } from './Footer.styles';

const currentYear = new Date().getFullYear();
const copyright = `© ${currentYear}`;

const Footer = (): JSX.Element => {
    return (
        <StyledFooterWrapper>
            <a href="https://github.com/Tony19955/movie-database-react">
                <Icon id="github-icon" className="github-icon" />
            </a>
            <StyledSingleLine>
                <StyledAuthorCredits>Created by Matej Mik</StyledAuthorCredits>
                <StyledCopyright>{copyright}</StyledCopyright>
            </StyledSingleLine>
        </StyledFooterWrapper>
    );
};

export default Footer;
