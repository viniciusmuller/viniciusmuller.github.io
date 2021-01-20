import Typography from '@material-ui/core/Typography';
import { AiFillGithub } from 'react-icons/ai';

import { ReactComponent as UndrawProgramming } from '@assets/svg/undraw_programming.svg';
import useStyles, {
  Wrapper,
  TextWrapper,
  ProfilePic,
} from '@styles/sections/about';

function About() {
  const classes = useStyles();

  return (
    <Wrapper>
      <UndrawProgramming className={classes.landingSvg} />
      <TextWrapper>
        <ProfilePic
          src="https://github.com/arcticlimer.png"
          alt="Vinícius Müller"
        />
        <Typography variant="h1" className={classes.title}>
          Hello, i&apos;m Vinícius Müller!{' '}
        </Typography>
        <Typography variant="body1" className={classes.caption}>
          Web developer
        </Typography>
        <Typography
          align="justify"
          variant="subtitle1"
          className={classes.aboutParagraph}
        >
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores
          numquam itaque eveniet perferendis blanditiis vero veritatis quas,
          magni deleniti ea commodi quod aperiam inventore ipsam!
        </Typography>
        <a
          href="https://github.com/arcticlimer"
          target="_blank"
          rel="noreferrer"
        >
          <AiFillGithub className={classes.socialSvg} />
        </a>
      </TextWrapper>
    </Wrapper>
  );
}

export default About;
