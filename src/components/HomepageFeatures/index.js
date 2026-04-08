import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Easy to Use',
    Svg: require('@site/static/img/touch-icon.svg').default,
    svgClassName: 'featureSvgGreen',
    description: (
      <>
        Installation is easy and straightforward. Follow the instructions in the 
        documentation to get your <b>Okovision 2023</b> up and running in no time.
      </>
    ),
  },
  {
    title: 'Keep track of your consumption',
    Svg: require('@site/static/img/history-line-icon.svg').default,
    svgClassName: 'featureSvgWhite',
    description: (
      <>
        Okovision 2023 records all your boiler's consumption data, 
        allowing you to monitor and analyze your energy usage over time.
      </>
    ),
  },
  {
    title: 'Free and Open Source',
    Svg: require('@site/static/img/no-money-icon.svg').default,
    description: (
      <>
        Okovision 2023 is developed as a free and open-source project, allowing you to contribute,
         customize, and share it with the community.
      </>
    ),
  },
];

function Feature({Svg, title, description, svgClassName}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={clsx(styles.featureSvg, svgClassName && styles[svgClassName])} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
