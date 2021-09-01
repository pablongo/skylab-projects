import React from 'react';
import { getAllDictionariesIds, getDictionaryData } from '../../lib/controllers/dinctionaries/dictionaries';
import Pictogram from '../../components/Pictogram/Pictogram';

export default function PictoDictionary({ dictionaryData }) {
  const { pictogramList } = dictionaryData;
  console.log(pictogramList);
  return (
    <>
      {pictogramList?.map((pictogram) => (
        <Pictogram pictogram={pictogram} />
      ))}
    </>
  );
}

export async function getStaticPaths() {
  const paths = await getAllDictionariesIds();
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  let dictionaryData = await getDictionaryData(params.id);
  dictionaryData = JSON.stringify(dictionaryData);
  return {
    props: {
      dictionaryData: JSON.parse(dictionaryData),
    },
  };
}
