import React from 'react';
import PropTypes from 'prop-types';
import { getAllDictionariesIds, getDictionaries, getDictionaryData } from '../../lib/controllers/dinctionaries/dictionaries';
import Pictogram from '../../components/Pictogram/Pictogram';

export default function PictoDictionary({ dictionaryData }) {
  const { pictogramList } = dictionaryData;
  return (
    <>
      <h2>Pictogram dictionaries</h2>

      {pictogramList?.map((pictogram) => (
        <Pictogram pictogram={pictogram} />
      ))}
    </>
  );
}
PictoDictionary.defaultProps = {
  dictionaryData: [],
};

PictoDictionary.propTypes = {
  dictionaryData: { pictogramList: PropTypes.array.isRequired },
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
