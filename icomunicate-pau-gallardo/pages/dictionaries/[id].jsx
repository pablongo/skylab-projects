import React from 'react';
import { getAllDictionariesIds, getDictionaryData } from '../../lib/controllers/dinctionaries/dictionaries';

export default function PictoDictionary({ dictionaryData }) {
  return (
    <h1>This is a PictoDictionary</h1>
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
