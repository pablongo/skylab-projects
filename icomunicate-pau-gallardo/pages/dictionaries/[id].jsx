/* eslint-disable no-underscore-dangle */
import React from 'react';
import PropTypes from 'prop-types';

import Link from 'next/link';
import { getAllDictionariesIds, getDictionaries, getDictionaryData } from '../../lib/controllers/dinctionaries/dictionaries';
import Pictogram from '../../components/Pictogram';
import styles from '../../styles/[id].module.scss';

export default function PictoDictionary({ dictionaryData, dictionaries }) {
  const { pictogramList } = dictionaryData;

  return (
    <>
      <section className={styles.dictionaries__container}>
        <div>
          {dictionaries.map((dictionary) => (
            <Link href={`http://localhost:3000/dictionaries/${dictionary._id}`}>
              <Pictogram pictogram={dictionary} />
            </Link>
          ))}
        </div>
        <h2 className={styles.dictionaries__container__title}>Pictogram dictionaries</h2>
      </section>
      <section>
        {pictogramList?.map((pictogram) => (
          <Pictogram pictogram={pictogram} />
        ))}
      </section>
    </>
  );
}

PictoDictionary.defaultProps = {
  dictionaryData: [],
  dictionaries: [],
};

PictoDictionary.propTypes = {
  dictionaryData: { pictogramList: PropTypes.array.isRequired },
  dictionaries: PropTypes.arrayOf(PropTypes.object),
};

export async function getStaticPaths() {
  const paths = await getAllDictionariesIds();
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  let dictionaryData = await getDictionaryData(params.id);
  let dictionaries = await getDictionaries();
  dictionaries = JSON.stringify(dictionaries);
  dictionaryData = JSON.stringify(dictionaryData);
  return {
    props: {
      dictionaryData: JSON.parse(dictionaryData),
      dictionaries: JSON.parse(dictionaries),
    },
  };
}
