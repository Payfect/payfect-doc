import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Image: string;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Fast Setup',
    Image: require('@site/static/img/fast_setup.jpg').default,
    description: (
      <>
        Get started with Payfect-hosted payment page within minutes, that lets you collect payments quickly. It works across devices and makes it easy to build a first-class payments experience.
      </>
    ),
  },
  {
    title: 'Global Payments',
    Image: require('@site/static/img/global.jpg').default,
    description: (
      <>
        Accept payments from anywhere in the world, in any cryptocurrency your provider will take.
      </>
    ),
  },
  {
    title: 'Secure',
    Image: require('@site/static/img/security.jpg').default,
    description: (
      <>
        Entrust a world-renowned cybersecurity company to protect our assets and transactions. In addition, merchant assets are regularly moved to cold wallets to reduce hacking risk.
      </>
    ),
  },
];

function Feature({title, Image, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <img src={Image} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
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
