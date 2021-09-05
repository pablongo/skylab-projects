/* eslint-disable no-underscore-dangle */
import React from 'react';
import PropTypes from 'prop-types';

import Link from 'next/link';
import { getAllDictionariesIds, getDictionaries, getDictionaryData } from '../../lib/controllers/dinctionaries/dictionaries';
import Pictogram from '../../components/Pictogram/Pictogram';

export default function PictoDictionary({ dictionaryData, dictionaries }) {
  const { pictogramList } = dictionaryData;

  return (
    <>
      <h2>Pictogram dictionaries</h2>
      {dictionaries.map((dictionary) => (
        <Link href={`http://localhost:3000/dictionaries/${dictionary._id}`}>
          <h4>{dictionary.tittle}</h4>
        </Link>
      ))}
      <h2>Pictograms</h2>
      {pictogramList?.map((pictogram) => (
        <Pictogram pictogram={pictogram} />
      ))}
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
